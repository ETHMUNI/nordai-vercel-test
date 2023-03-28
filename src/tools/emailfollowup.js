import {
	ChevronRightIcon,
	MailOpenIcon,
} from '@heroicons/react/solid'


	const obj = {
		
	title: "Opfølgnings Email",
	desc: "Skriv en e-mail for at engagere dig med dine potentielle kunder som svar på en handling: gratis prøveperiode, møde, opkald...",
	category: "Email",
	Icon: MailOpenIcon,
	// tags: [],
	permissions: ['user'],
	
	fromColor: "indigo-500",
	toColor: "indigo-500",

	to: "/ai/emailfollowup",
	api: "/ai/emailfollowup",

	output: {
		title: "Eksempel",
		desc: "Følgende tekst er genereret.",
		Icon: ChevronRightIcon,
		color: "blue",
	},

	prompts: [{
		title:"Indtastnings felter",
		desc: "Spørg vores AI om at generere en opfølgnings mail eksempel! Jo mer specifik du er, jo bedre.",
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
					title: "Opfølgning efter:", 
					attr: "followUp",  
					value: "", 
					placeholder: "Gratis prøveperiode, seminar", 
					label: "",
					//type: "textarea",
					maxLength: 100,
					// max: 100,
					min: 3,
					required: true,
					error: "",
					example: "Gratis prøveperiode",
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
				"Hej,\n jeg kontakter dig for at høre, om du er interesseret i at opgradere din konto og blive medlem af NordAI. Ved at vælge denne mulighed vil du altid have den seneste version af softwaren, så du ikke behøver bekymre dig om at køre flere versioner. Du vil også få adgang til 10+ ekstra funktioner, der ikke er tilgængelige med vores gratis prøveperiode. Gå ikke glip af muligheden for at opgradere i dag!"
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

