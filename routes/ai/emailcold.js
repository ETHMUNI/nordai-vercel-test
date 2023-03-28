
const express = require('express');
const openai = require('../middlewares/openai');

let app = express.Router()

// input tokens: 150
// input characters: 600
// output tokens: 50
// output characters: 200

// Personal Tools
app.post('/emailcold', async (req, res, next) => {
	try {
		let { tone, goal, sendersName, gettersName, sendersInfo, gettersInfo  } = req.body

		// if(desc){
		// 	if (desc.length > 600) {
		// 		desc = desc.substring(desc.length - 600)
		// 	}
		// }

		let prompt = `Følgende værktøj skaber en kold kanvas email som baseret på de metadata, der er angivet:\n"""\n` +

	
		// Example 1 
		`${tone ? `Tone: Selvsikker ${tone}\n` : ``}` + 
		`${goal ? `Mål: Et møde ${goal}\n` : ``}` +
		`${sendersName ? `Senderens navn: Jørgen ${sendersName}\n` : ``}` + 
		`${gettersName ? `Modtagers navn: Klaus ${gettersName}\n` : ``}` + 
		`${sendersInfo ? `Senderens info: Social medie konsulent, laver social medie annoncer for virksomheder. ${sendersInfo}\n` : ``}` + 
		`${gettersInfo ? `Modtagerens info: Baby Sam, e-commerce butik, sælger babytøj online ${gettersInfo}\n` : ``}` + 
		`email: Hej Klaus,

		Jeg håber, du har det godt. Mit navn er Jørgen, og jeg er en social medie konsulent, der er på mission for at gøre virksomheder synlige på sociale medier.\n
		Da jeg tjekkede din e-commerce butik, var jeg så imponeret over den charmerende babytøjskollektion, du har.\n
		Jeg kunne ikke lade være med at forestille mig, hvordan jeg kunne få endnu flere forældre til at opdage og elske din butik med mine social medie færdigheder.\n
		Hvad siger du til at sætte os sammen over en kop kaffe og brainstorme nye idéer?\n
		
		De bedste hilsener,\n
		Jørgen` + 
		`"""\n` +

		// Example 2
		`${tone ? `Tone: Begejstret ${tone}\n` : ``}` + 
		`${goal ? `Mål: Starte gratis prøveperiode ${goal}\n` : ``}` +
		`${sendersName ? `Senderens navn: Ali ${sendersName}\n` : ``}` + 
		`${gettersName ? `Modtagers navn: Karen ${gettersName}\n` : ``}` + 
		`${sendersInfo ? `Senderens info: NordAI, baseret på forskellige AI værktøjer${sendersInfo}\n` : ``}` + 
		`${gettersInfo ? `Modtagerens info: Marketings konsulent, laver video content og markedsføring baseret på SEO og organisk vækst ${gettersInfo}\n` : ``}` + 
		`email: Kære Karen,

		Jeg håber, at denne email finder dig i godt humør! Mit navn er Ali, og jeg er stolt repræsentant for en NordAI.\n 
		Vi hjælper vores kunder med at spare tid og generere content på få sekunder ved hjælp af vores AI-værktøjer. Jeg er nødt til at sige, at jeg blev helt overvældet af begejstring, da jeg så dit fantastiske arbejde inden for dit video content og SEO-baseret markedsføring.\n
		Jeg er sikker på, at du vil elske vores AI-værktøjer, og jeg vil gerne tilbyde dig en gratis prøveperiode, så du kan opleve vores magi selv!\n
		Er du klar til at tage dit marketing-game til det næste niveau?
		
		Venlig hilsen,
		Ali`  + 
		`"""\n` +

		// Example 3
		`${tone ? `Tone: Venlig ${tone}\n` : ``}` + 
		`${goal ? `Mål: Jobtilbud ${goal}\n` : ``}` +
		`${sendersName ? `Senderens navn: Emma ${sendersName}\n` : ``}` + 
		`${gettersName ? `Modtagers navn: Birgitte ${gettersName}\n` : ``}` + 
		`${sendersInfo ? `Senderens info: Arbejder for Deloitte, revision og finansiel rådgivning ${sendersInfo}\n` : ``}` + 
		`${gettersInfo ? `Modtagerens info: Revisor ${gettersInfo}\n` : ``}` + 
		`email: Kære Birgitte,\nJeg håber, at du nyder din dag. Mit navn er Emma, og jeg arbejder for Deloitte, hvor vi hjælper vores kunder med revision og finansiel rådgivning.\nDa jeg læste din imponerende profil som revisor, vidste jeg, at jeg var nødt til at nå ud til dig. Vi søger efter en talentfuld revisor til at slutte sig til vores team, og jeg kan ikke tænke på nogen bedre end dig!\n Jeg tror, at du ville trives i vores kreative og udfordrende miljø, og jeg ville elske at tale med dig om muligheden for at blive en del af Deloitte-familien.\nLad os tage en snak og udforske denne mulighed sammen.\n

		De bedste hilsner,\n
		Emma`  + 
		`"""\n`

		let inputRaw = 
		`${tone ? `Tone: ${tone}\n` : ``}` + 
		`${goal ? `Mål: ${goal}\n` : ``}` + 
		`${sendersName ? `Senderens navn: ${sendersName}\n` : ``}` + 
		`${gettersName ? `Modtagers navn: ${gettersName}\n` : ``}` + 
		`${sendersInfo ? `Senderens info: ${sendersInfo}\n` : ``}` + 
		`${gettersInfo ? `Modtagerens info: ${gettersInfo}\n` : ``}` + 
		`email:` 

		prompt += inputRaw


		const gptResponse = await openai.complete({
			engine: 'gpt-4',
			prompt,
			maxTokens: 2500,
			temperature: 0.85,
			frequencyPenalty: 0.7,
			presencePenalty: 0,
			bestOf: 1,
			topP: 1,
			n: 1,
			user: req.user._id,
			stream: false,
			stop: [`"""`, "Tone:", "Mål:", "Senderens navn:", "Senderens navn:", "Modtagers navn:", "Senderens info:", "Modtagerens info:", "email:"],
		});

		let output = `${gptResponse.data.choices[0].text}`

		// remove the first character from output
		// output = output.substring(1, output.length)

		// If the output string ends with one or more hashtags, remove all of them
		if (output.endsWith('"')) {
			output = output.substring(0, output.length - 1)
		}

		// If the output string ends with one or more hashtags, remove all of them
		if (output.endsWith('"')) {
			output = output.substring(0, output.length - 1)
		}

		// remove a single new line at the end of output if there is one
		if (output.endsWith('\n')) {
			output = output.substring(0, output.length - 1)
		}
	
		req.locals.input = prompt
		req.locals.inputRaw = inputRaw
		req.locals.output = output

		next()

	} catch (err) {
		console.log(err)
	}
  })

  module.exports = app