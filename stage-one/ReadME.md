
# DevOps Stage 1 Task

## Overview
This project is part of the DevOps Stage 1 task, utilizing Python to automate and streamline processes within a DevOps workflow. The goal is to demonstrate foundational DevOps principles by integrating scripting, automation, and infrastructure management. This task helps to solidify skills related to continuous integration, automation, and infrastructure as code (IaC).

In this project, we’ll automate tasks using Python scripts, set up infrastructure through code, ensure smooth CI/CD pipelines, and monitor/log system performance for easier debugging and efficiency.

## Features
- **Automation**: Implements Python scripts to simplify repetitive and manual tasks, reducing human error and increasing efficiency.
- **Infrastructure as Code (IaC)**: Uses scripts to manage infrastructure, enabling version control and easier deployment.
- **Continuous Integration/Continuous Deployment (CI/CD)**: Provides a basic framework for automating software delivery pipelines.
- **Monitoring & Logging**: Logs crucial system events and metrics to provide visibility into system performance and help identify potential issues early.

## Technologies Used
- **Python**: Core scripting language for task automation, management, and integration.
- **Bash**: Shell scripting to enhance the workflow and automate server-side tasks.
- **Docker (Optional)**: Containerization for consistent deployment across different environments.
- **Git & GitHub**: Version control for collaboration, code management, and monitoring changes in the project.
- **NGINX**: Reverse proxy and load balancing server to manage incoming traffic and distribute it to backend services.
- **CI/CD Tools (Optional)**: Tools like Jenkins, GitLab CI, or GitHub Actions can be integrated for automated testing and deployment.

## Setup & Installation
### Prerequisites
Before running the project, ensure the following dependencies are installed:
- Python 3.x
- Git
- NGINX (for reverse proxy configuration)
- Docker (optional for containerization)
- A virtual environment tool (optional but recommended)

### Steps
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <project-directory>
   ```
   
2. Set up a virtual environment (optional but recommended):
   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows use: venv\Scripts\activate
   ```

3. Install required dependencies:
   ```sh
   pip install -r requirements.txt
   ```

4. Configure the `config.yaml` file (if applicable):
   - Update any environment-specific variables or configurations as necessary.

5. Run the Python script:
   ```sh
   python main.py
   ```

## NGINX Configuration
To set up reverse proxy with NGINX for your Python app, follow these steps:

### Edit the NGINX Configuration
1. Open your NGINX configuration file (`/etc/nginx/sites-available/default` or `/etc/nginx/nginx.conf`).
   
2. Add the following server block to set up a reverse proxy:

```nginx
server {
    listen 80;
    server_name 54.165.204.226;  # Replace with your server's IP address

    location / {
        proxy_pass http://127.0.0.1:5000/;  # Your Python app (Flask server)
        proxy_set_header Host $host;
        try_files $uri $uri/ =404;
    }

    location /api/ {
        proxy_pass http://127.0.0.1:5000/api/;  # API routing for Python app
        proxy_set_header Host $host;
    }
}
```

3. Restart NGINX to apply the changes:
   ```sh
   sudo systemctl restart nginx
   ```

### Troubleshooting NGINX
If you encounter any issues with NGINX not starting:
- Check the syntax of the configuration:
  ```sh
  sudo nginx -t
  ```
- Restart the service:
  ```sh
  sudo systemctl restart nginx
  ```

## CI/CD Integration (Optional)
For continuous integration and deployment (CI/CD), integrate tools such as Jenkins, GitHub Actions, or GitLab CI:
- Automate testing and deployment to streamline the process.
- Set up hooks to run tests before pushing changes to production.
  
### Example GitHub Actions Workflow
```yaml
name: CI/CD Pipeline

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      
      - name: Set up Python
        uses: actions/setup-python@v2
        with:
          python-version: 3.9
      
      - name: Install dependencies
        run: |
          pip install -r requirements.txt
          
      - name: Run tests
        run: |
          python -m unittest discover
          
      - name: Deploy to production
        run: |
          # Insert deployment script here (e.g., Docker, Heroku, etc.)
```

## Usage
- Modify the `config.yaml` file (if applicable) to suit your environment.
- Execute the script with any necessary arguments:
  ```sh
  python main.py --arg1 value1 --arg2 value2
  ```
- Monitor logs to track the script's performance or debug any issues:
  - Check `app.log` or other log files as configured in the script.
  - Use monitoring tools such as Prometheus or Grafana for advanced tracking.

## Contribution
Feel free to fork this repository, make improvements, and submit a pull request. Contributions are welcome to improve the project further, especially in the areas of automation, CI/CD pipeline enhancements, or NGINX configurations.

## License
This project is licensed under the MIT License.

## Contact
For questions or support, feel free to reach out to [Kolawole Sunday Oke](https://www.linkedin.com/in/kolawole-sunday-oke-38b1871a3/).