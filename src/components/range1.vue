<template>
	<div class="range1">
		<div class="range1cont">
			<span @click="changeval"  class="range1-bar">
				<span class="range1-val">{{val|tofz}}</span>
				<span id="randle" class="range1-randle"></span>
				<span id="quantity" class="range1-quantity"></span>
				<span class="range1-max">{{max|tofz}}</span>
			</span>
		</div>
	</div>
</template>
<style lang="scss">
	.range1{
	position: absolute;
	bottom: 0.5rem;
	width: 100%;
	color: #fff;
	z-index: 666;
	.range1cont{
		margin: 0 50px;
		.range1-bar{
			background-color: #a9acb1;
		    border-radius: 15px;
		    display: block;
		    height: 1px;
		    position: relative;
		    width: 100%;
		    .range1-randle{
		    	position: absolute;
		    	box-shadow: 0 1px 3px rgba(0,0,0,.4);
		    	height: 20px;
		    	width: 20px;
		    	border-radius: 100%;
		    	background: #fff;
		    	cursor: move;
		    	top: -10.5px;
		    	
		    }
		    .range1-quantity{
		    	border-radius: 15px;
		    	height: 1px;
		    	display: block;
		    	background: #04BE02;
		    }
		    .range1-max,.range1-val{
				color: #fff;
			    font-size: 12px;
			    position: absolute;
			    text-align: center;
			    top: 50%;
			    -webkit-transform: translateY(-50%);
			    transform: translateY(-50%);
			    width: 24px;
		    }
		    .range1-max{
		    	right: -30px;
		    }
		    .range1-val{
		    	left:-30px ;
		    }
		}
	}
}
</style>
<script>
	export default{
		props:{
			min:{
				 type: Number,
				default:0
			},
			max:{
				 type: Number,
				default:230
			},
			val:{
				type: Number,
				default:80
			},
			bl:{
				type: Number,
				default:0
			}
		},
		data(){
			
			return{
				barwidth:0,
				maxval:0
			}
		},
		methods:{
			init:function(){
				var bl=this.bl
				$('.range1-randle').css('left',this.val*bl+'px')
				$('.range1-quantity').css('width',this.val*bl+'px')
			},
			changeval:function($e){
				var bl=this.bl
				var s=($e.pageX-50)/bl
				if(s<0) return
				this.val=s
				
				this.$dispatch('setval',this.val)
			},
			touch:function(){
				this.barwidth=parseInt($('.range1-bar').css('width'))-20
				var barwidth=this.barwidth
				this.bl=this.barwidth/(this.max-this.min)
				var bl=this.bl
				var randle=document.getElementById('randle')
				var quantity=document.getElementById('quantity')
				var oW,oH;
				var vm=this
				var block=randle
				  block.addEventListener("touchstart", function(e) {
				   
				   var touches = e.touches[0];
				   oW = touches.clientX - block.offsetLeft;
				  // oH = touches.clientY - block.offsetTop;
				   //阻止页面的滑动默认事件
				   document.addEventListener("touchmove",defaultEvent,false);
				  },false)
				 
				  block.addEventListener("touchmove", function(e) {
				   var touches = e.touches[0];
				   var oLeft = touches.clientX - oW;
				 //  var oTop = touches.clientY - oH;
				   if(oLeft < 0) {
				    oLeft = 0;
				   }else if(oLeft > barwidth+10) {
				    oLeft = barwidth+10
				   }
				   
				   block.style.left = oLeft + "px";
				   quantity.style.width=oLeft+'px';
				   vm.val=oLeft/bl
				  
				 //  block.style.top = oTop + "px";
				  },false);
				   
				  block.addEventListener("touchend",function() {
				  	 vm.$dispatch('setval',vm.val)
				   document.removeEventListener("touchmove",defaultEvent,false);
				  },false);
				  function defaultEvent(e) {
				   e.preventDefault();
				  }
			  
			}
		},
		watch:{
			val:function(v){//监听时间变化
				
				this.init()
			},
			
		},
		ready(){
			this.init()
			this.touch()//滑动事件
			//this.maxval=parseInt(this.max/60)+this.max%60
			

			
		}
		
	}
	
</script>