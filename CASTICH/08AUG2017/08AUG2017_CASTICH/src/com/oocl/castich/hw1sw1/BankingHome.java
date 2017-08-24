package com.oocl.castich.hw1sw1;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class BankingHome
 */
@WebServlet("/BankingHome")
public class BankingHome extends HttpServlet {
	private static final long serialVersionUID = 1L;
    private Account account;
    /**
     * @see HttpServlet#HttpServlet()
     */
    public BankingHome() {
        super();
        
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		RequestDispatcher view = request.getRequestDispatcher("banking_home.html");
		view.forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
//		String num = request.getParameter("acctNum");
//		String pin = request.getParameter("pin");
//		
//		account = new Account(20000);
//		account.setNumber(num);
//		account.setPin(pin);
//		doGet(request, response);
	}
	
	
	public void test() {
		
	}

}
