import {
	MenuAlt2Icon,
} from '@heroicons/react/solid'


const obj = {

	title: "Introduktion",
	desc: "Skriv en introduktion, der vil fange dine besøgendes interesse og få dem til at læse mere om din artikel.",
	category: "Content",
	Icon: MenuAlt2Icon,
	// tags: [],
	permissions: ['user'],
	
	fromColor: "yellow-400",
	toColor: "yellow-600",

	to: "/ai/writing/intro",
	api: "/ai/writing/intro",

	output: {
		title: "Introduktion",
		desc: "Følgende introduktion er genereret.",
		// Icon: RefreshIcon,
		// color: "",
	},

	prompts: [{
		title:"Indtastningsfelter",
		desc: "Skriv en lille sætning eller afsnit, du ønsker at gennemgå.",
		// n: 1,
		prompts: [
			{ 
				title: "Titel", 
				attr: "title",  
				value: "", 
				placeholder: "Dit emne/titel", 
				label: "Titlen, du havde planlagt at give artiklen/blogpost.",
				// type: "textarea",
				maxLength: 150,
				// max: 100,
				min: 5,
				required: true,
				error: "",
				example: "Kom i Gang Med Fransk Madlavning Uden Den Store Erfaring",
			},
			{ 
				title: "Målgruppe", 
				attr: "audience",  
				value: "", 
				placeholder: "Teknologi, Mad elskere osv.", 
				label: "Hvem er den primære målgruppe, du skriver til?",
				// type: "textarea",
				maxLength: 50,
				// max: 100,
				// min: 5,
				// required: true,
				error: "",
				example: "Mad elskere med passion for det franske køkken ",
			},
			{ 
				title: "Beskrivelse", 
				attr: "desc",  
				value: "", 
				placeholder: "En artikel omkring hvordan man lærer at lave fransk mad", 
				label: "En kort beskrivelse af, hvad artiklen vil handle om",
				type: "textarea",
				maxLength: 600,
				// max: 100,
				// min: 100,
				// required: true,
				error: "",
				example: "En artikel omkring hvordan man kan imponerer sine gæster med madlavning",
			},
			{ 
				title: "Keywords", 
				attr: "keywords",  
				value: "", 
				placeholder: "Mad, fransk, osv...", 
				label: "En opsummering af de nøgleord, som artiklen vil bestå af.",
				// type: "textarea",
				maxLength: 100,
				// max: 100,
				// min: 4,
				// required: true,
				error: "",
				example: "Mad, det franske køkken, nouvelle cuisine, osv... ",
			},
		],
		example: {
			output: "Er du klar til at imponere dine gæster med lækre franske retter, men tror du ikke, at du har den nødvendige erfaring? Fortvivl ikke! I denne artikel viser vi dig, hvordan du kan komme i gang med fransk madlavning uden at have en professionel baggrund. Vi guider dig igennem de grundlæggende teknikker og ingredienser, så du kan begynde at skræddersy dine egne unikke franske retter og imponere dine gæster med dine madlavningsevner.",
			// outputs: [],
			// Icon: RefreshIcon,
			// color: "",
		}
	}]
		
}

export default obj

