import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './componet/SignIn/signin';
import Signup from './componet/Signup/signUp';
import Dashboard from './componet/dashbord/dashord';
import ProtectedRoute from './componet/ProtectedRoute';
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path='/bord' element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
    </Routes>
    </>
  );
}

export default App;
