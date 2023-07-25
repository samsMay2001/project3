import './App.css';
import { AppContext } from './appcontext';
import { Route, RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Home } from './components/home/home';
import { Brands } from './components/brands/brands';
import { RootLayout } from './components/outlet/outlet';
import { ProductList } from './components/productlist/productlist';
import { Cart } from './components/cart/cart';
import { Admin } from './components/Admin/admin';
import { Categories } from './components/Categories/categories';
import 'bootstrap/dist/css/bootstrap.min.css'
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="brands" element={<Brands/>}/>
            <Route path="catalog" element={<ProductList/>}/>
            <Route path="women" element={<ProductList/>}/>
            <Route path="categories" element={<Categories/>}/>
            <Route path="cart" element={<Cart/>}/>
            <Route path="admin" element={<Admin/>}/>
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
