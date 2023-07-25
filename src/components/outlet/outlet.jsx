import { Outlet } from 'react-router-dom'
import { NavBar } from '../navbar/navbar'
import './outlet.css'
import { Footer } from '../footer/footer'
export const RootLayout = () => {
    return (
        <div className='my-outlet'>
            <NavBar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}