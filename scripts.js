//Neon Scripts//
config = new Object();
config.colorname = "#c34721";
config.botColor = "#3daa68";
config.botName = "Bot";
config.bot = "<span style='color: " + config.botColor + ";'>~" + config.botName + ":</span> ";
config.highlighter = "#676767";
helpers = new Object();
helpers.commandList = new Array(
        "commands",
        "auths",
        "something",
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
        sys.sendHtmlAll("<b><font color =blue>♦ Bot: </font><b>Hello " + "<span style='color: " + config.colorname + ";'> " + sys.name(src) + "</span>" + " welcome!");
        sys.sendHtmlMessage(src, "<b><font color =blue>Ooº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoO<br>Type <font color =green>/commands</font> to see the server's commands<br><font color =blue>Ooº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoO");
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
                        sys.sendHtmlMessage(src, "<font color =blue>Ooº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoO</font><br><span style='color: " + config.highlighter + ";'>/usercommands</span> - show user commands!<br><font color =blue>Ooº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoOOoº°°ºoO", chan);
                }
                if (command == "auths") {
                        //Stuff
                }
                if (command == "usercommands") {
                        sys.sendHtmlMessage(src, "<font color =blue>User commands: :J", chan);
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
