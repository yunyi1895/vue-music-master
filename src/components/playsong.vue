<style  lang='scss'>
 @mixin scssrotate($r){
    transform: rotate($r);
    -ms-transform: rotate($r);
    -moz-transform: rotate($r);
    -webkit-transform: rotate($r);
}
@mixin scssanmation($i){
    animation: $i;
    -webkit-animation: $i;
    -ms-animation: $i;
    -moz-animation: $i;
}
@mixin scssscale($i){
	transform: scale($r);
    -ms-transform: scale($r);
    -moz-transform: scale($r);
    -webkit-transform: scale($r);
}
.song{
	position: absolute;
	top: 0;
	bottom: 0;
	width: 100%;
	overflow: hidden;
	z-index: 2;
	.bkimg{
		position: absolute;
		left: 0;
		bottom: 0;
		top: 0;
		width: 100%;
		-webkit-filter:blur(15px);
		-webkit-transform: scale(1.15);
		background-position: bottom center;
		background-size:cover ;
	}
	.songtit{
		height: 1rem;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		background:rgba(0,0,0,0.5);
		display: flex;
		width: 100%;
		text-align: center;
		z-index: 2;
		.songimh{
			flex: 1;
			text-align: center;
		}
		.songtitle{
			flex: 2;
			padding-top: 0.4rem;
			padding-left: 0.2rem;
			color: #fff;
			font-size: 0.18rem;
			position: relative;
			overflow: hidden;
			
			h1{
				height: 22px;
				font-size: 0.16rem;
				position: relative;
				overflow: hidden;
				font-weight: normal;
			}
			span{
				position: absolute;
				bottom: 0;
				top: 0;
				left: 0;
				white-space: nowrap;
				text-align: center;
			}
		}
		.play{
			flex: 1;
			.icon_play{
				position: absolute;
			    top: 50%;
			    right: 25px;
			    width: 43px;
			    height: 43px;
			    margin-top: -22px;
			    border: solid 1px #fff;
			    border-radius: 999px;
			    background: rgba(0,0,0,.1);
			    opacity: .6;
			    &:after{
			    	background-image: url(../assets/sprite_play.png);
			    	background-repeat: no-repeat;
   					background-size: 40px 350px;
			    }
			}
			
			.icon_play--pause:after{
				content: "";
				display: block;
				width: 9px;
			    height: 15px;
			    margin: 14px 0 0 17px;
			    background-position: 0 -180px;
			}
			.icon_play--start:after{
				content: "";
			    display: block;
			    width: 17px;
			    height: 19px;
			    margin: 13px 0 0 16px;
			    background-position: 0 -150px
			}
		}
	}/*songtit*/
	.songbody{
		text-align: center;
		overflow: hidden;
		background:rgba(0,0,0,0.4);
		position: absolute;
		left: 0;
		right: 0;
		bottom: 1rem;
		top: 1rem;
		ul{
		
			transition: all 0.3s ease-out;
	    	transform-origin: 0px 0px 0px;
		}
		li{
			list-style: none;
			height: 42px;
		    line-height: 42px;
		    overflow: hidden;
		    text-overflow: ellipsis;
		    white-space: nowrap;
			color: rgba(255,255,255,.6);
			font-size: 0.14rem;
			
		}
	}/*songbody*/
	.songcont{
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: 3;
		width: 100%;
		height: 1rem;
		background:rgba(0,0,0,0.4);
		.time{
			position: absolute;
			left: 15px;
			bottom: 0.4rem;
			color: #FFFFFF;	
			font-size: 0.14rem;
			font-weight: normal;
		}
	}/*songcont*/
	#loveis{
		position: absolute;
		left: 0.2rem;
		bottom: 1.05rem;
		#heart {
		    position: relative;
		    width: 25px;
		    height: 22.5px;
		     
		}
		#heart:before,
		#heart:after {
		    position: absolute;
		    content: "";
		    left: 12.5px;
		    top: 0;
		    width: 12.5px;
		    height: 20px;
		    background:#fff;
		    transition: background-color 0.3s;
		    -moz-border-radius: 12.5px 12.5px 0 0;
		    border-radius: 12.5px 12.5px 0 0;
		    -webkit-transform: rotate(-45deg);
		       -moz-transform: rotate(-45deg);
		        -ms-transform: rotate(-45deg);
		         -o-transform: rotate(-45deg);
		            transform: rotate(-45deg);
		    -webkit-transform-origin: 0 100%;
		       -moz-transform-origin: 0 100%;
		        -ms-transform-origin: 0 100%;
		         -o-transform-origin: 0 100%;
		            transform-origin: 0 100%;
		}
		#heart:after {
		    left: 0;
		    -webkit-transform: rotate(45deg);
		       -moz-transform: rotate(45deg);
		        -ms-transform: rotate(45deg);
		         -o-transform: rotate(45deg);
		            transform: rotate(45deg);
		    -webkit-transform-origin: 100% 100%;
		       -moz-transform-origin: 100% 100%;
		        -ms-transform-origin: 100% 100%;
		         -o-transform-origin: 100% 100%;
		            transform-origin :100% 100%;
		}
		
	}/*loveis*/
	#palysonglist{
		position: absolute;
		right: 0.2rem;
		bottom: 1rem;
		.palysonglis-icon{
			position:relative;
			
			
			img{
				width: 25px;
			}
			ul{
				position: absolute;
				left: -100px;
				top:-200px;
				transition: all 0.6;
				background:rgba(0,0,0,0.8);
				height: 200px;
				width: 100px;
				display: block;
				z-index: 999;
				text-align: center;
				li{
					color:antiquewhite;
					overflow: hidden; 
					white-space: nowrap; 
					text-overflow: ellipsis;
					margin: 5px 0;
				}
			}
		}
	}/*palysonglis*/
}

