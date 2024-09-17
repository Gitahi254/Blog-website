# Blog Website Project

## About
This project represents my learning journey of React by developing a blog website. The application is built using React, incorporating React hooks and stateless functional components, along with HTML and CSS for structure and styling.

### Features:
- **View Blog Posts:** All blog posts are fetched from an API and displayed on the blog page.
- **Create Blog Post:** Users can create new blog posts, which are automatically saved to the database.
- **Delete Blog Post:** Users have the option to delete blog posts from the database.

## Technologies Used
- **React** (with Hooks for state management)
- **HTML5** (for structure)
- **CSS3** (for styling)
- **API Integration** (for fetching, posting, and deleting blog data)

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher) or yarn

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/blog-website.git
   cd blog-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```

The app will be running on `http://localhost:3000`.

## Project Structure

- **src/**: Contains the source code for the project.
  - **components/**: Reusable stateless functional components.
  - **pages/**: Pages like Blog, CreatePost, etc.
  - **hooks/**: Custom React hooks.
  - **styles/**: CSS styles for the application.

## Usage
- **View Posts:** Navigate to the blog page to see all available posts.
- **Create Post:** Use the form to create a new blog post.
- **Delete Post:** Click the delete button next to a post to remove it from the database.

## Future Improvements
- Add authentication for creating and deleting posts.
- Implement editing functionality for blog posts.
- Improve the UI/UX with more advanced styling techniques.

