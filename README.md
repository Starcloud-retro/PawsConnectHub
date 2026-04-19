<div align="center">

<h1>PawsConnect Hub</h1>

<h3>Community Platform for Pet Lovers, Marketplace, and Session-Based Authentication</h3>

<p>
  <a href="https://github.com/Code-Crew-Nexus/PawsConnectHub"><img src="https://img.shields.io/badge/status-active-brightgreen" alt="Project Status"></a>
  <a href="https://github.com/Code-Crew-Nexus/PawsConnectHub"><img src="https://img.shields.io/badge/license-MIT-informational" alt="License"></a>
  <a href="https://www.oracle.com/java/"><img src="https://img.shields.io/badge/Java-26-orange" alt="Java"></a>
  <a href="https://maven.apache.org/"><img src="https://img.shields.io/badge/Build-Maven-blue" alt="Maven"></a>
  <a href="https://tomcat.apache.org/"><img src="https://img.shields.io/badge/Server-Tomcat%2010-lightgrey" alt="Tomcat"></a>
</p>

<p>
  <a href="https://github.com/Code-Crew-Nexus/PawsConnectHub/stargazers"><img src="https://img.shields.io/github/stars/Code-Crew-Nexus/PawsConnectHub?style=social" alt="GitHub stars"></a>
  <a href="https://github.com/Code-Crew-Nexus/PawsConnectHub/network/members"><img src="https://img.shields.io/github/forks/Code-Crew-Nexus/PawsConnectHub?style=social" alt="GitHub forks"></a>
  <a href="https://github.com/Code-Crew-Nexus/PawsConnectHub/watchers"><img src="https://img.shields.io/github/watchers/Code-Crew-Nexus/PawsConnectHub?style=social" alt="GitHub watchers"></a>
</p>

<h2>Languages and Tools 🛠️</h2>

<p>
  <a href="https://www.oracle.com/java/"><img src="https://img.shields.io/badge/Java-ED8B00?logo=openjdk&amp;logoColor=white" alt="Java"></a>
  <a href="https://jakarta.ee/specifications/servlet/"><img src="https://img.shields.io/badge/Jakarta%20Servlet-API-red" alt="Jakarta Servlet"></a>
  <a href="https://maven.apache.org/"><img src="https://img.shields.io/badge/Apache%20Maven-C71A36?logo=apachemaven&amp;logoColor=white" alt="Maven"></a>
  <a href="https://www.mysql.com/"><img src="https://img.shields.io/badge/MySQL-4479A1?logo=mysql&amp;logoColor=white" alt="MySQL"></a>
  <a href="https://tomcat.apache.org/"><img src="https://img.shields.io/badge/Apache%20Tomcat-F8DC75?logo=apachetomcat&amp;logoColor=black" alt="Tomcat"></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&amp;logoColor=white" alt="HTML5"></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&amp;logoColor=white" alt="CSS3"></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&amp;logoColor=black" alt="JavaScript"></a>
</p>

</div>

## Project Analysis 🔍

