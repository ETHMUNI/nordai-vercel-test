import {
	ChevronRightIcon,
} from '@heroicons/react/solid'

import {
	ViewListIcon
} from '@heroicons/react/solid'


const obj = {

	title: "YouTube Manuskripter",
	desc: "Skriv bedre manuskripter til dit næste video med en outline for din video.",
	category: "Youtube",
	Icon: ViewListIcon
    ,
	// tags: [],
	permissions: ['user'],
	
	fromColor: "red-600",
	toColor: "red-600",

	to: "/ai/youtubescripts",
	api: "/ai/youtubescripts",

	output: {
		title: "Example",
		desc: "The following key points detected",
		Icon: ChevronRightIcon,
		color: "blue",
	},

	prompts: [{
		title:"Indtastnings felt",
		desc: "Spørg vores AI om at generere et manuskript for din Youtube video!",
		// n: 1,
		prompts: [{ 
				title: "Content", 
				attr: "content",  
				value: "", 
				placeholder: "Ex. Kan du lave et godt youtube manuskript omkring, hvordan man laver en nem og billig DIY gaveide?", 
				label: "",
				type: "textarea",
				maxLength: 600,
				// max: 100,
				min: 3,
				required: true,
				error: "",
				example: "Kan du lave et godt youtube manuskript omkring, hvordan man laver en nem og billig DIY gaveide?",
			},
		],
		example: {
			output:
				"Intro:\n· Hej alle sammen, velkommen tilbage til vores kanal. I dag vil jeg vise jer, hvordan man laver en nem og billig DIY gaveide, som man kan give til venner og familie. Dette er en god måde at vise, at man har lagt tid og kærlighed i gaven, uden at det behøver at koste en formue.\nStep 1:\n· Første skridt er at finde en genstand, som du gerne vil give en ny liv. Det kan være alt fra en gammel flaske, til en gammel bogsamling. Vælg noget, som du tror, personen vil sætte pris på.\nStep 2:\n· Næste skridt er at købe nogle billige materialer, som du kan bruge til at forandre genstanden. Det kan være maling, papir eller stof. Vær kreativ og tænk på, hvordan du kan give genstanden et nyt look.\nStep 3:\n· Nu er det tid til at komme i gang med at forandre genstanden. Brug dine materialer til at male eller dække genstanden. Vær ikke bange for at eksperimentere, og husk at det er okay, hvis det ikke kommer ud som du havde tænkt dig. Ofte er det de småfejl, der gør gaven endnu mere personlig.\nStep 4:\n· Sidste skridt er at pakke gaven ind. Brug et stykke flot papir eller et stof, som du kan binde om genstanden. Skriv en personlig hilsen, eller vedhæft et kort, så modtageren ved, hvem gaven er fra.\nOutro:\n· Og der har du det, en nem og billig DIY gaveide, som modtageren vil sætte stor pris på. Husk at dele billeder af din færdige gave på vores sociale medier, så vi også kan se resultatet. Tak for at du så med, vi ses næste gang!\n",
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

