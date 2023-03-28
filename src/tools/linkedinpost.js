import {
	ChevronRightIcon,
	LinkIcon,
	RefreshIcon
} from '@heroicons/react/solid'


const obj = {

	title: "LinkedIn Post",
	desc: "Opret indhold til din LinkedIn-profil, der vil hjælpe dig med at skille dig ud fra mængden.",
	category: "LinkedIn",
	Icon: LinkIcon,
	// tags: [],
	permissions: ['user'],
	
	fromColor: "blue-400",
	toColor: "gray-500",

	to: "/ai/linkedinpost",
	api: "/ai/linkedinpost",

	output: {
		title: "LinkedIn Post",
		desc: "Følgende post er genereret.",
		Icon: RefreshIcon,
		// color: "",
	},

	prompts: [{
		title:"Indtastningsfelter",
		desc: "Skriv din målgruppe og kort om hvad din post skal handle om",
		// n: 1,
		prompts: [
			{ 
				title: "Målgruppe", 
				attr: "audience",  
				value: "", 
				placeholder: "Freelancer, designer osv.", 
				label: "Hvem er den primære målgruppe, du skriver til?",
				// type: "textarea",
				maxLength: 50,
				// max: 100,
				// min: 5,
				// required: true,
				error: "",
				example: "Content Skrivere",
			},
			{ 
				title: "Hvad handler din post om?", 
				attr: "desc",  
				value: "", 
				placeholder: "Ex. Udgivelsen af vores nyeste App", 
				label: "En kort beskrivelse af, hvad din post vil handle om",
				type: "textarea",
				maxLength: 200,
				// max: 100,
				// min: 100,
				// required: true,
				error: "",
				example: "AI markedsføring",
			},
		],
		example: {
			output: "I en verden, hvor teknologien hele tiden udvikler sig, er det ikke overraskende, at kunstig intelligens (AI) bliver mere udbredt i markedsføringen. AI kan hjælpe dig med at målrette din målgruppe mere effektivt, personalisere dit indhold og automatisere dine markedsføringsopgaver. Hvis du vil være foran kurven, bør du overveje at inkludere AI i din markedsføringsstrategi.\n",
			// outputs: [],
			Icon: ChevronRightIcon,
			// color: "",
		}
	}]
		
}

export default obj

