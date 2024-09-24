# Postmate

Postmate is a responsive social media application built using Next.js and TypeScript that supports basic CRUD operations for posts, users, and comments. The app interacts with the JSONPlaceholder API for demonstration purposes and can be easily integrated with a real API for production use.

## Features

* #### Responsive Design: Optimized for both desktop and mobile devices.
* #### CRUD Operations: Create, read, update, and delete posts. View and manage comments specific to each post, view user details.
* #### Gallery Page: Displays a collection of placeholder photos, fetched from the JSON Placeholder API.

* #### User Management: Displays all user details fetched from the API.

## Pages
* #### Landing Page: Introduction and navigation to key sections.
* #### Posts Page: List of all posts with the ability to create new posts.
* #### Post Details Page: View post details with comments, and options to edit or delete the post.
* #### Users Page: Displays all user details.
* #### Gallery Page: Showcases photos (currently from the dummy API, replaceable with real data).

## Installation & Setup

To get the project running locally, follow these steps

### Pre Requisites
* #### Node.js

#### Clone the repository

    git clone https://github.com/cb7chaitanya/march-assignment

#### Install Dependencies
    npm i 

#### Running the application 
    npm run dev

The app will be running on http://localhost:3000

#### Creating an optimized production build
    npm run build

#### Starting production server
    npm start