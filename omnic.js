var Discord = require("discord.js");
var bot = new Discord.Client();
var request = require('request');
var fs = require('fs');
var url;
var http = require('http');
var temp;
var vowel = ['a','e','i','o','u','y'];

var random = 0;
/*
bot.on("message", msg => {
    if ((msg.content.indexOf("omnic") >= 0 || msg.content.indexOf("Omnic") >= 0) && msg.content.indexOf("I'm omnic")<0) {
        if (random % 3 == 0)
            msg.channel.sendMessage("a...an nyeong");
        else if (random % 3 == 1)
            msg.channel.sendMessage("hiyom!");
        else
            msg.channel.sendMessage("hihihihi");
        random++;
    }

    if(msg.content.indexOf("1/5")>=0){
        msg.channel.sendMessage("2...25%?")
    }

});
*/

bot.on('message', message => {
    if (message.content.indexOf('/o',0)===0) {
        var s = message.content.substr(3);
        console.log("first"+s);
        switch(true){
            case /info [a-z,가-힣]*/.test(s) :
                var ss = s.substr(5);
                if(ss.indexOf('create')<0 && ss.indexOf('modify')<0)
                    fs.readFile('./info/'+ss+'.txt','utf8', function (err, data) {
                            if (err) {
                                message.channel.sendMessage("존재하지 않는 정보입니다. 혹은 지워버렸거나! ㅎㅁㅎ")
                                return console.log(err);
                            };
                            message.channel.sendMessage("__** 옴닉 위키 \""+ss+"\":**__ \n\n"+data);
                            console.log(data);
                        });
                else if(ss.indexOf('create')>=0){
                    console.log("else\n");
                    if(ss.indexOf(',')<0){
                        message.channel.sendMessage("\"/o info create 이름,내용\"으로 사용 부탁드립니다.")
                        break;
                    }
                    var ssw = ss.substr(ss.indexOf(',')+1); console.log(ssw);
                    var sss = ss.substring(7,ss.indexOf(',')); console.log(sss);
                    fs.writeFile('./info/'+sss+'.txt',ssw+"\n\n **Made by "+message.author.username+"**",{flag : 'wx', encoding: 'utf8'},function (err) {
                        if(err){
                            message.channel.sendMessage("이미 등록된 정보입니다. 수정은 추후 지원될 예정입니다.");
                            return console.log(err);
                        }
                        try{
                            console.log(GuildMember.nickname);
                        }catch(err){console.log(err);};
                        message.channel.sendMessage("등록되었습니다!");
                    })
                }
                else if(ss.indexOf('modify')>=0){
                    console.log('modify');
                    if(ss.indexOf(',')<0){
                        message.channel.sendMessage("\"/o info modify 이름,내용\"으로 사용 부탁드립니다.")
                        break;
                    }
                    var ssw = ss.substr(ss.indexOf(',')+1); console.log(ssw);
                    var sss = ss.substring(7,ss.indexOf(',')); console.log(sss);
                    fs.writeFile('./info/'+sss+'.txt', ssw+"\n\n **Modified by "+message.author.username+"**", {flag : 'w', encoding: 'utf8'}, function(err) {
                        if(err){
                            message.channel.sendMessage("수정은 등록과 같은 방법으로 하시면 됩니다.");
                            return console.log(err);
                        }
                        message.channel.sendMessage("수정 등록되었습니다!");
                    });
                }
                break;
                   /*case "이도우" : message.channel.sendMessage("이도우\n\n나이 : 아재\n\n취미 : 아재개그\n\n절레절레...."); break;
                   case "심지수" : message.channel.sendMessage("나이 : 아재^아재\n\n특기 : 뽕유, 뽕미\n\n좋아하는 음식 : 땅콩버터\n\n좋아하는 물질 : 솜브라\n\n"); break;
                   case "홍현성" : message.channel.sendMessage("1/5 = 25%의 사나이!\n\n바쁜 벌꿀은 고민할 시간도 없다\n\n성냥사세요\n\n여우,계약직 너프디스 회장, 판단은 내가 해, 책임은 내가 져!\n"); break;
                   case "양선생" : message.channel.sendMessage("http://pds21.egloos.com/pds/201606/17/56/f0027756_5763a0a4300be.png"); break; */

            case /i [a-z,가-힣]*/.test(s) :
                var ss = s.substr(2);
                if(ss.indexOf('create')<0 && ss.indexOf('modify')<0)
                    fs.readFile('./info/'+ss+'.txt','utf8', function (err, data) {
                        if (err) {
                            message.channel.sendMessage("존재하지 않는 정보입니다. 혹은 지워버렸거나! ㅎㅁㅎ")
                            return console.log(err);
                        };
                        message.channel.sendMessage("__** 옴닉 위키 \""+ss+"\":**__ \n\n"+data);
                        console.log(data);
                    });
                else if(ss.indexOf('create')>=0){
                    console.log("else\n");
                    if(ss.indexOf(',')<0){
                        message.channel.sendMessage("\"/o info create 이름,내용\"으로 사용 부탁드립니다.")
                        break;
                    }
                    var ssw = ss.substr(ss.indexOf(',')+1); console.log(ssw);
                    var sss = ss.substring(7,ss.indexOf(',')); console.log(sss);
                    fs.writeFile('./info/'+sss+'.txt',ssw+"\n\n **Made by "+message.author.username+"**",{flag : 'wx', encoding: 'utf8'},function (err) {
                        if(err){
                            message.channel.sendMessage("이미 등록된 정보입니다. 수정은 추후 지원될 예정입니다.");
                            return console.log(err);
                        }
                        try{
                            console.log(GuildMember.nickname);
                        }catch(err){console.log(err);};
                        message.channel.sendMessage("등록되었습니다!");
                    })
                }
                else if(ss.indexOf('modify')>=0){
                    console.log('modify');
                    if(ss.indexOf(',')<0){
                        message.channel.sendMessage("\"/o info modify 이름,내용\"으로 사용 부탁드립니다.")
                        break;
                    }
                    var ssw = ss.substr(ss.indexOf(',')+1); console.log(ssw);
                    var sss = ss.substring(7,ss.indexOf(',')); console.log(sss);
                    fs.writeFile('./info/'+sss+'.txt', ssw+"\n\n **Modified by "+message.author.username+"**", {flag : 'w', encoding: 'utf8'}, function(err) {
                        if(err){
                            message.channel.sendMessage("수정은 등록과 같은 방법으로 하시면 됩니다.");
                            return console.log(err);
                        }
                        message.channel.sendMessage("수정 등록되었습니다!");
                    });
                }
                break;
            case /hello [a-z]*/.test(s) : message.reply("하지마!"); break;
            case /profile/.test(s) : message.reply(message.author.avatarURL); break;
            case /profile [a-z,A-Z,가-힣]*/.test(s) : var ss = s.substr(8); break;
            case /test/.test(s) : message.channel.sendMessage("테스트 성공!"); break;
            case /weather [a-z]*/.test(s) :  var ss = s.substr(8); temp=message; getWeather = get(ss);  break;
            case /w [a-z]*/.test(s) :  var ss = s.substr(2); temp=message; getWeather = get(ss);  break;
            case /help/.test(s) : message.channel.sendMessage("```" +
                "/o info name : 정보를 표시합니다." +
                "\n\n/o info create name,text : 정보를 생성합니다." +
                "\n\n/o info modify name,text : 정보를 수정합니다." +
                "\n\n/o i : info의 퀵명령어입니다." +
                "\n\n/o weather cityname : 도시의 날씨를 보여줍니다." +
                "\n\n/o w : weather의 퀵명령어입니다." +
                "\n\n/o profile : 자신의 프로필사진을 보여줍니다." +
                "\n\n그리고 또 무슨 기능이 숨어있을까여! +_* ```\n"); break;
            case /usertest/.test(s) : message.channel.sendMessage(Cli)
            default : message.channel.sendMessage("잘못된 명령어 입니다. 다시 입력부탁드립니다."); break;
        }
}});

