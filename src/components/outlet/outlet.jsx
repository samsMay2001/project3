import { Outlet } from 'react-router-dom'
import { NavBar } from '../navbar/navbar'
import './outlet.css'
import { Footer } from '../footer/footer'
import { SignIn } from '../signin/signin'
export const RootLayout = () => {
    return (
        <div className='my-outlet'>
            <NavBar/>
            <main>
                <Outlet/>
            </main>
            <SignIn/>
            <Footer/>
        </div>
    )
}