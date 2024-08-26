// import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';
import ViewBook from './components/ViewBook';
import './App.css'; // Import the CSS file for styling

function App() {
  return (
    <Router>
      <nav className="navbar">
        <NavLink to="/register" className="nav-link" activeClassName="active">
          Register
        </NavLink>
        <NavLink to="/login" className="nav-link" activeClassName="active">
          Login
        </NavLink>
        <NavLink to="/profile" className="nav-link" activeClassName="active">
          Profile
        </NavLink>
        <NavLink to="/add" className="nav-link" activeClassName="active">
          Add Book
        </NavLink>
        <NavLink to="/viewbook" className="nav-link" activeClassName="active">
          View Books
        </NavLink>
      </nav>

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/edit/:id" element={<EditBook />} />
        <Route path="/viewbook" element={<ViewBook />} />
      </Routes>
    </Router>
  );
}

export default App;
