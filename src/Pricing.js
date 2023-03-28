import React, { Component } from 'react';
import {
	CheckCircleIcon,
	BanIcon,
	DatabaseIcon,
	PencilIcon,
	MenuAlt1Icon,
	LightBulbIcon,
	SparklesIcon,
	UserIcon,
	CurrencyDollarIcon,
	UserCircleIcon,
  } from '@heroicons/react/solid'

import Logo from './logoai.png'
import config from './config'

import { observer, inject } from 'mobx-react'
@inject('store')
@observer
class Pricing extends Component {



	render() {
	
	return (

		<>

{this.props.store.profile.status ? null :<div className="border-b border-gray-300 bg-white shadow-sm ">
                    <div className="container flex mx-auto px-4 md:px-28 flex select-none">
                           
                            <div className="relative text-gray-400 focus-within:text-green-500 flex flex-1 ">
                            </div>
                             <div 
                             onClick={this.props.store.handleLogout}
                             className="cursor-pointer text-lg flex py-3 px-6 xl:py-4 xl:px-8 hover:bg-gray-100 rounded-t-md font-medium transition items-center"><UserCircleIcon className="w-7 h-7 lg:mr-4 transition" />
                              <div className="hidden lg:block">Log Ud</div>
                            </div>


                        </div>
                        
                </div>}
			
			<div className="container mx-auto px-8 py-4 lg:px-28 lg:py-12 lg:pb-64 select-none">

		{this.props.store.profile.status ? null : <><div className="text-center">
					
			</div>
	
			<h2 className="text-xl sm:text-2xl md:text-5xl text-gray-700 text-center">
			<img className="ml-auto mr-auto -mb-6 w-64 h-48 object-cover" src={Logo} />
			</h2>
			<p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-14 mt-2 text-center">
				Vælg en prissætningsmulighed for at begynde at bruge Nord AI
			</p></>} 
				
			<Grid>
				{this.props.store.profile.status ? null : <Free  fromColor="gray-400" toColor="gray-500" baseURL={this.props.store.baseURL} api={this.props.store.api}/>} 
				<Entry fromColor="indigo-500" toColor="indigo-500" baseURL={this.props.store.baseURL} api={this.props.store.api} />
				<Premium fromColor="indigo-500" toColor="red-500" baseURL={this.props.store.baseURL} api={this.props.store.api} /> 
			</Grid>
		
			
</div>
</>)
}
  }

  
const Free = ({ fromColor, toColor, baseURL, api }) => <div className="flex relative ">
<div className={`absolute inset-0 bg-gradient-to-r from-${fromColor ? fromColor : "green-400"} to-${toColor ? toColor : "blue-500"} shadow-lg transform skew-y-0 -rotate-3 rounded-3xl `}></div>

<div className={`bg-white rounded-xl transition hover:shadow-md overflow-hidden md:max-w-1lg text-gray-500 border-t-2 border- hover:border-${fromColor ? fromColor : "blue-400"} md:flex relative transform hover:scale-105  hover:text-black flex-1`}>

<div className="p-8 flex-1">
<div href="#" className={`text-${fromColor ? fromColor : "green-500"} block text-lg text-2xl leading-tight font-medium mb-2`}>Gratis prøveperiode</div>
<div className="text-6xl text-black font-bold">0 <span className="text-3xl text-gray-400">DKK</span></div>
<p className="mt-4 text-lg">
	Test før du køber, og opgrader eller annuller når som helst.
</p>
<div className="divide-y divide-dashed divide-gray-300 mt-4">
	<div className="py-2 flex  items-center">
		<DatabaseIcon className={`w-6 h-6 mr-2 text-${fromColor ? fromColor : "green-500"}`} /> 
		<div><span className="font-medium text-black">10</span>{` x `}Credits</div>
	</div>
	<div className="py-2 flex  items-center">
		<MenuAlt1Icon className={`w-6 h-6 mr-2 text-${fromColor ? fromColor : "green-500"}`} /> 
		<div><span className="font-medium text-black">300</span>{` x `}Ord</div>
	</div>
	<div className="py-2 flex  items-center">
		<PencilIcon className={`w-6 h-6 mr-2 text-${fromColor ? fromColor : "green-500"}`} /> 
		<div><span className="font-medium text-black">1.200</span>{` x `}Bogstaver</div>
	</div>
	
	<div className="py-2 flex  items-center">
		<BanIcon className="w-6 h-6 mr-2 text-gray-400" /> 
		<div><span className="text-gray-400">Udregning af sparret tidsforbrug</span></div> 
	</div>
	<div className="py-2 flex  items-center">
		<BanIcon className="w-6 h-6 mr-2 text-gray-400" /> 
		<div><span className="text-gray-400">Udregning af sparret fakturerbart beløb</span></div> 
	</div>
	<div className="py-2 flex  items-center">
		<BanIcon className="w-6 h-6 mr-2 text-gray-400" /> 
		<div><span className="text-gray-400">Adgang til alle tools</span></div> 
	</div>
	<div className="py-2 flex  items-center">
		<BanIcon className="w-6 h-6 mr-2 text-gray-400" /> 
		<div><span className="text-gray-400">Ny beta-funktionstest</span></div> 
	</div>
