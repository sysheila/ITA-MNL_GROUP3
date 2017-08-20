<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Javascript</title>
</head>
<body>
	<p>1) Write a JavaScript function that creates a table, accept row, column numbers from the user, and input row-column number as content (e.g. Row-0 Column-0) of a cell.</p>
	<form id="tableFormId" onsubmit="createTable(); return false">
		Input number of rows and column:
		<table border=1px>
			<tr>
				<th>Rows: </th>
				<th><input type="number" name="nRows" value="3" /></th>
			</tr>
			<tr>
				<th>Column: </th>
				<th><input type="number" name="nColumn" value="3" /></th>
			</tr>
			<tr>
				<td><input type="submit" value="Create table"/></td>
			</tr>
		</table>
	</form>
	<canvas id="myPageCanvas1"></canvas>
	<script>
		function createTable(){
			//Prepare form and canvas
			var tableForm = document.getElementById("tableFormId");
			var firstCanvas = document.getElementById("myPageCanvas1");
			var firstContext = firstCanvas.getContext("2d");
			var bw=(20*tableForm.elements.nColumn.value), bh=(20*tableForm.elements.nRows.value), p=0;
			
			//Clear context
			firstContext.clearRect(0, 0, firstCanvas.width, firstCanvas.height);
			
			//Reset Canvas size
			function resizeCanvas(){
				firstCanvas.height = (tableForm.elements.nRows.value*20.5);
				firstCanvas.width = (tableForm.elements.nColumn.value*20.5);
			}
			resizeCanvas();
			
			//Draw table
			function drawBoard(){
				firstContext.beginPath();
				for (var x = 0; x <= bw; x += 20) {
					firstContext.moveTo(0.5 + x + p, p);
					firstContext.lineTo(0.5 + x + p, bh + p);
				}
				for (var x = 0; x <= bh; x += 20) {
					firstContext.moveTo(p, 0.5 + x + p);
					firstContext.lineTo(bw + p, 0.5 + x + p);
				}
				firstContext.strokeStyle = "black";
				firstContext.stroke();
			}
			drawBoard();
		}
	</script>
	
	<p>2) Use JavaScript to create a complex animation having, but not limited to, elements Object movements.</p>
	<button onclick="move()">click me to move</button>
	<div id ="outerBox" style="width:200px; height:200px; position:relative; background:black " >
	<div id ="innerBox" style="width:20px; height:20px; position:absolute; background:yellow "></div>
	<script type="text/javascript">
		//Prepare canvas and context
		function move() {
			var elem = document.getElementById("innerBox");
			var posR=0,posD=0,posL=180,posU=180;
			var idR = setInterval(moveRight, 10);
			var idD, idL, idU;
			function moveRight() {
				if (posR == 180) {
					clearInterval(idR);
					idD = setInterval(moveDown, 10);
				} else {
					posR++;
					//elem.style.top = posR + 'px';
					elem.style.left = posR + 'px';
				}
			}
			function moveDown() {
				if (posD == 180) {
					clearInterval(idD);
					idL = setInterval(moveLeft, 10);
				} else {
					posD++;
					elem.style.top = posD + 'px';
					//elem.style.left = posD + 'px';
				}
			}
			function moveLeft() {
				if (posL == 0) {
					clearInterval(idL);
					idU = setInterval(moveUp, 10);
				} else {
					posL--;
					//elem.style.top = posL + 'px';
					elem.style.left = posL + 'px';
				}
			}
			function moveUp() {
				if (posU == 0) {
					clearInterval(idU);
				} else {
					posU--;
					elem.style.top = posU + 'px';
					//elem.style.left = posU + 'px';
				}
			}
		}
	</script>
</body>
</html>