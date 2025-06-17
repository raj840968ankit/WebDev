import { useContext } from "react";
import { BioContext } from "./index";


export const About = () => {
  const { myName, myAge } = useContext(BioContext)

  return (
    <section>
      <h1>
        Hello Context API About Component. My name is {myName}. I am {myAge} yrs old
      </h1>
    </section>
  );
};