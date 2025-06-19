import { Outlet, useNavigation } from "react-router-dom"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { Loading } from "./Loading"

export const AppLayout = () => {
    const navigation = useNavigation()

    if(navigation.state === "loading"){
        return <Loading/>
    }
    
    return (
        <>
            <Header/>

            <Outlet/>   {/*make route of AppLayout as '/' and add other routes as children*/} 
                        {/*Outlet component include content of other pages between header and footer*/}
            {/* <Footer/> */}
        </>
    )
}