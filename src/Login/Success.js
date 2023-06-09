
import React, { Component } from 'react';
import Logo from '../logoai.png';
import { withRouter , Redirect } from "react-router-dom";
import Loading from '../Components/Loader'
import { observable, makeObservable, } from 'mobx'
import { observer, inject } from 'mobx-react'
@inject('store')
@observer
class Login extends Component {

	
	@observable loading = true
	
	constructor(props){
		super(props)
		makeObservable(this)
		
	}
	componentDidMount(){
		this.refresh = setInterval(() => {
			console.log('refreshTokenAndProfile: refreshing token...')
			this.props.store.refreshTokenAndProfile();
			console.log('refreshTokenAndProfile: token refreshed')
			if(this.props.store.profile.status){
				this.loading = false
			}
		}, 1000);
	}
	componentWillUnmount(){
		clearInterval(this.refresh)
	} 
	
	render() {
	return (
		<>
			{this.loading ? null : <Redirect to="/" />}
			<div className="container mx-auto lg:px-4 py-4 min-h-screen flex flex-col md:items-center md:justify-center">

				<div>
				<img className="ml-auto mr-auto w-64 h-48 object-cover" src={Logo} />
				</div>
			<div className={`min-w-full md:min-w-0 bg-white rounded-xl shadow-xl transform transition-all  transition shadow-md hover:shadow-2xl focus:shadow-2xl w-1/2`}>
			
              <div className="px-4 py-8 text-center">
              		<Loading className="w-24 h-24" active />
                </div>
               	 <div className="text-center ">
                    <div className="text-3xl font-medium text-gray-900">
                    	Generer din profil - Vent venligst...
                    </div>
					<p className="text-lg text-gray-500">
						1. Forbereder dine credits
					</p>
					
					<div className="flex flex-col p-4">
						<div className="font-medium rounded-lg text-lg px-4 py-4 bg-gray-300 text-white mt-4 border border-gray-300 inline-block" >
						Næsten færdig...
						</div>
					</div>
                    </div>
			  </div>
			</div>
		
		</>)
		}
  }

export default withRouter(Login)