bot.on('ready', () => {
    console.log('I am ready!');
});

function printWeather(city, weather, current, icon) {
    var a = false;
    for(var i = 0; i < 5 ;i++){
        if(vowel[i].indexOf(city.substr(city.length-1))>=0) a = true;
    }
    current = ko(current);
    if(!a) var message = city + ' 은 ' + weather + '도 입니다! ' +  current;
    else var message = city + ' 는 ' + weather + '도 입니다! ' + current;
    console.log(message);
    temp.channel.sendMessage(message).attachments["",{url:"http://openweathermap.org/img/w/"+icon+".png" }];
}

//Print out error messages
function printError(error) {
    console.error(error.message);
}

function ko(current) {
    switch (current){
        case "clear sky" : return "화창한 맑은 하늘이네요!"; break;
        case "few clouds" : return "약간 구름이 끼었군요!"; break;
        case "scattered clouds" : return "비늘구름이네요! 권적운이라고도 하죠?"; break;
        case "broken clouds" : return "조각 조각 구름이 떠다니겠네요!"; break;
        case "shower rain" : return "소나기가 오는군요! 우산꼭 챙기세요!"; break;
        case "rain": return "솜브라 : 비-온다!"; break;
        case "thunderstorm": return "천둥번개가 칩니다!"; break;
        case "snow": return "눈이 와여 눈! 두유워너빌더 스노맨~"; break;
        case "mist" : return "안개낀 날이네요! 운전자분들은 조심!";break;
        case "overcast clouds" : return "구름 가득한 하루네요!"; break;
        case "haze" : return "실안개낀 날이네요!"; break;
        default : return current +" 입니다.";
    }
}

//Connect to the API URL api.openweathermap.org/data/2.5/weather?q={city name},{country code}
function get(city){
    var request = http.get('http://api.openweathermap.org/data/2.5/weather?q='+ city + '&units=metric&APPID=5d7b8cfbb0958ea91e7f419d4163b71d', function(response) {
        var body = '';

        //Read the data
        response.on('data', function(chunk) {
            body += chunk;
        });

        response.on('end', function() {
            if (response.statusCode === 200) {
                try {
                    //Parse the data
                    var weatherAPI = JSON.parse(body);

                    //Print the data
                    printWeather(weatherAPI.name, weatherAPI.main.temp, weatherAPI.weather[0].description, weatherAPI.weather[0].icon);
                } catch(error) {
                    //Parse error
                    printError(error);
                }
            } else {
                //Status Code error
                printError({message: 'There was an error getting the weather from ' + city + '. (' + http.STATUS_CODES[response.statusCode] + ')'});
            }
        })
    });

//Connection error
    request.on('error', function (err) {

        printError(err);

    });

};


bot.login("MjQ3NTc5NzQxMzkxOTQ1NzI4.CwrQHw.-XLQEzHAUaLJkzL3tlmNQB_hZ8g");