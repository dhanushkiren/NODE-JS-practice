import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.min.css";

import UserList from "./pages/user/UserList";
import CreateUser from "./pages/user/CreateUser";
import RetrieveUser from "./pages/user/RetrieveUser";
import EditUser from "./pages/user/EditUser";
import RemoveUser from "./pages/user/RemoveUser";
import Contact from "./pages/static/Contact";
import AboutUs from "./pages/static/AboutUs";

const BackgroundColor = createGlobalStyle`
body{
  background-color: ${(props) => (props?.light ? "#f2f2f2" : "#333")};
}
`;

const BlueText = styled.div`
  color: blue;
`;

function App() {
  return (
    <>
      <BackgroundColor light />
      <Router>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/:userId" element={<RetrieveUser />} />
          <Route path="/edit/:userId" element={<EditUser />} />
          <Route path="/remove/:userId" element={<RemoveUser />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
