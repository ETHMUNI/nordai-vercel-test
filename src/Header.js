import React, { Component } from 'react';
import styled from 'styled-components'
import { observer, inject } from 'mobx-react'
import { computed,  } from 'mobx'
import { NavLink } from 'react-router-dom'
import { SwitchHorizontalIcon, ScaleIcon, DatabaseIcon, UserCircleIcon, SearchIcon
} from '@heroicons/react/outline'
import Logo from './logoheader.png'

import { IconDashboard,  } from './Icons'

import { useLocation } from 'react-router-dom'
import Body from './Components/Body'
import { withRouter } from "react-router-dom";

function HeaderExpand(props) {
	const location = useLocation();
	return <SuperHeader 
			active={location.pathname === "/" ? true : false}
			
			>{props.children}</SuperHeader>
}



@inject('store')
@observer
class SidebarCompontent extends Component {

	constructor(props) {
		super(props);
		if(this.props.location.pathname === "/signup"){
			this.props.history.push('/')
		}
		if(this.props.location.pathname === "/login"){
			this.props.history.push('/')
		}
		
	}
	componentDidMount(){
		document.addEventListener('keydown',this.shortcutHandler);
	}
	componentWillUnmount(){
		document.removeEventListener('keydown',this.shortcutHandler);
	}
	shortcutHandler = e => {
		if(e.keyCode===75 && e.ctrlKey){
			e.preventDefault();
			// select all text in input with id q
			document.getElementById("q").focus();
			document.getElementById("q").select();
		}
	}

	onKeyUp = (e) => {
		if(this.props.location.pathname !== "/search"){
			this.props.history.push('/search')
		}
		if(e.keyCode === 8){
			if(this.props.store.toolsKeyword === ""){
				this.props.history.push('/')
			}
		}
	}

	@computed get fromColor(){
		if(this.props.store.profile.credits <= 0){
			return "bg-red-200 text-red-600"
		}
		if(this.props.store.profile.status === "trialing"){
			return ""
		}
		if(this.props.store.profile.status === "active"){
			return ""
		}
		if(this.props.store.profile.status === "incomplete"){
			return ""
		}
		return "bg-red-200 text-red-600"
	}

	@computed get timeSaved() {
		return Math.floor(this.props.store.profile.creditsUsed / 40);
	  }
	  @computed get wordCount() {
		return Math.floor(this.props.store.profile.creditsUsed * 4);
	  }
	
	  


