<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>JSP Exercise</title>
</head>
<body>
	<h2>Hello World!</h2>

	<div>
	<%@ page import="java.net.*"%>
	<%@ page import="java.util.*"%>
		<%="Host name: "+ InetAddress.getLocalHost().getHostName() %> <br/>
		<%="SessionID: "+ session.getId() %><br/>
	</div>
	<h2> Multiples of 2</h2>
	<% 
		int mult = 0;
		for(int i=0; i<100; i++){ 
			mult+=2;
	%>
		<%= mult %>
	<% 	} %>
	<h2>Null Vector</h2>
	<div>
 	
 	
 	<% Vector vec = null;
 	
 		try{
 			vec.size();
 		}catch(NullPointerException e ) { 
 			out.println(e);
 		
 		} 
 	%>

 	
	</div>

</body>
</html>