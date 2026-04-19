# Database Setup Guide for PawsConnect Hub

This document provides the complete database setup process for local development and testing.

## Purpose

Use this guide to:

1. Install and verify MySQL.
2. Create the project database.
3. Import the schema from [src/main/resources/schema.sql](../src/main/resources/schema.sql).
4. Configure [src/main/java/com/pawsconnect/util/DBConnection.java](../src/main/java/com/pawsconnect/util/DBConnection.java).
5. Validate that the backend can connect successfully.

## Prerequisites

- [MySQL 8+](https://www.mysql.com/)
- Read access to [src/main/resources/schema.sql](../src/main/resources/schema.sql)
- Write access to [src/main/java/com/pawsconnect/util/DBConnection.java](../src/main/java/com/pawsconnect/util/DBConnection.java)

## 1. Verify MySQL Installation

Connect to MySQL and run:

```sql
SELECT VERSION();
```

Expected: a MySQL 8.x version string.

## 2. Create Database

```sql
CREATE DATABASE IF NOT EXISTS pawsconnect;
USE pawsconnect;
```

## 3. Import Schema

From the repository root, use one of the following options.

### Option A: Import from inside MySQL shell

```sql
USE pawsconnect;
SOURCE src/main/resources/schema.sql;
```

### Option B: Import directly from terminal

Windows PowerShell:

```powershell
mysql -u root -p pawsconnect < src/main/resources/schema.sql
```

Linux/Arch:

```bash
mysql -u root -p pawsconnect < src/main/resources/schema.sql
```

## 4. Verify Tables

```sql
USE pawsconnect;
SHOW TABLES;
```

Expected tables:

- users
- posts
- marketplace_items

Optional row-count check:

```sql
SELECT COUNT(*) FROM users;
SELECT COUNT(*) FROM posts;
SELECT COUNT(*) FROM marketplace_items;
```

## 5. Configure Application DB Credentials

Open [src/main/java/com/pawsconnect/util/DBConnection.java](../src/main/java/com/pawsconnect/util/DBConnection.java) and set your local values:

```java
private static final String URL = "jdbc:mysql://localhost:3306/pawsconnect?useSSL=false&serverTimezone=UTC";
private static final String USER = "root";
private static final String PASSWORD = "your_mysql_password";
```

Important:

- Repository keeps password blank intentionally.
- Never commit real credentials.

## 6. Connection Validation

After configuring credentials:

1. Build project from repository root:

```bash
mvn clean package
```

2. Run/deploy the app and open session endpoint:

- [http://localhost:8080/PawsConnect/api/session](http://localhost:8080/PawsConnect/api/session)

If DB connectivity is correct, authentication and session operations should work after login.

## Common Issues and Fixes

- Access denied for MySQL user:
  - Verify username/password and user permissions.
- Unknown database pawsconnect:
  - Re-run database creation commands.
- Table not found:
  - Re-import schema file.
- Communications link failure:
  - Confirm MySQL service is running and port 3306 is reachable.
- Time zone warnings:
  - Keep `serverTimezone=UTC` in the JDBC URL.