</div>
<div className="py-2 xl:flex hidden  items-center">
		<BanIcon className="w-6 h-6 mr-2 text-white" /> 
	</div>
	
<form action={baseURL + "user/stripe/subscribe"} method="POST" className="flex flex-1">
<input type="hidden" name="token" value={api.defaults.headers.common['x-access-token']} />
		<input type="hidden" name="priceId" value={config.stripe.free} />
		{/* <input type="hidden" name="trial" value="true" /> */}
<button type="submit" className={`mt-8 inset-0 bg-gradient-to-r from-${fromColor ? fromColor : "green-400"} to-${toColor ? toColor : "blue-500"} shadow-lg flex-1 rounded-md p-4 text-white font-medium text-center text-lg transition hover:from-gray-700 hover:to-gray-800 text-enter`}>Prøv nu</button>
</form>
</div>
</div>
</div>

const Entry = ({ fromColor, toColor, baseURL, api }) => <div className="flex relative ">
  <div className={`absolute inset-0 bg-gradient-to-r from-${fromColor ? fromColor : "green-400"} to-${toColor ? toColor : "blue-500"} shadow-lg transform skew-y-0 -rotate-3 rounded-3xl `}></div>

  <div className={`bg-white rounded-xl transition hover:shadow-md overflow-hidden md:max-w-1lg text-gray-500 border-t-2 border- hover:border-${fromColor ? fromColor : "blue-400"} md:flex relative transform hover:scale-105  hover:text-black flex-1`}>

<div className="p-8 flex-1">
  <div href="#" className={`text-${fromColor ? fromColor : "green-500"} block text-lg text-2xl leading-tight font-medium mb-2`}>Pro</div>
  <div className="text-6xl text-black font-bold">199 <span className="text-3xl text-gray-400">DKK</span><span className="text-lg text-gray-400">/måned</span></div>
  <p className="mt-4 text-lg">
  Start i dag for at få adgang til vores kraftfulde AI-drevne funktioner.
  </p>
  <div className="divide-y divide-dashed divide-gray-300 mt-4">
	  <div className="py-2 flex  items-center">
		  <DatabaseIcon className={`w-6 h-6 mr-2 text-${fromColor ? fromColor : "green-500"}`} /> 
		  <div><span className="font-medium text-black">250</span>{` x `}Credits</div>
	  </div>
	  <div className="py-2 flex  items-center">
		  <MenuAlt1Icon className={`w-6 h-6 mr-2 text-${fromColor ? fromColor : "green-500"}`} /> 
		  <div><span className="font-medium text-black">15.000</span>{` x `}Ord</div>
	  </div>
	  <div className="py-2 flex  items-center">
		  <PencilIcon className={`w-6 h-6 mr-2 text-${fromColor ? fromColor : "green-500"}`} /> 
		  <div><span className="font-medium text-black">60.000</span>{` x `}Bogstaver</div>
	  </div>
	  <div className="py-2 flex  items-center">
		  <UserIcon className={`w-6 h-6 mr-2 text-${fromColor ? fromColor : "green-500"}`} /> 
		  <div><span className="font-medium text-black">2.700</span>{` x `}Minutter sparret</div>
	  </div>
	  <div className="py-2 flex  items-center">
		  <CheckCircleIcon className={`w-6 h-6 mr-2 text-${fromColor ? fromColor : "green-500"}`} /> 
		  <div><span className="font-medium text-black">45</span>{` x `}Timer sparret</div>
	  </div>
	  <div className="py-2 flex  items-center">
		  <CurrencyDollarIcon className={`w-6 h-6 mr-2 text-${fromColor ? fromColor : "green-500"}`} /> 
		  <div><span className="font-medium text-black">7.000 DKK</span>{` x `}Sparet fakturaer</div> 
	  </div>
	  <div className="py-2 flex  items-center">
		  <BanIcon className="w-6 h-6 mr-2 text-gray-400" /> 
		  <div><span className="text-gray-400">Adgang til alle tools</span></div> 
	  </div>
	  <div className="py-2 flex  items-center">
		  <BanIcon className="w-6 h-6 mr-2 text-gray-400" /> 
		  <div><span className="text-gray-400">Ny beta-funktionstest</span></div> 
	  </div>
  </div>
  <form action={baseURL + "user/stripe/subscribe"} method="POST" className="flex flex-1">
