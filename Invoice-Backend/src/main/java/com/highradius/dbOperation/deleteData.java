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
 * Servlet implementation class deleteData
 */
@WebServlet("/deleteData")
public class deleteData extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {		
		Connection con = null;
		
		try {
		HashMap<Object, Object> Response = new HashMap<Object, Object>();
		String dataId = request.getParameter("dataId");
		Class.forName("com.mysql.cj.jdbc.Driver");
		con = DriverManager.getConnection("jdbc:mysql://localhost:3306/invoice_data?", "root", "Manish@2001");
		PreparedStatement pst = con.prepareStatement("DELETE FROM data WHERE dataId=(?);");
		
		pst.setString(1, dataId);

		int rowCount = pst.executeUpdate();
		
		if(rowCount > 0) {
			request.setAttribute("status", "success");
		} else {
			request.setAttribute("status", "failed");
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
		
	}

}
