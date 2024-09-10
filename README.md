## Setup Instructions

### Prerequisites
- MySQL must be installed on your machine.
- Node.js and npm should be installed.

### Steps to Set Up the Project

1. **Install MySQL**  
   Ensure that MySQL is installed and running on your machine. If not, you can download it from [MySQL's official website](https://dev.mysql.com/downloads/mysql/).

2. **Create the Database**  
   Create a new database for the project. You can do this using MySQL Workbench or through the command line:
   ```sql
   CREATE DATABASE your_database_name;
****
npm install
npx knex migrate:latest
node app.js
