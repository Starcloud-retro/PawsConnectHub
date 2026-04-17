package com.pawsconnect.controller;

import com.pawsconnect.dao.UserDAO;
import com.pawsconnect.model.User;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;

import com.google.gson.Gson;
import com.google.gson.JsonObject;

@WebServlet("/register")
public class RegisterServlet extends HttpServlet {
    
    private UserDAO userDAO;

    @Override
    public void init() {
        userDAO = new UserDAO();
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        PrintWriter out = response.getWriter();
        Gson gson = new Gson();
        JsonObject jsonResponse = new JsonObject();

        String fullName = request.getParameter("fullName");
        String email = request.getParameter("email");
        String password = request.getParameter("password");
        
        // Basic validation
        if (fullName == null || email == null || password == null || fullName.isEmpty() || email.isEmpty() || password.isEmpty()) {
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            jsonResponse.addProperty("error", "All fields are required.");
            out.print(gson.toJson(jsonResponse));
            out.flush();
            return;
        }

        User user = new User(0, fullName, email, password);
        
        if (userDAO.registerUser(user)) {
            // Registration success
            jsonResponse.addProperty("success", true);
            out.print(gson.toJson(jsonResponse));
        } else {
            // Registration failed (e.g. email already exists)
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            jsonResponse.addProperty("error", "Registration failed. Email might already be in use.");
            out.print(gson.toJson(jsonResponse));
        }
        out.flush();
    }
}
