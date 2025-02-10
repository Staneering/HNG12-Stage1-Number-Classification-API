
# Number Classification API

This is a REST API that classifies numbers and provides interesting number facts.

## Project Description

### Number Classification API
This project is a simple REST API built with Node.js and Express that classifies numbers and returns interesting facts. The API accepts GET requests with a number parameter and determines:
- If the number is even or odd
- A fun fact about the number

### Features
- **Input Validation**: Ensures only valid integers are processed
- **Number Classification**: Determines if a number is even or odd
- **Fun Facts**: Provides interesting facts about the input number
- **Error Handling**: Comprehensive error handling with appropriate status codes

### Technology Stack
- **Programming Language**: JavaScript (Node.js)
- **Framework**: Express
- **Deployment**: Vercel

### Usage
The API accepts integers and returns their classification along with interesting facts.

### How to Access
The API is deployed at: [My Vercel Url](https://number-classification-task.vercel.app/)

### Example Response
```json
{
  "number": 42,
  "is_even": true,
  "is_odd": false,
  "fun_fact": "42 is the answer to life, the universe and everything"
}
```
## Setup Instructions

### Prerequisites
- Node.js and npm installed

### Installation
```bash
git clone https://github.com/Staneering/hngx-stage1-number-classification-api.git
cd hngx-stage1-number-classification-api
npm install
```

### Running Locally
```bash
node index.js
```
Access at: http://localhost:3000/api/classify-number?number=42

## API Documentation

### Endpoint
- **GET** /api/classify-number

### Query Parameters
- number (required): Integer to be classified

### Response Format
```json
{
  "number": integer,
  "is_even": boolean,
  "is_odd": boolean,
  "fun_fact": string
}
```

### Error Responses
- **400 Bad Request**: Invalid or missing number parameter
- **500 Internal Server Error**: Server-side error

### Example Usage
```bash
curl https://number-classification-task.vercel.app/classify-number?number=42
```
### Using Postman

- Create GET request
- URL:  [https://number-classification-task.vercel.app/api/classify-number?number=42](curl "https://public-api-task-staneering-ogochukwu-stanley-ikegbos-projects.vercel.app/api/classify-number?number=42")
  
- Send request

### License
MIT License ```
