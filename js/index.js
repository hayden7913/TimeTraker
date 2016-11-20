

var proj1= "Email Error";
var categories=["coding","solar"];
var weeklyCategories=["Wcoding","Wsolar"];
var tempTime=0;
var tempCat=" ";
var tempValues={};
var lastAction="start";

$(".proj1").text(proj1 + ": ");

appendCategories("variable");
displayAll(categories);
displayAll(weeklyCategories);
goalVisual("set");
//hideVariable.hide();
//tHistory.append();

//Implement Timer
const countdown = start => {
	const cd = setInterval(() => {
		console.log(start)
		if (start === 0) {
			console.log('Finished!');
			clearInterval(cd);
		}
		start--;
	}, 1000);
} 

const convert = seconds => {
	const timeObj = {
		min: Math.floor(seconds / 60 + " "),
		sec: seconds % 60 + " "
	}
	return(timeObj);
}

const reduceTime = time => {
	let seconds = time * 60; 
	const cd = setInterval(() => {
		if (seconds <= 0) {
			clearInterval(cd);
			var action = prompt("Type 's' to log another pomodoro");
			if (action === "s") {
				upTime("coding", 25)
				reduceTime (24.5);
			}
			console.log(action);
		}
		seconds--;
		if (seconds > 0) {
			renderTime(convert(seconds));	
		} 
	}, 1000);
} 

const renderTime = time => {
	$(".js-min").text(time.min);
	$(".js-sec").text(time.sec);
}

const initHandleBtn25 = el => {
	el.btn25.on("click", e => {
		e.preventDefault();
		//let time = el.input.val();
		let time = 24.5; 
		reduceTime(time);
		upTime("coding",25)
		this.reset;
	})
}

const main = () => {
	const el = {
		form: $("form"),
		input: $(".js-timeInput"),
		btn25: $("#btn25")
	}

	initHandleBtn25(el);
	//For Testing
	}

$(main());

//Render some stuff

function appendCategories(newCat){
	categories.push(newCat);
	weeklyCategories.push("W"+newCat);
}

function storageAddition(newVar,time){

	if(localStorage[newVar]){
		localStorage[newVar]=Number(localStorage[newVar])+time;	
	}


	else{
		localStorage[newVar]=time;
	}	
	
	goalVisual("set");
}



function displayAll(array){

	array.forEach(function(cat){
		postToElement(cat,cat);

	});
}

function postToElement(idName,cat){
	value=hours(localStorage[cat]);
	variableNodePrint(idName,value);
}

function nodePrint(idName,value){
	document.getElementById(idName).innerHTML=value;

}

function variableNodePrint(idName,value){
var hasVariable = idName.indexOf("variable")!=-1;
	var hasVariableAndGoalOrProgress=hasVariable && (idName.indexOf("Goals")!=-1||idName.indexOf("Progress")!=-1);
	
	if(!hasVariable){
		document.getElementById(idName).innerHTML=value;
	}

}

function hours(minutes){
	var hours=(Number(minutes)/60).toFixed(2);
	return hours;
}


/////////////Goal Visual///////////////


function printX(count){
	var printOut="";
	for(var i=0; i<count; i++){
			printOut+="X ";
		}
	return printOut;
}

function formatUnderTen(output,today,weekly){
	var returnString=output;
	if(weekly+today<10){
			returnString="&nbsp"+"&nbsp"+output;
	}
	return returnString;	
}

function colorFont(string,color){
	var returnString="<font color=\""+color+"\">"+string+"</font>";
	return returnString;
}


function goalVisual(arg){
	var goals={coding:20, solar:15, variable:2}
	var action=arg;
	
	categories.forEach(function(cat){

		var targetOut="<b>"+goals[cat].toString()+": </b>";
		var weekly=Number(localStorage["W"+cat])/60;
		var today=Number(localStorage[cat]/60);
		var progressCount=Math.floor(weekly+today);
		var progressOut="<b>"+progressCount+": "; 
		var idNameTarget=cat.toString()+"Goals";
		var idNameProgress=cat.toString()+"Progress";

		progressOut=formatUnderTen(progressOut,today,weekly);
		targetOut+=printX(goals[cat]);
		progressOut+=colorFont(printX(progressCount),"green");

		if(action=="erase"){
			progressOut="<b>"+"0:"+"</b>";			
		}
		

		variableNodePrint(idNameTarget,targetOut);
		variableNodePrint(idNameProgress,progressOut);

	
	});
}

///////////Text Boxes//////////////////////
$('input').on('keyup', function(e) {

        if ( e.keyCode === 13 ) { // 13 is enter key
              

                var addInput= function(cat){

                	if(cat.indexOf("variable")==-1){
                		console.log(cat);
	                	storeIndividualValues(cat);
	                    var idName=cat+'Box';
	                    var time=document.getElementById(idName).value;
	                    time=Number(time);
	                    storageAddition(cat,time);
	                    postToElement(cat,cat);
	                    printDate(time,cat);
	                    var time=0;
	                    lastAction="textEntry";
	
                	}
                    
                } 
            categories.forEach(addInput);  
            
            }
    });

