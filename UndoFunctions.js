///////////Undo Functions//////////////////


function storeTempValues(array){
	array.forEach(function(cat){
		tempValues[cat]=localStorage[cat];
		
	});
}

function storeIndividualValues(cat){
	tempTime=localStorage[cat];
    tempCat=cat;
}

function restoreTempValues(array){
	array.forEach(function(cat){
	localStorage[cat]=tempValues[cat];
	console.log(tempValues[cat]/60);
	postToElement(cat, cat);
	});
}




var tHistory=(function(){

	var timeHistory={};
	var count=0;
	var objName="time"+count;

	return{
		append: function (){
			count+=1;
			timeHistory["time"+count]={};
 
	 		categories.forEach(function(cat){
	 			timeHistory["time"+count][cat]=localStorage[cat];
 			});

  			
  		
  					},
		
		restore: function (f){
			if(count>1){
				count--;
			}
			
			
			console.log("time"+count);
			categories.forEach(function(cat){
				localStorage[cat]=timeHistory["time"+count][cat];
				//console.log(hours(timeHistory[objName][cat]));
				//console.log(hours(localStorage[cat]));
			});
			f(categories);
			
		}
	
		
		
	};

})();







function undo(array){

	console.log(lastAction);

	if(lastAction=="start"){
	}

	else if(lastAction=="upTime"){
		
		tHistory.restore(displayAll);	
		removeNode();
		goalVisual("");
	}
	else if(lastAction=="addTotals")
	{
			
			tHistory.restore(displayAll);	
			goalVisual("");

			if (array==weeklyCategories){
			restoreTempValues(weeklyCategories);
			}
	}

	else if(lastAction=="reset"){
		
		if(array==categories){
			restoreTempValues(categories);
		}

		if(array==weeklyCategories){
			restoreTempValues(weeklyCategories);
		}
	}

	else if(lastAction=="textEntry"){
		localStorage[tempCat]=tempTime;
		postToElement(tempCat,tempCat);
	}

	
}
