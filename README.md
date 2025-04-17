# 🚗 Car Rental Management System

![image](https://github.com/user-attachments/assets/b5a80184-be43-4dc6-8b8a-1a2f314ceaca)

##
A full-stack Car Rental Management System built with: **MySQL**, **SpringBoot**, **React**. This project supports car and user management, loan processing, and allocation features with a RESTful API architecture.

## 📖 Table of Contents

- [Setup Instructions](#️-setup-instructions)
  - [Backend (Spring Boot)](#backend-spring-boot)
  - [Frontend (React Vite)](#frontend-react-vite)
- [Usage](#-usage)
  - [API Endpoints](#api-endpoints)
  - [Database Schema](#database-schema)

## 🔧 Setup Instructions

### Backend (Spring Boot)

1. Clone the repository and navigate to the backend directory.
2. Configure your `application.properties` or `application.yml`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/car_rental
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
```

3. Run the application:

```bash
./mvnw spring-boot:run
```

### Frontend (React Vite)

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Run the app:

```bash
npm run dev
```

## 📦 API Endpoints

### 1. Car Management

| Method | Endpoint    | Description      |
| ------ | ----------- | ---------------- |
| POST   | /car/create | Create a new car |
| GET    | /car/{id}   | Get car by ID    |
| DELETE | /car/{id}   | Delete car by ID |
| GET    | /car/list   | List all cars    |

### 2. User Management

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| POST   | /user/create | Create a new user |
| GET    | /user/{id}   | Get user by ID    |
| PUT    | /user/{id}   | Update user by ID |
| GET    | /user/list   | List all users    |
| POST   | /user/login  | User login        |

### 3. Loan Management

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| POST   | /loan/create | Create a new loan |
| GET    | /loan/list   | List              |
