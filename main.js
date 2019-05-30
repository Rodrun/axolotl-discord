const Discord = require("discord.js")
const GoogleImages = require("google-images")

const client = new Discord.Client()
const images = new GoogleImages(process.env.CSE_ID, process.env.CSE_KEY)

const OFFENSIVE_REGEX = /(stupid(\s)?|fuck(ing)?|(i(\s)?)?hate)(\s)?axolotl(s)?/g

// Cache image URLs
const CACHE_SIZE = process.env.CACHE_SIZE | 5 // In pages
let urls = []
for (let p = 0; p < CACHE_SIZE; p++) {
	images.search("axolotl animal", {page:p}).then(images => {
		for (const img of images) {
			urls.push(img["url"])
		}
	}).catch(e => {
		console.log("An error occurred in caching image data")
		console.log(e)
	})
}


client.on("ready", () => {
	console.log("Logged in")
})

client.on("message", msg => {
	if (mgs.content == "!axolotl") {
		const choice = getRandomImage()
	} else if (msg.content.toLowerCase().match(OFFENSIVE_REGEX)) {
		msg.reply("Fuck you too")
	}
})

client.login(process.env.DISCORD_TOKEN)
