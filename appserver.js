var express = require('express');
var app = express();

var http=require('http');
app.all("*", function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  if (req.method == 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
});



function getIPAdress(){  
    var interfaces = require('os').networkInterfaces();  
    for(var devName in interfaces){  
          var iface = interfaces[devName];  
          for(var i=0;i<iface.length;i++){  
               var alias = iface[i];  
             
               if(alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal){  
                     return alias.address;  
               }  
          }  
    }  
} 

app.get('/', function (req, res) {
	var ip=getIPAdress()
  res.send(ip)
})
app.get('/test', function (req, res) {
	
  res.send('test')
})

app.get('/get', function (req, resn) {
	var s=req.query.s?req.query.s:'许嵩';
	s=encodeURI(s)

//http://api.open.itmf.cn/music/mf_music/search?app_id=dev_yunyi&key=KAHDIUWqlsdjswajlGEKAW32KJD92QccE3&s=%E8%AE%B8%E5%B5%A9&page=2&size=20
	var html='';
  	var urle='http://api.open.itmf.cn/music/mf_music/search?app_id=dev_yunyi&key=KAHDIUWqlsdjswajlGEKAW32KJD92QccE3&s='+s+'&page=2&size=20'
  	
  	http.get(urle,function(res){
  		
	    res.on('data',function(data){
	        html+=data;
	    });
	    res.on('end',function(){
	    	var d=html.toString()
	    	resn.send(JSON.parse(d))
	       // filechuli(html);
	       // console.log(JSON.parse(d));
	    });
  	})
})

app.get('/singerInfo', function (req, resn) {
  	var html='';
  	var name=req.query.name
  	name=encodeURI(name)

  	var urle='http://api.open.itmf.cn/music/mf_music/singer?name='+name+'&app_id=dev_yunyi&key=KAHDIUWqlsdjswajlGEKAW32KJD92QccE3'
  	http.get(urle,function(res){
  		
	    res.on('data',function(data){
	        html+=data;
	    });
	    res.on('end',function(){
	    	var d=html.toString()
	    	resn.send(JSON.parse(d))
	     
	    });
  	})
})

app.get('/song', function (req, resn) {//
  	var html='';
  	var hash=req.query.hash
  	hash=encodeURI(hash)
	
  	var urle='http://api.open.itmf.cn/music/mf_music/song?hash='+hash+'&app_id=dev_yunyi&key=KAHDIUWqlsdjswajlGEKAW32KJD92QccE3'
  	http.get(urle,function(res){
  		
	    res.on('data',function(data){
	        html+=data;
	    });
	    res.on('end',function(){
	    	var d=html.toString()
	    	resn.send(JSON.parse(d))
	     
	    });
  	})
})
app.get('/krc', function (req, resn) {//歌词
  	var html='';
  	var hash=req.query.hash
  	var name=req.query.name
  	var time=req.query.time
  	hash=encodeURI(hash)
	name=encodeURI(name)
	time=encodeURI(time)
  	var urle='http://api.open.itmf.cn/music/mf_music/krc?name='+name+'&time='+time+'&hash='+hash+'&app_id=dev_yunyi&key=KAHDIUWqlsdjswajlGEKAW32KJD92QccE3'
  	http.get(urle,function(res){
  		
	    res.on('data',function(data){
	        html+=data;
	    });
	    res.on('end',function(){
	    	var d=html.toString()
	    	resn.send(JSON.parse(d))
	     
	    });
  	})
})

var server = app.listen(8081, function () {
  var adressip=getIPAdress()
  var host = server.address().address;
  var port = server.address().port;

  console.log("本地ip为"+adressip+";若想手机端访问请打开home.vue的82行，localhost改为本地ip")

})



/*

http://api.open.itmf.cn/music/mf_music/[search/song/krc/singer]
?app_id=dev_yunyi
&key=KAHDIUWqlsdjswajlGEKAW32KJD92QccE3
&s=天下
&page=2
&size=20
*/
