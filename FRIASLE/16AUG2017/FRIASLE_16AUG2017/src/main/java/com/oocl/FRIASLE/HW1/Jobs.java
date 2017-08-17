package com.oocl.FRIASLE.HW1;

public class Jobs extends Person{

	String jobName;
	String salary;
	Person ppl;

	public Person getPpl() {
		return ppl;
	}

	public void setPpl(Person ppl) {
		this.ppl = ppl;
	}

	public String getJobName() {
		return jobName;
	}

	public void setJobName(String jobName) {
		this.jobName = jobName;
	}

	public String getSalary() {
		return salary;
	}

	public void setSalary(String salary) {
		this.salary = salary;
	}
	
	public void getJobs() {
		System.out.println("Job is "+ jobName + " \nSalary is " + salary);
	}
	public void people() {
		System.out.println("Name is "+ this.ppl.name +" \nAddress is " + this.ppl.address);
	}

}
