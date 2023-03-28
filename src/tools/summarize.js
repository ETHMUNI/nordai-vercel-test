import {
	ViewListIcon,
} from '@heroicons/react/solid'


const obj = {

	title: "Opsummering i Punkter",
	desc: "Analyser din tekst eller dokument, og formidle de vigtigste koncepter i punktform",
	category: "Personlig",
	Icon: ViewListIcon,
	// tags: [],
	permissions: ['user'],
	
	fromColor: "green-500",
	toColor: "blue-500",

	to: "/ai/personal/summarize",
	api: "/ai/personal/summarize",

	output: {
		title: "Opsummerede punkter",
		desc: "Følgende nøglepunkter registreret",
		Icon: false,
		color: "blue",
	},

	prompts: [{
		title:"Indtastnings felt",
		desc: "En sætning eller afsnit, som du ønsker at forstå i punktform",
		// n: 1,
		prompts: [{ 
				title: "Content", 
				attr: "content",  
				value: "", 
				placeholder: "Placér din tekst her...", 
				label: "",
				type: "textarea",
				maxLength: 600,
				// max: 100,
				min: 3,
				required: true,
				error: "",
				example: "Solen er over 4,5 milliarder år gammel og har en temperatur på omkring 10.000 grader Fahrenheit. Solens lys når jorden på otte minutter. Koronale masseudbrud er gasser på solens overflade, der eksploderer og skyder langt ud i rummet.",
			},
		],
		example: {
			// output: "",
			outputs: [
				"- Solen er meget gammel, over 4,5 milliarder år",
				"- Med en temperatur på omkring 10.000 grader er solen også meget varm",
				"- Gasser kaldet koronal masseudbrud bruser op fra solen",
			],
			// Icon: RefreshIcon,
			color: "blue",
		}
	}]
		
}

export default obj

