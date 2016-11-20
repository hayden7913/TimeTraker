/////////////////Time Functions///////////////////


var count=0;
function createNode(msg){
   

	var g = document.createElement("p");
    g.id=count;
    var node = document.createTextNode(msg);

    g.appendChild(node);
    var element = document.getElementById("log");
    element.appendChild(g); 

}


function printDate(time, cat){
    count+=1;
    var unit=" min";
    var date=(new Date().toString());
    var hours= new Date().getHours();
    var minutes= new Date().getMinutes();
    minutes=doubleDigitMinutes(minutes);
    var task="*"+cat.toUpperCase()+"*";

    if(time>59){
        time/=60;
        unit= " hrs";
    };

    var message=day()+" "+amPm(hours,minutes)+task+endTime(hours,minutes,time)+"----->"+time+unit;

    createNode(message);

}

function doubleDigitMinutes(min){
    if (min<10)
        minutes="0"+min.toString();
        //console.log(minutes);    
    
    else 
        minutes=min;
        return minutes;
}

function endTime(startHr, startMin, duration){
	//console.log(startMin,duration);
	//var testMin=0;
    var endMin=Number(startMin)+duration;
    var endHr=startHr;
    
    if(endMin>59){
        endHr+=1;
        endMin-=60;
        endMin=doubleDigitMinutes(endMin);
        return amPm(endHr, endMin);
    }

    else{
        endMin=doubleDigitMinutes(endMin);
        return amPm(endHr, endMin);
    }

}


function amPm(hours,minutes){
    var ampm="am";
    var regTime=hours;
    if (regTime>=12){
        ampm="pm";
    }

    if(regTime>12){
        regTime=regTime-12; 
    } 

    return regTime+":"+minutes+" "+ampm;

}

function day() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[d.getDay()];
    return n;
}

function clearLog(){
    while(count>=1){
        removeNode();
    }
}

function removeNode(){
    var parent = document.getElementById("log");
    var child = document.getElementById(count);
    parent.removeChild(child);      
    count-=1;          
}

