import React from "react";
import All from "./components/All";
import Topbar from "./components/Topbar";
import FullStack from "./components/FullStack";
import DataScience from "./components/DataScience";
import CyberSecurity from "./components/CyberSecurity";
import Career from "./components/Career";
import Footer from "./components/Footer";
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'

function App() {
  return <div id="wrapper">
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="/all" element={<All />} />
          <Route path="/fullstack" element={<FullStack />} />
          <Route path="/datascience" element={<DataScience />} />
          <Route path="/cyberscurity" element={<CyberSecurity />} />
          <Route path="/career" element={<Career />} />
          <Route path="*" element={<Navigate to="/all" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </div>
  
}
export default App;
