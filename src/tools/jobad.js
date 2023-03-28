import {
	ClipboardListIcon,
} from '@heroicons/react/solid'
 

const obj = {

	title: "Job Anonnce",
	desc: "Skriv en professionel jobbeskrivelse, der vil hjælpe dig med at tiltrække de bedste talenter.",
	category: "Business",
	Icon: ClipboardListIcon,
	// tags: [],
	permissions: ['user'],

	to: "/ai/business/jobad",
	api: "/ai/business/jobad",
	
	fromColor: "blue-600",
	toColor: "yellow-500",

	output: {
		title: "Job Annonce Preview",
		desc: "Eksempel på en mulig jobsøgningsannonce.",
		// Icon: RefreshIcon,
		// color: "",
	},

	prompts: [{
		title:"Detaljeret annonce",
		desc: "Job annonce med detaljeret beskrivelse af stilling og krav til ansøger.",
		// n: 1,
		prompts: [
			{ 
				title: "Titel", 
				attr: "title",  
				value: "", 
				placeholder: "Junior Bogholder", 
				label: "Eksempler: Revisorer, Udvikler, Tandlæge, Receptionist",
				// type: "textarea",
				maxLength: 40,
				// max: 100,
				min: 10,
				required: true,
				error: "",
				example: "junior bogholder",
			},
			{ 
				title: "Løn", 
				attr: "salary",  
				value: "", 
				placeholder: "40,0000dkk", 
				label: "Eksempler: 40k, 20,000 dkk, 150kr per time",
				// type: "textarea",
				maxLength: 20,
				// max: 100,
				min: 3,
				required: true,
				error: "",
				example: "40k",
			},
			{ 
				title: "Færdigheder eller Erfaringer", 
				attr: "skills",  
				value: "", 
				placeholder: "Skatte Audit, Rapporter, Designing af Logos, osv.", 
				label: "Eksempler: Microsoft CRM, Adobe, Kasseapparat, Udstyr",
				// type: "textarea",
				// maxLength: 600,
				// max: 100,
				// min: 1,
				// required: true,
				error: "",
				example: "Tax Audit, Reports, Dinero",
			},
			{ 
				title: "Virksomhed", 
				attr: "company",  
				value: "", 
				placeholder: "FIRMA A/S", 
				label: "Eksempler: Tax Point, Moshi Agency A/S",
				// type: "textarea",
				maxLength: 40,
				// max: 100,
				// min: 1,
				// required: true,
				error: "",
				example: "Smith and Co A/S",
			},
			{ 
				title: "Kontakt Information", 
				attr: "contact",  
				value: "", 
				placeholder: "John Jensen John@Jensen.dk", 
				label: "Eksempler: John, John@eksempel.com, Ring til John på +45 21 02 10 31",
				// type: "textarea",
				// maxLength: 600,
				// max: 100,
				// min: 1,
				// required: true,
				error: "",
				example: "John Jensen John@Jensen.dk",
			},
		],
		example: {
output: `Jensen & Co søger en Junior Bogholder til vores team. Hvis du har erfaring med bogføring og regnskab, får du mulighed for at arbejde med en bred vifte af økonomiske og regnskabsmæssige opgaver.

Rollen:

- Arbejde med en række økonomiske opgaver
- Gennemføre bankafstemninger
- Forberede rapporter og økonomiske regnskaber
- Arbejde sammen med CFO for at sikre, at virksomheden overholder de økonomiske regler

Færdigheder og erfaring:

- Bekræftet erfaring i en bogholderi rolle
- Erfaring med Dinero ville være en fordel
- Erfaring i en detailhandelsvirksomhed ville være en fordel

Sådan søger du:
Hvis du er interesseret, kan du søge ved at kontakte os direkte hos Jensen & Co eller sende en email til john@jensen.dk`,
			// outputs: [],
			// Icon: RefreshIcon,
			// color: "",
		}
	},{
		title:"Simple Annonce",
		desc: "Skriv et par korte ord om annoncen.",
		// n: 1,
		prompts: [
			{ 
				title: "Job Information", 
				attr: "content",  
				value: "", 
				placeholder: "Bogholder 40k kan gøre rapport, revision, Dinero, Jensen & Co, kontakt John john@co.com", 
				label: "",
				type: "textarea",
				maxLength: 400,
				// max: 100,
				// min: 1,
				required: true,
				error: "",
				example: "Jensen & Co søger en Junior Regnskabschef til at tjene $40k og arbejde med rapporter, revisioner og Dinero. Kontakt John på john@jensen.com.",
			},
		],
		example: {
output: `Jensen & Co søger en Junior Regnskabsmedarbejder til at deltage i vores team. Hvis du har erfaring med regnskab og bogføring, vil du få mulighed for at arbejde med et bredt udvalg af økonomiske og regnskabsmæssige opgaver.

Rollen:

- Arbejde med en række forskellige økonomiske opgaver
- Udføre bankafstemninger
- Forberede rapporter og økonomiske regnskaber
- Arbejde med CFO for at sikre, at virksomheden er i overensstemmelse med de økonomiske regler

Færdigheder og erfaring:

- Bevist erfaring i en regnskabsmedarbejder rolle
- Erfaring i Dinero vil være en fordel
- Erfaring i en detailhandelsvirksomhed vil være en fordel

Sådan ansøger du:
Hvis du er interesseret, kan du ansøge ved at kontakte os direkte hos Jensen & Co eller sende en e-mail til john@jensen.dk`,
			// outputs: [],
			// Icon: RefreshIcon,
			// color: "",
		}
	}]
		
}

export default obj

