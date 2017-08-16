<html>
<body>
<h2>Hello World!</h2>

<strong
><p>Exercise # 1</p></strong>
 Hostname: <%= request.getRemoteHost() %><br>
 Session Id: <%= session.getId() %>
 
<strong
><p>Exercise # 2</p></strong>
 <% for(int i=2; i<=20; i+=2){ %> 
	  <p><%= i %></p>
 <%  } %>

<strong
><p>Exercise # 3</p></strong>
 <% java.util.Vector v = (java.util.Vector)session.getAttribute("array"); %>
  <% try { v.size(); 
  }catch(Exception x){
	  %>
	  <p>Vector is null boiz</p>
	 <%x.printStackTrace();
  }%>

</body>
</html>
