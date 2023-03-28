import {
	ChevronRightIcon,
} from '@heroicons/react/solid'

import {
	PlayIcon
} from '@heroicons/react/solid'

	const obj = {
	

	title: "YouTube Ideer",
	desc: "Det perfekte værktøj til at begynde at lave fantastiske videoer. Generer kreative idéer til din næste video.",
	category: "Youtube",
	Icon: PlayIcon
    ,
	// tags: [],
	permissions: ['user'],
	
	fromColor: "red-600",
	toColor: "red-600",

	to: "/ai/youtubeidea",
	api: "/ai/youtubeidea",

	output: {
		title: "Eksempel",
		desc: "Følgende nøglepunkter er registeret",
		Icon: ChevronRightIcon,
		color: "blue",
	},

	prompts: [{
		title:"Indtastnings felt",
		desc: "Spørg vores AI om at genererer ideer til din Youtube video! Jo mere specifik du er, jo bedre.",
		// n: 1,
		prompts: [{ 
				title: "Emne", 
				attr: "topic",  
				value: "", 
				placeholder: "Skriv Random, hvis du ikke har et emne og bare vil tilfældige ideer", 
				label: "",
				// type: "textarea",
				maxLength: 200,
				// max: 100,
				min: 3,
				required: true,
				error: "",
				example: "Random",
			},
			{
				title: "Tone", 
				attr: "tone",  
				value: "", 
				placeholder: "Ex. kreativ, professionel, fængende...", 
				label: "",
				//type: "textarea",
				maxLength: 100,
				// max: 100,
				min: 3,
				required: true,
				error: "",
				example: "Kreativ",
			}
		],
		example: {
			output: [
				"1. En `day in the life` vlog\n",
				"2. En top 10 liste over dit foretrukne emne\n",
				"3. En DIY-guide til en livsstilsændring\n",
				"4. En samtale med en interessant person om deres karriere eller livserfaring\n",
				"5. En `field trip` til et interessant sted, der er relateret til dit emne.\n",
         ],
			// outputs: [
			// 	"The sun is very old, over 4.5 billion years",
			// 	"At 10,000 degrees, sun is also very hot",
			// 	"Gasses called coronal mass ejections erupt from the sun",
			// ],
			// Icon: RefreshIcon,
			color: "blue",
		}
	}]
		
}


export default obj