.songlistact{
	color: #31C27C !important;
}

.songbody .act{
	color: #31C27C !important;
	font-size: 0.16rem !important;
}	


.pause{
	animation-play-state:paused !important;
	-webkit-animation-play-state:paused !important;
	-moz-animation-play-state:paused !important;
}
.loves:before,
.loves:after{
			 background:red !important;
}
@keyframes xzimg{
	0%{
		@include scssrotate(0deg);
	}
	100%{
		@include scssrotate(360deg);
	}
}
#songimg{
	@include scssanmation(xzimg 10s linear infinite);
	width: 0.7rem;height: 0.7rem; border-radius: 100%; display: block;margin-left: 0.1rem;margin-top: 0.1rem;
}
</style>
<template>
	
<div class="song">
	<div id="bgimg" class="bkimg" ></div> <!--backgroundImage:'(url'+singerinfo.image+')'-->
	<div class="songtit">
		<div class="songimh">
			<img id="songimg" v-bind:class="{'pause':start}" />
		</div>
		<div class="songtitle">
				<h1>
				<span>
					{{songurl.fileName}}
				</span>
			</h1>
			
			
		</div>
		<div class="play">
			<span @click="switchplay"  v-bind:class="{'icon_play--pause':pause,'icon_play':true,'icon_play--start':start}">
				
			</span>
		</div>
	</div>
	<div class="songbody">
		<ul id="aduioul" >
				<li class="songbodyli"  itime="{{i.time}}" v-for="i in songkrc" >{{i.gc}}</li>
		</ul>
	
	</div>
	<div id="loveis">
		<div id="heart" @click="collect" class="heart-shape"></div> 
	</div>
	<div id="palysonglist">
		<div id="songlist" class="palysonglis-icon">
			<img @click="this.showpalysonglist=!this.showpalysonglist"  src="../assets/list.png"/>
			<ul v-show="showpalysonglist">
				<li v-for="l in palysonglist" @click="switchsong(l)"  v-bind:class="{ 'songlistact': l.hash==this.hash}">{{l.songname}}</li>
			</ul>
		</div> 
	</div>
	<div class="songcont">
		<range1 :val.sync="tY" :max=songurl.timeLength ></range1>
	</div>
	<audio id="h5audio_media" autoplay="autoplay" loop='true'  @timeupdate="getaudiotime($e)" ></audio>
