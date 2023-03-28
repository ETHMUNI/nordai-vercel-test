import {
	ChevronRightIcon,
	PencilIcon,
	RefreshIcon,
} from '@heroicons/react/solid'

	const obj = {
	

	title: "YouTube Beskrivelse",
	desc: "Skriv appellerende YouTube-beskrivelser for at få folk interesserede i dit video.",
	category: "Youtube",
	Icon: PencilIcon
    ,
	// tags: [],
	permissions: ['user'],
	
	fromColor: "red-600",
	toColor: "red-600",

	to: "/ai/youtubedescription",
	api: "/ai/youtubedescription",

	output: {
		title: "Eksempel",
		desc: "Følgende beskrivelse er genereret.",
		Icon: ChevronRightIcon,
		color: "blue",
	},
// Learn how to boost your traffic with an AI-Powered content writing tool
	prompts: [{
		title:"Indtastnings felt",
		desc: "Skriv en kreativ og tiltalende beskrivelse af indholdet, du er ved at vise i din Youtube-video for at gøre det mere attraktivt for seerne og sørge for, at de vil se det.",
		// n: 1,
		prompts: [{ 
				title: "Hvad er titlen på din video?", 
				attr: "content",  
				value: "", 
				placeholder: "Ex. Lær, hvordan du øger din trafik med et AI-drevet indholds skriveværktøj.", 
				label: "",
				type: "textarea",
				maxLength: 100,
				// max: 100,
				min: 3,
				required: true,
				error: "",
				example: "Lær hvordan du øger din trafik med et AI-drevet indholds skriveværktøj",
			},
		],
		example: {
			output: "Er du træt af at bruge timer på at skrive indhold, der ikke får den trafik, du ønsker? Så er dette videoen for dig! Vi viser dig, hvordan du kan øge din online tilstedeværelse ved hjælp af det seneste inden for AI-teknologi. Lær om, hvordan et AI-drevet indholds skriveværktøj kan hjælpe dig med at skrive mere effektivt og målrettet indhold, der vil øge din trafik og forbedre din online synlighed. Så hvis du vil have flere besøgende på din hjemmeside og øge din online tilstedeværelse, skal du se denne video nu!\n",
			Icon: RefreshIcon,
			color: "blue",
		}
	}]
		
}


export default obj

