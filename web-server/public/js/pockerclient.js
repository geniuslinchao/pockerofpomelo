/**
 * Created with JetBrains WebStorm.
 * User: Genius
 * Date: 13-4-18
 * Time: 下午2:27
 * To change this template use File | Settings | File Templates.
 */

var pomelo = window.pomelo;

// query connector
function queryEntry(uid, callback) {
    var route = 'connector.connectorHandler.queryEntry';

    pomelo.init({
        host: '127.0.0.1',
        port: 3050,
        log: true
    }, function() {
        pomelo.request(route, {
            uid: uid
        }, function(data) {
            pomelo.disconnect();
            if(data.code === 500) {
                showError(LOGIN_ERROR);
                return;
            }
            callback(data.host, data.port);
        });
    });
};

function hidetoolbar(){
    $("#usertoolbar").hide();
};

function showtoolbar() {
    $("#usertoolbar").show();
}

function hideloginview(){
    $("#loginpanel").hide();
};

function showloginview() {
    $("#userinput").val("");
    $("#passwordinput").val("");
    $("#loginpanel").show();
};

function hidegameview() {
    $("#gameview").hide();
};

function showgameview() {
    $("#gameview").show();
}

function pockerlogin(username, password){
    console.log("login click, user:" + username + " password:" + password);

    $("#login-user").text(username);
    hideloginview();
    showtoolbar();
    showgameview();

    //query entry of connection
    //queryEntry(username, function(host, port) {
        pomelo.init({
            host: '127.0.0.1',
            port: 3050,
            log: true
        }, function() {
            var route = "connector.entryHandler.enter";
            pomelo.request(route, {
                username: username,
                rid: username
            }, function(data) {
                if(data.error) {
                    alert("connect connector error");
                    showError(DUPLICATE_ERROR);
                    return;
                }
                console.log('query connector success!');
            });
        });
    //});
};

function pockerlogout() {
    console.log("user logout");
    $("#login-user").text("未登录");

    hidetoolbar();
    hidegameview();
    showloginview();
}

$(document).ready(function() {

    console.log("document ready");
    hidetoolbar();
    showloginview();

    $("#loginbtn").on('click', function(e) {
     var username = $("#userinput").val();
     var password = $("#passwordinput").val();
     pockerlogin(username, password);
    });

    $("#logoutbtn").on('click', function(e) {
      pockerlogout();
    });
});






