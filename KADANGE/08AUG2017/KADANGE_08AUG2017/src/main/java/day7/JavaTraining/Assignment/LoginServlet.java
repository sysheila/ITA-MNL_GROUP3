package day7.JavaTraining.Assignment;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Bank
 */
@WebServlet("/Login")
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoginServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
//		response.getWriter().append("Served at: ").append(request.getContextPath());
		String uName=request.getParameter("username");
		String pass=request.getParameter("password");
		
		Cookie uNameCookie = new Cookie("username",uName);
		uNameCookie.setMaxAge(10);
		Cookie passCookie = new Cookie("password",pass);
		passCookie.setMaxAge(10);
		
		/*HttpSession session = new HttpSession();*/
//		RequestDispatcher view;
		try{
			if(uName==null && pass==null){
//				view = request.getRequestDispatcher("LoginPage.html");
//				view.forward(request, response);
				response.sendRedirect("LoginPage.html");
			}else{
				if((uName.equals("admin") && pass.equals("admin")) || (uName.equals("gskadano") && pass.equals("qwerty"))){
//					view = request.getRequestDispatcher("HomePage.html");
//					view = request.getRequestDispatcher("LoginError.html");
//					view.forward(request, response);
					response.addCookie(uNameCookie);
					response.addCookie(passCookie);
					response.sendRedirect("HomePage.html");
				}else{
//					view = request.getRequestDispatcher("LoginError.html");
//					view.forward(request, response);
					response.sendRedirect("LoginError.html");
				}
			}
		}catch(Exception e){
//			view = request.getRequestDispatcher("LoginError.html");
//			view.forward(request, response);
			response.sendRedirect("LoginError.html");
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
