# 🐾 PawsConnect

A community-driven platform where animals find loving homes.  
Buy, sell, and connect with verified pet owners and animal lovers.

---

## 🚀 Features

- 🐶 Buy & Sell Animals
- ✅ Verified Sellers
- 📍 GPS Photo Proof
- 👥 Community Interaction
- 🔐 Authentication System (Login/Register/Session)
- 🗄️ MySQL Database Integration

---

## 🏗️ Tech Stack

| Layer        | Technology |
|-------------|------------|
| Frontend    | HTML, CSS, JavaScript |
| Backend     | Java Servlets |
| Database    | MySQL |
| Build Tool  | Maven |
| Server      | Apache Tomcat |
| IDE         | IntelliJ IDEA |

---

## 📂 Project Structure

src/
└── main/
├── java/com/pawsconnect/
│ ├── controller/
│ ├── dao/
│ ├── model/
│ └── util/
│
├── resources/
│ └── schema.sql
│
└── webapp/
├── index.html
├── login.html
├── marketplace.html
├── community.html
├── blog.html
└── js/
└── auth.js


---

## ⚙️ Prerequisites

Make sure you have:

- Java JDK 17+
- IntelliJ IDEA (Ultimate recommended)
- Apache Tomcat (9 or 10)
- MySQL Server
- Maven

---

## 🧠 Setup Guide (Step-by-Step)

### 1. Clone the Repository

bash

git clone https://github.com/Starcloud-retro/PawsConnectHub.git
cd PawsConnectHub

### 2. Open in IntelliJ
Open IntelliJ → Open Project
Select the project folder


### 3. Configure SDK

Go to:

File → Project Structure → Project

Set SDK → JDK 17 or above

### 4. Setup Maven

If not auto-detected:

Right-click pom.xml → Add as Maven Project

### 5. Configure Database

Open MySQL

Run:
CREATE DATABASE pawsconnect;
USE pawsconnect;
Import schema:
SOURCE src/main/resources/schema.sql;

### 6. Update DB Credentials

Go to:

src/main/java/com/pawsconnect/util/DBConnection.java

Update:

private static final String URL = "jdbc:mysql://localhost:3306/pawsconnect";
private static final String USER = "root";
private static final String PASSWORD = "your_password";

### 7. Configure Tomcat Server

Go to: Run → Edit Configurations
Add → Tomcat Server → Local
Set Application Server → Your Tomcat Folder

### 8. Add Deployment

In Deployment tab → Click "+"
Select:
PawsConnect:war exploded

### 9. Verify Artifact

Go to:

File → Project Structure → Artifacts

Make sure it contains:

WEB-INF
Web facet resources

### 10. Run Project

Click ▶️ Run

Open browser:

http://localhost:8080/PawsConnect/

| Action   | Servlet         |
| -------- | --------------- |
| Register | RegisterServlet |
| Login    | LoginServlet    |
| Logout   | LogoutServlet   |
| Session  | SessionServlet  |


### 🔄 How It Works

User submits form (HTML)
JavaScript sends request
Servlet handles request
DAO interacts with database
Response returned as JSON
Frontend updates UI

### 🧪 Testing

Register a new user
Login
Check session
Logout

### ⚠️ Common Errors

404 Error
Check URL: /PawsConnect/
Ensure artifact deployed

Database Error
MySQL running
Credentials correct

Servlet Not Working
Check web.xml
Check mappings
Blank Page
Check browser console (F12)

### 📌 Notes
Uses WAR exploded deployment
Built with pure Servlets (no Spring Boot)
Good for learning backend fundamentals

### 💡 Future Improvements

Convert to Spring Boot
Add REST APIs
JWT Authentication
React Frontend

### 👨‍💻 Author's

### Zaheer Abbas (Starcloud-retro)
### Metri Naveen (metrinaveen08)
B.Tech CSE (AI & ML)
