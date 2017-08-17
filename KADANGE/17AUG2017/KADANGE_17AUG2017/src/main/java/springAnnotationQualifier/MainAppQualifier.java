package springAnnotationQualifier;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainAppQualifier {

	public static void main(String[] args) {

		ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");

		Profile profile = (Profile) context.getBean("profile");
		profile.printAge();
		profile.printName();
	}

}
