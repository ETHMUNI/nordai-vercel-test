import {
	ChevronRightIcon,
	MenuAlt4Icon,
} from '@heroicons/react/solid'



	const obj = {
		
	title: "Emnelinjer til Emails",
	desc: "Generér fængende og optimerede emnelinjer til dine e-mails for din virksomhed!",
	category: "Email",
	Icon: MenuAlt4Icon,
	// tags: [],
	permissions: ['user'],
	
	fromColor: "indigo-500",
	toColor: "indigo-500",

	to: "/ai/emailsubjectline",
	api: "/ai/emailsubjectline",

	output: {
		title: "Eksempel",
		desc: "Følgende tekst er genereret.",
		Icon: ChevronRightIcon,
		color: "blue",
	},

	prompts: [{
		title:"Indtastnings felter",
		desc: "Spørg vores AI om at generere emnelinjer til e-mails! Jo mer specifik du er, jo bedre.",
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
				title: "Målgruppe", 
				attr: "audience",  
				value: "", 
				placeholder: "Freelancers, desginer...", 
				label: "",
				// type: "select",
				//maxLength: 100,
				// max: 100,
				min: 3,
				required: true,
				error: "",
				example: "Freelancers",
				// options: [
				// 	{ label: "Starte gratis prøveperiode", value: "trial" },
				// 	{ label: "Et salg", value: "sale" },
				// 	{ label: "Et møde", value: "meeting" },
				// 	{ label: "En tilmelding", value: "sign" },
				// 	{ label: "Jobtilbud", value: "joboffer" },
				//   ],
				},
					{ 
						title: "Product Name", 
						attr: "productName",  
						value: "", 
						placeholder: "Netflix, Spotify...", 
						label: "",
						//type: "textarea",
						//maxLength: 100,
						// max: 100,
						min: 3,
						required: true,
						error: "",
						example: "Nord AI",
					},
					{ 
						title: "Product Info", 
						attr: "productInfo",  
						value: "", 
						placeholder: "Forklar AI'en hvad dit produkt eller service handler om. Omformuler for at få forskellige resultater.", 
						label: "",
						type: "textarea",
						maxLength: 400,
						// max: 100,
						min: 3,
						required: true,
						error: "",
						example: "En helt ny AI-drevet software, der skriver ubegrænset tekster til opslag til sociale medier, e-mails, annoncer og videomanuskripter.",
						},
		],
		example: {
			output: [
				"🤯 Nord AI: Den helt nye software, der skriver ubegrænsede tekster til sociale medier\n\n",

				"Sådan skriver du ubegrænset indhold til din virksomhed.\n\n",
				
				"🤯 Nord AI Den eneste AI-drevne indholdsforfatter, du nogensinde vil få brug for.\n\n",
				
				"FREELANCE SKRIVNING GJORT LET",
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

