package practice;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class mainHelloSpringInitDes {

	public static void main(String[] args) {
		ApplicationContext objOne = new ClassPathXmlApplicationContext("./com/oocl/FRIASLE/SW/bean.xml");
		HelloSpringInitDes contextOne = (HelloSpringInitDes) objOne.getBean("helloSpring2");
		contextOne.getMessage();
		
	}

}
