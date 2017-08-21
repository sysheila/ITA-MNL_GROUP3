<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<script src="jquery.js"></script>
<script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<title>JSP World</title>
</head>
<body>
<div class="container">
<div class="row">
	<div class="col-md-12">
		<%@ page import="java.net.*" %>
		<%@ page import="java.util.Vector" %>
		
		<h1 class="text text-info">Hello World</h1>
		<%= "Your IP address: "+ request.getRemoteAddr() %><br/>
		<%= "Your Session ID: "+ session.getId() %><br/>
		<%= "Your Host Name: "+ InetAddress.getLocalHost().getHostName() %>
		<br/><br/>
		
		<h1 class="text text-info">Multiples of 2</h1>
		<% for(int i=1; i<=200; i++){ %>
			<% if(i%2==0){ %>
				<%= i+" " %>
			<% } %>
		<% } %>
		
		<br/><br/>
		<h1 class="text text-info">Exception Handling</h1>
		<%! Vector v = null; %>
		<%
			try{
				v.size();
			}
			catch(NullPointerException e){
				out.println(e);
			}
			finally{
				out.println("<br/>Finally!");
			}
		%>
	</div>
</div>
</div>
</body>
</html>