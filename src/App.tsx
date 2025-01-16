import { BrowserRouter as Router, Routes, Route,  Navigate } from "react-router-dom";
import Main from "./user/main/main";
import Catalog from "./user/catalog/catalog";
import ProductCard from "./user/productCard/card";
import Basket from "./user/basket/basket";
import Placing from "./user/placing/placing";
import Profile from "./user/profile/profile";
import Orders from "./user/orders/order";
import Header from "./modules/header/header";
import Clothes from "./user/clothes/clothes";
import Sertificate from "./user/sertificate/sertificate";
import Acsesuares from "./user/acsesuares/acsesuares";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/main" replace />} />
          <Route path="/main" element={<Main/>} />
          <Route path="/catalog" element={<Catalog/>} />
          <Route path="/productcard" element={<ProductCard/>} />
          <Route path="/basket" element={<Basket/>} />
          <Route path="/placing" element={<Placing/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/header" element={<Header/>} />
          <Route path="/kids" element={<Clothes/>} />
          <Route path="/man" element={<Sertificate/>} />
          <Route path="/woman" element={<Acsesuares/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
