import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Basket from "./pages/Basket";
import WishList from "./pages/WishList";
import Detail from "./pages/Detail";
import BasketProvider from "./context/BasketProvider";
import WishListProvider from "./context/WishListProvider";
import Admin from "./pages/Admin";
import Add from "./pages/Add";

function App() {
  return (
    <>
      <BasketProvider>
        <WishListProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="/category" element={<Category />} />
              <Route path="/men" element={<Men />} />
              <Route path="/women" element={<Women />} />
              <Route path="/basket" element={<Basket />} />
              <Route path="/wishList" element={<WishList />} />
              <Route path="/detail/:id" element={<Detail />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/add" element={<Add />} />
            </Route>
          </Routes>
        </BrowserRouter>
        </WishListProvider>
      </BasketProvider>
    </>
  );
}

export default App;
