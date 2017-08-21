package com.oocl.castich.hw1;

import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Hw1 {
	
	public static void main(String[] args) {

		ApplicationContext context = new ClassPathXmlApplicationContext("hw1-bean.xml");
		Student student =  (Student) context.getBean("student");
		student.print();
	}

}

class Student{
	
	String id;
	String name;
	Teacher teacher; //Nested bean property
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Teacher getTeacher() {
		return teacher;
	}
	public void setTeacher(Teacher teacher) {
		this.teacher = teacher;
	}
	
	public void print() {
		System.out.println("ID: "+this.id);
		System.out.println("Name: "+this.name);
		System.out.println("Teacher: "+this.teacher.getName()+" ("+this.teacher.getAge()+" years old)");
	}
	
}
class Teacher{
	
	String name;
	String age;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
	
}



