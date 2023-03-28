import {
	ChevronRightIcon,
} from '@heroicons/react/solid'

import {
	LightBulbIcon
} from '@heroicons/react/solid'



	const obj = {
		
	title: "YouTube Titel",
	desc: "Skriv en overbevisende YouTube-video-titel for at fange folks opmærksomhed og giver en højere CTR.",
	category: "Youtube",
	Icon: LightBulbIcon
    ,
	// tags: [],
	permissions: ['user'],
	
	fromColor: "red-600",
	toColor: "red-600",

	to: "/ai/youtubetitle",
	api: "/ai/youtubetitle",

	output: {
		title: "Eksempel",
		desc: "Følgende tekst er genereret.",
		Icon: ChevronRightIcon,
		color: "blue",
	},

	prompts: [{
		title:"Indtastnings felt",
		desc: "Spørg vores AI om at generere et titel eksempel for din Youtube video! Jo mer specifik du er, jo bedre.",
		// n: 1,
		prompts: [
				{ 
				title: "Emne", 
				attr: "topic",  
				value: "", 
				placeholder: "Skriv emnet for din YouTube video", 
				label: "",
				//type: "textarea",
				maxLength: 100,
				// max: 100,
				min: 3,
				required: true,
				error: "",
				example: "Fransk mad",
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
				example: "Kulinarisk",
			},
		],
		example: {
			output: [
				"Fransk madlavning: Sådan laver du den perfekte ratatouille\n",
				"Fransk gastronomi: Opskriften på en lækker bouillabaisse\n",
				"Fransk madkultur: Sådan laves en traditionel quiche Lorraine\n",
				"Fransk madkunst: Fremstillingen af en ægte tarte tatin\n",
				"Fransk madinspiration: Sådan laver du en lækker coq au vin\n",
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

