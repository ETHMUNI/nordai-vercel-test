import {
	ChevronRightIcon,
	RefreshIcon,
} from '@heroicons/react/solid'


const obj = {

	title: "Facebook Retargeting Tekst",
	desc: "Skriv Facebook retargeting annoncer, som leverer en høj konverteringsrate.",
	category: "Facebook",
	Icon: RefreshIcon,
	// tags: [],
	permissions: ['user'],
	
	fromColor: "blue-400",
	toColor: "gray-500",

	to: "/ai/facebookretarget",
	api: "/ai/facebookretarget",

	output: {
		title: "Facebook Retargeting Tekst",
		desc: "Følgende tekst er genereret.",
		Icon: ChevronRightIcon,
		// color: "",
	},

	prompts: [{
		title:"Indtastningsfelter",
		desc: "Skriv dit virksomhed/produkt navn, målgruppe og kort om hvad din retargeting tekst skal handle om - Dette tool er bedste egnet til webshops",
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
			output: "Kan vi friste med andet? 🏆\n👉 Prisgaranti på alt!\n👉 Hurtig levering\n👉 Fri fragt på køb over 499,\n",
			// outputs: [],
			Icon: ChevronRightIcon,
			// color: "",
		}
	}]
		
}

export default obj

