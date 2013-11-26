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
	    "commands","rules","usercommands","auths","auth","authlist","attack","league",
	//Mod Commands
		"modcommands","kick","mute","unmute","tempban","info","iconcommands","tourcommands",
		"icon","reseticon",
	//Admin Commands
		"admincommands","ban","unban","smute","sunmute","superimp","topic","clearchat",
	//Owner Commands
        "last_command_without_comma"
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
        sys.sendHtmlMessage(src, "<font color=navy blue><timestamp /><b>»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»</font></b>");
		sys.sendHtmlMessage(src, "<font color=red><timestamp /><b>±WelcomeBot: </font></b> Hello and welcome to the server!");		
		sys.sendHtmlMessage(src, "<font color=orange><timestamp /><b>±PlayerBot: </font></b> Current amount of players online is <b>" + sys.numPlayers() + "</b>.");
		sys.sendHtmlMessage(src, "<font color=navy blue><timestamp /><b>»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»</font></b><br>");

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
						sys.sendHtmlMessage(src, "<center><font color =navy blue><timestamp /><b>»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»</font></b><br></center>", chan);
						sys.sendHtmlMessage(src, "<center><font color=red size=6><b><img src='icon:716'>Lea<font color=blue size=6><b>gue<img src='icon:717'></b></font>", chan);
						sys.sendHtmlMessage(src, "<center><img src='Themes/Classic/Types/type0.png'> - <font color=grey>Whitney</font>", chan);
						sys.sendHtmlMessage(src, "<center><img src='Themes/Classic/Types/type1.png'> - <font color=brickred>Mashal</font>", chan);
						sys.sendHtmlMessage(src, "<center><img src='Themes/Classic/Types/type2.png'> - <font color=skyblue>Skyla</font><br>", chan);
						sys.sendHtmlMessage(src, "<center><font color =navy blue><timestamp /><b>»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»</font></b></center>", chan);
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
						sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/usercommands</span></b> - show user commands!", chan);
						sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/modcommands</span></b> - show moderator commands!", chan);
						sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/admincommands</span></b> - show administrator commands!", chan);
						sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/ownercommands</span></b> - show owner commands!<br>", chan);
						sys.sendHtmlMessage(src, "<font color=navy blue><timestamp /><b>»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»</font></b><br>", chan);
                }//USER COMMANDS
                if (command == "usercommands") {
						sys.sendHtmlMessage(src, "<br><font color =navy blue><timestamp /><b>»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»</font></b><br>", chan);
                        sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/rules</span></b> - show a list of the server rules.", chan);
						sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/auths</span></b> - to see all server authority.", chan);
                        sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/league</span></b> - to see the Sky Pillar league!", chan);
                        sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/attack</span></b> - to use an attack on someone (fun)", chan);
                        sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/me</span></b> - talk to someone as third person.<br>", chan);
						sys.sendHtmlMessage(src, "<br><font color =navy blue><timestamp /><b>»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»</font></b><br>", chan);
				}
				if (command == "attack") {
	if (commandData != undefined) {
		var pokemon = sys.pokemon(sys.rand(0, 650));
		var move = sys.move(sys.rand(0, 559));
		if (sys.loggedIn(tar)) {
			sys.sendHtmlAll(sys.name(src) + "'s " + pokemon + " uses " + move + " and " + commandData + " loses " + sys.rand(0, 230) + " HP!", chan);
		} else {
			sys.sendAll(sys.name(src) + "'s " + pokemon + " uses " + move + " but there is no target...", chan);			
		}
	} else {
		sys.sendMessage(src, "You need to select a player.", chan);
	}
				}
				if (command == "league") {
						sys.sendHtmlMessage(src, "<center><font color =navy blue><timestamp /><b>»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»</font></b><br></center>", chan);
						sys.sendHtmlMessage(src, "<center><font color=red size=6><b><img src='icon:716'>Lea<font color=blue size=6><b>gue<img src='icon:717'></b></font>", chan);
						sys.sendHtmlMessage(src, "<center><img src='Themes/Classic/Types/type0.png'> - <font color=grey>Whitney</font>", chan);
						sys.sendHtmlMessage(src, "<center><img src='Themes/Classic/Types/type1.png'> - <font color=brickred>Mashal</font>", chan);
						sys.sendHtmlMessage(src, "<center><img src='Themes/Classic/Types/type2.png'> - <font color=skyblue>Skyla</font><br>", chan);
						sys.sendHtmlMessage(src, "<center><font color =navy blue><timestamp /><b>»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»</font></b></center>", chan);
				
				}
				if (command == "auths" || command == "authlist" || command == "auth") {
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
						sys.sendHtmlMessage(src, "<font color=purple><timestamp/>*** Owners ***</font>", chan);
						authlist.filter(filterByAuth(3)).forEach(printOnlineOffline);
						break;
					case "admins":
					case "administrators":
						sys.sendHtmlMessage(src, "<font color=orange><timestamp/>*** Administrators ***</font>", chan);
						authlist.filter(filterByAuth(2)).forEach(printOnlineOffline);
						break;
					case "mods":
					case "moderators":
						sys.sendHtmlMessage(src, "<font color=blue><timestamp/>*** Moderators ***</font>", chan);
						authlist.filter(filterByAuth(1)).forEach(printOnlineOffline);
						break;
					default:
						sys.sendHtmlMessage(src, "<br><font color =navy blue><timestamp /><b>»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»</b></font><br>", chan);
						sys.sendHtmlMessage(src, "<font color=purple size=5><b><img src='Themes/Classic/Client/oAvailable'> - Owners</b></font>", chan);
						authlist.filter(filterByAuth(3)).forEach(printOnlineOffline);
						sys.sendMessage(src, '', chan);
						sys.sendHtmlMessage(src, "<font color=orange size=5><b><img src='Themes/Classic/Client/aAvailable'> - Administrators</b></font>", chan);
						authlist.filter(filterByAuth(2)).forEach(printOnlineOffline);
						sys.sendMessage(src, '', chan);
						sys.sendHtmlMessage(src, "<font color=blue size=5><b><img src='Themes/Classic/Client/mAvailable'> - Moderators</b></font>", chan);
						authlist.filter(filterByAuth(1)).forEach(printOnlineOffline);
						sys.sendHtmlMessage(src, "<br><font color =navy blue><timestamp /><b>»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»</b></font>", chan);
					}
					sys.sendMessage(src, '', chan);
					return;
				} //MOD COMMANDS
				if (command == "modcommands"){
					if (sys.auth(src) <= 1) {
							sys.sendHtmlMessage(src, "<font color =green><timestamp /><b>±Rayquaza: </font></b>You do not have permission to use this command.", chan);
					}
					if (sys.auth(src) >= 1) {
						sys.sendHtmlMessage(src, "<br><font color =navy blue><timestamp /><b>»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»</font></b><br>", chan);
                        sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/kick</span></b> - to kick a player from the server.", chan);
						sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/mute</span></b> - to mute a user.", chan);
						sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/unmute</span></b> - to unmute a user.", chan);
						sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/tempban</span></b> - temperately ban a user on the server.", chan);
                        sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/info</span></b> - see the information of a specific user.", chan);
                        sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/iconcommands</span></b> - show icon commands.", chan);
                        sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/tourcommands</span></b> - to view the current tour commands.<br>", chan);
						sys.sendHtmlMessage(src, "<br><font color =navy blue><timestamp /><b>»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»</font></b><br>", chan);
											}
                                }
				if (command == "mute") {
	if (sys.auth(src) >= 1) { // this allows users to use this command as moderator and higher
		if (commandData != undefined) {
			var tar = sys.id(commandData);
			if (sys.auth(src) > sys.auth(tar)) { // you need this so you can only mute lower auth
				if (!SESSION.users(tar).muted) {
					SESSION.users(tar).muted = true;
					sys.sendHtmlAll("<font color =green><timestamp /><b>±Rayquaza: </font></b>" + commandData + " was muted by " + sys.name(src) + "!", chan);
					return; // you need to return here, otherwise the else tree is executed
				} else {
					sys.sendMessage(src, "<font color =green><timestamp /><b>±Rayquaza: </font></b>" + commandData + " is already muted.", chan);
				} 
			} else {
				sys.sendHtmlMessage(src, "<font color =green><timestamp /><b>±Rayquaza: </font></b>You can only mute lower auth.", chan);
			}
		} else {
			sys.sendHtmlMessage(src, "<font color =green><timestamp /><b>±Rayquaza: </font></b>You need to select a player.", chan);
		}
	} else {
		sys.sendHtmlMessage(src, "<font color =green><timestamp /><b>±Rayquaza: </font></b>You don't have permission to use this command.", chan);
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
				if (command == "admincommands") {
					if (sys.auth(src) <= 2) {
							sys.sendHtmlMessage(src, "<font color =green><timestamp /><b>±Rayquaza: </font></b>You do not have permission to use this command.", chan);
					}
					if (sys.auth(src) >= 2) {
						sys.sendHtmlMessage(src, "<br><font color =navy blue><timestamp /><b>»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»</font></b><br>", chan);
                        sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/ban</span></b> - to ban a user permanently from the server.", chan);
                        sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/unban</span></b> - to unban a user from the server.", chan);						
						sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/superimp</span></b> - change your name to disguise yourself.", chan);
                        sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/topic</span></b> - to change or add to the current server topic.", chan);
                        sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/changepotw</span></b> - to change the pokemon of the week.", chan);
                        sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/smute</span></b> - to silently mute a user.", chan);
						sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/clearchat</span></b> - to clear the entire chat; cannot undo.", chan);
                        sys.sendHtmlMessage(src, "<b><span style='color: " + config.highlighter + ";'>/sunmute</span></b> - to silently unmute a user.", chan);
						sys.sendHtmlMessage(src, "<br><font color =navy blue><timestamp /><b>»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»</font></b><br>", chan);
											}
				}			
				if (command == "last_command_without_comma") {
                        
                }          
        },        
        
        afterNewMessage : function(message) {
                if (message == "Script Check: OK") {
                sendInfoMessageToAll("Script Check: OK");
                }
        } //no comma after the last event
//END OF SCRIPT        
});
