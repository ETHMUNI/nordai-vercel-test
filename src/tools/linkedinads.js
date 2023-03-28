import {
	ChevronRightIcon,
	NewspaperIcon,
} from '@heroicons/react/solid'


const obj = {

	title: "LinkedIn Annonce",
	desc: "Skriv LinkedIn annoncer der engagerer din målgruppe og leverer en høj konverteringsrate.",
	category: "LinkedIn",
	Icon: NewspaperIcon,
	// tags: [],
	permissions: ['user'],
	
	fromColor: "blue-400",
	toColor: "gray-500",

	to: "/ai/linkedinads",
	api: "/ai/linkedinads",

	output: {
		title: "LinkedIn Annonce",
		desc: "Følgende annonce tekst er genereret.",
		Icon: ChevronRightIcon,
		// color: "",
	},

	prompts: [{
		title:"Indtastningsfelter",
		desc: "Skriv dit virksomhed/produkt navn, målgruppe og kort om hvad din post skal handle om",
		// n: 1,
		prompts: [
			{ 
				title: "Produkt navn", 
				attr: "title",  
				value: "", 
				placeholder: "Nord AI, Tesla, Netflix...", 
				label: "Hvad er navnet på dit produkt eller virksomhed?",
				// type: "textarea",
				maxLength: 50,
				// max: 100,
				// min: 5,
				// required: true,
				error: "",
				example: "Pilgrim",
			},
			{ // 
				title: "Målgruppe", 
				attr: "audience",  
				value: "", 
				placeholder: "Freelancer, designer osv.", 
				label: "Hvem er den primære målgruppe, du skriver til?",
				// type: "textarea",
				maxLength: 50,
				// max: 100,
				// min: 5,
				// required: true,
				error: "",
				example: "Kvinder, modeinteresserede",
			},
			{ 
				title: "Produkt/Service beskrivelse", 
				attr: "desc",  
				value: "", 
				placeholder: "Forklar her til vores AI, hvad dit produkt eller service drejer sig om. Omskriv for at få forskellige resultater.", 
				// label: "Forklar her til vores AI, hvad dit produkt eller service drejer sig om. Omskriv for at få forskellige resultater.",
				type: "textarea",
				maxLength: 300,
				// max: 100,
				// min: 100,
				// required: true,
				error: "",
				example: "Håndlavet smykker med dansk design. Med fokus på hver eneste (lille) nuance og detalje.",
			},
		],
		example: {
			output: "Lad Pilgrim bringe liv til din stil med vores unikke håndlavet smykker med dansk design. Hvert stykke er skabt med kærlighed og omtanke, hvor hver lille nuance og detalje tages i betragtning. Gør lige som tusindvis andre kvinder og føj et Pilgrim-smykke til din samling👇\n",
			// outputs: [],
			Icon: ChevronRightIcon,
			// color: "",
		}
	}]
		
}

export default obj

