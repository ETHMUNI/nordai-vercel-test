import {
	ChevronRightIcon,
	NewspaperIcon,
} from '@heroicons/react/solid'

import FacebookIcon from '../media/facebook'

const obj = {

	title: "Facebook Annonce Overskrift",
	desc: "Skriv fængende overskrifter for at gøre dine Facebook annoncer iøjnefaldende.",
	category: "Facebook",
	Icon: FacebookIcon,
	// tags: [],
	permissions: ['user'],
	
	fromColor: "blue-400",
	toColor: "gray-500",

	to: "/ai/facebookheadline",
	api: "/ai/facebookheadline",

	output: {
		title: "Facebook Annonce Overskrift",
		desc: "Følgende overskrift er genereret.",
		Icon: ChevronRightIcon,
		// color: "",
	},

	prompts: [{
		title:"Indtastningsfelter",
		desc: "Skriv dit virksomheds/produkt navn, målgruppe og kort om hvad din overskrift skal handle om",
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
			output: "Opdag skønheden i håndlavet smykker med dansk touch💍\n",
			// outputs: [],
			Icon: ChevronRightIcon,
			// color: "",
		}
	}]
		
}

export default obj

