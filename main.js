const Discord = require("discord.js")
const client = new Discord.Client()
const id = `$`;

client.on('ready', () =>{ // ивент, когда бот запускается https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-ready
    client.generateInvite("ADMINISTRATOR").then(invite => console.log(`Ссылка на добавление ${invite}`))
    console.log(`Привет! ${client.user.tag} запустился!`) // информация в консоль про успешный запуск
})

client.on("message", msg => {
    if (msg.author.bot || !msg.content.startsWith(id)) return; 
    const args = msg.content.slice(id.length).split(/ +/); 
    const cmd = args.shift().toLowerCase();

    if (cmd == "ping") {
        msg.reply(`pong! \n ${Date.now() - msg.createdTimestamp}ms`)
    }
})

client.on("message", msg => {
    if (msg.author.bot || !msg.content.startsWith(id)) return; 
    const args = msg.content.slice(id.length).split(/ +/); 
    const cmd = args.shift().toLowerCase();

    if (cmd == "bomb") {
        msg.reply(`bomb is been planted`)
    }
})

client.on("message", msg => {
    if (msg.author.bot || !msg.content.startsWith(id)) return; 
    const args = msg.content.slice(id.length).split(/ +/); 
    const cmd = args.shift().toLowerCase();

    if (cmd == "ctwin") {
        msg.reply(`counter terrorist win!`)
    }
})

client.on("message", msg => {
    if (msg.author.bot || !msg.content.startsWith(id)) return; 
    const args = msg.content.slice(id.length).split(/ +/); 
    const cmd = args.shift().toLowerCase();

    if (cmd == "twin") {
        msg.reply(`terrorist win!`)
    }
})

client.on('message', message =>{ // ивент, когда приходит любое сообщение в чат https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-message
    if (message.author.bot) return; // если автор сообщения - бот, ничего не происходит 
    if (message.content == '$profile') { // если пользователь написал "!профиль" 
    let embed = new Discord.MessageEmbed() // создание ембед сообщения
    .setTitle(message.author.username) // в тайтле имя автора 
    let status = ''
    switch (message.author.presence.status) { // проверка статусов 
        case 'online':
            status = ':green_circle:online'; break; 
            case 'idle':
                status = ':orange_circle:idle'; break;
                case 'offline':
                    status = ':black_circle:offline'; break;
                    case 'dnd':
                        status = ':red_circle:do not disturb'; break;
    }
    embed.setDescription(`**your discord id: ${message.author.id}
    your status: ${status}
    account creation date: ${message.author.createdAt.toLocaleDateString()}
    server login date: ${message.member.joinedAt.toLocaleDateString()}
    **`) // описание ембеда
    .setColor('RANDOM') // рандомный цвет ембеда
    .setThumbnail(message.author.avatarURL()) // вставляем в ембед аватарку пользователя
    message.channel.send(embed) // отправляем сообщение в канал где была написана команда   
    }
})

client.login(`TOKEN`);
