package com.highradius.dbOperation;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class updatedata
 */
@WebServlet("/updateData")
public class updatedata extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public updatedata() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		try {
			HashMap<Object, Object> Response = new HashMap<Object, Object>();
			int dataId = Integer.parseInt(request.getParameter("dataId"));
			String currency = request.getParameter("currency");
			String payment_term = request.getParameter("payment_term");
			
			System.out.println("dataId = " + dataId);
			System.out.println("currency = " + currency);
			System.out.println("payment = " + payment_term);

			
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/invoice_data?", "root", "Manish@2001");
			PreparedStatement pst = con.prepareStatement("update data set currency=(?), payment_term=(?) where dataId=(?)");
			
			pst.setString(1, currency);
			pst.setString(2, payment_term);
			pst.setInt(3, dataId);
					
			if(pst.executeUpdate() > 0) {
				Response.put("status", true);
			} else {
				Response.put("status", false);
			}
			
			Gson gson = new Gson();
			String ResponseJSON =gson.toJson(Response);
			
			response.setHeader("Access-Control-Allow-Origin", "*");
			response.getWriter().append(ResponseJSON);
			
			System.out.println(ResponseJSON);
			
		} catch(Exception e) {
			e.printStackTrace();
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
