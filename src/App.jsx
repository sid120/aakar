import './App.css'
import Dashboard from './Pages/Dashboard';
import { Login } from './Pages/Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Process from './Pages/Process';
import Approval from './Pages/Approval';
import ChangePassword from './Pages/ChangePassword';
import Summary from './Pages/Summary';
import { UserContextProvider } from './Pages/UserContext';

import Done from "./Pages/test";
import UserRegistration from './Pages/UserRegistration';
function App() {
  return (
    <Router>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/details/:id" element={<Process />} />
          <Route path='/details' element={<Process />} />
          <Route path="/approval" element={<Approval />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/user" element={<UserRegistration />} />
          <Route path="/test/:id" element={<Done />} />
          <Route path="/changepassword" element={<ChangePassword />} />
        </Routes>
      </UserContextProvider>
    </Router>
  )
}

export default App
