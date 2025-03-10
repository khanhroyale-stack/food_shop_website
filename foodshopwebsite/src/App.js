import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layouts from "./layouts/Layouts";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import LoginPage from "./pages/LoginPage";
import PrivateRouter from "./routes/PrivateRouter";
import Contact from "./pages/Contact";
import Pages from "./pages/Pages";
import WebFont from "webfontloader";
import { useEffect } from "react";
import Profile from "./pages/Profile";
import AdminLayouts from "./layouts/Admin/AdminLayouts";
import ManageProduct from "./pages/admin/manageProduct";

function App() {
 
  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/*" element={<Layouts>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/menu" element={<Menu />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/contact" element={<Contact/>}></Route>
              <Route path="/pages" element={<PrivateRouter element={Pages} role={1}></PrivateRouter>}></Route>
            </Routes>
          </Layouts>}></Route>
          {/* admin Route */}  
            <Route 
            path="/product-manage" 
            element={<AdminLayouts> <ManageProduct/> </AdminLayouts>}>
              
            </Route>
        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;
