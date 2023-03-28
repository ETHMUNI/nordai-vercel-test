import {
	ChevronRightIcon,
} from '@heroicons/react/solid'

import { 
	ChatAlt2Icon
 } from "@heroicons/react/solid"


const obj = {

	title: "YouTube Responder",
	desc: "Skriv et svar til offentlige kommentarer, der er positive, nyttige og professionelle",
	category: "Youtube",
	Icon: ChatAlt2Icon
    ,
	// tags: [],
	permissions: ['user'],
	
	fromColor: "red-600",
	toColor: "red-600",

	to: "/ai/youtuberesponder",
	api: "/ai/youtuberesponder",
	
	output: {
		title: "Example",
		desc: "The following key points detected",
		Icon: ChevronRightIcon,
		color: "blue",
	},

	prompts: [{
		title:"Indtastnings felt",
		desc: "Kopier kommentaren ind i feltet som du gerne vil svarer på. Giv gerne mere kontekst for at svaret bliver mere specifikt",
		// n: 1,
		prompts: [{ 
				title: "Content", 
				attr: "content",  
				value: "", 
				placeholder: "Placér kommentaren her...", 
				label: "",
				type: "textarea",
				maxLength: 600,
				// max: 100,
				min: 3,
				required: true,
				error: "",
				example: "Kan du give et positivt og kreativt svar tilbage på denne kommentar, gerne med emojis: Danmarks bedste youtuber uden tvivl❤",
			},
		],
		example: {
			output:
				`Tusind tak for din ros! Jeg er beæret over at høre, at du mener jeg er Danmarks bedste youtuber.🌟🎥🎉 Jeg prøver altid at give mine seere den bedste underholdning og jeg er glad for at høre, at det har en positiv effekt🤩 Jeg glæder mig til at fortsætte med at dele min kreativitet med jer❤\n`
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

