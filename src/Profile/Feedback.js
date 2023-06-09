import React, { Component } from 'react';
import {
    PencilIcon,
    ClockIcon,
  } from '@heroicons/react/outline'

import  { Grid, Col } from '../Components/Body'
import EntryText  from '../Components/EntryText'
import Button from '../Components/Button'
import Output from '../Components/Output'
// import Logo from '../logoicon.png'
import Countdown from 'react-countdown';

import { observable, makeObservable } from 'mobx'
import { observer, inject,  } from 'mobx-react'


@inject('store')
@observer
class Referral extends Component {

	countdown
	@observable output = ""
	@observable outputs = []
    @observable outputError = ""

	@observable option = "Start Using"
	@observable options= []
	@observable currentOption = ""

    @observable loading = false
	@observable date = Date.now() + 1000

	// Basic Input
	@observable prompt = ""
	@observable promptError = ""
    @observable promptNumber = 0

	// Options of Inputs
	@observable promptOptions = []

	// Currently Selected Input Option
	@observable currentPromptOption = ""

	// Multiple Input Option
	@observable prompts = []

	@observable feedbacks = []
    
    @observable tool = {}
    
    constructor(props) {
        super(props)
        makeObservable(this)
		this.init();
    }

	init = async () => {
		this.refreshFeedback()
	}

	refreshFeedback = async () => {
		let response = await this.props.store.api.post('/user/feedback/view')
		this.feedbacks = [...response.data]
	}
	
	handleFeedback = async () => {
		try {
			await this.props.store.api.post('/user/feedback', {  feedback: this.props.store.feedback, })
			this.refreshFeedback()
			this.output = "Tak for din feedback!"
			this.props.store.feedback = ``
		} catch (err) {
			console.log(err)
			this.output = "Der ser ud til at have været en fejl, prøv venligst igen"
		}
	}

	onClick = async () => {
		this.loading = true
		await this.handleFeedback()
		this.date = Date.now() + 10000
		this.props.store.feedback = ""
		this.countdown.start()
		this.loading = false
	}
	onChange = e => {
		this.props.store.feedback = e.target.value
	}
	
	render() {
		return (
				<>
					<Grid>
						<Col span="6">
							<EntryText
								title="Feedback"
								desc="Giv noget feedback om din oplevelse."
								prompt={this.props.store.feedback}
								onChange={this.onChange}
							/>
							<Countdown 
								ref={countdown => this.countdown = countdown} 
								date={this.date} 
								renderer={props => 
									<Button 
										title={props.total ? `Timeout ${props.total/1000} secs` : "Send Feedback"}
										disabled={props.total}
										Icon={props.total ? ClockIcon : PencilIcon} 
										onClick={this.onClick} 
									/>} 
							/>
						</Col>
						<Col span="6">
							<Output 
                                    title={`Nord AI`}
                                    desc={`Feedback Svar`}

                                    // Icon={Logo}
                                    fromColor={`indigo-500`}
									toColor={`red-500`}
                                    
                                    loading={this.loading}
                                    output={this.output}
                                    
                            />
							{this.feedbacks && this.feedbacks.map((feedback,index) => <Output 
									key={feedback._id}
                                    title={`Feedback Modtaget`}
                                    desc={`${feedback.created}`}

                                    Icon={PencilIcon}
                                    fromColor={feedback.response ? `green-400` : `gray-300`}
									toColor={feedback.response ? `green-600` : `gray-400`}

									
                                    output={feedback.feedback}
                                    outputs={feedback.response ? [feedback.response] : null}
                                    
                            />)}
					</Col>
				</Grid>
			</>
		)
	}
}

  


export default Referral