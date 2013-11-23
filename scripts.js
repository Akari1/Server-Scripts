//Neon Scripts- v1.1.3//
config = new Object();
config.colorname = "blue";
config.botColor = "red";
config.BotName = "Rayquaza";
config.bot = "<span style='color: " + config.botColor + ";'>+" + config.botName + ":</span ";
config.highLighter = "magenta";

helpers = new Object ();
helpers.commandList = new Array(
		"commands",
		"auths",
		"something",
		"last_command_without_comma"
);

function function_name_first() {
		//stuff
}
//text here
function sendInfoMessageToAll(message, chan) {
		if (chan == undefined) {
				sys.sendHtmlAll("<span style='color: " + config.botColor + ";'><timestamp /></span>" + config.bot + message);
		} else {
				sys.sendHtmlAll("<span style='color: " + config.botColor + ";'><timestamp /></span>" + config.bot + message,chan);
		}
}
function function_name_last() {
			//more stuff
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
				//text
			afterLogIn: function (src)
			{
				sys.sendHtmlMessage(src, "<font color=greed><b>+Rayquaza:</b></font> <b>Hello <font color=" + sys.getColor(sys.id(name)) + "><b>"  + name.toCorrectCase() + "<b>! Welcome to the Server!", channel);
				sys.sendHtmlMessage(src, "<body style='background-color: qlineargradient(x1:0, y1:0, x2:0,y2:1 stop:0 #181820, stop:0.50 #6af5ff,stop:1 #181820);'><br><font color=green>test</font>", channel);
			},
				beforeChatMessageg : function(src, message, chan) {
						if ((message[0] == '/' || message[0] == '!' || message[0] == '$') && message.length > 1) {
						sys.stopEvent();
						var commands;
						var commandData;
						var pos = message.indexOf(' ');
						if (pos != -1) {
								command = message.substring(1, pos).toLowerCase();
								commandData = message.substr(pos+1);
								var Data = commandData.split(":");
								if (!isCommand(command)) {
										sendInfoToUser(src, "Das Kommando <span style='color: " + config.highlighter + ";'>/" + command + "</span> existiert nicht.", chan);
										return;
								}
						}
						else {
								command = message.substr(1).toLowerCase();
								if (!isCommand(command)) {
										sendInfoMessageToUser
						
				
