async function bot (trigger, reply, text) {
    console.log('Am Called')
    let response;
    for(let x = 0; x < trigger.length; x++) {
        for(let y = 0; y < reply.length; y++) {
            if(trigger[x][y] === text.toLowerCase()) {
                response = reply[x]
                response = response[Math.floor(Math.random() * response.length)]
            }
        }
    }
    return response ? response : `${text} 😂🤣`
}

module.exports = bot
