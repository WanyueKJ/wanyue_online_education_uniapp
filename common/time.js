export default {
	
   getChatTime(v1,v2){
	   if((v1 - v2) > 300) {
		   return this.gettime(v1);
	   }
   },
   gettime(tm){
	 var d = new Date(tm * 1000);    //根据时间戳生成的时间对象 
	 var date = (d.getFullYear()) + "-" +  
	            (d.getMonth() + 1) + "-" + 
	            (d.getDate()); 
	          return date;    
	   
   }
	
	
}