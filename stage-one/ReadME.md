
# DevOps Stage 1 Task

## Overview
This project is part of the DevOps Stage 1 task, utilizing Python to automate and streamline processes within a DevOps workflow. The goal is to demonstrate foundational DevOps principles by integrating scripting, automation, and infrastructure management.

## Features
- **Automation**: Implements scripts to simplify repetitive tasks.
- **Infrastructure as Code (IaC)**: Uses scripting to manage infrastructure efficiently.
- **Continuous Integration/Continuous Deployment (CI/CD)**: Lays the groundwork for seamless software delivery.
- **Monitoring & Logging**: Ensures visibility into system performance.

## Technologies Used
- **Python**: Core scripting language.
- **Bash**: Integration for shell scripting.
- **Docker (Optional)**: Containerization for deployment.
- **Git & GitHub**: Version control and collaboration.
- **NGINX**: Web server for reverse proxy and load balancing.

## Setup & Installation
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
3. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```
4. Run the script:
   ```sh
   python main.py
   ```

## NGINX Configuration
To set up reverse proxy with NGINX for your Python app, use the following configuration:

1. Edit your NGINX configuration file (usually found in `/etc/nginx/sites-available/default` or `/etc/nginx/nginx.conf`).
2. Add the following configuration block:

```nginx
server {
    listen 80;
    server_name 54.165.204.226;  # Replace with your server's IP address

    location / {
        proxy_pass http://127.0.0.1:5000/;  # Your Python app
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

## Usage
- Modify the `config.yaml` (if applicable) to suit your needs.
- Execute the script with necessary arguments (if any).
- Monitor logs for debugging and performance tracking.

## Contribution
Feel free to fork this repository, make enhancements, and submit a pull request.

## License
This project is licensed under the MIT License.

## Contact
For questions or support, reach out to [Kolawole Sunday Oke](https://www.linkedin.com/in/kolawole-sunday-oke-38b1871a3/).