<style lang="scss">
	.search{
		background: #f4f4f4;
		padding: 5%;
		position: relative;
		height: 0.36rem;
		.search_input{
			input{
				width: 75%;
				height: 0.2rem;
				padding: 0.08rem;
				border: 0px;
				border-radius: 2px;
				&:focus{
					border: #31C27C 1px solid !important;
				}
			}
			a{
				display: inline-block;
				width: 15%;
				font-size: 0.16rem;
				color: #555;
				text-align: center;
			}
		}
		ul{
			position: absolute;
			top: 0.7rem;
			z-index: 6;
			width: 80%;
		}
		li{
			padding: 0.06rem;
			font-size: 0.14rem;
			color: #555;
			position: relative;
			width: 100%;
			a{
				display: inline-block;
				width: 80%;
			}
			span{
				position: absolute;
				right: 0.12rem;
				font-size: 0.18rem;
				display: inline-block;
				width: 0.18rem;
				height: 0.18rem;
			}
		}
	}
	.hend{
		display: none !important;
	}
</style>
<template>
	<div class="search">
		<div class="search_input">
			<input @focus="focus" type="text"  v-model="searchval" />
			<a @click="search">搜索</a>
		</div>
		
		<ul id="record" v-bind:class="{'hend':!isshow}">
			<li v-for="j in searchrecord">
				<a @click="recordss(j)">{{j}}</a>
				<span @click="splice($index)">×</span>
			</li>
		
		</ul>
		
	</div>
	<div class="lis" >
		<ul>
			<li v-link="{path:'/playsong', query: {hash:i.hash,singername:i.singername,songname:i.songname}}" v-for="i in musicdata">
				<i class="icon"> 	</i>
				<h6 >{{i.songname}}</h6>
				<span>{{i.singername}}</span>
			</li>
		</ul>
		
	<!--<song :list.sync="musicdata" ></song>-->
	</div>
	
</template>
<script>
	export default{
		data(){
			return{
				adressIP:'',
				musicdata:[],
				searchval:'',
				searchrecord:[],
				isshow:false
			}
			
		},
		methods:{
			splice:function($i){//去除搜索历史
				
				this.searchrecord.splice($i,1)
				localStorage.setItem('record',this.searchrecord.toString())
				
			},
			focus:function(){//聚焦搜索框事件
				//alert(this.searchrecord)
				
				if(this.musicdata.length<1){
					this.isshow=true
				}
				
			},
			search:function(){//搜索 
			
				var vm=this
				vm.isshow=false
				var record=vm.searchrecord
				if(record.indexOf(vm.searchval)==-1){
					vm.searchrecord.unshift(vm.searchval)
				}
				
				localStorage.setItem('record',vm.searchrecord.toString())
	          	var keyurl='/?s='+vm.searchval+'&size=30&page=1'
	           	var ip=sessionStorage.getItem("adressIP")
	            this.$http({
	                method:'GET',
	                url:'http://'+ip+':8081/get'+keyurl,
	            	}).then(function(data){
	                	vm.musicdata=data.body.data.data
	                	sessionStorage.setItem('songlist',JSON.stringify(vm.musicdata)) 
	               })
			},
			recordss:function(j){//根据搜索历史 显示歌曲
				var vm=this
				vm.searchval=j
				this.search()
			}
		},
		ready(){
			var  vm=this
			this.adressIP=sessionStorage.getItem("adressIP")
			var record=localStorage.getItem('record')
			
			if(record==null||record==''){
				record='周杰伦,许嵩,本兮,剑三'
			}
			
			vm.searchrecord=record.split(',')
			
		}
	}
	
</script>