</div>
</template>
<script>
	
	import Range1  from './range1'
	export default{
		data(){
			return{
				hash:'',
				songurl:{url:''},
				songkrc:[],
				singername:'',
				songname:'',
				singerinfo:{},
				itime:[],
				tY:0,
				pause:true, 
				start:false,
				islove:false,
				palysonglist:[],
				showpalysonglist:false
			}
		},
		components:{
			'range':Range,
			'range1':Range1
		},
		methods:{
			collect:function(){//收藏歌曲
				this.islove=!this.islove
				var lovelist=localStorage.getItem('lovelist');
				var songname=this.songname
				var singername=this.singername
				var hash=this.hash
				if(lovelist==null){
					lovelist=[]
				}else{
					lovelist=JSON.parse(lovelist)
				}
				
				if(this.islove){
					
					var obj={
						songname:songname,
						singername:singername,
						hash:hash
					}
					lovelist.push(obj)
					$('#heart').addClass('loves')
				}else{
					for(var i=0;i<lovelist.length;i++){
						if(lovelist[i].hash==hash){
							lovelist.splice(i,1)
						}
					}
					$('#heart').removeClass('loves')
				}
				
				localStorage.setItem('lovelist',JSON.stringify(lovelist))
			},
			switchplay:function(){//暂停 播放歌曲
				var myVideo=document.getElementById("h5audio_media"); 
				
				if(this.start){
					 myVideo.play(); 
				}else{
					
					  myVideo.pause(); 
				}
				this.start=!this.start
				this.pause=!this.pause
				
				
			},
			getsongurl:function(){//获取歌曲播放地址
				var hash=this.hash
				var vm=this
	          	this.$http({
	                method:'GET',
	                 url:'http://apis.baidu.com/geekery/music/playinfo/?hash='+hash,
	               	headers: {apikey: '2596cea20d986d38d9ede9e62f301841'},
	                }).then(function(data){
	                	var d=JSON.parse(data.body).data
	                	vm.songurl=d
	                	$('#h5audio_media').attr('src',d.url)
	                	//console.log(JSON.stringify(d))
	                	this.getsonggc(d.fileName,d.timeLength)
	                	
	               })
			},
			getsonggc:function(fn,time){//获取歌词
				var hash=this.hash
				var vm=this
				var urlParam='?name='+fn+'&hash='+hash+'&time='+time
				
	          	this.$http({
	                method:'GET',
	                 url:'http://apis.baidu.com/geekery/music/krc'+urlParam,
	               	headers: {apikey: '2596cea20d986d38d9ede9e62f301841'},
	                }).then(function(data){
	                	var songkrc=JSON.parse(data.body).data.content
	               		var d=songkrc.split('\n')
	               		function totime(s){
	               		     if(s=='') return ''
							var t1=s.indexOf(":")
							
							var s1=s.substring(0,t1)
							var s2=s.substring(t1+1)
						
							var z=Number(s1)*60+Number(s2)
						
							return z
	               		}
	               		
	               		for(var i=0;i<d.length;i++){
	               			var bj=d[i].indexOf(']')
	               			
	               			var z=d[i].substring(1,bj)
	               			if(d[i].substring(bj+1)!='\r'){
	               				vm.songkrc.push({
	               				time:totime(z),
	               				gc:d[i].substring(bj+1)
	               				})
	               			}
	               			
	               		}
	               		
	               })
	            setTimeout(function(){
	            	var paused=document.getElementById("h5audio_media").paused;
	            	if(paused){
	            		document.getElementById("h5audio_media").play();
	            	}
	            	
	            },100)
	               
			},
			getsingerInfo:function(name){//获取歌手信息
				var singername=this.singername
				var vm=this
				this.$http({
	                method:'GET',
	                 url:'http://apis.baidu.com/geekery/music/singer/?name='+singername,
	               	headers: {apikey: '2596cea20d986d38d9ede9e62f301841'},
	                }).then(function(data){
	                	var d=JSON.parse(data.body).data
	                	$('#songimg').attr('src',d.image)
	                	$('#bgimg').css("backgroundImage",'url('+d.image+')')
	                	vm.singerinfo=d
	                
	               })
	               
	                
			},
			islovefn:function(){//判断歌曲是否已收藏
				var lovelist=localStorage.getItem('lovelist');
				var hash=this.hash
				if(lovelist==null){
					lovelist=[]
				}else{
					lovelist=JSON.parse(lovelist)
				}
				for(var i=0;i<lovelist.length;i++){
						if(lovelist[i].hash==hash){
							this.islove=true
						}
				}
				
				if(this.islove){
					$('#heart').addClass('loves')
				
				}else{
					$('#heart').removeClass('loves')
					
				}
				
			},
			getaudiotime:function(){//歌词同步
				var Media= document.getElementById("h5audio_media")
				var liobj=$('.songbodyli').removeClass('act')
				var objarr=[]
				
				this.tY=parseInt(Media.currentTime)
				if(this.tY==0){
					$('#aduioul').css('transform','translateY(0)')
				}
				var s=this.songkrc
			
				for(var i=0;i<s.length;i++){
					if(s[i+1]&&s[i+1].time>Media.currentTime&&s[i].time<Media.currentTime+0.1){
						liobj.eq(i).addClass('act')
						if(i>2){
							var trla='translateY('+(i-1)* (-42)+'px)'
							$('#aduioul').css('transform',trla)
						}
						
					}
				}
				
				
			},
			randepalysonglist:function(list){//渲染播放列表
				var hash=this.hash
				var sl=[]
				var ii=0
				for(var i=0;i<list.length;i++){
					if(list[i].hash==hash){
						ii=i
					}
				}
				if(ii<=7){
					sl=list.slice(0,8)
				}else{
					sl=list.slice(ii-4,ii+4)
				}
				this.palysonglist=sl
				
			},
			switchsong:function(l){//切换歌曲
				//console.log(JSON.stringify(l))
				this.$router.go({path:'/playsong',query:{hash:l.hash,singername:l.singername,songname:l.songname}})
				
				location.reload() 
			},
			init:function(){//初始化
				this.hash=this.$route.query.hash
				this.singername= this.$route.query.singername
				this.songname= this.$route.query.songname
				this.getsongurl()
				this.getsingerInfo()
				this.islovefn()
				$('html').one('touchstart',function(){
					document.getElementById("h5audio_media").play();
				});
				var palysonglist=JSON.parse(sessionStorage.getItem('songlist'))
			
				this.randepalysonglist(palysonglist)
			}
			
		},
		ready(){
			this.init()
			
		},
		events:{//子组件传播事件
			'setval':function(val){
				var Media= document.getElementById("h5audio_media")
				this.tY=val
				Media.currentTime=val;
			}
		}
	}
	
	
	
</script>