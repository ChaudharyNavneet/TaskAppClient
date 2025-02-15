# Task App

This is a full-stack **Task Management Application** built using **React**, **Node.js**, **Express**, and **MongoDB**. The app allows users to create tasks based on deadlines and displays the status of each task.
The **server code** is deployed on [Render](https://render.com), while the **client app** is hosted on **GitHub Pages**.

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-3276F7?style=for-the-badge&logo=github&logoColor=white)](https://pages.github.com/)
[![Render](https://img.shields.io/badge/Render-%234735FF?style=for-the-badge&logo=render&logoColor=white)](https://render.com/)

## Features

- ✅ **Create Tasks**: Users can create tasks with deadlines.
- 🔄 **Task Status**: Displays the current status of each task (e.g., pending, completed).
- ⚙️ **Full-Stack Implementation**: 
  - **Backend**: Node.js and Express server
  - **Frontend**: React.js for the user interface
  - **Database**: MongoDB to store tasks and their statuses

---

## Tech Stack

- **Frontend**: React.js, Redux
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Deployment**:
  - 🚀 **Server**: Deployed on [Render](https://render.com)
  - 🌐 **Client**: Hosted on GitHub Pages

## Setup Instructions

### Clone the Repository

To run the project locally, clone the repository:

```bash
git clone https://github.com/ChaudharyNavneet/TaskAppClient.git
cd task-app
```
## Backend (Server)

1. Navigate to the backend directory:

    ```bash
    cd server
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file with the following environment variables:

    ```env
    MONGODB_URI=your_mongodb_connection_string
    PORT=4000
    ```

4. Start the server:

    ```bash
    npm start
    ```

The backend will now be running on [http://localhost:4000](http://localhost:4000).

---

## Frontend (Client)

1. Navigate to the frontend directory:

    ```bash
    cd client
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Start the React application:

    ```bash
    npm start
    ```

The front end will now be running on [http://localhost:3000](http://localhost:3000).

---

## Deployment

### Server Deployment

The server is deployed on **Render**. Any updates pushed to the server's GitHub repository will trigger automatic deployment.

### Client Deployment

The client app is deployed using **GitHub Pages**. You can access it at: [https://chaudharynavneet.github.io/TaskAppClient](https://chaudharynavneet.github.io/TaskAppClient/)

---

## License

This project is for personal use only and is not intended for public distribution.
