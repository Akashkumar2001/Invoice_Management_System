package com.highradius.dbOperation;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class searchData
 */
@WebServlet("/searchData")
public class searchData extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public searchData() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		HashMap<Object, Object> Response = new HashMap<Object, Object>();
		ArrayList<Data> Datas = new ArrayList<Data>();
		String customer_code = request.getParameter("customer_code");
		System.out.println(customer_code);
		
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/invoice_data?", "root", "Manish@2001");
			PreparedStatement pst = con.prepareStatement("SELECT * FROM data WHERE customer_code LIKE '(?)%'");
			System.out.println("pst - " + pst);
			pst.setString(1, customer_code);
			
			ResultSet rs = pst.executeQuery();
			
			System.out.println("rs - " + rs);
			while(rs.next()) {
				Data data = new Data(
						rs.getInt("dataId"),
						rs.getString("customer_code"), 
						rs.getString("customer_name"), 
						rs.getString("clear_date"), 
						rs.getString("business_year"), 
						rs.getString("document_id"), 
						rs.getString("posting_date"), 
						rs.getString("create_date"),
						rs.getString("due_date"), 
						rs.getString("currency"), 
						rs.getString("document_type"),
						rs.getString("posting_id"), 
						rs.getString("total_amount"),
						rs.getString("baseline_date"),
						rs.getString("payment_term"),
						rs.getString("invoice_id"));
				Datas.add(data);
			}
			Response.put("datas", Datas);			
		} catch(Exception e) {
			e.printStackTrace();
		}
		Gson gson = new Gson();
		String JSONresponse = gson.toJson(Response);
		System.out.println("Jsonresponse - " + Response);
		response.setHeader("Access-Control-Allow-Origin", "*");	
		response.getWriter().append(JSONresponse);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
