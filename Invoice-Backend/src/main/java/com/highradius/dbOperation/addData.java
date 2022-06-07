package com.highradius.dbOperation;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.HashMap;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.gson.Gson;

/**
 * Servlet implementation class addData
 */
@WebServlet("/addData")
public class addData extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Connection con = null;
		try {
			HashMap<Object, Object> Response = new HashMap<Object, Object>();
			String code = request.getParameter("code");
			String name = request.getParameter("name");
			String clear_date = request.getParameter("clear_date");
			String year = request.getParameter("year");
			String doc_id = request.getParameter("doc_id");
			String posting_date = request.getParameter("posting_date");
			String create_date = request.getParameter("create_date");
			String due_date = request.getParameter("due_date");
			String currency = request.getParameter("currency");
			String doc_type = request.getParameter("doc_type");
			String posting_id = request.getParameter("posting_id");
			String tot_amount = request.getParameter("tot_amount");
			String baseline_date = request.getParameter("baseline_date");
			String payment_term = request.getParameter("payment_term");
			String invoice_id = request.getParameter("invoice_id");
			
			System.out.println("code = " + code + "name = " + name + "clear date = " + clear_date + "year = " + year + "doc id = " + doc_id + "posting_id = " + posting_id + "create date = " + create_date+
					"due date = " + due_date + "currency = " + currency + "doc type = " + doc_type + "posting id = " + posting_id + "tot amount = " + tot_amount + 
					"baseline date" + baseline_date + "payment term" + payment_term + "invoice id = " + invoice_id);		
			
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/invoice_data?", "root", "Manish@2001");
			PreparedStatement pst = con.prepareStatement("insert into data(customer_code, customer_name, clear_date, business_year, "
					+ "document_id, posting_date, create_date, due_date, currency, document_type, "
					+ "posting_id, total_amount, baseline_date, payment_term, invoice_id) "
					+ "values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
			
			pst.setString(1, code);
			pst.setString(2, name);
			pst.setString(3, clear_date);
			pst.setString(4, year);
			pst.setString(5, doc_id);
			pst.setString(6, posting_date);
			pst.setString(7, create_date);
			pst.setString(8, due_date);
			pst.setString(9, currency);
			pst.setString(10, doc_type);
			pst.setString(11, posting_id);
			pst.setString(12, tot_amount);
			pst.setString(13, baseline_date);
			pst.setString(14, payment_term);
			pst.setString(15, invoice_id);
			
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
		} finally {
			try {
				con.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
  
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
