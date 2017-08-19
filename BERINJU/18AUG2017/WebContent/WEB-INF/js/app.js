/**
 * 
 */


init = function(){
	console.log("app.js initialized");
}


genTable = function(){
	var rowSize = 0;
	var colSize = 0;
	
    rowSize = document.getElementById("rowSize").value;
	colSize = document.getElementById("colSize").value;
    var table = document.getElementById("myTable");
    
    if(table.rows.length != 0){
    	clearTable(table);
    }
    
    for(var i =0 ; i < rowSize ; i++){
    	var row = table.insertRow(i);
    	for(var j = 0 ; j < colSize ; j++){
    		var cell = row.insertCell(j);
    		 cell.innerHTML = "Row-" + i + " Col-" + j;
    	}
    	
    }
	
}

clearTable = function(table){
	var length = table.rows.length;
	for(var i=0 ; i < length ; i++){
    	table.deleteRow(0);
    }
}


main = function(){
	init();
}

main();

