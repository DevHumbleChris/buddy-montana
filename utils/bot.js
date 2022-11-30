const axios = require('axios')
const https = require('https')
const stories = require('../utils/stories.json')

const robot = ["How do you do, fellow human", "I am not a bot"]
async function bot (trigger, reply, text) {
    console.log('Am Called')
    let response;
    const joke = text.toLowerCase().includes('joke', 'jokes')
    const story = text.toLowerCase().includes('story', 'stories')
    const isRobot = text.toLowerCase().includes('bot', 'robot')
    if (joke) {
        const categories = ['programming', 'spooky', 'misc']
        const resData = await axios.get(`https://v2.jokeapi.dev/joke/${categories[Math.floor(Math.random() * categories.length)]}`)
        console.log(categories[Math.floor(Math.random() * categories.length)], resData.data)
        response = resData.data?.setup ? `${resData.data.setup}\n\n${resData.data.delivery}\n😂😊` : `${resData.data.joke}\n😂😊`
    } else if (story) {
        const resData = await stories[Math.floor(Math.random() * stories.length)]
        response = `${resData.title.toUpperCase()}\n\n${resData.story}\n\n_*moral: ${resData.moral}*_`
    } else if (isRobot) {
        response = robot[Math.floor(Math.random() * robot.length)]
    }else {
        for(let x = 0; x < trigger.length; x++) {
            for(let y = 0; y < reply.length; y++) {
                if(trigger[x][y] === text.toLowerCase()) {
                    response = reply[x]
                    response = response[Math.floor(Math.random() * response.length)]
                }
            }
        }
    }
    return response ? response : `${text} 😂🤣`
}

module.exports = bot
