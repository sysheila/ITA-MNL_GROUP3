<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ page errorPage="Error.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Error Handling Examplee</title>
</head>
<body>

<body>
	<%
		// Throw an exception to invoke the error page
		String vector = "";

		if (vector.length() == 0) {
			throw new RuntimeException("Error condition!!!");
		}
	%>
	Success
</body>


</html>