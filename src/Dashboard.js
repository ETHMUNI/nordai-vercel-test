import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { computed,  } from 'mobx'
import MainBody from './Components/Body'
import {Helmet} from "react-helmet";
import YoutubeIcon from "./youtubeicon.png"


import { observer, inject } from 'mobx-react'
@inject('store')
@observer
class Body extends Component {

	@computed get permissions() {
		return this.props.store.tools.filter(tool=>
			tool.permissions.some(r=> this.props.store.profile.permissions.includes(r))
		)
	}

	@computed get beta() {
		return this.permissions.filter(tool => tool.category === 'Beta')
	}


	@computed get personal() {
		return this.permissions.filter(tool => tool.category === 'Personlig')
	}

	@computed get business() {
		return this.permissions.filter(tool => tool.category === 'Business')
	}

	@computed get social() {
		return this.permissions.filter(tool => tool.category === 'Social')
	}

	@computed get content() {
		return this.permissions.filter(tool => tool.category === 'Content')
	}

	@computed get programming() {
		return this.permissions.filter(tool => tool.category === 'Programming')
	}

	@computed get youtube() {
		return this.permissions.filter(tool => tool.category === 'Youtube')
	}

	@computed get twitter() {
		return this.permissions.filter(tool => tool.category === 'Twitter')
	}
	
	@computed get linkedin() {
		return this.permissions.filter(tool => tool.category === 'LinkedIn')
	}

	@computed get facebook() {
		return this.permissions.filter(tool => tool.category === 'Facebook')
	}

	@computed get google() {
		return this.permissions.filter(tool => tool.category === 'Google')
	}

	@computed get email() {
		return this.permissions.filter(tool => tool.category === 'Email')
	}

	render() {
	return (
		<>
			<Helmet>
				<title>{`App - Nord AI`}</title>
			</Helmet>
			<MainBody className="px-2 py-3 md:px-26 md:py-6 lg:py-10 ">


			{/* {this.programming.length ? <>
				<Title title="Programming" />
				<Grid>
					{this.programming.map((tool, index) => 
						<Tool 
							key={index}
							group={tool.category}
							title={tool.title} 
							to={tool.to} 
							Icon={tool.Icon} 
							desc={tool.desc} 
							fromColor={tool.fromColor} 
							toColor={tool.toColor} 
						/>)} 
				</Grid>
				<Divider />
			</> : null} */}

			{this.email.length ? <>
			<div className="flex lg:-mt-10 sm:mt-0">
				<Title className="text-black" title="Email" />
				</div>
				<Grid>
					{this.email.map((tool, index) => 
						<Tool 
							key={index}
							group={tool.category}
							title={tool.title} 
							to={tool.to} 
							Icon={tool.Icon}
							desc={tool.desc} 
							fromColor={tool.fromColor} 
							toColor={tool.toColor} 
						/>)} 
				</Grid>
				<Divider />
			</> : null}

			{this.youtube.length ? <>
			<div className="flex lg:-mt-10 sm:mt-0">
				{/* <img className="flex w-15 h-6 mr-1" src={YoutubeIcon} /> */}
				<Title className="text-black" title="YouTube" />
				</div>
				<Grid>
					{this.youtube.map((tool, index) => 
						<Tool 
							key={index}
							group={tool.category}
							title={tool.title} 
							to={tool.to} 
							Icon={tool.Icon}
							desc={tool.desc} 
							fromColor={tool.fromColor} 
							toColor={tool.toColor} 
						/>)} 
				</Grid>
				<Divider />
			</> : null}

			{this.twitter.length ? <>
				<Title title="Twitter" />
				<Grid>
					{this.twitter.map((tool, index) => 
						<Tool 
							key={index}
							group={tool.category}
							title={tool.title} 
							to={tool.to} 
							Icon={tool.Icon} 
							desc={tool.desc} 
							fromColor={tool.fromColor} 
							toColor={tool.toColor} 
						/>)} 
				</Grid>
				<Divider />
			</> : null}

			{this.linkedin.length ? <>
				<Title title="LinkedIn" />
				<Grid>
					{this.linkedin.map((tool, index) => 
						<Tool 
							key={index}
							group={tool.category}
							title={tool.title} 
							to={tool.to} 
							Icon={tool.Icon} 
							desc={tool.desc} 
							fromColor={tool.fromColor} 
							toColor={tool.toColor} 
						/>)} 
				</Grid>
				<Divider />
			</> : null}

			{this.facebook.length ? <>
				<Title title="Facebook" />
				<Grid>
					{this.facebook.map((tool, index) => 
						<Tool 
							key={index}
							group={tool.category}
							title={tool.title} 
							to={tool.to} 
							Icon={tool.Icon} 
							desc={tool.desc} 
							fromColor={tool.fromColor} 
							toColor={tool.toColor} 
						/>)} 
				</Grid>
				<Divider />
			</> : null}

			{this.google.length ? <>
				<Title title="Google" />
				<Grid>
					{this.google.map((tool, index) => 
						<Tool 
							key={index}
							group={tool.category}
							title={tool.title} 
							to={tool.to} 
							Icon={tool.Icon} 
							desc={tool.desc} 
							fromColor={tool.fromColor} 
							toColor={tool.toColor} 
						/>)} 
				</Grid>
				<Divider />
			</> : null}


			{this.content.length ? <>
				<Title title="Written Content" />
				<Grid>
					{this.content.map((tool, index) => 
						<Tool 
							key={index}
							group={tool.category}
							title={tool.title} 
							to={tool.to} 
							Icon={tool.Icon} 
							desc={tool.desc} 
							fromColor={tool.fromColor} 
							toColor={tool.toColor} 
						/>)} 
				</Grid>
				<Divider />
				</> : null}

			{this.business.length ? <>
				<Title title="Business" />
				<Grid>
					{this.business.map((tool, index) => 
						<Tool 
							key={index}
							group={tool.category}
							title={tool.title} 
							to={tool.to} 
							Icon={tool.Icon} 
							desc={tool.desc} 
							fromColor={tool.fromColor} 
							toColor={tool.toColor} 
						/>)} 
				</Grid>
				<Divider />
			</> : null}

			{this.personal.length ? <>
				<Title title="Personlig" />
				<Grid>
					{this.personal.map((tool, index) => 
						<Tool 
							key={index}
							group={tool.category}
							title={tool.title} 
							to={tool.to} 
							Icon={tool.Icon} 
							desc={tool.desc} 
							fromColor={tool.fromColor} 
							toColor={tool.toColor} 
						/>)} 
				</Grid>
				<Divider />
			</> : null}

			{this.social.length ? <>
				<Title title="Online" />
				<Grid>
					{this.social.map((tool, index) => 
						<Tool 
							key={index}
							group={tool.category}
							title={tool.title} 
							to={tool.to} 
							Icon={tool.Icon} 
							desc={tool.desc} 
							fromColor={tool.fromColor} 
							toColor={tool.toColor} 
						/>)} 
				</Grid>
				<Divider />
			</> : null}

</MainBody>
</>)
}
  }

