import {
	ChevronRightIcon,
	MailIcon,
} from '@heroicons/react/solid'


	const obj = {
		
	title: "Kold Kanvas Email",
	desc: "Præsenter din virksomhed ved at kontakte en potentiel kunde baseret på dit mål.",
	category: "Email",
	Icon: MailIcon,
	// tags: [],
	permissions: ['user'],
	
	fromColor: "indigo-500",
	toColor: "indigo-500",

	to: "/ai/emailcold",
	api: "/ai/emailcold",

	output: {
		title: "Eksempel",
		desc: "Følgende tekst er genereret.",
		Icon: ChevronRightIcon,
		color: "blue",
	},

	prompts: [{
		title:"Indtastnings felter",
		desc: "Spørg vores AI om at generere kold kanvas mail eksempel for din virksomhed! Jo mer specifik du er, jo bedre.",
		// n: 1,
		prompts: [
				{
				title: "Tone", 
				attr: "tone",  
				value: "", 
				placeholder: "Professionel...", 
				label: "Ex. Venlig, Selvsikker, Begejstret osv.",
				// type: Select,
				//maxLength: 100,
				// max: 100,
				min: 3,
				required: true,
				error: "",
				example: "Professionel",
				// options: [
				// 	{ label: "Professionel", value: "professional" },
				// 	{ label: "Venlig", value: "friendly" },
				// 	{ label: "Selvsikker", value: "confident" },
				// 	{ label: "Begejstret", value: "excited" },
				//   ],
			},
			{ 
				title: "Målet med din email", 
				attr: "goal",  
				value: "", 
				placeholder: "Starte gratis prøveperiode...", 
				label: "Ex. Et salg, Et møde, En tilmelding, Jobtilbud osv.",
				// type: "select",
				//maxLength: 100,
				// max: 100,
				min: 3,
				required: true,
				error: "",
				example: "Starte gratis prøveperiode",
				// options: [
				// 	{ label: "Starte gratis prøveperiode", value: "trial" },
				// 	{ label: "Et salg", value: "sale" },
				// 	{ label: "Et møde", value: "meeting" },
				// 	{ label: "En tilmelding", value: "sign" },
				// 	{ label: "Jobtilbud", value: "joboffer" },
				//   ],
				},
				{ 
					title: "Senderens navn", 
					attr: "sendersName",  
					value: "", 
					placeholder: "Elon Musk", 
					label: "",
					//type: "textarea",
					maxLength: 100,
					// max: 100,
					min: 3,
					required: true,
					error: "",
					example: "John Doe",
					},
					{ 
						title: "Modtagerens navn.", 
						attr: "gettersName",  
						value: "", 
						placeholder: "Jeff Bezos", 
						label: "",
						//type: "textarea",
						//maxLength: 100,
						// max: 100,
						min: 3,
						required: true,
						error: "",
						example: "Jane Doe",
					},
					{ 
						title: "Senderens Info", 
						attr: "sendersInfo",  
						value: "", 
						placeholder: "Ex. Ejer af Tesla, elbilsfirma.", 
						label: "",
						type: "textarea",
						maxLength: 200,
						// max: 100,
						min: 3,
						required: true,
						error: "",
						example: "Ejer af Nord AI, en AI-drevet indholdsforfatter",
						},
						{ 
							title: "Modtagerens Info", 
							attr: "gettersInfo",  
							value: "", 
							placeholder: "Ex. Ejer af Amazon, en e-handelsforhandler.", 
							label: "",
							type: "textarea",
							maxLength: 200,
							// max: 100,
							min: 3,
							required: true,
							error: "",
							example: "Ejer af Cura Media, Online markedsførings virksomhed",
							},
		],
		example: {
			output: [
				"Hej Jane,\nMit navn er John, ejer af Nord AI. Vi tilbyder en AI-drevet indholdsskrivningsløsning, der er perfekt til markedsføringskonsulenter som dig. Med vores teknologi kan du producere høj kvalitet indhold i stor skala uden at miste din stemme eller kreative vision.\nVille du være interesseret i at prøve vores service? Vi tilbyder en gratis prøveperiode, så du kan se, hvordan det fungerer for dig. Lad mig vide, hvis du er interesseret, så sender jeg mere information.\nVenlig hilsen,\nJohn"
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

