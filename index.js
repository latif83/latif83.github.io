function date(){
var x=document.getElementById('greet');
var today=new Date();
var hours=today.getHours();
var minutes=today.getMinutes();
var secs=today.getSeconds();
hours=checkTime(hours);
minutes=checkTime(minutes);
secs=checkTime(secs);
var t=setTimeout(date,1000);
x.textContent=hours+":"+minutes+":"+secs;
}
function checkTime(i){
			if(i<10){i="0"+i};
			return i;
		}
function greeting(){
	var x=document.getElementById('greetings');
	var today=new Date();
	var hours=today.getHours();
	//var name=prompt('What is your name:');
    
    if (hours>=0&&hours<=11) {
    	x.textContent='GOOD MORNING ';//+name;
    }
    else if(hours>11&&hours<=17){
    	x.textContent='GOOD AFTERNOON ';//+name;
    }
    else if(hours>17&&hours<=23){
    	x.textContent='GOOD EVENING ';//+name;
    }
    else{
    	x.textContent='WELCOME HERE ';//+name;
    }
}