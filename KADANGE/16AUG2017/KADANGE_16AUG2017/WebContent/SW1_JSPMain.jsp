<%@page import="java.util.Vector"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>JSP Main</title>
</head>
<%! int day=3; %>
<body>
	<p>
		<b>Number 1</b><br/>
		Host name: <%= request.getServerName() %> <br/>
		Session: <%= request.getSession().getId() %> <br/>
	</p>
	<p>
		<b>Number 2</b><br/>
		<% 
			for(int i=0; i<=10; i++){
		%>
			Multiples of 2:  <%= i*2 %><br/>
		<%		
			}
		%>
	</p>
	<p>
		<b>Number 3</b></br/>
		<%
			Vector v = (java.util.Vector)session.getAttribute("array");
			try{
				if(v == null){
		%>
					Initializing vector...
		<%
					v = new Vector();
				}else{
		%>
					Vector size is <%= v.size() %>
		<%
				}
				
			}catch(Exception e){
				e.fillInStackTrace();
		%>
				Vector is null
		<%
			}
		%>
	</p>
</body>
</html>