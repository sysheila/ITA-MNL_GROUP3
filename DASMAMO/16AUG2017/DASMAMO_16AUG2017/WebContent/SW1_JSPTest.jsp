<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
		<title>JSP Exercise</title>
	</head>
	<%! int day = 3; %>
	<body>
		<h3>NUMBER 1</h3>
		Hostname: <%= request.getRemoteHost() %><br>
		Session Id: <%= session.getId() %>
		
		<h3>NUMBER 2</h3>
		<b>Multiples of 2:</b> <br>
		<% for(int i=2; i<=100; i+=2){ %>
			 <%= i %><br>
		<% } %>
		
		<h3>NUMBER 3</h3>
		<% java.util.Vector v = (java.util.Vector)session.getAttribute("array"); %>
		<% try{
			v.size();
			}
			catch(NullPointerException e){ %>
				<b>Null vector!</b>	
		<% 	} %>
		
	</body> 
</html>