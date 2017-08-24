package com.oocl.daluplo.sw2;

class ChatRoom{  
	boolean flag = false;
	
    synchronized void Question(String tname, String msg){  
        if(flag) {
        	try{
        		wait();
        	}catch(InterruptedException e) {
        		e.printStackTrace();
        	}
        }
        System.out.println(tname + ": " + msg);
        flag=true;
        notify();
    }  
      
    synchronized void Answer(String tname, String msg){  
    	if(!flag) {
        	try{
        		wait();
        	}catch(InterruptedException e) {
        		e.printStackTrace();
        	}
        }
    	System.out.println(tname + ": " + msg);
        flag=false;
        notify(); 
    }  
    
    
}  


class P1 implements Runnable{
	ChatRoom tchat;
	String tname;
	String[] que = {"Hey!", "This is crazy", "so call you maybe? ;)"};
	
	public P1(String name, ChatRoom chat){
		this.tname = name;
		this.tchat = chat;
		new Thread(this,"Question").start();
	}
	
	@Override
	public void run() {
		for(int i =0; i < que.length ;i++) {
			tchat.Question(tname, que[i]);
		}
	}
}
class P2 implements Runnable{
	ChatRoom tchat;
	String tname;
	String[] ans= {"I just met you", "Here's my number  ;)", "yeeeey!"};
	
	public P2(String name, ChatRoom chat){
		this.tname = name;
		this.tchat = chat;
		new Thread(this,"Answer").start();
	}
	
	@Override
	public void run() {
		for(int i =0; i < ans.length ;i++) {
			tchat.Answer(tname, ans[i]);
		}
	}
}



      
 class interThreadChat{  
        public static void main(String args[]){  
            ChatRoom c=new ChatRoom();  
            P1 person1 = new P1("Boy", c);
            P2 person2 = new P2("Girl", c);
          
        }
}


