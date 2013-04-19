/**
 * Created with JetBrains WebStorm.
 * User: Genius
 * Date: 13-4-18
 * Time: 上午10:34
 * To change this template use File | Settings | File Templates.
 */

var roomarray = array();

module.exports = function(app) {
    return new Handler(app);
};

var Handler = function(app) {
    this.app = app;
};

var handler = Handler.prototype;

handler.test = function(msg, session, next) {
    console.log(msg.content);
    console.log("go to here");
};


handler.createroom = function(roomname, session, next) {
    roomarry.push(roomname);

    var channelService = this.app.get('channelService');
    var param = {
        route: 'onChat',
        msg: msg.content,
        from: username,
        target: msg.target
    };

    channel = channelService.createChannel(roomname);
};

handler.enterrrom = function (roomname, session, next) {
    var channelService = this.app.get('channelService');
};

handler.leaveroom = function (roomname, session, next) {
    var channelService = this.app.get('channelService');
};

handler.listrooms = function(session, next) {
    var channelService = this.app.get('channelService');
};
