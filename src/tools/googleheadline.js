import {
	ChevronRightIcon,
	GlobeIcon,
} from '@heroicons/react/solid'


const obj = {

	title: "Google Annonce Overskrift",
	desc: "Skriv fængende overskrifter på 30 tegn til at fremme dit produkt med Google Ads.",
	category: "Google",
	Icon: GlobeIcon,
	// tags: [],
	permissions: ['user'],
	
	fromColor: "blue-500",
	toColor: "red-500", 
	

	to: "/ai/googleheadline",
	api: "/ai/googleheadline",

	output: {
		title: "Google Annonce Overskrift",
		desc: "Følgende overskrift er genereret.",
		Icon: ChevronRightIcon,
		// color: "",
	},

	prompts: [{
		title:"Indtastningsfelter",
		desc: "Stop med at spilde din tid med at opfinde overskrifter til Google Ads. Nord AI gør det for dig på sekunder med garanti for den højeste CTR mulig",
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
			output: "Håndlavet design | Håndlavet smykker til kvinder | Unikke designs\n",
			// outputs: [],
			Icon: ChevronRightIcon,
			// color: "",
		}
	}]
		
}

export default obj

