const Discord = require("discord.js")
const images = require("duckduckgo-images-api")

const client = new Discord.Client()

const OFFENSIVE_REGEX = /(stupid(\s)?|fuck(ing)?|(i(\s)?)?hate)(\s)?axolotl(s)?/g

// Store unique URLs
let accessReady = false
const CACHE_SIZE = process.env.CACHE_SIZE | 5 // In pages
let imageUrls = []
images.image_search({ query: "axolotl animal", iterations: CACHE_SIZE}).then(results => {
	for (const result of results) {
		imageUrls.push(result["image"])
	}
	accessReady = true
	console.log(accessReady)
})

client.on("ready", () => {
	console.log("Logged in")
})

client.on("message", msg => {
	if (msg.content == "!axolotl" && accessReady) {
		let randIndex = Math.floor(Math.random() * imageUrls.length)
		const choice = imageUrls[randIndex]
		msg.reply(choice)
	} else if (msg.content.toLowerCase().match(OFFENSIVE_REGEX)) {
		msg.reply("Fuck you too, " + msg.author.username)
	}
})

client.login(process.env.DISCORD_TOKEN)
