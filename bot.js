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
    // Listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        // Get random number
        var random = getRndInteger(0,4);
        args = args.splice(1);
        switch(cmd) {
            // Send random angry reaction image
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
                  break;
                case 2:
                  bot.uploadFile({
                    to: channelID,
                    file: 'images/angry/Angry_Pikachu.PNG'
                  });
                  break;
                case 3:
                  bot.uploadFile({
                    to: channelID,
                    file: 'images/angry/angry_pepe.png'
                  });
                  break;
              }
            break;

            // Send random confused reaction image
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
                  break;
                case 2:
                  bot.uploadFile({
                    to: channelID,
                    file: 'images/confused/Questioning.PNG'
                  });
                  break;
                case 3:
                  bot.uploadFile({
                    to: channelID,
                    file: 'images/confused/question.PNG'
                  });
                  break;
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
                  break;
                case 2:
                  bot.uploadFile({
                    to: channelID,
                    file: 'images/excited/luigi_disco.jpg'
                  });
                  break;
                case 3:
                  bot.uploadFile({
                    to: channelID,
                    file: 'images/excited/surreal_spongebob.jpg'
                  });
                  break;
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
                  break;
                case 2:
                  bot.uploadFile({
                    to: channelID,
                    file: 'images/retaliation/religious.jpg'
                  });
                  break;
                case 3:
                  bot.uploadFile({
                    to: channelID,
                    file: 'images/retaliation/anti_thot.png'
                  });
                  break;
              }
            break;

            case 'sad':
              switch(random){
                case 0:
                  bot.uploadFile({
                    to: channelID,
                    file: 'images/sad/Captain.PNG'
                  });
                  break;
                case 1:
                  bot.uploadFile({
                    to: channelID,
                    file: 'images/sad/sad_pepe.png'
                  });
                  break;
                case 2:
                  bot.uploadFile({
                    to: channelID,
                    file: 'images/sad/sadcat.jpg'
                  });
                  break;
                case 3:
                  bot.uploadFile({
                    to: channelID,
                    file: 'images/sad/sad_shaggy.jpg'
                  });
                  break;
              }
            break;

            case 'scared':
              switch(random){
                case 0:
                  bot.uploadFile({
                    to: channelID,
                    file: 'images/scared/fear_cat.jpg'
                  });
                  break;
                case 1:
                  bot.uploadFile({
                    to: channelID,
                    file: 'images/scared/fear_hamster.jpg'
                  });
                  break;
                case 2:
                  bot.uploadFile({
                    to: channelID,
                    file: 'images/scared/patrick_scared.PNG'
                  });
                  break;
                case 3:
                  bot.uploadFile({
                    to: channelID,
                    file: 'images/scared/jerry.jpg'
                  });
                  break;
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
                  break;
                case 2:
                  bot.uploadFile({
                    to: channelID,
                    file: 'images/smug/smug.jpg'
                  });
                  break;
                case 3:
                  bot.uploadFile({
                    to: channelID,
                    file: 'images/smug/anime_smug.jpg'
                  });
                  break;
              }
            break;

            case 'help':
              bot.sendMessage({to: channelID, message: 'Type !angry, !confused, !excited, !retaliation, !sad, !scared, or !smug for a spicy reaction image'})
         }
     }
});

// Get random integer between minimum and maximum
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
