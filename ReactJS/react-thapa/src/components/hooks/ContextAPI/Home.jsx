import { useContext } from "react";
import { BioContext, useBioContext } from "./index";


export const Home = () => {
    //   const { myName, myAge } = useContext(BioContext)
    
    //!using custom hook(useBioContext) created in index.jsx
    const { myName, myAge } = useBioContext()
    
    return (
        <section>
            <h1>
                Hello Context API. My name is {myName}. I am {myAge} yrs old
            </h1>
        </section>
    );
};