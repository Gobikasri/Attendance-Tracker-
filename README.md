# Student Attendance Tracker

## Project Overview

The Student Attendance Tracker is a web-based application developed to simplify the process of managing student attendance. The application allows users to view students, mark attendance, add new students, and delete existing students through a simple and user-friendly interface.

The project follows a client-server architecture where the frontend communicates with the backend using REST APIs.

## Technologies Used

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js

### Tools

* Visual Studio Code
* Postman (API Testing)

## Project Architecture

The project is divided into two main parts:

### Frontend

The frontend is responsible for displaying the user interface and handling user interactions.

Files used:

* index.html
* style.css
* app.js
* dashboard.js
* studentList.js
* api.js

### Backend

The backend handles API requests and manages student data.

Files used:

* server.js

## Implementation Details

### 1. Student Data Management

Initially, student records are stored in an array on the server side.

Each student object contains:

```javascript
{
  id: 1,
  name: "Arun Kumar",
  rollNo: "24BCS001",
  status: "Present"
}
```

### 2. Dashboard Module

The dashboard displays:

* Total Students
* Present Students
* Absent Students

The dashboard is dynamically updated whenever attendance changes.

### 3. Attendance Management

Each student has a status button.

When the button is clicked:

* Present changes to Absent
* Absent changes to Present

The frontend sends a PUT request to the backend API and updates the attendance status.

### 4. Add Student Feature

Users can add a new student by entering:

* Student Name
* Roll Number

The information is sent to the backend through a POST request and immediately displayed on the interface.

### 5. Delete Student Feature

A Delete button is provided for every student.

When clicked:

* The student record is removed from the server.
* The student list and dashboard are refreshed automatically.

### 6. API Communication

The frontend communicates with the backend using the Fetch API.

Implemented API endpoints:

GET /students

Retrieves all student records.

POST /students

Adds a new student.

PUT /students/:id

Updates attendance status.

DELETE /students/:id

Deletes a student record.

## Workflow

1. User opens the application.
2. Frontend requests student data from the backend.
3. Backend sends student data as JSON.
4. Dashboard and student list are rendered.
5. User can:

   * Add a student
   * Mark attendance
   * Delete a student
6. Frontend sends corresponding API requests.
7. Backend processes requests and returns updated data.
8. Interface refreshes automatically.

## Key Features

* View student attendance
* Mark Present/Absent
* Add new students
* Delete students
* Dynamic dashboard statistics
* REST API integration
* Responsive and clean user interface

## Future Enhancements

* Search student functionality
* Attendance percentage calculation
* Monthly attendance reports
* Export attendance as CSV/PDF
* MongoDB database integration
* Authentication and login system

## Conclusion

The Student Attendance Tracker successfully demonstrates the integration of frontend and backend technologies using HTML, CSS, JavaScript, Node.js, and Express.js. The project provides a simple and efficient solution for managing student attendance while showcasing REST API communication and dynamic user interface updates.