	render() {
		return (
			
						<>
						<header className="items-center">
						<div className="relative border-b border-gray-300 bg-white shadow-md">
										{/* <div className="px-1 py-1 flex items-center flex-1"> * <- this code */}
														
														<div className="relative text-black focus-within:text-grey-400 flex flex-1 left-2/4 top-1 bottom-5 space-x-3">
														
															{/** make a search bar here! */}
															<label htmlFor="q" className="absolute inset-y-0 left-50 top-0 bottom-0 flex items-center lg:pl-2 ">
																	<div type="submit" className="ml-4">
																	<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6 transition"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
																	</div>
															</label>
															<Input 
																type="search" 
																tabIndex={-1}
																id="q"
																name="q" 
																className="border border-gray-300 text-xl rounded-lg w-72 my-2 py-2 pl-10 pr-4 leading-tight focus:outline-none focus:shadow-outline" placeholder="Søg..." autoComplete="off" 
																value={this.props.store.toolsKeyword} 
																onChange={this.props.store.onChangeToolsKeyword} 
																onKeyUp={this.onKeyUp}
																
															/>

														
															
															{/**
															 * hover:bg-blue-100 hover:text-white
															 */}
																											
															<NavLink to="/"
														 exact
														 tabIndex={-1}
														 onClick={()=>this.props.store.toolsKeyword = ""}
														//  activeClassName="bg-blue-500 text-white"
														 className="-ml-16 transform hover:scale-110 items-center text-lg bg-gradient-to-r from-indigo-500 to-red-500 text-white flex my-2 py-2 px-6 lg:py-2 lg:px-6 cursor-pointer rounded-md font-medium transition items-center">
															 <IconDashboard className="w-7 h-7 lg:mr-4 transition" />
															 <div className="hidden lg:block">Tools</div>
															</NavLink>
															<NavLink to="/my-profile"
														 exact
														 tabIndex="-1"
														//  activeClassName="bg-blue-500 text-white"
														 className={`transform hover:scale-110 items-center text-lg bg-gradient-to-r from-indigo-500 to-red-500 text-white flex my-2 py-2 px-6 xl:py-2 xl:px-6 cursor-pointer ml-1 !important ${this.fromColor} rounded-md font-medium transition items-center`}>
															<UserCircleIcon className="w-7 h-7 lg:mr-4 transition" />
															<div className="hidden lg:block"> Min Profil</div>
														</NavLink>
														</div>
														
														


												</div> 
												
								{/* </div> */}
								</header>
							<Textarea readOnly name="copy-textarea" id="copy-textarea" value={this.props.store.copyToClipboardText}  />
							<HeaderExpand>
							<Body className="px-4 py-4 flex items-center flex-1">
								<div className="mr-4">
								<NavLink to="/">
									<img className="hidden lg:block w-60 h-40 object-cover" src={Logo} style={{position: 'absolute', left: '-30px', top: '-50px'}} />
								</NavLink> 
								</div>
								<div className="flex items-center">
								
									{/* <div className="text-4xl relative font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-600 inline-block">Nord AI 
									<div className="absolute top-0 ml-3 left-full bg-gradient-to-br from-gray-500 to-gray-500 text-white text-sm px-2 py-0.5 rounded-md font-normal hidden md:flex">Beta</div>
									</div> */}
									
									{/* <div className="hidden md:block bg-gradient-to-br from-blue-500 to-blue-300 rounded-lg p-3 flex items-center text-white text-xl"> */}
									<div className="-ml-5 hidden lg:block text-3xl font-bold text-gray-500">
									<span className="text-yellow-500 mr-1">👋</span><span className='font-bold text-black'>Hey</span> — Lad os skabe noget fantastisk i dag!</div> {/* <-- Greeting */ }
								
									<div className="lg:ml-5 sm:-ml-5">
									<div className={`shadow-md bg-white rounded-lg p-3 ${this.props.store.profile.credits ? "text-white" : "text-red-500"} text-sm font-medium my-2 mr-2`}>
										{/* <DatabaseIcon className="w-4 h-4 mr-2" /> */}
										{this.props.store.profile.credits && (
										<> 
											<div className="mr-1 mb-3 text-gray-400"><span className="text-yellow-500">👇 </span>Credits tilbage </div>
											<div className="text-2xl font-bold ml-7 -mt-2 text-black ">{this.props.store.profile.credits}</div>
										</>
										)}
									</div>
									</div>
								<div className="shadow-md bg-white rounded-lg p-3 mr-2 ">
								<div className="font-medium text-sm text-gray-400 mr-1 mb-3"> <span className="text-yellow-500">⏳</span> Timer sparet </div>
								<div className="text-2xl font-bold text-black ml-3 -mt-2">{this.timeSaved} timer</div>
								</div>
								<div className="shadow-md bg-white rounded-lg p-3 ">
								<div className="font-medium text-sm text-gray-400 ml-1 mb-3"> <span className="text-yellow-500">📝</span> Ord generet </div>
								<div className="text-2xl font-bold text-black ml-6 -mt-2">{this.wordCount} </div>
								</div>
								

								</div>
							</Body>
							</HeaderExpand>

								
								{this.props.children}
						</>
			)
		}
}	

const Input = styled.input`
	
`

const Textarea = styled.textarea`
	position: fixed;
	right:-7990px;
	top:-7990px;
`

// transition:ease-in-out 0.5s margin-top;
// 	transition-delay:0.05s;
// background-image:url(${require('./pattern-dots.svg').default});
// background-size:auto 50%;
// background-position: 20px 20px;

const SuperHeader = styled.div`
	height:100px;
	margin-top:${props => props.active ? "0px" : "-150px" };
	display:${props => props.hidden ? "hidden" : "flex" };
	
	
	
	
`
// const SuperHeader = styled.header`
//   height: 40px;
//   display: flex;
//   align-items: center;
//   background-color: #fff;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   z-index: 999;
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
// `;

	
export default withRouter(SidebarCompontent)