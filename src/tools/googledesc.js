import {
	ChevronRightIcon,
	GlobeIcon,
} from '@heroicons/react/solid'


const obj = {

	title: "Google Annonce Beskrivelse",
	desc: "Skriv en Google Ads beskrivelse, der gør din annonce skiller sig ud og genererer leads.",
	category: "Google",
	Icon: GlobeIcon,
	// tags: [],
	permissions: ['user'],
	
	fromColor: "blue-500",
	toColor: "red-500", 
	

	to: "/ai/googledesc",
	api: "/ai/googledesc",

	output: {
		title: "Google Annonce Beskrivelse",
		desc: "Følgende beskrivelse er genereret.",
		Icon: ChevronRightIcon,
		// color: "",
	},

	prompts: [{
		title:"Indtastningsfelter",
		desc: "Vi ved, at skrivning til Google Ads kan være tungt, men det behøver det ikke at være. Nord AI vil skrive din perfekte beskrivelse på få sekunder.",
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
				example: "Nord AI",
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
				example: "Content Creators",
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
				example: "Nord AI er en SaaS med forskellige AI tools til at hjælpe content creators til at skrive og få ideer til content på få sekunder. Så de netop kan spare tid samt have fokus på det de er bedst til!",
			},
		],
		example: {
			output: "Nord AI - Effektiviser dit indholdsskrivning med vores AI-drevne SaaS. Opdag nem og hurtig adgang til en verden af kreative ideer og skriveværktøjer, specielt designet til content creators. Spar tid og fokuser på at udtrykke din kreativitet med Nord AI.\n",
			// outputs: [],
			Icon: ChevronRightIcon,
			// color: "",
		}
	}]
		
}

export default obj

