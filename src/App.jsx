import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import { AuthProvider } from './authContext';



function App() {

  
  return (
    <AuthProvider>
      <Routes>
      <Route path="" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </AuthProvider>
    
  );
}

export default App;