PawsConnect Hub is a Java Servlet web application packaged as a WAR file and deployed on [Apache Tomcat](https://tomcat.apache.org/). The current implementation provides user registration/login/session management and static pages for marketplace and community experiences.

High-level architecture flow:

1. Browser UI pages submit authentication requests.
2. Servlet controllers validate input and process requests.
3. DAO layer executes SQL operations through JDBC.
4. JSON responses are returned to the frontend.
5. User session state is managed using HttpSession.

## What It Does ✨

- Registers users through a servlet endpoint.
- Authenticates users and creates sessions.
- Exposes current session details as JSON.
- Invalidates sessions on logout.
- Serves static pages for index, blog, community, marketplace, and login.

## Features 🚀

- Java Servlet authentication module.
- Session-aware frontend navbar behavior.
- MySQL-backed persistence layer.
- SQL schema for users, posts, and marketplace items.
- Maven WAR build pipeline.
- Vercel rewrites for static route mapping in [vercel.json](vercel.json).

## Project Structure 🗂️

```text
PawsConnectHub/
|-- pom.xml
|-- vercel.json
|-- .gitignore
|-- .gitattributes
|-- README.md
|-- docs/
|   |-- DATABASE_SETUP.MD
|   `-- requirement.txt
|-- src/
|   `-- main/
|       |-- java/com/pawsconnect/
|       |   |-- controller/
|       |   |   |-- LoginServlet.java
|       |   |   |-- LogoutServlet.java
|       |   |   |-- RegisterServlet.java
|       |   |   `-- SessionServlet.java
|       |   |-- dao/
|       |   |   `-- UserDAO.java
|       |   |-- model/
|       |   |   `-- User.java
|       |   `-- util/
|       |       `-- DBConnection.java
|       |-- resources/
|       |   `-- schema.sql
|       `-- webapp/
|           |-- index.html
|           |-- login.html
|           |-- marketplace.html
|           |-- community.html
|           |-- blog.html
|           `-- js/
|               `-- auth.js
`-- target/
```

## Requirements 📋

Full requirements are listed in:

- [docs/requirement.txt](docs/requirement.txt)

Quick view:

- [JDK 26](https://www.oracle.com/java/)
- [Maven 3.9+](https://maven.apache.org/)
- [Apache Tomcat 10+](https://tomcat.apache.org/)
- [MySQL 8+](https://www.mysql.com/)
- [Git](https://git-scm.com/)

## Database Setup Guide 🗄️

Database initialization, schema import, credential configuration, and troubleshooting are documented in a dedicated guide.

- Purpose: keep database instructions centralized, detailed, and easy to maintain.
- Open guide: [docs/DATABASE_SETUP.MD](docs/DATABASE_SETUP.MD)

## Clone the Repository 📥

Use these commands to copy the project locally and move into the project root:

```bash
git clone https://github.com/Code-Crew-Nexus/PawsConnectHub.git
cd PawsConnectHub
```

After cloning, confirm you are in the correct directory:

```bash
pwd
```

Expected output ends with `PawsConnectHub`.

## Environment Setup ⚙️

Configure the full development environment first. This section only prepares tools and dependencies.

### 1. Verify Java installation

Install JDK 26, then run:

```bash
java -version
javac -version
```

Confirm both commands return Java 26.

### 2. Verify Maven installation

Install Maven 3.9+, then run:

```bash
mvn -version
```

Confirm Maven is detected and uses the same Java installation.

### 3. Complete database setup using the dedicated guide

Follow [docs/DATABASE_SETUP.MD](docs/DATABASE_SETUP.MD) for:

- MySQL verification
- Database creation
- Schema import
- DBConnection credential update
- Connection validation and DB troubleshooting

### 4. Prepare Apache Tomcat

Install [Apache Tomcat 10+](https://tomcat.apache.org/), then identify your Tomcat home folder.

Common locations:

- Windows: `C:\apache-tomcat-10.x.x`
- Linux/Arch: `/opt/tomcat` or `/usr/share/tomcat`

### 5. Build the project artifact

From the project root, run:

```bash
mvn clean package
```

On success, WAR file is generated at [target/PawsConnect.war](target/PawsConnect.war).

## Step-by-Step: Running the Program ▶️

Use this section after environment setup is complete.

### Option A: Run via Tomcat deployment (recommended)

1. Copy [target/PawsConnect.war](target/PawsConnect.war) to Tomcat's webapps folder.
2. Start Tomcat server.
3. Wait until deployment logs show app deployment completed.
4. Open [http://localhost:8080/PawsConnect/](http://localhost:8080/PawsConnect/).
5. Open [http://localhost:8080/PawsConnect/login.html](http://localhost:8080/PawsConnect/login.html) to test auth flow.

### Option B: Run via IntelliJ IDEA

1. Open project in IntelliJ IDEA.
2. Configure project SDK as Java 26.
3. Add a Tomcat Local run configuration.
4. Add deployment artifact `PawsConnect:war exploded`.
5. Start the configuration.
6. Open [http://localhost:8080/PawsConnect/](http://localhost:8080/PawsConnect/).

### Step-by-Step smoke test checklist

1. Open login page and register a test user.
2. Login with the same credentials.
3. Confirm session endpoint returns logged-in response: [http://localhost:8080/PawsConnect/api/session](http://localhost:8080/PawsConnect/api/session).
4. Logout and verify session endpoint returns loggedIn false.

### If startup fails

1. Recheck DB credentials in [src/main/java/com/pawsconnect/util/DBConnection.java](src/main/java/com/pawsconnect/util/DBConnection.java).
2. Confirm MySQL is running and database `pawsconnect` exists.
3. Rebuild with `mvn clean package`.
4. Verify deployment context path is `PawsConnect`.

## API Endpoints 🔌

| Method | Endpoint                  | Purpose |
| ------ | ------------------------- | ------- |
| POST   | /PawsConnect/login        | Login user and create session |
| POST   | /PawsConnect/register     | Register a new user |
| GET    | /PawsConnect/logout       | Invalidate active session |
| GET    | /PawsConnect/api/session  | Return current session state |

## Source File Responsibilities 🧩

- [src/main/java/com/pawsconnect/controller/LoginServlet.java](src/main/java/com/pawsconnect/controller/LoginServlet.java): Validates login input and creates a session.
- [src/main/java/com/pawsconnect/controller/RegisterServlet.java](src/main/java/com/pawsconnect/controller/RegisterServlet.java): Validates registration input and inserts user.
- [src/main/java/com/pawsconnect/controller/SessionServlet.java](src/main/java/com/pawsconnect/controller/SessionServlet.java): Returns login state and user info.
- [src/main/java/com/pawsconnect/controller/LogoutServlet.java](src/main/java/com/pawsconnect/controller/LogoutServlet.java): Invalidates session.
- [src/main/java/com/pawsconnect/dao/UserDAO.java](src/main/java/com/pawsconnect/dao/UserDAO.java): Executes auth-related DB queries.
- [src/main/java/com/pawsconnect/util/DBConnection.java](src/main/java/com/pawsconnect/util/DBConnection.java): Creates JDBC connections.
- [src/main/webapp/js/auth.js](src/main/webapp/js/auth.js): Handles frontend auth requests and navbar updates.

## Security Notes 🔐

- Password constant in [src/main/java/com/pawsconnect/util/DBConnection.java](src/main/java/com/pawsconnect/util/DBConnection.java) is intentionally blank now.
- You must set your local DB password before running the app.
- Current auth flow stores plain text passwords in DB columns (`password_hash` field name is misleading).
- For production, migrate to strong hashing (bcrypt or Argon2).

## Troubleshooting 🧯

- 404 for app routes:
  - Confirm deployment context is `PawsConnect`.
- DB connection failures:
  - Check MySQL status and DB credentials in [src/main/java/com/pawsconnect/util/DBConnection.java](src/main/java/com/pawsconnect/util/DBConnection.java).
- Build issues:
  - Ensure local JDK version matches compiler settings in [pom.xml](pom.xml).
- Session endpoint not returning loggedIn true:
  - Verify login call succeeded and browser preserves session cookies.

## Future Improvements 🌱

- Add password hashing and salting.
- Move credentials to environment variables or external config.
- Add unit and integration tests.
- Introduce role-based authorization.
- Build REST APIs for frontend decoupling.

## Contributors 👥

- Zaheer Abbas
- Metri Naveen

Contributions are welcome through issues and pull requests.

## Additional Links 🔗

- [Repository](https://github.com/Code-Crew-Nexus/PawsConnectHub)
- [Issues](https://github.com/Code-Crew-Nexus/PawsConnectHub/issues)
- [Pull Requests](https://github.com/Code-Crew-Nexus/PawsConnectHub/pulls)
- [Actions](https://github.com/Code-Crew-Nexus/PawsConnectHub/actions)
- [Main README (GitHub)](https://github.com/Code-Crew-Nexus/PawsConnectHub/blob/main/README.md)
