
<template>
	<!--<div>
		<swiper  :height="sehe" :list="list" :loop=true auto></swiper>
	</div>-->
<div class="lis" >
		<ul>
			<li v-link="{path:'/playsong', query: {hash:i.hash,singername:i.singername,songname:i.songname}}" v-for="i in musicdata">
				<i class="icon"> 	</i>
				<h6 >{{i.songname}}</h6>
				<span>{{i.singername}}</span>
			</li>
			<li v-show="showloding" id="loding">加载。。。</li>
		</ul>
<div>
</template>

<script>
//import Swiper from 'vux/src/components/swiper'
//import Scroller from 'vux/src/components/scroller'

//import Songlist from './songlist'
export default {
  components: {
	//'swiper':Swiper,
	
  },
   data: function () {
  
    return {
    	adressIP:'',
			page:1,
			showloding:false,
    	pullupconfig:{
		    content: 'Pull Up To Refresh',
		  pullUpHeight: 800,
		  height: 800,
			
		  autoRefresh: false,
		  downContent: 'Release To Refresh',
		  upContent: 'Pull Up To Refresh',
		  loadingContent: '加载中...',
		  clsPrefix: 'xs-plugin-pullup-'
    	},
    	musicdata:[],
    sehe:'1.5rem',
      list: [{
        url: '#',
        img: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000001rxGT337UYwO.jpg?max_age=2592000',
        title: ''
      }, {
        url: '#',
        img: 'http://y.gtimg.cn/music/photo_new/T003R720x288M0000044RhzK0AVklU.jpg?max_age=2592000',
        title: ''
      }, {
        url: '#',
        img: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000001jBJH14I90uD.jpg?max_age=2592000',
        title: ''
      },{
        url: '#',
        img: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000002jVSob2ZJVW6.jpg?max_age=2592000',
        title: ''
      }
      ]
    }
  },
  		methods:{
			sel:function(){
				var se=this.val
				var vm=this
	          	var keyurl='/?s=周杰伦&size=20&page=1'
	           	this.$http({
	                method:'GET',
	                url:'http://apis.baidu.com/geekery/music/query'+keyurl,
	               	headers: {apikey: '2596cea20d986d38d9ede9e62f301841'},
	                }).then(function(data){
	                	var d=JSON.parse(data.data)
	                	vm.musicdata=d.data.data
	               })
			},
			esd:function(){
				var vm=this
				console.log(this.page)
				var ip=sessionStorage.getItem("adressIP")
				var keyurl='/?s=许嵩&size=20&page='+this.page
			
				this.$http({
	                method:'GET',
	                url:'http://'+ip+':8081/get'+keyurl,
	               }).then(function(data){
	            		vm.musicdata.push(...data.body.data.data)
									vm.showloding=false
	               		sessionStorage.setItem('songlist',JSON.stringify(vm.musicdata)) 
	              })
			}
		},
  	ready(){
  		this.esd()
			var vm=this
				$(document).scroll(function(){
				var bheight = $(window).height();//浏览器当前窗口可视区域高度
				var sheight = $("body")[0].scrollHeight;//获取滚动条高度，[0]是为了把jq对象转化为js对象
				var stop = $("body").scrollTop();//滚动条距离顶部的距离
				
				if(stop>=sheight-bheight){//当滚动条到顶部的距离等于滚动条高度减去窗口高度时
					vm.showloding=true
					vm.page++
					vm.esd()
				}
			});
  	}
}

</script>
<style>

.lis ul{
		margin: 0;
		padding: 0;
		
	}
	.lis li:not(:last-child){
		list-style: none;
		margin: 0;
		padding: 0;
		height: 55px;
		position: relative;
		padding-left: 56px;
		overflow: hidden;
		
	}
	.lis .icon{
		position: absolute;
		left: 18px;
		top: 18px;
		height: 20px;
		width: 22px;
		background-position: 0 0;
	}
	
	
	.lis .icon:after,.lis .icon{
		
		background-image: url('../assets/search_sprite.png');
		background-size:22px 30px ;
		background-repeat:no-repeat;
	}
	.lis h6{
		    margin: 10px 0 2px;
    line-height: 18px;
    font-size: 16px;
    font-weight: normal;
    color: #000;
   	overflow: hidden; 
	white-space: nowrap; 
	text-overflow: ellipsis;
	}
	.lis span{
		color: #808080;
		overflow: hidden; 
		white-space: nowrap; 
		text-overflow: ellipsis;
	}
	#loding{
		height:30px;
		line-height:30px;
		color:#808080;
		text-align:center;

	}
</style>