<input type="hidden" name="token" value={api.defaults.headers.common['x-access-token']} />
		<input type="hidden" name="priceId" value={config.stripe.entry} />
<button type="submit" className={`mt-8 inset-0 bg-gradient-to-r from-${fromColor ? fromColor : "green-400"} to-${toColor ? toColor : "blue-500"} shadow-lg flex-1 rounded-md p-4 text-white font-medium text-center text-lg transition hover:from-gray-700 hover:to-gray-800 text-enter`}>Start nu</button>
</form>
</div>
</div>
</div>


const Premium = ({ fromColor, toColor, baseURL, api }) => <div className="flex relative ">
  <div className={`absolute inset-0 bg-gradient-to-r from-${fromColor ? fromColor : "green-400"} to-${toColor ? toColor : "blue-500"}  shadow-lg transform skew-y-0 -rotate-3 rounded-3xl `}></div>

  <div className={`bg-white rounded-xl transition hover:shadow-md overflow-hidden md:max-w-1lg text-gray-500 border-t-2 border- hover:border-${fromColor ? fromColor : "blue-400"} md:flex relative transform hover:scale-105  hover:text-black flex-1`}>

<div className="p-8 flex-1">
  <div href="#" className={`text-${fromColor ? fromColor : "green-500"} block text-lg text-2xl leading-tight font-medium mb-2`}>Premium</div>
  <div className="text-6xl text-black font-bold">349 <span className="text-3xl text-gray-400">DKK</span><span className="text-lg text-gray-400">/måned</span></div>
  <p className="mt-4 text-lg">
  Start i dag for at få Premium adgang til vores kraftfulde AI-drevne funktioner.
  </p>
  <div className="divide-y divide-dashed divide-gray-300 mt-4">
  <div className="py-2 flex  items-center">
		  <DatabaseIcon className={`w-6 h-6 mr-2 text-${fromColor ? fromColor : "green-500"}`} /> 
		  <div><span className="font-medium text-black">1.000</span>{` x `}Credits</div>
	  </div>
	  <div className="py-2 flex  items-center">
		  <MenuAlt1Icon className={`w-6 h-6 mr-2 text-${fromColor ? fromColor : "green-500"}`} /> 
		  <div><span className="font-medium text-black">60.000</span>{` x `}Ord</div>
	  </div>
	  <div className="py-2 flex  items-center">
		  <PencilIcon className={`w-6 h-6 mr-2 text-${fromColor ? fromColor : "green-500"}`} /> 
		  <div><span className="font-medium text-black">240.000</span>{` x `}Bogstaver</div>
	  </div>
	  <div className="py-2 flex  items-center">
		  <UserIcon className={`w-6 h-6 mr-2 text-${fromColor ? fromColor : "green-500"}`} /> 
		  <div><span className="font-medium text-black">10.800</span>{` x `}Minutter sparret</div>
	  </div>
	  <div className="py-2 flex  items-center">
		  <CheckCircleIcon className={`w-6 h-6 mr-2 text-${fromColor ? fromColor : "green-500"}`} /> 
		  <div><span className="font-medium text-black">180</span>{` x `}Timer sparret</div>
	  </div>
	  <div className="py-2 flex  items-center">
		  <CurrencyDollarIcon className={`w-6 h-6 mr-2 text-${fromColor ? fromColor : "green-500"}`} /> 
		  <div><span className="font-medium text-black">28.000 DKK</span>{` x `}Sparret fakturaer</div> 
	  </div>
	  <div className="py-2 flex  items-center">
		  <SparklesIcon className={`w-6 h-6 mr-2 text-${fromColor ? fromColor : "green-500"}`} /> 
		  <div><span className="font-medium text-black">Adgang til alle tools</span></div> 
	  </div>
	  <div className="py-2 flex  items-center">
		  <LightBulbIcon className={`w-6 h-6 mr-2 text-${fromColor ? fromColor : "green-500"}`} /> 
		  <div><span className="font-medium text-black">Ny beta-funktionstest</span></div> 
	  </div>
  </div>
  <form action={baseURL + "user/stripe/subscribe"} method="POST" className="flex flex-1">
<input type="hidden" name="token" value={api.defaults.headers.common['x-access-token']} />
		<input type="hidden" name="priceId" value={config.stripe.pro} />
<button type="submit" className={`mt-8 inset-0 bg-gradient-to-r from-${fromColor ? fromColor : "green-400"} to-${toColor ? toColor : "blue-500"} shadow-lg flex-1 rounded-md p-4 text-white font-medium text-center text-lg transition hover:from-gray-700 hover:to-gray-800 text-enter`}>Start nu</button>
</form>
</div>
</div>
</div>


const Grid = ({ children }) => <div className="grid grid-cols-1 gap-12 mt-4 xl:grid-cols-3 ">{children}</div>


export default Pricing