import Homes from "./components/home";
import Category from "./components/category";
import HomeProduct from "./components/home-product";
import Login from "./login/page";
import Register from "./register/page";
import Products from "./components/products";
import SingleProduct from "./components/single_product";
export default function Home() {
  return (
    <div>
      <Homes />
      <Category />
      <HomeProduct /> 
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <SingleProduct /> */}
      {/* <Products /> */}
    </div>
  );
}
