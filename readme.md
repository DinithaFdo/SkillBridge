# SkillBridge 🚀  
*A collaborative skill-sharing platform for learners and experts alike.*

---

## 🌐 Project Overview

**SkillBridge** is a full-stack web application designed to empower individuals to share skills, learn from others, and grow together. Users can post learning content, interact through comments and likes, create personalized learning plans, and track their learning progress — all while being notified in real-time.

---

## 🛠️ Tech Stack

### Frontend (React)
- [React](https://reactjs.org/) (via Create React App)
- React Router
- Axios
- Context API / Redux (if applicable)
- Material UI / TailwindCSS (customize accordingly)

### Backend (Spring Boot)
- Spring Boot (Java)
- Spring Security + OAuth2 (Google Login)
- Spring Data JPA
- Hibernate
- MySQL / PostgreSQL (customize accordingly)
- Maven

---

## ✨ Features

### 🔗 Skill Sharing
- Add new posts with media and tags
- Edit and delete posts
- Like and comment on posts
- View post details and discussions

### 📚 Learning Plans
- Create, update, delete personal learning plans
- Organize skills and track goals

### 📈 Learning Progress
- CRUD operations for learning milestones
- Mark tasks as complete or in progress

### 🔔 Notifications
- Get real-time updates for likes, comments, and more

### 🔐 Authentication
- Secure login with Google OAuth 2.0

---

## 📸 Screenshots

<!-- Add image links or use placeholders -->
> *Coming soon!*

---

## 🚀 Getting Started

### Prerequisites

- Java 17+
- Node.js v16+
- Maven 3.8+
- MySQL/PostgreSQL setup
- Google OAuth credentials

---

### 🧩 Backend Setup

```bash
# Clone the repo
git clone https://github.com/DinithaFdo/skillbridge.git


# Configure DB and Google Auth in application.properties
# Run the application
mvn spring-boot:run
```

### 💻 Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm start
```

### 🧪 API Endpoints

| Method | Endpoint                    | Description              |
| ------ | --------------------------- | ------------------------ |
| GET    | /api/posts                  | Get all posts            |
| POST   | /api/posts                  | Create new post          |
| PUT    | /api/posts/{id}             | Update post              |
| DELETE | /api/posts/{id}             | Delete post              |
| POST   | /api/comments               | Add comment              |
| GET    | /api/learning-plans         | List learning plans      |
| POST   | /api/learning-progress      | Add learning progress    |
| PUT    | /api/learning-progress/{id} | Update learning progress |
| DELETE | /api/learning-progress/{id} | Delete learning progress |
| GET    | /api/notifications          | Fetch notifications      |
| GET    | /api/auth/google            | Google OAuth login       |

🔐 Authentication

- Google OAuth 2.0 integrated via Spring Security
- JWT for session management (if implemented)
