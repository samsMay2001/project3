import './App.css';
import { AppContext } from './appcontext';
import { Route, RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { RootLayout } from './components/outlet/outlet';
import { ProductList } from './components/productlist/productlist';
import { Cart } from './components/cart/cart';
import { Admin } from './components/Admin/admin';
import { Categories } from './components/Categories/categories';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ProductView } from './components/product/productView';
import { Home } from './components/home/home/home';
// import { About } from './components/About/About';
import { About } from './components/About/about'
import { NewProperty } from './components/NewProperty/newProperty';
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout/>}>
            <Route index element={<Home/>}/>
            {/* <Route path="about" element={<About/>}/> */}
            <Route path='about' element = {<About/>}/>
            <Route path="listings" element={<ProductList/>}/>
            <Route path="featured" element={<ProductList/>}/>
            <Route path="listings/:id" element={<ProductView/>}/>
            <Route path="location" element={<ProductList/>}/>
            <Route path="categories" element={<Categories/>}/>
            <Route path="cart" element={<Cart/>}/>
            <Route path="admin" element={<Admin/>}/>
            <Route path="newproperty" element={<NewProperty/>}/>
            <Route path="*" element={<Home/>}/>
        </Route>
    )
)

function App() {
  return (
    <div className="App">
      <AppContext>
        <RouterProvider router={router}/>
      </AppContext>
    </div>
  );
}

export default App;
