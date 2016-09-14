export default function(Vue){
	Vue.filter('tofz', function(val){
		var val=parseInt(val)
		if(val<10) return '0:0'+val
		var s=(val%60).toString()
		if(s.length==1){
			s+='0'
		}
		return parseInt(val/60)+':'+s
	});


}