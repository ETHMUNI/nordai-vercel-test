import {
	ChevronRightIcon,
	NewspaperIcon,
} from '@heroicons/react/solid'


const obj = {

	title: "Facebook Annonce Tekst",
	desc: "Skriv Facebook annoncer, der engagerer dit publikum og leverer en høj konverteringsrate.",
	category: "Facebook",
	Icon: NewspaperIcon,
	// tags: [],
	permissions: ['user'],
	
	fromColor: "blue-400",
	toColor: "gray-500",

	to: "/ai/facebooktext",
	api: "/ai/facebooktext",

	output: {
		title: "Facebook Annonce Tekst",
		desc: "Følgende tekst er genereret.",
		Icon: ChevronRightIcon,
		// color: "",
	},

	prompts: [{
		title:"Indtastningsfelter",
		desc: "Skriv dit virksomhed/produkt navn, målgruppe og kort om hvad din tekst skal handle om - Dette tool er bedste egnet til webshops",
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
				example: "Fitness-shoppen.dk",
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
				example: "Fitness interesserede",
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
				example: "Fitness-shoppen er en online e-commerce butik som sælger fitness og yoga udstyr, samt fitness tøj",
			},
		],
		example: {
			output: "Har du endnu ikke set vores spritnye kollektions af trænings og yogatøj? Skynd dig at få fingerende i noget, inden din størrelse er væk!🤩\n24 timers levering 👍\n15.000 kunder årligt👍\n",
			// outputs: [],
			Icon: ChevronRightIcon,
			// color: "",
		}
	}]
		
}

export default obj

