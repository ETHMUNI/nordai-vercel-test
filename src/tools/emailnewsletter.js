import {
	ChevronRightIcon,
	CollectionIcon,
} from '@heroicons/react/solid'


	const obj = {
		
	title: "Nyhedsbrev",
	desc: "Skriv overbevisende, engagerende og informativt indhold, som dine abonnenter vil elske.",
	category: "Email",
	Icon: CollectionIcon
    ,
	// tags: [],
	permissions: ['user'],
	
	fromColor: "indigo-500",
	toColor: "indigo-500",

	to: "/ai/emailnewsletter",
	api: "/ai/emailnewsletter",

	output: {
		title: "Eksempel",
		desc: "Følgende tekst er genereret.",
		Icon: ChevronRightIcon,
		color: "blue",
	},

	prompts: [{
		title:"Indtastnings felter",
		desc: "Generere et nyhedsbrev til dig eller din virkomhed! Jo mer specifik du er, jo bedre.",
		// n: 1,
		prompts: [
				{ 
				title: "Emne", 
				attr: "topic",  
				value: "", 
				placeholder: "Skriv dit emne, som dit nyhedsbrev skal omhandle", 
				label: "",
				//type: "textarea",
				maxLength: 100,
				// max: 100,
				min: 3,
				required: true,
				error: "",
				example: "Udgivelse af vores nye AI software",
				},
				{
				title: "Tone", 
				attr: "tone",  
				value: "", 
				placeholder: "Professionel...", 
				label: "Ex. Venlig, Selvsikker, Begejstret osv.",
				//type: "textarea",
				maxLength: 100,
				// max: 100,
				min: 3,
				required: true,
				error: "",
				example: "Professionel",
				
			},
			{
				title: "Virksomhedens navn", 
				attr: "companyName",  
				value: "", 
				placeholder: "NordAI, Spotify...", 
				label: "",
				//type: "textarea",
				maxLength: 100,
				// max: 100,
				min: 3,
				required: true,
				error: "",
				example: "Nord AI",
				
			},
			{
				title: "Virksomhedsbeskrivelse", 
				attr: "companyDesc",  
				value: "", 
				placeholder: "Beskriv kort, hvad din virksomhed handler om.", 
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
				"Hej alle!",

				"Vi er glade for at annoncere udgivelsen af vores nye AI-software - Nord AI!", 
				"Denne software skriver ubegrænset tekst til opslag på sociale medier, e-mails, annoncer og videomanuskripter." ,
				"Vi har arbejdet hårdt på denne software, og vi er sikre på, at I vil elske den.",

				"Prøv den gratis idag!"
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

