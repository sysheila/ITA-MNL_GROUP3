package com.oocl.castich.sw1;

import java.util.List;
import java.util.Date;
import java.util.Iterator;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class ManageEmployee {
	private static SessionFactory factory;

	public static void main(String[] args) {
		try {
			factory = new Configuration().configure().buildSessionFactory();
		} catch (Throwable ex) {
			System.err.println("Failed to create sessionFactory object." + ex);
			throw new ExceptionInInitializerError(ex);
		}
		ManageEmployee ME = new ManageEmployee();

		/* Add few employee records in database */
		Integer empID1 = ME.addEmployee("Junjun", "Biswas", 2000);
		Integer empID2 = ME.addEmployee("Teresa", "Das", 5000);
		Integer empID3 = ME.addEmployee("Miley", "Earth", 15000);

//		/* List down all the employees */
//		ME.listEmployees();
//
//		/* Update employee's records */
//		ME.updateEmployee(empID1, 5000);
//
//		/* Delete an employee from the database */
//		ME.deleteEmployee(empID2);
//
//		/* List down new list of the employees */
		ME.listEmployees();
	}

	/* Method to CREATE an employee in the database */
	public Integer addEmployee(String fname, String lname, int salary) {
		Session session = factory.openSession();
		Transaction tx = null;
		Integer employeeID = null;
		try {
			tx = session.beginTransaction();
			
			Employee employee = new Employee(fname, lname, salary);
			
			if(findEmployeeByName(employee.getFirstName(), employee.getLastName())) {
				System.out.println("Employee "+ employee.getFirstName()+" "+employee.getLastName() +" already exists!");
			}
			else {
				employeeID = (Integer) session.save(employee);
			}
			tx.commit();
		} catch (HibernateException e) {
			if (tx != null)
				tx.rollback();
			e.printStackTrace();
		} finally {
			session.close();
		}
		return employeeID;
	}

	/* Method to READ all the employees */
	public void listEmployees() {
		Session session = factory.openSession();
		List employees = session.createQuery("FROM Employee").list();
		for (Iterator iterator = employees.iterator(); iterator.hasNext();) {
			Employee employee = (Employee) iterator.next();
			System.out.println(employee.getFirstName()+"\t"+employee.getLastName()+"\t"+ employee.getSalary());
		}
	}

	/* Method to UPDATE salary for an employee */
	public void updateEmployee(Integer EmployeeID, int salary) {
		Session session = factory.openSession();
		Transaction tx = null;
		try {
			tx = session.beginTransaction();
			Employee employee = (Employee) session.get(Employee.class, EmployeeID);
			employee.setSalary(salary);
			session.update(employee);
			tx.commit();
		} catch (HibernateException e) {
			if (tx != null)
				tx.rollback();
			e.printStackTrace();
		} finally {
			session.close();
		}
	}

	/* Method to DELETE an employee from the records */
	public void deleteEmployee(Integer EmployeeID) {
		Session session = factory.openSession();
		Transaction tx = null;
		try {
			tx = session.beginTransaction();
			Employee employee = (Employee) session.get(Employee.class, EmployeeID);
			session.delete(employee);
			tx.commit();
		} catch (HibernateException e) {
			if (tx != null)
				tx.rollback();
			e.printStackTrace();
		} finally {
			session.close();
		}
	}
	
	public boolean findEmployeeByName(String firstName, String lastName) {
		Session session = factory.openSession();
		String hql = "FROM Employee e WHERE e.firstName='"+firstName+"' AND e.lastName='"+lastName+"'";
		Employee employee = (Employee)session.createQuery(hql).uniqueResult();
		if(employee!=null) {
			return true;
		}
		return false;
	}
}