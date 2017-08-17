package practice;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {
	
	public static void main(String[] args) {
		
		ApplicationContext obj = new ClassPathXmlApplicationContext("./com/oocl/FRIASLE/SW/bean.xml");
		HelloSpringTest context = (HelloSpringTest) obj.getBean("helloSpring");
		context.getMessage();
		
	}

}
