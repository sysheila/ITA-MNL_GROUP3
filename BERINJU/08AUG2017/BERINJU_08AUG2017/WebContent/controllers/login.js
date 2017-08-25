/**
 * 
 */
init();

function init(){
	console.log("Initialization triggered.");
	
	var balance = 1000;
	 $(document).ready(function(){
	      $('.parallax').parallax();
	 });
	 
	 $(document).ready(function(){
		    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
		    $('.modal').modal();
	 });
}

function verify(){
	var user = document.getElementById("username").value;
	var pass = document.getElementById("password").value;
	if(user == "admin" && pass=="admin"){
		console.log("login successful");
		document.getElementById("error").style.visibility = "hidden";
		window.location.href = "main.html";
	}
	else{
		onError();
		console.log("error");
	}
}

function withdraw(){
	amount = document.getElementById("withdraw").value;
	balance = document.getElementById("balance").value;
	if(balance-amount >= 0){
		document.getElementById("balance").value = parseFloat(balance)-parseFloat(amount);
		$('#modal1').modal('open');
	}
	else{
		console.log("Insufficient funds");
		$('#modal2').modal('open');
	}
}


function deposit(){
	amount = document.getElementById("deposit").value;
	balance = document.getElementById("balance").value;
	if(amount >= 0){
		total = parseFloat(balance) + parseFloat(amount);
		document.getElementById("balance").value = total;
		$('#modal1').modal('open');
	}
	else{
		console.log("You have nothing to add.");
	}
}

function onError(){
	document.getElementById("error").style.visibility = "visible";
}





