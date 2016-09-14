<template>
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
	<div v-show="ishow" style="color: #31c27c;width: 100%;text-align: center;height: 4rem;font-size: 0.20rem;line-height: 4rem;">
		您还没有收藏
	</div>
</template>
<script>
	export default{
		data(){
			
			return {
				ishow:false,
				musicdata:[]
			}
		},
		methods:{
			getlovelist:function(){
				var lovelist=localStorage.getItem('lovelist');
				
				if(lovelist==null||lovelist=='[]'){
					lovelist=[]
					this.ishow=true
				}else{
					lovelist=JSON.parse(lovelist)
				}
				this.musicdata=lovelist
				
			}
		},
		ready(){
			this.getlovelist()
		}
	}
	
</script>