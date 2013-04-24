/**
 * Author: Genius
 * Date:   13-4-19
 * Time:   下午4:21
 */

var ChannelUtil = module.exports;

var GLOBAL_CHANNEL_NAME = 'pocker';
var ROOM_CHANNEL_PREFIX = 'r_';
var TABLE_CHANNEL_PREFIX = 't_';

ChannelUtil.getGlobalChannelName = function() {
    return GLOBAL_CHANNEL_NAME;
};

ChannelUtil.getRoomChannelName = function(roomId) {
    return ROOM_CHANNEL_PREFIX + roomId;
};

ChannelUtil.getTableChannelName = function(roomId, tableId) {
    return ROOM_CHANNEL_PREFIX + roomId + TABLE_CHANNEL_PREFIX + tableId;
};
