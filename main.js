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
	})
}


client.on("message", msg => {
	if (mgs.content == "!axolotl") {
		const choice = getRandomImage()
	} else if (msg.content.toLowerCase().match(OFFENSIVE_REGEX)) {
		msg.reply("Fuck you too")
	}
})
