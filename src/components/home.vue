<style>

	ul{
		list-style: none;
		padding: 0;
		margin: 0;
	}
	a{
		text-decoration: none;
	}
	.seltnav{
		display: flex;
		background: #fff;
		
	}
	.seltnav a{
		height: 0.4rem;
		line-height: 0.4rem;
		display: block;
		font-size: 0.16rem;
		text-align: center;
		flex: 1;
		color: #000;
		position: relative;
	}
	.seltnav a.act{
		color: #31C27C;
	}
	.seltnav a.act:after{
		position: absolute;
		content: '';
		bottom: 0;
		right: 0;
		left: 0;
		height: 2px;
		display: block;
		background: #31c27c;
	}
</style>
<template>
	<div>
		<header style="height: 0.44rem;width: 100%;background-color: #31c27c;font-size: 0.20rem;color: #fff;text-align: center;line-height: 0.44rem;font-weight: 600;">
	vue-music
	</header>
	<nav class="seltnav" >
		<a v-bind:class="{ 'act':i.url==$route.path  }" v-link="{path:i.url}" v-for="i in nav">{{i.tit}}</a>
		
	</nav>
	<router-view></router-view>
	</div>
	
</template>

<script >
	export default{
		data(){
			
			return {
				adressIP:'',
				nav:[
					{
						tit:'推荐',
						url:'/home/select'
					},
					{
						tit:'喜欢',
						url:'/home/love'
					},
					{
						tit:'搜索',
						url:'/home/search'
					},
				]
				
			}
		},
		methods:{
				getIPAdress:function(){
				var vm=this
				  this.$http({
	                method:'GET',
	                url:'http://localhost:8081',
	               }).then(function(data){
	            	vm.adressIP=data.body
	              var ip=sessionStorage.getItem('adressIP')
	            	if(ip==''||ip==null){
	            		sessionStorage.setItem('adressIP',data.body)
	            		window.location.href="http://"+data.body+":6789"
	            	}
	               })

			}
		},
		ready(){
			this.getIPAdress()
		}
	}
</script>
