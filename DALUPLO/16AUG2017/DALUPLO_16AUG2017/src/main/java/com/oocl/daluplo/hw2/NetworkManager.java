package com.oocl.daluplo.hw2;


public class NetworkManager {
	HttpConnection httpConnection;
	
	
	public HttpConnection getHttpConnection() {
		return httpConnection;
	}

	public void setHttpConnection(HttpConnection httpConnection) {
		this.httpConnection = httpConnection;
	}

	public void init(){
	  this.httpConnection.connect();
   }
   public void destroy() {
	   this.httpConnection.disconnect();
   } 

}
