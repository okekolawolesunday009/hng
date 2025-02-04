
# Number Classification API

## Overview
This project involves creating an API that classifies a given number based on its mathematical properties, including whether it is prime, perfect, and Armstrong, as well as its digit sum. The API also returns a fun fact related to the number. This API will be deployed to a publicly accessible endpoint and handle Cross-Origin Resource Sharing (CORS) to allow interaction from different origins.

## Features
- **Number Classification**: Classifies numbers as prime, perfect, Armstrong, odd, or even.
- **Fun Facts**: Integrates with the Numbers API to provide a fun fact related to the number.
- **CORS Support**: Allows the API to be accessed from any domain.
- **JSON Response**: Provides results in a structured JSON format.

## Technologies Used
- **Programming Language**: Python (or any language of your choice)
- **Framework**: Flask or Express (depending on the language selected)
- **Deployment**: The API will be deployed to a publicly accessible endpoint (e.g., Heroku, AWS, or any other platform).
- **CORS**: Handles Cross-Origin Resource Sharing for public accessibility.
- **Version Control**: Git and GitHub
- **Web Server**: Nginx (for reverse proxy and load balancing)

## API Specification

### Endpoint
**GET** `<your-url>/api/classify-number?number=371`

### Response Format

#### Success Response (200 OK)
```json
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

#### Error Response (400 Bad Request)
```json
{
    "number": "alphabet",
    "error": true
}
```

### Properties Field Combinations
The `properties` array will contain the following combinations based on the classification of the number:
- `["armstrong", "odd"]` - If the number is both an Armstrong number and odd.
- `["armstrong", "even"]` - If the number is both an Armstrong number and even.
- `["odd"]` - If the number is not an Armstrong number but is odd.
- `["even"]` - If the number is not an Armstrong number but is even.

### Fun Fact
The fun fact is retrieved using the Numbers API:
- You can call the Numbers API to get a fun fact about the number, e.g., `http://numbersapi.com/<number>/math`.

## Setup & Installation

### Prerequisites
Ensure you have the following tools installed:
- **Python 3.x** (or a similar environment based on your choice of language)
- **Flask** (for Python-based API) or **Express** (for JavaScript-based API)
- **Git** (for version control)
- **Postman or similar** (for API testing)
- **CORS middleware** (to handle Cross-Origin requests)

### Steps to Set Up

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:
   If using Python:
   ```bash
   pip install -r requirements.txt
   ```

   If using Node.js:
   ```bash
   npm install
   ```

3. Set up a virtual environment (Python):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use: venv\Scripts\activate
   ```

4. Run the API:
   For Flask:
   ```bash
   python app.py
   ```

   For Express:
   ```bash
   npm start
   ```

5. Access the API at `http://<your-server-ip>:<port>/api/classify-number?number=<your-number>`

## Nginx Configuration

If you're using Nginx to reverse proxy the API, here's an example of an Nginx configuration file (`/etc/nginx/sites-available/default` or similar):

```nginx
server {
    listen 80;
    server_name 54.165.204.226;  # Replace with your domain or IP address

    location / {
        proxy_pass http://127.0.0.1:5000/;  # Your API backend server
        proxy_set_header Host $host;
        try_files $uri $uri/ =404;
    }

    location /api/ {
        proxy_pass http://127.0.0.1:5000/api/;  # Your API endpoint
        proxy_set_header Host $host;
    }
}
```

### Nginx Setup Steps

1. Install Nginx:
   ```bash
   sudo apt update
   sudo apt install nginx
   ```

2. Edit the default Nginx configuration:
   ```bash
   sudo nano /etc/nginx/sites-available/default
   ```

3. Replace the default configuration with the one above, making sure the `proxy_pass` points to your API’s local address.

4. Reload Nginx:
   ```bash
   sudo systemctl reload nginx
   ```

5. Test the configuration:
   ```bash
   sudo nginx -t
   ```

6. Start Nginx:
   ```bash
   sudo systemctl start nginx
   ```

Now, Nginx will reverse proxy requests from `http://<your-server-ip>/api/` to your backend API running on `http://127.0.0.1:5000/`.

## Deployment

To deploy the API to a publicly accessible endpoint, you can use services like:
- **Heroku** (free tier available)
- **AWS (Amazon Web Services)** EC2 or Lambda
- **DigitalOcean** for containerized deployments
- **Glitch** for quick deployments
- **Vercel or Netlify** (for Node.js applications)

Ensure the API runs smoothly with fast response times (< 500ms).

## API Testing
Test the API thoroughly using Postman or similar API testing tools. Use valid and invalid number inputs to verify the expected response formats.

Example test:
- Valid number: `http://<your-server-ip>:<port>/api/classify-number?number=371`
- Invalid number: `http://<your-server-ip>:<port>/api/classify-number?number=alphabet`

### Example Tests
1. **Test a valid Armstrong number**:
   Request: `/api/classify-number?number=371`
   Response:
   ```json
   {
       "number": 371,
       "is_prime": false,
       "is_perfect": false,
       "properties": ["armstrong", "odd"],
       "digit_sum": 11,
       "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
   }
   ```

2. **Test an invalid input**:
   Request: `/api/classify-number?number=hello`
   Response:
   ```json
   {
       "number": "hello",
       "error": true
   }
   ```

## Code Quality & Best Practices

- **Organized Code Structure**: Code should be logically structured and well-organized with comments where necessary.
- **Error Handling & Validation**: Ensure proper error handling is in place for unexpected or incorrect inputs.
- **Avoid Hardcoded Values**: Avoid using hardcoded values for calculations. Use dynamic variables as needed.

## Contribution
Feel free to fork this repository, make improvements, and submit a pull request. Contributions are welcome, especially in the areas of performance optimization, feature extensions, or improvements to the codebase.

## License
This project is licensed under the MIT License.

## Contact
For questions or support, feel free to reach out to [Kolawole Sunday Oke](https://www.linkedin.com/in/kolawole-sunday-oke-38b1871a3/).