import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { Footer } from "./Footer"

export const AppLayout = () => {
    return (
        <>
            <Header/>

            <Outlet/>   {/*make route of AppLayout as '/' and add other routes as children*/} 
                        {/*Outlet component include content of other pages between header and footer*/}
            {/* <Footer/> */}
        </>
    )
}