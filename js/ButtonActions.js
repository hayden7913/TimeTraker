

/////////Button Actions///////////////



var hideVariable=(function(){
    var localCounter=0;

    return{
    
        hide: function(){
            if(localCounter%2==0){

                document.getElementById("WbedBugs").style.visibility="hidden";
                document.getElementById("bedBugs").style.visibility="hidden";
            }

            else{
                document.getElementById("WbedBugs").style.visibility="visible";
                document.getElementById("bedBugs").style.visibility="visible";

            }
            localCounter++;
        }   
    }
})();

function upTime(cat,time){
	storageAddition(cat,time);
	tHistory.append();
	
	if(cat=="variable"){

		value=(localStorage[cat]/60).toFixed(2);
		nodePrint("WbedBugs",value);

	}

	else{
	postToElement(cat,cat);		
	}
	tempTime=time;
	tempCat=cat;
	lastAction="upTime";
	printDate(time,cat);

}

function upSpecificTime(cat){
	var time=document.getElementById("codeBox");
	storageAddition(cat,time);
	displayAll(categories);
	
}

function reset(array){
	
	storeTempValues(array);
	array.forEach(function(cat){
		localStorage[cat]=0
	});

	displayAll(array);

	if (array==categories){
		goalVisual("");
	}

	if (array==weeklyCategories){
		goalVisual("erase");
		localStorage["variable"]=0;
		nodePrint("WbedBugs",localStorage["variable"]);
	}
	
	lastAction="reset";

}

function addTotals(){
	storeTempValues(weeklyCategories);
	storeTempValues(categories);

	categories.forEach(function(cat){
		var wcat="W"+cat;	
		storageAddition(wcat,Number(localStorage[cat]));
		postToElement(wcat,cat);
	});

	displayAll(weeklyCategories);
	reset(categories);
	lastAction="addTotals";
}
