# LMS StackLoom MERN Stack

A full-featured Learning Management System (LMS) built with the MERN stack (MongoDB, Express, React, Node.js). This project allows instructors to create and manage courses, students to enroll and track progress, and includes payment integration, media uploads, and more.

---

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [Environment Variables](#environment-variables)
- [Running the Project Locally](#running-the-project-locally)
- [Backend API Endpoints](#backend-api-endpoints)
- [Testing Endpoints with Postman](#testing-endpoints-with-postman)
- [Extra Info](#extra-info)

---

## About the Project

This LMS platform enables:

- Instructors to create, edit, and publish courses with lectures and media
- Students to register, enroll, and track their course progress
- Secure authentication and role-based access
- Payment integration for paid courses
- Media uploads (images/videos) via Cloudinary
- Admin dashboard for course and user management

---

## Features

- User registration and login (student/instructor roles)
- Profile management with photo upload
- Course creation, editing, publishing, and searching
- Lecture management (add, edit, delete, video upload)
- Stripe payment integration for course purchase
- Course progress tracking for students
- RESTful API with JWT authentication
- Responsive frontend with React and Tailwind CSS
- Protected routes for students and instructors
- Admin dashboard and sidebar navigation

---

## Setup Instructions

### 1. Clone the Repository

```sh
git clone https://github.com/Om-Shankar-191019/lms-project-mern.git
cd lms-project-mern
```

### 2. Install Dependencies

```sh
npm install
cd ../client
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the `server` folder with the following:

```env
MONGO_URI=your_mongodb_connection_string
SECRET_KEY=your_jwt_secret
CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
WEBHOOK_ENDPOINT_SECRET=your_stripe_webhook_secret
PORT=8080
```

### 4. Start the Server

```sh
npm run dev
```

### 5. Start the Client

```sh
cd client
npm run dev
```

### 6. Access the App

- Client: [http://localhost:5173](http://localhost:5173)
- Server: [http://localhost:8080](http://localhost:8080)

---

## Environment Variables

See `.env.example` for all required variables. All sensitive keys should be kept private.

---

## Backend API Endpoints

### User

- `POST /api/v1/user/register` — Register new user
- `POST /api/v1/user/login` — Login
- `GET /api/v1/user/profile` — Get profile
- `PUT /api/v1/user/profile/update` — Update profile (with photo)
- `GET /api/v1/user/logout` — Logout

### Course

- `POST /api/v1/course/` — Create course (instructor only)
- `PUT /api/v1/course/:courseId` — Edit course
- `GET /api/v1/course/` — Get instructor's courses
- `GET /api/v1/course/published-courses` — Get all published courses
- `GET /api/v1/course/search` — Search courses
- `GET /api/v1/course/:courseId` — Get course by ID
- `PATCH /api/v1/course/:courseId?publish=true` — Publish course
- `PATCH /api/v1/course/:courseId?publish=false` — Unpublish course

### Lecture

- `POST /api/v1/course/:courseId/lecture` — Add lecture
- `POST /api/v1/course/:courseId/lecture/:lectureId` — Edit lecture
- `GET /api/v1/course/:courseId/lecture` — Get lectures for course
- `GET /api/v1/course/lecture/:lectureId` — Get lecture by ID
- `DELETE /api/v1/course/lecture/:lectureId` — Delete lecture

### Media

- `POST /api/v1/media/upload-video` — Upload video (form-data: file)

### Purchase

- `POST /api/v1/purchase/checkout/create-checkout-session` — Create Stripe checkout session
- `GET /api/v1/purchase/` — Get purchased courses
- `GET /api/v1/purchase/course/:courseId/detail-with-status` — Get course detail with purchase status

### Progress

- `GET /api/v1/progress/:courseId` — Get course progress
- `POST /api/v1/progress/:courseId/lecture/:lectureId/view` — Update lecture progress
- `POST /api/v1/progress/:courseId/complete` — Mark course as completed
- `POST /api/v1/progress/:courseId/incomplete` — Mark course as incompleted

---

## Testing Endpoints with Postman

- Import the endpoints above into Postman.
- Use the login endpoint to authenticate and use the cookie for protected routes.
- For file uploads, use form-data and select "File" type for the file fields.
- Example requests for each endpoint are provided in the API documentation above.

---

## Extra Info

- **Roles:** Users are created as students by default. To create an instructor, update the role in the database or modify the registration flow.
- **Media Uploads:** Ensure the `uploads/` folder exists for multer. Cloudinary credentials must be valid.
- **Payments:** Stripe integration is used for paid courses. Use test keys for development.
- **Demo Data:** See documentation for sample course data to seed your database.
- **Frontend:** Built with React, Vite, and Tailwind CSS. Responsive and modern UI.

---

## License

MIT
