<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="./bt/css/bootstrap.min.css"
	media="screen" />
</head>
<script language="javascript">
	function Deposit() {

		document.getElementById("balancer").disabled = true;
		var balance = document.getElementById("balancer").value;
		var a = document.getElementById("inputter").value;
		var c = Number(balance) + Number(a);

		if (Number(a) > 10000) {
			alert("Input exceeds 10000. Not Allowed");
		} else {
			document.getElementById('balancer').value = c;
		}

	}
	function getBalance() {
		alert("balance is " + document.getElementById("balancer").value);
	}
	function Withdraw() {
		document.getElementById("balancer").disabled = true;
		var balance = document.getElementById("balancer").value;
		var a = document.getElementById("inputter").value;
		var c = Number(balance) - Number(a);
		if (c < 0) {
			alert("Invalid Withdrawal");
		} else {
			document.getElementById('balancer').value = c;
		}

	}
	function consol() {
		var a = document.getElementById("selection");
		var b = a.options[a.selectedIndex].value;
		if (b == 1) {
			Withdraw();
		} else if (b == 2) {
			Deposit();
		} else if (b == 3) {
			getBalance();
		}

	}
</script>
<body>
	<bold>Welcome : <%=request.getParameter("varValue")%> <%=request.getParameter("varResult")%></bold>

	<form>
		<div class="form-group">
			<select id="selection">
				<option value="" disabled="disabled" selected="selected">Please select an action</option>
				<option value="1">Withdraw</option>
				<option value="2">Deposit</option>
				<option value="3">Balance</option>

			</select>
		</div>
		<div class="form-group">
			<label for="input">Input</label> <input id="inputter" type="text"
				name="varValue" class="form-control" value="100">
		</div>
		<div class="form-group">
			<label for="input">Balance</label> <input id="balancer" type="text"
				name="varResult" value="0"> <br> <br> <input
				onClick="consol()" class="form-control" type="button" value="Enter">
		</div>
	</form>


</body>
</html>
