var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        var random = getRndInteger(0,2);
        args = args.splice(1);
        switch(cmd) {
            // send random angry reaction image
            case 'angry':
              switch(random){
                case 0:
                  bot.uploadFile({
                    to: channelID,
                    file: 'images/angry/negative_cat.jpg'
                  });
                  break;
                case 1:
                  bot.uploadFile({
                    to: channelID,
                    file: 'images/angry/Salt_Nut.png'
                  });
              }
            break;

            case 'angry':
              switch(random){
                case 0:
                  bot.uploadFile({
                    to: channelID,
                    file: 'images/angry/negative_cat.jpg'
                  });
                  break;
                case 1:
                  bot.uploadFile({
                    to: channelID,
                    file: 'images/angry/Salt_Nut.png'
                  });
              }
            break;

            case 'confused':
              switch(random){
                case 0:
                  bot.uploadFile({
                    to: channelID,
                    file: 'images/confused/Shrek.PNG'
                  });
                  break;
                case 1:
                  bot.uploadFile({
                    to: channelID,
                    file: 'images/confused/Tom.jpg'
                  });
              }
            break;

            case 'excited':
              switch(random){
                case 0:
                  bot.uploadFile({
                    to: channelID,
                    file: 'images/excited/Patrick_CloseUp.PNG'
                  });
                  break;
                case 1:
                  bot.uploadFile({
                    to: channelID,
                    file: 'images/excited/super_nut.jpg'
                  });
              }
            break;

            case 'retaliation':
              switch(random){
                case 0:
                  bot.uploadFile({
                    to: channelID,
                    file: 'images/retaliation/nae-nae.PNG'
                  });
                  break;
                case 1:
                  bot.uploadFile({
                    to: channelID,
                    file: 'images/retaliation/Peace.JPG'
                  });
              }
            break;

            case 'smug':
              switch(random){
                case 0:
                  bot.uploadFile({
                    to: channelID,
                    file: 'images/smug/Smart_Anime.jpg'
                  });
                  break;
                case 1:
                  bot.uploadFile({
                    to: channelID,
                    file: 'images/smug/Surreal_Pepe.PNG'
                  });
              }
            break;

            case 'help':
              bot.sendMessage({to: channelID, message: 'Type !angry, !confused, !excited, !retaliation, or !smug for a spicy reaction image'})
         }
     }
});

// Get random integer between minimum and maximum
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}