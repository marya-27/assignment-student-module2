# assignment-student-module2
CRUD API for student management.

# API Documentation


## Endpoints

# Create Student
# Endpoint: `POST /students`  
# Description: `Add a new student to the system`

# Request Body: `json`
{
  "firstName": "Sophia",
  "lastName": "Martinez",
  "email": "sophiamartinez@gmail.com",
  "enrollmentDate": "2025-01-05"
}

# Response: `201 Created `
{
  "message": "Student added successfully",
  "student": {
    "id": 1,
    "firstName": "Sophia",
    "lastName": "Martinez",
    "email": "sophiamartinez@gmail.com",
    "enrollmentDate": "2025-01-05",
    "createdAt": "2025-01-11T16:26:30.561Z",
    "updatedAt": "2025-01-11T16:26:30.561Z"
  }
}
# 400 Bad Request

# Read All Students
# Endpoint: `GET /students`  
# Description: ` Retrieves the list of all students in the system `

# Response: `200 OK`
[
  {
    "id": 1,
    "firstName": "Sophia",
    "lastName": "Martinez",
    "email": "sophiamartinez@gmail.com",
    "enrollmentDate": "2025-01-05",
    "createdAt": "2025-01-11T16:26:30.561Z",
    "updatedAt": "2025-01-11T16:26:30.561Z"
  },
  {
    "id": 2,
    "firstName": "Liam",
    "lastName": "Hernandez",
    "email": "liamhernandez@gmail.com",
    "enrollmentDate": "24-12-15",
    "createdAt": "2025-01-11T16:28:04.117Z",
    "updatedAt": "2025-01-11T16:28:04.117Z"
  }
]
# 404 Not Found

# Update Students
# Endpoint: `PUT /students/:id`  
# Description: `Update the details of an existing student by ID`
{
  "firstName": "Sophia",
  "lastName": "Martinez",
  "email": "sophiamartinez@gmail.com",
  "enrollmentDate": "2025-01-05"
}

# Response `200 OK`
{
  "message": "Student updated successfully",
  "student": {
    "id": 1,
    "firstName": "Sophia",
    "lastName": "Martinez",
    "email": "sophiamartinez@gmail.com",
    "enrollmentDate": "2025-01-05",
    "createdAt": "2025-01-11T16:26:30.561Z",
    "updatedAt": "2025-01-11T16:26:30.561Z"
  }
}
# 404 Not Found

# Delete  Students
# Endpoint: `PDELETE /students/:id`  
# Description: `Delete an existing student by ID`

# Response `200 OK`
{
  "message": "Student deleted successfully"
}
# 404 Not Found

`ADDITIONAL INFO`
# The enrollmentDate should be in the format YYYY-MM-DD (e.g., "2024-01-01").
# The email field must be unique for each student.
