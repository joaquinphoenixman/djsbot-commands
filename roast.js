const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs")
// if you do not have fs installed do : npm i fs 

exports.run = async (client, message, args) => {

    message.delete()
    // delete message after being used
    
    let user = message.mentions.users.first();
    // let the user mention a member first
    
    if (message.mentions.users === message.author.username) return message.reply('TEXT');
    // If a person mentions themselves it will return *TEXT*
    
    if (message.mentions.users.size < 1) return message.reply('TEXT')
    // If a person doesnt mention anyone, it will return *TEXT*
        
    var roast = [
    "were you born on the highway? That is where most accidents happen.",
    "Your birth certificate is a participation award",
    "Maybe you should stop giving so many blowjobs, and focus on getting a nose job.",
    "You're just like Monday. No one likes you.",
    "You’re kinda like Rapunzel except instead of letting down your hair, you let down everyone in your life.",
    "Zombies eat Brains so don't worry, you'll be safe",
    "Two things : 1. Where have you been all my life? 2. Can you please go back there?",
    "The trash gets picked up tomorrow, be ready",
    "I wish you were fluent in silence.",
    "i'd agree with you but then we'd both be wrong.",
    "Insulting you would be impossible, As i would just be describing you",
    "What doesn't kill you, dissapoints me.",
    "You're like a cloud, when you dissapear it's a beautiful day",
    "You're like a slinky, not really good for much, but you bring a smile to everyones face when you're pushed down the stairs",
    "You have two parts of brain, 'left' and 'right'. In the left side, there's nothing right. In the right side, there's nothing left.",
    "Don't you love nature, despite what it did to you?",
    "You are the stone in the shoes of humanity.",
    "If there was a single intelligent thought in your head it would have died from loneliness.",
    "I hope you have beautiful children and that they all get cancer.",
    "If I wanted to commit suicide I’d climb to your ego and jump to your IQ.",
    "Your face looks like it was set on fire and put out with chains.",
    "You failed worse then your dads condom.",
    "I’d love to stay and chat but I’d rather have type-2 diabetes.",
    "You’re so dense, light bends around you.",
    "Does your ass ever get jealous of the shit that comes out of your mouth?",
    "Such a shame your mother didn’t swallow you.",
    "I’m sorry your dad beat you instead of cancer.",
    "You have more dick in your personality than you do in your pants.",
    "Maybe if you eat all that makeup you will be beautiful on the inside.",
    "Mirrors can't talk. Luckily for you, they can't laugh either",
    "You’re my favorite person besides every other person I’ve ever met.",
    "The last time I saw a face like yours I fed it a banana.",
    "I'm not offended by what you say. I'm just glad that you're stringing words into sentences now.",
    "You are so ugly that when your mom dropped you off at school, she got a ticket for littering.",
    "You're so ugly your portraits hang themselves",
    "anyone willing to fuck you, is just too lazy to masturbate",
    "they say beauty is on the inside. You better hope that's true",
    "the only woman to tell you she loves you is your mom",
    "it is impossible to underestimate you",
    "in the land of the witless, you would be king",
    "you are proof that god has a sense of humor",
    "Only two things are infinite-- the universe and your stupidity, and I'm not so sure about the former.",
    "If your brains were dynamite, there wouldn't be enough to blow your hat off",
    "I never forget a face, but in your case, I'll make an exception",
    "Your mother should have thrown you away and kept the stork",
    "you look like autism and diarrhea had a transgender kid",
    "Learn to take a joke like you take dicks up your ass",
    "Your voice is so annoying, I'd rather listen to nails on a chalkboard, all of Justin bieber's songs, and even Donald Trump's speeches, before listening to a single word you can utter.",
    "The last time your dad played with you was when you were in his balls",
    "You are proof that most mistakes happen on the highway",
    "Your trans surgeon installed your pussy at the wrong angle.",
    "i was going to give you a nasty look... but I see you already have one.",
    "remember when I asked for your opinion? Me neither.",
    "everyone's entitled to act stupid once in awhile, but you really abuse the privilege.",
    "i'm trying to see things from your point of view, but I can't get my head that far up my ass.",
    "i haven't seen a fatty like you run that fast since twinkies went on sale for the first time.",
    "two wrongs don't make a right, take your parents as an example.",
    "just looking at you, I now understand why some animals eat their young offspring.",
    "does time actually fly when you're having sex, or was it just one minute after all?",
    "you should go do that tomorrow. Oh wait, nevermind, you've made enough mistakes already for today.",
    "this is why you dont have nice things",
    "my teacher told me to erase mistakes, i'm going to need a bigger eraser.",
    "you're IQ's lower than your dick size.",
    "are you always such an idiot, or do you just show off when I'm around?",
    "there are some remarkably dumb people in this world. Thanks for helping me understand that.",
    "i could eat a bowl of alphabet soup and shit out a smarter statement than whatever you just said.",
    "you're about as useful as a screen door on a submarine.",
    "you always bring me so much joy'as soon as you leave the room.",
    "stupidity's not a crime, so feel free to go.",
    "if laughter is the best medicine, your face must be curing the world.",
    "the only way you'll ever get laid is if you crawl up a chicken's ass and wait.",
    "it looks like your face caught fire and someone tried to put it out with a hammer.",
    "scientists say the universe is made up of neutrons, protons and electrons. They forgot to mention morons like you.",
    "why is it acceptable for you to be an idiot but not for me to point it out?",
    "you're so fat you could sell shade.",
    "your family tree must be a cactus because everyone on it is a prick.",
    "you'll never be the man your mother is.",
    "just because you have an ass doesn't mean you need to act like one.",
    "which sexual position produces the ugliest children? Ask your mother she knows.",
    "if I had a face like yours I'd sue my parents.",
    "the zoo called. They're wondering how you got out of your cage?",
    "hey, you have something on your chin... no, the 3rd one down.",
    "aww, it's so cute when you try to talk about things you don't understand.",
    "you are proof that evolution can go in reverse.",
    "brains aren't everything. In your case they're nothing.",
    "you're so ugly when you look in the mirror, your reflection looks away.",
    "i'm sorry I didn't get that - I don't speak idiot.",
    "it's better to let someone think you're stupid than opening your mouth and prove it.",
    "were you born this stupid or did you take lessons?",
    "you're such a beautiful, intelligent, wonderful person. Oh I'm sorry, I thought we were having a lying competition.",
    "don't you get tired of putting make up on two faces every morning?",
    "hey, I'm straighter than the pole your mom dances on.",
    "if ugliness were measured in bricks, you would be the Great Wall of China.",
    "i thought I said goodbye to you this morning when I flushed the toilet",
    "if you're trying to improve the world, you should start with yourself. Nothing needs more help than you do",
    "zombies are looking for brains. Don't worry. You're safe.",
    "spreading rumors? At least you found a hobby spreading something other than your legs.",
    "i would tell you to eat trash but that's cannibalism",
    "if you spoke your mind, you would be speechless",
    "i can fix my ugliness with plastic surgery but you on the other hand will stay stupid forever",
    "acting like a dick won't make yours any bigger",
    "if I wanted to hear from an asshole, I would have farted",
    "roses are red. Violets are blue. God made us beautiful. What the hell happened to you?",
    "you remind me of a penny, two faced and worthless!",
    "i've met some pricks in my time but you my friend, are the f*cking cactus",
    "i'd slap you, but that would be animal abuse",
    "if you're gonna be a smartass, first you have to be smart. Otherwise you're just an ass. ",
    "i know I�m talking like an idiot. I have to, other wise you wouldn't understand me.",
    "you're so dumb, your brain cell died of loneliness",
    "you shouldn't let your mind wander..its way to small to be out on its own",
    "i don't know what makes you so dumb, but its working",
    "you should put the diaper on your mouth, that's where the craps comin' out.",
    "you would be much more likable if it wasn't for that hole in your mouth that stupid stuff comes out of. ",
    "could you go away please, I'm allergic to douchebags",
    "if you had any intelligence to question I would have questioned it already.",
    "i wish I had a lower I.Q,  maybe then I could enjoy your company.",
    "i would answer you back but life is too short, just like your d*ck",
    "mirrors don't lie. Lucky for you, they can't laugh either.",
    "i was right there are no humans in this channel",
    "you have a face not even a mother could love....",
    "you know what I would find if I looked up idiot in the dictionary a picture of you?",
    "you make the guys on Jackass look like Einstein.....",
    "i would slap you but I don't want to make your face look any better",
    "sorry, I can't put small objects in my mouth or Ill choke",
    "you should wear a condom on your head, if you're going to be a dick you might as well dress like one",
    "have you been shopping lately? They're selling lives at the mall, you should get one"
]
// All the roasts available, feel free to copy paste and add some more

    const roasts = roast[Math.floor(Math.random() * roast.length)];
    // It will randomly pick one of the roasts above
    
    const embed = new Discord.RichEmbed()
        .setColor("GOLD")
        .setTitle(user.username + ", " + roasts)
        // user.username = the mentioned user, and + roasts = one of the random roasts picked from the math.random code
        
    message.channel.send({embed})
    // send the embed
  }
}
