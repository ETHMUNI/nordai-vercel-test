import {
	ChevronRightIcon,
} from '@heroicons/react/solid'

import {
	TagIcon
} from '@heroicons/react/solid'


const obj = {

	title: "YouTube Tags",
	desc: "Generer SEO-optimerede YouTube tags / keywords som gør din video mere synlig for potentielle seere.",
	category: "Youtube",
	Icon: TagIcon
    ,
	// tags: [],
	permissions: ['user'],
	
	fromColor: "red-600",
	toColor: "red-600",

	to: "/ai/youtubetags",
	api: "/ai/youtubetags",

	output: {
		title: "Example",
		desc: "The following key points detected",
		Icon: ChevronRightIcon,
		color: "blue",
	},

	prompts: [{
		title:"Indtastnings felt",
		desc: "Spørg vores AI om at generere nogen eksempel Tags til din Youtube video! Jo mere specifik du er, jo bedre.",
		// n: 1,
		prompts: [{ 
				title: "Content", 
				attr: "content",  
				value: "", 
				placeholder: "Angiv din titel, en beskrivelse af din video eller et specifikt emne", 
				label: "",
				type: "textarea",
				maxLength: 600,
				// max: 100,
				min: 3,
				required: true,
				error: "",
				example: "Lav Youtube Tags som hjælper med at seere kan finde min video omkring hvordan man laver en nem og billig DIY gaveide",
			},
		],
		example: {
			output:
				`Nogle tags, du kan overveje at inkludere i din YouTube-video om DIY gaver, inkluderer:\n· DIY\n· Gaveideer\n· Hjemmelavet gave\n· Budgetvenlig\n· Kreativ gave\n· Personlig gave\n· Genbrug\n· Upcycling\n· Håndlavet\n Du kan også overveje at inkludere tags, der er specifikke for det emne, du dækker i din video, fx "DIY hjemmelavet parfume" eller "DIY billig fotramme". Det er vigtigt at tagge din video med relevante ord, da det hjælper med at gøre det nemmere for folk at finde din video, når de søger efter emner, der relaterer sig til DIY-gaveideer.\n`
         ,
			// outputs: [
			// 	"The sun is very old, over 4.5 billion years",
			// 	"At 10,000 degrees, sun is also very hot",
			// 	"Gasses called coronal mass ejections erupt from the sun",
			// ],
			// Icon: RefreshIcon,
			color: "red",
		}
	}]
		
}

export default obj

