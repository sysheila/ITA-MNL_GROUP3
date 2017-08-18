package day7.JavaTraining.Assignment;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Bank
 */
@WebServlet("/Bank")
public class Bank extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private int savings = 0;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Bank() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
//		response.getWriter().append("Served at: ").append(request.getContextPath());
		String formId = "";
//		formId = request
		System.out.println(formId);
		response.sendRedirect("LoginPage.html");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}
	
	private void deposit(int deposit){
		this.savings += deposit;
	}
	
	private String withdraw(int withdraw){
		if(withdraw <= this.savings){
			this.savings -= withdraw;
			return "Successfully withdraw "+withdraw;
		}else{
			return "Insufficient fund";
		}
	}
	
	private String checkBalance(){
		return "Current account balance is "+this.savings;
	}

}
