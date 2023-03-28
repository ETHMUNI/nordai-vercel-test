import {
	ChevronRightIcon,
} from '@heroicons/react/solid'

import {
	DocumentDuplicateIcon
} from '@heroicons/react/solid'

import TwitterIcon from '../media/twitter'

	const obj = {
	
	title: "Twitter Threads",
	desc: "Opret let lange engagerende tråde på Twitter om et emne uden besvær.",
	category: "Twitter",
	Icon: TwitterIcon
    ,
	// tags: [],
	permissions: ['user'],
	
	fromColor: "blue-500",
	toColor: "blue-400",

	to: "/ai/twitterthreads",
	api: "/ai/twitterthreads",

	output: {
		title: "Eksempel",
		desc: "Følgende nøglepunkter er registeret",
		Icon: ChevronRightIcon,
		color: "blue",
	},

	prompts: [{
		title:"Indtastnings felt",
		desc: "Indtast det emne du gerne vil have i din Twitter tråd. Jo mere specifik du er, jo bedre.",
		// n: 1,
		prompts: [{ 
				title: "Hvad handler denne tråd om?", 
				attr: "content",  
				value: "", 
				placeholder: "Ex. 6 af de bedste Tesla funktioner", 
				label: "",
				type: "textarea",
				maxLength: 100,
				// max: 100,
				min: 3,
				required: true,
				error: "",
				example: "6 af de bedste Tesla funktioner",
			},
		],
		example: {
			output: [
				"1/6 Autopilot: Den mest avancerede selvkørende teknologi på markedet, der gør det nemt og sikkert at køre. #Tesla #Autopilot\n",
				"2/6 Supercharging: Oplad din Tesla hurtigt og effektivt med Supercharger-netværket, der dækker hele verden. #Tesla #Supercharging\n",
				"3/6 Over the air software opdateringer: Hold din Tesla opdateret med de nyeste funktioner og forbedringer, uden at skulle besøge en serviceafdeling. #Tesla #OTA\n",
				"4/6 Dækselsåbningsfunktion: Åbn og luk dækslerne til dit frunk, bagage- og laderydersæt med en enkelt berøring. #Tesla #Dækselsåbningsfunktion\n",
				"5/6 Skærm: Tesla har en central 17-tommer skærm, der kontrollerer alt fra navigation til underholdning. #Tesla #Skærm\n",
				"6/6 Energimanagement: Tesla har en avanceret energistyring, der giver dig mulighed for at styre og spare på strømforbruget i dit hjem. #Tesla #Energimanagement\n",
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

