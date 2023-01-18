import React from 'react';
import ReactDOM from "react-dom";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';
import Home from './components/homepage/Home';
import Login from './components/user/Login';
import Profile from './components/user/Profile';
import Team from './components/team/Team';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
// import Register from './components/user/Register';
import ForgotPass from './components/user/ForgotPass';
import Actvity from './components/activity/Activity';
import DetailActivity from './components/activity/DetailActivity';
import Student from './components/students/Student';
import AddStudent from './components/students/AddStudent';
import UpdateStudent from './components/students/UpdateStudent';

export default function App() {
  return (
    <>
    <Navbar/>
    <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/team" element={<Team />} />
          <Route path="/forgetpassword" element={<ForgotPass />} />
          <Route path="/trackactivity" element={<Actvity />} />
          <Route path="/students" element={<Student />} />
          <Route path="/student/add" element={<AddStudent />} />
          <Route path="/student/:id" element={<UpdateStudent />} />
          <Route path="/activity/:id" element={<DetailActivity />} />
          {/* <Route path="/register" element={<Register />} /> */}
        </Routes>
      </BrowserRouter>
    <Footer/>
    </>
  );
}

ReactDOM.render(<React.StrictMode>
  <App />
</React.StrictMode>,
document.getElementById('root'));