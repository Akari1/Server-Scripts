//Neon Scripts//
config = new Object();
config.colorname = "#c34721";
config.botColor = "#3daa68";
config.botName = "Rayquaza";
config.bot = "<span style='color: " + config.botColor + ";'>~" + config.botName + ":</span> ";
config.highlighter = "green";
helpers = new Object();
helpers.commandList = new Array(
        "commands",
        "rules",
        "usercommands",
		"auths",
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

				
				String.prototype.toCorrectCase = function() {
					if (isNaN(this) && sys.id(this) !== undefined) {
						return sys.name(sys.id(this));
					}
					else {
						return this;
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
        },
        //...
    afterLogIn: function (src)
    {
        sys.sendHtmlAll("<b><font color =green>±Rayquaza: </font></b> Hello " + "<span style='color: " + config.colorname + ";'> " + sys.name(src) + "</span>" + ", welcome to <b>Neon</b>Scripts test server!<br>");
        sys.sendHtmlMessage(src, "<b><font color=navy blue>Ooº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoO</font></b><br>");
		sys.sendHtmlMessage(src, "<img src='pokemon:384'align='left' height='84' width='84'> <b>•Type <font color=green><b>/commands</font><b> to view a list of commands.");
		sys.sendHtmlMessage(src, "&nbsp;<b>•Type <font color=green>/rules</font><b> to view the server guidelines/rules.</b>");
		sys.sendHtmlMessage(src, "&nbsp;<b>•To see a list of the current server staff type <font color=green>/auths</font>.");
		sys.sendHtmlMessage(src, " ");
		sys.sendHtmlMessage(src, " ");
		sys.sendHtmlMessage(src, " <br>");
		sys.sendHtmlMessage(src, "<b><font color=navy blue>Ooº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoO</font></b><br>");

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
                                sendInfoMessageToUser(src, "Das Kommando <span style='color: " + config.highlighter + ";'>/" + command + "</span> existiert nicht.", chan);
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
                                return;
                        }
                }
                var tar = sys.id(commandData);
        }
        
        var currentAuth = sys.auth(src);
                
                if (command == "commands") {
                        sys.sendHtmlMessage(src, "<br><b><font color =navy blue>Ooº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoO</font></b><br>", chan);
						sys.sendHtmlMessage(src, "<span style='color: " + config.highlighter + ";'>/usercommands</span> - show user commands!", chan);
						sys.sendHtmlMessage(src, "<span style='color: " + config.highlighter + ";'>/modcommands</span> - show moderator commands!", chan);
						sys.sendHtmlMessage(src, "<span style='color: " + config.highlighter + ";'>/admincommands</span> - show administrator commands!", chan);
						sys.sendHtmlMessage(src, "<span style='color: " + config.highlighter + ";'>/ownercommands</span> - show owner commands!<br>", chan);
						sys.sendHtmlMessage(src, "<b><font color=navy blue>Ooº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoO</font></b><br>", chan);
                }
                if (command == "rules") {
				        sys.sendHtmlMessage(src, "<br><b><font color =navy blue>Ooº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoO</font></b><br>", chan);
						sys.sendHtmlMessage(src, "<img src='icon:384'><font color=green size=6><b>Server Rules</b></font><img src='icon:384'>", chan);
						sys.sendHtmlMessage(src, " ", chan);
						sys.sendHtmlMessage(src, "<b>1)</b> No spamming or flooding the chat or through PM.", chan);
						sys.sendHtmlMessage(src, "<b>2)</b> Do not challenge spam, this will result in a ban from the server", chan);
						sys.sendHtmlMessage(src, "<b>3)</b> Do not mini-moderate. The server has moderators who you can report to if someone is breaking a rule.", chan);
                        sys.sendHtmlMessage(src, "<b>4)</b> No Advertising. Sending links to the forums, Smogon, or to YouTube is fine; giving links to your site is not permitted.", chan);
						sys.sendHtmlMessage(src, "<b>5)</b> No Pornography; there are people that are under-age to view such things so don't do it.", chan);
						sys.sendHtmlMessage(src, "<b>6)</b> Do not ask for Authority. It mostly ruins your chances of getting it in the future.<br>", chan);
						sys.sendHtmlMessage(src, "<br><b><font color =navy blue>Ooº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoO</font></b><br>", chan);

                }
                if (command == "usercommands") {
                        sys.sendHtmlMessage(src, "<span style='color: " + config.highlighter + ";'>/rules</span> - show a list of the server rules.", chan);
				
				}
				if (command == "auths") {
					var DoNotShowIfOffline = ["loseyourself", "oneballjay"];
					var filterByAuth = function(level) { return function(name) { return sys.dbAuth(name) == level; }; };
					var printOnlineOffline = function(name) {
						if (sys.id(name) === undefined) {
							if (DoNotShowIfOffline.indexOf(name) == -1) sys.sendMessage(src, name, chan);
						} else {
							sys.sendHtmlMessage(src, "<timestamp/><font color = " + sys.getColor(sys.id(name)) + "><b>" + name.toCorrectCase() + "</b></font>", chan);
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
						sys.sendMessage(src, "*** Owners ***", chan);
						authlist.filter(filterByAuth(3)).forEach(printOnlineOffline);
						sys.sendMessage(src, '', chan);
						sys.sendMessage(src, "*** Administrators ***", chan);
						authlist.filter(filterByAuth(2)).forEach(printOnlineOffline);
						sys.sendMessage(src, '', chan);
						sys.sendMessage(src, "*** Moderators ***", chan);
						authlist.filter(filterByAuth(1)).forEach(printOnlineOffline);
					}
					sys.sendMessage(src, '', chan);
					return;
				}
                if (command == "last_command_without_comma") {
                        //Stuff
                }
                
        },        
        
        afterNewMessage : function(message) {
                if (message == "Script Check: OK") {
                sendInfoMessageToAll("Script Check: OK");
                }
        } //no comma after the last event
//END OF SCRIPT        
});
