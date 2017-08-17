package springAnnotationAutoWire;


import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainAppSpell {

	public static void main(String[] args) {

	      ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
	      TextEditor te = (TextEditor) context.getBean("textEditor");
	      te.spellCheck();

	}

}
