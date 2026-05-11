require('dotenv').config()

const baseUrl = "https://hacker-news.firebaseio.com/v0";

const axios = require('axios')
const telegramAPI = require('node-telegram-bot-api')


async function getNewsID(route) {
    try {
        return (await axios.get(`${baseUrl}${route}`)).data

    } catch (err) {
        console.log(err)
    }
}

async function getNewsItem() {
    try {
        let itensList = []
        for (let i = 0; i < 5; i++) {
            const itens = await getNewsID('/topstories.json')
            let item = Math.floor(Math.random() * itens.length)
            const getter = await axios.get(`${baseUrl}/item/${itens[item]}.json`)
            itensList.push({
                title: getter.data.title,
                url: getter.data.url
            })
        }
        return itensList

    } catch (err) {
        console.log(err)
    }
}


async function getjobsItem() {
    try {
        let itensList = []
        for (let i = 0; i < 15; i++) {
            const itens = await getNewsID('/jobstories.json')
            let item = Math.floor(Math.random() * itens.length)
            const getter = await axios.get(`${baseUrl}/item/${itens[item]}.json`)
            itensList.push({
                title: getter.data.title,
                url: getter.data.url
            })
        }
        return itensList

    } catch (err) {
        console.log(err)
    }
}


async function send_notices() {
    const notices = await getNewsItem()
    const job = await getjobsItem()
    const noticesText = notices
        .map((item, i) => `${i + 1}. *${item.title}*\n${item.url}`)
        .join('\n\n')

    const jobsText = job
        .map((item, i) => `${i + 1}. *${item.title}*\n${item.url}`)
        .join('\n\n')

    const mensage = `📰 *Notices:*\n\n${noticesText}\n\n🔍 *Who is Hiring:*\n\n${jobsText}`
    const TOKEN = process.env.TOKEN
    const CHAT_ID = process.env.CHAT_ID

    const bot = new telegramAPI(TOKEN)

    await bot.sendMessage(CHAT_ID, mensage, { parse_mode: 'Markdown' })
}

send_notices()