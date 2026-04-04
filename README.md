# FastAPI CRUD Application

##  Description
This is a simple FastAPI application that implements basic Create and Read (CRUD) operations using a SQLite database. The API is built using FastAPI and SQLAlchemy.

---

##  Features
- Create Items (POST)
- Read Items (GET)
- SQLite Database Integration
- FastAPI Interactive Swagger UI

---

## Tech Stack
- FastAPI
- SQLAlchemy
- SQLite
- Uvicorn

---

## ▶️ Run Locally

### 1. Install dependencies
pip install -r requirements.txt

### 2. Run the server
uvicorn main:app --reload

### 3. Open in browser
http://127.0.0.1:8000/docs

---

##  API Endpoints

- GET / → Check API status  
- GET /health → Health check  
- POST /items/ → Create item  
- GET /items/ → Get all items  

---

##  Example Request (POST /items/)

{
  "name": "Laptop",
  "description": "Electronics"
}

---
##  Live Deployment
https://fastapi-crud-3deh.onrender.com/docs

---

##  Author
Sai Kiran