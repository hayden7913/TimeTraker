/////////////////Text Boxes//////////////////////

$('#codeBox').bind('keyup', function(e) {

    if ( e.keyCode === 13 ) { // 13 is enter key
    	
    	var element="codeBox";
    	var cat="coding";
    	storeIndividualValues(cat);
        var time=document.getElementById(element).value;
        time=Number(time)*60;
        storageAddition(cat,time);
        postToElement(cat,cat);
        printDate(time);
        var time=0;
        printDate(time);
        lastAction="textEntry";
    }

});

$('#solarBox').bind('keyup', function(e) {

    if ( e.keyCode === 13 ) { // 13 is enter key
    	var element="solarBox";
    	var cat="solar";
    	storeIndividualValues(cat);
        var time=document.getElementById(element).value;
        time=Number(time)*60;
        storageAddition(cat,time);
        postToElement(cat,cat);
        printDate(time);
        var time=0;
        lastAction="textEntry";
    }

});

$('#bedBugBox').bind('keyup', function(e) {

    if ( e.keyCode === 13 ) { // 13 is enter key
    	var element="bedBugBox";
    	var cat="bedBugs";
    	storeIndividualValues(cat);
        var time=document.getElementById(element).value;
        time=Number(time)*60;
        storageAddition(cat,time);
        postToElement(cat,cat);
        printDate(time);
        var time=0;
        lastAction="textEntry";
    }

});