export const Divider = () => <div className="divide-y-2 divide-solid divide-gray-300 py-8 md:py-12"> <div></div>
<div></div></div>

export const Title = ({ title }) => <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-4 md:mb-6">
{title}
</h2>

export const Grid = ({ children }) => <div className="grid grid-cols-1 gap-8 mt-4 lg:grid-cols-4 xl:grid-cols-4 ">{children}</div>

// Layout of the specific selection boxes
export const Tool = ({ Icon, title, desc, to, group, fromColor, toColor, }) => <Link to={to} className="flex relative">
	<div  className="flex-1 text-left">
	<div className={`relative inset-0 bg-gradient-to-r from-${fromColor ? fromColor : "green-400"} to-${toColor ? toColor : "blue-500"} shadow-lg transform skew-y-0 -rotate-3 rounded-3xl `}></div>

	<div  className={`flex-1 bg-white rounded-xl transition hover:shadow-md overflow-hidden md:max-w-1lg text-gray-500 cursor-pointer border-t-2 border- hover:border-${fromColor ? fromColor : "blue-400"} md:flex relative transform hover:scale-105  hover:text-black`}>
  {Icon && <div className={`md:flex-shrink-0 flex justify-start items-center ml-8 text-${fromColor ? fromColor : "green-500"}`}>
	<Icon className="h-16 w-16 mb-4 mt-4" />
  </div>}
  <div className="p-4">
	<div className={`uppercase tracking-wide text-sm text-${fromColor ? fromColor : "green-500"} font-semibold leading-none`}>{group || ""}</div>
	<div className="block text-lg xl:text-xl 2xl:text-2xl leading-tight font-medium text-black leading-none">{title}</div>
	<p className="mt-1 pr-1 text-sm">{desc}</p>
  </div>
</div>
</div>
</Link>




export default Body