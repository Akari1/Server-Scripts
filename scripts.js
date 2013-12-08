//Neon Scripts//
config = new Object();
config.colorname = "#c34721";
config.botColor = "green";
config.botName = "Rayquaza";
config.bot = "<span style='color: " + config.botColor + ";'>±" + config.botName + ":</span> ";
config.highlighter = "green";
helpers = new Object();
helpers.commandList = new Array(
    //User Commands
	    "commands","rules","usercommands","auth","auths","authlist","attack","league","me",
	//Mod Commands
		"modcommands","kick","mute","unmute","tempban", "tempunban", "info","iconcommands","tourcommands",
		"icon","reseticon", "announce",
	//Admin Commands
		"admincommands","ban","unban","smute","sunmute","superimp","topic","clearchat","changepotw",
	//Owner Commands
        "ownercommands","authcommands","user","mod","admin","owner","invisible","hiddenauth","eval","changeannouncement",
		"clearpass", "ti",
	//Host Commands
		"hostcommands", "shades"
);

function function_name_first() {
        //Stuff
}
//...
function sendInfoMessageToAll(message, chan) {
        if (chan == undefined) {
                sys.sendHtmlAll("<span style='color: " + config.botColor + ";'><timestamp /></span>" + config.bot + message);
        } else {
                sys.sendHtmlAll("<span style='color: " + config.botColor + ";'><timestamp /></span>" + config.bot + message, chan);
        }
}
function function_name_last() {
        //more Stuff
}
 ({
        serverStartUp : function() {
                this.init();
        },
        init : function() {
                cmp = function(a, b) {
                        return a.toLowerCase() == b.toLowerCase();
                }
                isCommand = function (command) {
                        var commandList = helpers.commandList;
        
                        var found = false;
                        for (x in commandList) {
                                if(cmp(command, commandList[x])) {
                                        found = true;
                                        break;
                                }
                        }
                        return found;
				}
        },
        //...
    afterLogIn: function (src)
    {
	{
        sys.sendHtmlMessage(src, "<font color=navy blue><timestamp /><b>»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»</font></b>");
		var topicfile = sys.read("topicfile.txt");		
		sys.sendHtmlMessage(src, "<font color=red><timestamp /><b>±WelcomeBot: </font></b>Hello <font color=" + sys.getColor(src) + "><b>" + sys.name(src) + "</font></b>!" + topicfile );
		sys.sendHtmlMessage(src, "<font color=orange><timestamp /><b>±PlayerBot: </font></b> Current amount of players online is: <b>" + sys.numPlayers() + "</b>.");
		sys.sendHtmlMessage(src, "<font color=green><timestamp /><b>±InfoBot: </font></b> Your current IP is: <b>" + sys.ip(src) + "</b>.");
		var topicfile = sys.read("potwfile.txt");		
		sys.sendHtmlMessage(src, "<font color=blue><timestamp /><b>±PokeBot: </font></b> The current Pokémon of the Week is: " + topicfile );
		sys.sendHtmlMessage(src, "<font color=navy blue><timestamp /><b>»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»</font></b><br>");
	}
	function POChannel() {
	this.permanent = false;
}
SESSION.registerChannelFactory(POChannel);
    },
	
		beforeChatMessage : function(src, message, chan) {
                if ((message[0] == '/' || message[0] == '!' || message[0] == '$') && message.length > 1) { 
                sys.stopEvent();
                var command;
                var commandData;
                var pos = message.indexOf(' ');
                if (pos != -1) {
                        command = message.substring(1, pos).toLowerCase();
                        commandData = message.substr(pos+1);
                        var data = commandData.split(":");
                        if (!isCommand(command)) {
                                sendInfoMessageToUser(src, "You may not use the <span style='color: " + config.highlighter + ";'>/" + command + "</span> command.", chan);
                                return;
                        }
                }
                else {
                        command = message.substr(1).toLowerCase();
                        if (!isCommand(command)) {
                                sendInfoMessageToUser(src, "That <span style='color: " + config.highlighter + ";'>/" + command + "</span> command does not exist.", chan);
            function sendInfoMessageToUser(src, message, chan) {
        if (chan == undefined) {
                sys.sendHtmlMessage(src, "<span style='color: " + config.botColor + ";'><timestamp /></span>" + config.bot + message);
        } else {
                sys.sendHtmlMessage(src, "<span style='color: " + config.botColor + ";'><timestamp /></span>" + config.bot + message, chan);
        }
}
			function POUser() {
				this.muted = false;
			}
			SESSION.registerUserFactory(POUser);
                                return;
                        }
                }
                var tar = sys.id(commandData);
        }
        
        var currentAuth = sys.auth(src);

	
	if (command == "league") {
		sys.sendHtmlMessage(src, "<font color =navy blue><timestamp /><b>»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»</font></b><br></center>", chan);
		sys.sendHtmlMessage(src, "<font color=red size=6><b><img src='icon:717'><u>Gym Leaders</u></b></font>", chan);
		sys.sendHtmlMessage(src, "<img src='Themes/Classic/Types/type0.png'> - <b>Open</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src='Themes/Classic/Types/type9.png'> - <b>Open</b>", chan);
		sys.sendHtmlMessage(src, "<img src='Themes/Classic/Types/type1.png'> - <b>Open</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src='Themes/Classic/Types/type10.png'> - <b>Open</b>", chan);
		sys.sendHtmlMessage(src, "<img src='Themes/Classic/Types/type2.png'> - <b>Open</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src='Themes/Classic/Types/type11.png'> - <b>Open</b>", chan);
		sys.sendHtmlMessage(src, "<img src='Themes/Classic/Types/type3.png'> - <b>Open</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src='Themes/Classic/Types/type12.png'> - <b>Open</b>", chan);		sys.sendHtmlMessage(src, "<img src='Themes/Classic/Types/type4.png'> - <b>Open</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src='Themes/Classic/Types/type13.png'> - <b>Open</b>", chan);
		sys.sendHtmlMessage(src, "<img src='Themes/Classic/Types/type5.png'> - <b>Open</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src='Themes/Classic/Types/type14.png'> - <b>Open</b>", chan);
		sys.sendHtmlMessage(src, "<img src='Themes/Classic/Types/type6.png'> - <b>Open</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src='Themes/Classic/Types/type15.png'> - <b>Open</b>", chan);
		sys.sendHtmlMessage(src, "<img src='Themes/Classic/Types/type7.png'> - <b>Open</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src='Themes/Classic/Types/type16.png'> - <b>Open</b>", chan);
		sys.sendHtmlMessage(src, "<img src='Themes/Classic/Types/type8.png'> - <b>Open</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src='Themes/Classic/Types/type17.png'> - <b>Open</b>", chan);		sys.sendHtmlMessage(src, "", chan);
		sys.sendHtmlMessage(src, "<font color=blue size=6><b><img src='icon:716'><u>Elite Four</u></b></font>", chan);
		sys.sendHtmlMessage(src, "<img src='Themes/Classic/Types/type18.png'> - <b>Open</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src='Themes/Classic/Types/type18.png'> - <b>Open</b>", chan);
		sys.sendHtmlMessage(src, "<img src='Themes/Classic/Types/type18.png'> - <b>Open</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src='Themes/Classic/Types/type18.png'> - <b>Open</b>", chan);						
		sys.sendHtmlMessage(src, "", chan);
		sys.sendHtmlMessage(src, "<font color=lawngreen size=6><b><img src='icon:718'><u>Champion</u></b></font>", chan);
		sys.sendHtmlMessage(src, "<img src='Themes/Classic/Types/type18.png'> - <b>Open</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;", chan);						
		sys.sendHtmlMessage(src, "<font color =navy blue><timestamp /><b>»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»</font></b></center>", chan);
	}
	if (command == "rules") {
	    sys.sendHtmlMessage(src, "<br><font color =navy blue><timestamp /><b>»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»</font></b><br>", chan);
		sys.sendHtmlMessage(src, "<img src='icon:384'><font color=green size=6><b>Server Rules</b></font><img src='icon:384'>", chan);
		sys.sendHtmlMessage(src, " ", chan);
		sys.sendHtmlMessage(src, "<b>1)</b> No spamming or flooding the chat or through PM.", chan);
		sys.sendHtmlMessage(src, "<b>2)</b> Do not challenge spam, this will result in a ban from the server", chan);
		sys.sendHtmlMessage(src, "<b>3)</b> Do not mini-moderate. The server has moderators who you can report to if someone is breaking a rule.", chan);
        sys.sendHtmlMessage(src, "<b>4)</b> No Advertising. Sending links to the forums, Smogon, or to YouTube is fine; giving links to your site is not permitted.", chan);
		sys.sendHtmlMessage(src, "<b>5)</b> No Pornography; there are people that are under-age to view such things so don't do it.", chan);
		sys.sendHtmlMessage(src, "<b>6)</b> Do not ask for Authority. It mostly ruins your chances of getting it in the future.<br>", chan);
		sys.sendHtmlMessage(src, "<br><font color =navy blue><timestamp /><b>»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»</font></b><br>", chan);
	}
    if (command == "commands") {
		sys.sendHtmlMessage(src, "<br><font color =navy blue><timestamp /><b>»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»</font></b><br>", chan);
		sys.sendHtmlMessage(src, "<font size=5><b>Commands:</b></font><br>", chan);
		sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/usercommands</span></b> - show user commands!", chan);
		sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/modcommands</span></b> - show moderator commands!", chan);
		sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/admincommands</span></b> - show administrator commands!", chan);
		sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/ownercommands</span></b> - show owner commands!<br>", chan);
		sys.sendHtmlMessage(src, "<font color=navy blue><timestamp /><b>»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»</font></b><br>", chan);
	}
    if (command == "usercommands") {
		sys.sendHtmlMessage(src, "<br><font color =navy blue><timestamp /><b>»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»</font></b><br>", chan);
		sys.sendHtmlMessage(src, "<font size=5><b>User Commands:</b></font><br>", chan);		
		sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/rules</span></b> - show a list of the server rules.", chan);
		sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/auths</span></b> - to see all server authority.", chan);
		sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/league</span></b> - to see the Sky Pillar league!", chan);
		sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/attack</span></b> - to use an attack on someone (fun)", chan);
		sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/me</span></b> - talk to someone as third person.<br>", chan);
		sys.sendHtmlMessage(src, "<br><font color =navy blue><timestamp /><b>»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»</font></b><br>", chan);
	}
	 if(command == "shades"){
        if(sys.name(src).toLowerCase() !== "neonlights"){
            return;
        }
        sys.changeName(src, "(¬¦_¦)");
        return;
    }
	if (command == "attack") {
	if (commandData != undefined) {
		var pokemon = sys.pokemon(sys.rand(0, 650));
		var move = sys.move(sys.rand(0, 559));
			if (sys.loggedIn(tar)) {
				sys.sendHtmlAll(src, "<font color =green><timestamp /><b>±Rayquaza: </font></b><b><font color=" + sys.getColor(sys.id(name)) + ">" + sys.name(src) + "'s</b> " + pokemon + " uses " + move + " on " + commandData + "!", chan);
		} else {
				sys.sendHtmlMessage(src, "<font color =green><timestamp /><b>±Rayquaza: </font></b>Please select a target!", chan);			
	}
		} else {
				sys.sendHtmlMessage(src, "<font color =green><timestamp /><b>±Rayquaza: </font></b>You need to select a player.", chan);
		}
	}
	if (command == "me") {
		sys.sendHtmlAll("<span style='color:"+ sys.getColor(src) +"'><timestamp/><b> ***<i>"+ sys.name(src) +"</b> <i>"+commandData+"</i></span>");
	}
	 if (command == "auth" || command == "auths" || command == "authlist") {
        var DoNotShowIfOffline = ["loseyourself", "oneballjay"];
        var filterByAuth = function(level) { return function(name) { return sys.dbAuth(name) == level; }; };
        var printOnlineOffline = function(name) {
            if (sys.id(name) === undefined) {
                if (DoNotShowIfOffline.indexOf(name) == -1) sys.sendMessage(src, name, chan);
            } else {
                sys.sendHtmlMessage(src, "<font color = " + sys.getColor(sys.id(name)) + "><timestamp/><b>" + name + "</b></font>", chan);
            }
        };
        var authlist = sys.dbAuths().sort();
        sys.sendMessage(src, "", chan);
        switch (commandData) {
        case "owners":
            sys.sendMessage(src, "*** Owners ***", chan);
            authlist.filter(filterByAuth(3)).forEach(printOnlineOffline);
            break;
        case "admins":
        case "administrators":
            sys.sendMessage(src, "*** Administrators ***", chan);
            authlist.filter(filterByAuth(2)).forEach(printOnlineOffline);
            break;
        case "mods":
        case "moderators":
            sys.sendMessage(src, "*** Moderators ***", chan);
            authlist.filter(filterByAuth(1)).forEach(printOnlineOffline);
            break;
        default:
			sys.sendHtmlMessage(src, "<font color =navy blue><timestamp /><b>»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»</font></b><br>", chan);
            sys.sendHtmlMessage(src, "<font color=purple>*** Owners ***</font>", chan);
            authlist.filter(filterByAuth(3)).forEach(printOnlineOffline);
            sys.sendHtmlMessage(src, '', chan);
            sys.sendHtmlMessage(src, "<font color=orange>*** Administrators ***</font>", chan);
            authlist.filter(filterByAuth(2)).forEach(printOnlineOffline);
            sys.sendHtmlMessage(src, '', chan);
            sys.sendHtmlMessage(src, "<font color=blue>*** Moderators ***</font>", chan);
            authlist.filter(filterByAuth(1)).forEach(printOnlineOffline);
			sys.sendHtmlMessage(src, "<br><font color =navy blue><timestamp /><b>»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»</font></b>", chan);
        }
        sys.sendMessage(src, '', chan);
        return;
    }
	if (command == "modcommands"){
	if (sys.auth(src) <= 0) {
		sys.sendHtmlMessage(src, "<font color =green><timestamp /><b>±Rayquaza: </font></b>You do not have permission to use this command.", chan);
		}
	if (sys.auth(src) >= 1) {
		sys.sendHtmlMessage(src, "<br><font color =navy blue><timestamp /><b>»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»</font></b><br>", chan);
		sys.sendHtmlMessage(src, "<font size=5 color=blue><b>Mod Commands:</b></font><br>", chan);        
		sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/kick</span></b> - to kick a player from the server.", chan);
		sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/mute</span></b> - to mute a user.", chan);
		sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/unmute</span></b> - to unmute a user.", chan);
		sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/tempban</span></b> - temperately ban a user on the server.", chan);
		sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/info</span></b> - see the information of a specific user.", chan);
		sys.sendHtmlMessage(src, "<b><span style='color : " + config.highlighter + ";'>/announce</span></b> - to announce something to the whole server.", chan);
		sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/iconcommands</span></b> - show icon commands.", chan);
		sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/tourcommands</span></b> - to view the current tour commands.<br>", chan);
		sys.sendHtmlMessage(src, "<br><font color =navy blue><timestamp /><b>»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»</font></b><br>", chan);
		}
	}
	if (command == "kick" || command == "k") {
    if (sys.auth(src) >= 1) {
	if (tar === undefined) {
		sys.sendHtmlMessage(src, "<font color =green><timestamp /><b>±Rayquaza: </font></b>No such user", chan);
		return;
		}
		sys.sendHtmlAll("<font color =green><timestamp /><b>±Rayquaza: </font></b>" + commandData + " was mysteriously kicked by " + sys.name(src) + "!");
    sys.kick(tar);
    var authname = sys.name(src).toLowerCase();
      authStats[authname] =  authStats[authname] || {};
      authStats[authname].latestKick = [commandData, parseInt(sys.time(), 10)];
    return;
		}
	}
	//Mute
	//Unmute
	if (command == "announce") {
	if (sys.auth(src) >= 1) {
		sys.sendHtmlAll(commandData);
		}
	}
	if (command == "admincommands") {
	if (sys.auth(src) <= 2) {
		sys.sendHtmlMessage(src, "<font color =green><timestamp /><b>±Rayquaza: </font></b>You do not have permission to use this command.", chan);
		}
	if (sys.auth(src) >= 2) {
		sys.sendHtmlMessage(src, "<br><font color =navy blue><timestamp /><b>»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»</font></b><br>", chan);
		sys.sendHtmlMessage(src, "<font size=5 color=orange><b>Admin Commands:</b></font><br>", chan);        		
		sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/ban</span></b> - to ban a user permanently from the server.", chan);
		sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/unban</span></b> - to unban a user from the server.", chan);						
		sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/superimp</span></b> - change your name to disguise yourself.", chan);
		sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/topic</span></b> - to change or add to the current server topic.", chan);
		sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/changepotw</span></b> - to change the pokemon of the week.", chan);		sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/clearchat</span></b> - to clear the entire chat; cannot undo.", chan);
		sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/smute</span></b> - to silently mute a user.", chan);		
		sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/sunmute</span></b> - to silently unmute a user.", chan);
		sys.sendHtmlMessage(src, "<br><font color =navy blue><timestamp /><b>»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»</font></b><br>", chan);
		}
	}
	if (command == "topic"){
					if (sys.auth(src) >= 1){
					sys.write("topicfile.txt", commandData);
					sys.sendHtmlMessage(src, "<font color =green><timestamp /><b>±Rayquaza: </font></b> You have set the topic to: "+commandData+"");
					return;
					}
					else {
					if (sys.auth(src) < 1){
					sys.sendHtmlMessage(src, "<font color =green><timestamp /><b>±Rayquaza: </font></b>You do not have permission to use this command.", chan);
					return;
					}
					}
				}
				if (command == "changepotw"){
					if (sys.auth(src) >= 1){
					sys.write("potwfile.txt", commandData);
					sys.sendHtmlMessage(src, "<font color =green><timestamp /><b>±Rayquaza: </font></b> You have set the potw to: "+commandData+"");
					return;
					}
					else {
					if (sys.auth(src) < 1){
					sys.sendHtmlMessage(src, "<font color =green><timestamp /><b>±Rayquaza: </font></b>You do not have permission to use this command.", chan);
					return;
					}
					}
				}
				if (command == "clearchat") {
				if (sys.auth(src) <= 2) {
							sys.sendHtmlMessage(src, "<font color =green><timestamp /><b>±Rayquaza: </font></b>You do not have permission to use this command.", chan);
				}
				if (sys.auth(src) >= 2) {
				var blankMsg = "";
				for (x = 0; x < 9999; x++) { // you can go further than '9999', may want to experiment
					blankMsg += "<br/>";
				}
				sys.sendHtmlAll(blankMsg);
				sys.sendHtmlAll("<font color =green><timestamp /><b>±Rayquaza: </font></b>The chat was cleared by " + sys.name(src) + "!"); // clears chat
				sys.clearChat(); // clears server window
									}
							}
				if (command == "ban") {
				if (sys.auth(src) < 2) {
		sys.sendHtmlMessage(src, "<font color =green><timestamp /><b>±Rayquaza: </font></b>You cannot use this command!");
		return;
				}
				if (sys.auth(src) >= 2) {
				if(sys.dbIp(commandData) == undefined) {
		sys.sendHtmlMessage(src, "<font color =green><timestamp /><b>±Rayquaza: </font></b>Sorry, but no player exist by this username.");
		return;
				}
				if (sys.maxAuth(sys.ip(tar))>=sys.auth(src)) {
		sys.sendHtmlMessage(src, "<font color =green><timestamp /><b>±Rayquaza: </font></b>You cannot use this command on higher authority.");
		return;
				}
					ip = sys.dbIp(commandData) 
						alias=sys.aliases(ip)
							y=0
					for(var x in alias) {
						z = sys.dbAuth(alias[x])
							if (z > y) {
							y=z
							}
					}
				if(y>=sys.auth(src)) {
		sys.sendHtmlMessage(src, "<font color =green><timestamp /><b>±Rayquaza: </font></b>You cannot ban users of higher authority/");
		return;
				}
					banlist=sys.banList()
					for(a in banlist) {
					if(sys.dbIp(commandData) == sys.dbIp(banlist[a])) {
		sys.sendHtmlMessage(src, "<font color =green><timestamp /><b>±Rayquaza: </font></b>He/she's already banned!");
		return;
					}
					}
		sys.sendHtmlAll('<b><font color=red>' + commandData + ' was banned by ' + sys.name(src) + '!</font></b>');
					if(tar != undefined) {
					sys.kick(tar)
					}
		sys.ban(commandData)
			sys.appendToFile('bans.txt', sys.name(src) + ' banned ' + commandData + "\n")
		return;
		} 
		}
				if (command == "unban") {
				if (sys.auth(src) < 2) {
		sys.sendHtmlMessage(src, "<font color =green><timestamp /><b>±Rayquaza: </font></b>You cannot use this command!");
		return;
				}
				if (sys.auth(src) >= 2) {
				if(sys.dbIp(commandData) == undefined) {
		sys.sendHtmlMessage(src, "<font color =green><timestamp /><b>±Rayquaza: </font></b>No player exists by this name!");
		return;
				}
		banlist=sys.banList()
			for(a in banlist) {
			if(sys.dbIp(commandData) == sys.dbIp(banlist[a])) {
				sys.unban(commandData)
		sys.sendHtmlMessage(src, "<font color =green><timestamp /><b>±Rayquaza: </font></b>You unbanned " + commandData + "!");
			if (sys.auth(src) >= 1) {
		sys.sendHtmlAll('<font color =green><timestamp /><b>±Rayquaza: </font></b>' + commandData + ' was unbanned by ' + sys.name(src) + '!');
			sys.appendToFile('bans.txt', sys.name(src) + ' unbanned ' + commandData + "\n")
		return;
			}
			}
			} 
				}
		sys.sendHtmlAll(src, "<font color =green><timestamp /><b>±Rayquaza: </font></b>He/she's not banned!");
		return;
				}
				if (command == "ownercommands") {
					if (sys.auth(src) <= 3) {
							sys.sendHtmlMessage(src, "<font color =green><timestamp /><b>±Rayquaza: </font></b>You do not have permission to use this command.", chan);
					}
					if (sys.auth(src) >= 3) {
						sys.sendHtmlMessage(src, "<br><font color =navy blue><timestamp /><b>»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»</font></b><br>", chan);
                        sys.sendHtmlMessage(src, "<font size=5 color=purple><b>Owner Commands:</b></font><br>", chan);         
						sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/changeannouncement</span></b> - to change the current server banner.", chan);
                        sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/authcommands</span></b> - to view a list of auth commands.", chan);						
						sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/eval</span></b> - to preform an eval based code.", chan);
                        sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/clearpass</span></b> - to clear the password of a user.", chan);
                        sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/rangeban</span></b> - to ban a whole block of IPs.", chan);
                        sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/ti</span></b> - to get a users trainer info.", chan);
						sys.sendHtmlMessage(src, "<br><font color =navy blue><timestamp /><b>»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»</font></b><br>", chan);
											}
				}
								if (command == "authcommands") {
					if (sys.auth(src) >= 3) {
						sys.sendHtmlMessage(src, "<br><font color =navy blue><timestamp /><b>»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»</font></b><br>", chan);
                        sys.sendHtmlMessage(src, "<font size=5><b>Auth Commands:</b></font><br>", chan);        
						sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/user (name)</span></b> - to change the auth of someone to user.", chan);
                        sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/mod (name)</span></b> - to change the auth of someone to moderator.", chan);						
						sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/admin (name)</span></b> - to change the auth of someone to administrator.", chan);
                        sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/owner (name)</span></b> - to change the auth of someone to owner.", chan);
                        sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/invisible (name)</span></b> - to change the auth of someone to invisible owner.", chan);
						sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/hiddenauth</span></b> - to view a list of hidden staff members.", chan);
						sys.sendHtmlMessage(src, "<br><font color =navy blue><timestamp /><b>»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»</font></b><br>", chan);
											}
											if (sys.auth(src) <= 0) {
							sys.sendHtmlMessage(src, "<font color =green><timestamp /><b>±Rayquaza: </font></b>You do not have permission to use this command.", chan);
					}
				}
				if (command == "changeannouncement") {
				if (sys.auth(src) >= 3){
				sys.changeAnnouncement(commandData);
				}
				}
				 if (sys.ip(src) == sys.dbIp("server") || sys.name(src).toLowerCase() == "neonlights" || sys.ip(src) == sys.dbIp("crystal moogle") || sys.name(src).toLowerCase() == "ethan") {
        if (command == "eval") {
            eval(commandData);
            return;
        }
		}
		if (command == "hiddenauth") {
		sys.sendHtmlMessage(src, "<br><font color =navy blue><timestamp /><b>»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»</b></font><br>", chan);
		sys.sendHtmlMessage(src, "<font color=black size=5><b><img src='Themes/Classic/Client/uAvailable'> - Hidden Owners</b></font>", chan);
        sys.dbAuths().sort().filter(function(name) { return sys.dbAuth(name) > 3; }).forEach(function(name) {
            sys.sendMessage(src, name + " " + sys.dbAuth(name), chan);
        });
        sys.sendMessage(src, "",chan);
		sys.sendHtmlMessage(src, "<br><font color =navy blue><timestamp /><b>»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»</b></font><br>", chan);

        return;
    }
				tar = sys.id(commandData);
				if (command == "user"){
				if (sys.auth(src) >= 3) {
				if(sys.dbIp(commandData) == undefined){
				sys.sendHtmlMessage(src, "<font color=green><timestamp /><b>±Rayquaza:</b></font> Your target does not exist.", chan);
				return;
					}
				else {
				sys.changeAuth(tar, 0)
				sys.sendHtmlAll("<font color=green><timestamp /><b>±Rayquaza:</b></font> <b>"+sys.name(tar)+"</font></b> was made a <font color=blakc><b>user</b></font>.");
				return;
							}
						}
				}
				if (command == "mod"){
				if (sys.auth(src) >= 3) {
				if(sys.dbIp(commandData) == undefined){
				sys.sendHtmlMessage(src, "<font color=green><timestamp /><b>±Rayquaza:</b></font> Your target does not exist.", chan);
				return;
					}
				if (!sys.dbRegistered(commandData)){
				sys.sendHtmlMessage(src, "<font color=green><timestamp /><b>±Rayquaza:</b></font> Your target is unregistered.", chan);
				return;
					}
				else {
				sys.changeAuth(tar, 1)
				sys.sendHtmlAll("<font color=green><timestamp /><b>±Rayquaza:</b></font> <b>"+sys.name(tar)+"</b> was made a server <font color=blue><b>moderator</b></font>.");
				return;
							}
						}
					}
				if (command == "admin"){
				if (sys.auth(src) >= 3) {
				if(sys.dbIp(commandData) == undefined){
				sys.sendHtmlMessage(src, "<font color=green><timestamp /><b>±Rayquaza:</b></font> Your target does not exist.", chan);
				return;
					}
				if (!sys.dbRegistered(commandData)){
				sys.sendHtmlMessage(src, "<font color=green><timestamp /><b>±Rayquaza:</b></font> Your target is unregistered.", chan);
				return;
					}
				else {
				sys.changeAuth(tar, 2)
				sys.sendHtmlAll("<font color=green><timestamp /><b>±Rayquaza:</b></font> <b>"+sys.name(tar)+"</b> was made a server <font color=orange><b>administrator</b></font>.");
				return;
							}
						}
					}
				if (command == "owner"){
				if (sys.auth(src) >= 3) {
				if(sys.dbIp(commandData) == undefined){
				sys.sendHtmlMessage(src, "<font color=green><timestamp /><b>±Rayquaza:</b></font> Your target does not exist.", chan);
				return;
					}
				if (!sys.dbRegistered(commandData)){
				sys.sendHtmlMessage(src, "<font color=green><timestamp /><b>±Rayquaza:</b></font> Your target is unregistered.", chan);
				return;
				}
				else {
				sys.changeAuth(tar, 3)
				sys.sendHtmlAll("<font color=green><timestamp /><b>±Rayquaza:</b></font> <b>"+sys.name(tar)+"</b> was made a server <font color=purple><b>owner</b></font>.");
				return;
					}
					}
				}
				if (command == "invisible"){
				if (sys.auth(src) >= 3) {
				if(sys.dbIp(commandData) == undefined){
				sys.sendHtmlMessage(src, "<font color=green><timestamp /><b>±Rayquaza:</b></font> Your target does not exist.", chan);
				return;
					}
				if (!sys.dbRegistered(commandData)){
				sys.sendHtmlMessage(src, "<font color=green><timestamp /><b>±Rayquaza:</b></font> Your target is unregistered.", chan);
				return;
				}
				else {
				sys.changeAuth(tar, 21)
				return;
					}
					}
				}
				if (command == "last_command_without_comma") {
                        
                }          
        },        
 
		afterNewMessage : function(message) {
                if (message == "Script Check: OK") {
                sendInfoMessageToAll("Scripts have been updated, the server may need to restart for the effects to take place.");
                }
        } //no comma after the last event
//END OF SCRIPT        
});
