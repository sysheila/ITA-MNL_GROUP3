package practice;

public class HelloSpringInitDes {
	
	String message;

	public void getMessage() {
		System.out.println(message);
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
	public void init() {
		System.out.println("Been is going through Initializion...");
	}
	
	public void destroy() {
		System.out.println("Bean will be destroyed");
	}

}
