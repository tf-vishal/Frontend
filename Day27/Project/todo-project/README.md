# React Todo App 📝

A simple, modern todo application built with React and Vite as a learning project. This app features local storage persistence and is fully containerized with Docker.

## 🚀 Features

- ✅ Add new todos
- ✅ Mark todos as complete/incomplete
- ✅ Delete todos
- 💾 Persistent storage using localStorage
- 🐳 Dockerized for easy deployment
- ⚡ Fast development with Vite

## 🛠️ Technologies Used

- **React** - UI library
- **Vite** - Build tool and development server
- **JavaScript** - Programming language
- **CSS** - Styling
- **Docker** - Containerization

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v21 or higher recommended)
- npm (comes with Node.js)
- Docker (optional, for containerized deployment)

## 🏃 Getting Started

### Running Locally

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd todo-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173/`

### Running with Docker

1. **Build the Docker image**
   ```bash
   docker build -t react-todo-app .
   ```

2. **Run the container**
   ```bash
   docker run -p 5173:5173 react-todo-app
   ```

3. **Access the app**
   
   Navigate to `http://localhost:5173/`

## 📁 Project Structure

```
todo-project/
├── src/
│   ├── App.jsx           # Main app component with state management
│   ├── main.jsx          # Application entry point
│   ├── NewTodoForm.jsx   # Form component for adding new todos
│   ├── TodoList.jsx      # Component to render list of todos
│   ├── TodoItem.jsx      # Individual todo item component
│   └── styles.css        # Application styles
├── Dockerfile            # Docker configuration
├── package.json          # Project dependencies and scripts
└── README.md            # Project documentation
```

## 🎯 How It Works

### State Management
- The app uses React's `useState` hook to manage the todo list
- Initial state is loaded from localStorage on component mount
- All changes are automatically saved to localStorage using `useEffect`

### Key Components

- **App.jsx**: Main component that manages the todo state and contains the core logic
- **NewTodoForm.jsx**: Handles user input for creating new todos
- **TodoList.jsx**: Renders the list of todos or a "No TODOS" message
- **TodoItem.jsx**: Individual todo item with checkbox and delete button

### Data Persistence
Todos are automatically saved to browser's localStorage, so your tasks persist even after closing the browser or refreshing the page.

## 🧠 What I Learned

This project was created as my first React learning experience. Key concepts learned include:

- React hooks (`useState`, `useEffect`)
- Component composition and props
- Event handling in React
- State management
- LocalStorage API
- Containerizing React applications with Docker
- Vite development environment

## 🔮 Future Enhancements

Potential improvements for this project:

- [ ] Add edit functionality for existing todos
- [ ] Implement filtering (All, Active, Completed)
- [ ] Add due dates and priorities
- [ ] Improve styling with a CSS framework
- [ ] Add animations and transitions
- [ ] Implement backend API for cloud storage
- [ ] Add user authentication

## 📝 License

This is a personal learning project and is free to use for educational purposes.

## 🤝 Contributing

As this is a learning project, suggestions and improvements are welcome! Feel free to fork and experiment.

---

**Note**: This was my first day learning React! 🎉