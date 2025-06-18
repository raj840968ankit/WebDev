import React, { Fragment } from "react";
import { NetflixSeries } from "./components/NetflixSeries.jsx";
// import './components/netflix.css'   //!for dedicated css file (normal css)
// import styles from './components/netflix.module.css'  //!(css modules)
// import { Events } from "./components/Events.jsx";
// import { EventProps } from "./components/EventProps.jsx";
// import { State } from "./components/hooks/State.jsx";
// import { DerivedState } from "./components/hooks/DerivedState.jsx";
// import { LiftStateUp } from "./components/hooks/ListStateUp.jsx";
// import { ToggleSwitch } from "./projects/ToggleSwitch/ToggleSwitch.jsx";
// import { Todo } from "./projects/TODO/Todo.jsx";
import { Registration } from "./components/hooks/useState/Registration.jsx";
import { RegistrationReact } from "./components/hooks/useState/RegistrationReact.jsx";
import { LoginForm } from "./components/hooks/useState/LoginForm.jsx";
import { ContactForm } from "./components/hooks/useState/ContactForm.jsx";
import { ReactUseEffect } from "./components/hooks/useEffect/index.jsx";
import { UseEffectChallenge } from "./components/hooks/useEffect/UseEffectChallenge.jsx";
import { CleanUp } from "./components/hooks/useEffect/CleanUp.jsx";
import { HowNotToFetchApi } from "./components/hooks/useEffect/HowNotToFetchApi.jsx";
import { UseRef } from "./components/hooks/useRef/index.jsx";
import { ForwardRefs } from "./components/hooks/useRef/ForwardRefs.jsx";
import { UseId } from "./components/hooks/useId/index.jsx";
import { ParentComponent } from "./components/PropDrilling.jsx";
import { BioProvider } from "./components/hooks/ContextAPI/index.jsx";
import { Home } from "./components/hooks/ContextAPI/Home.jsx";
import { About } from "./components/hooks/ContextAPI/About.jsx";
import { ReducerComp } from "./components/hooks/useReducer/index.jsx";
import { MemoParentComponent } from "./components/hooks/Memo/UseMemo.jsx";
import { ReactMemo } from "./components/hooks/Memo/ReactMemo.jsx";
import { UseCallback } from "./components/hooks/Memo/UseCallback.jsx";

//!returning only 1 element (using jsx)
// export const App = () => {
//   return <h1>Hello Ankit</h1>
// }

//!returning more than 1 element always needs a parent element (using jsx)
// export const App = () => {
//   return (
//     <div>
//       <div>
//         <div className="img">
//           <img src="wallpaper.jpg" alt="img" height="30%" width="30%" />
//         </div>
//         <h2>This is my wallpaper</h2>
//       </div>
//     </div>
//   );
// };

//!we will use Component here (using component)
// export const App = () => {
//   return (
//     <div>
//       <Wallpaper/>          //here we are using defined component
//       <Wallpaper/>
//       <Wallpaper/>
//       <Wallpaper/>
//       <Wallpaper/>
//     </div>
//   )
// }

//!we will use Fragment here (using Fragment)
// export const App = () => {
//   return (
//     <>
//       <Wallpaper/>
//       <Wallpaper/>
//       <Wallpaper/>
//       <Wallpaper/>
//       <Wallpaper/>
//     </>
//   )
// }

//!we will use dynamic value inserting here (Using dynamic values)
// export const App = () => {
//   const name = "Ankit";
//   const age = 21;

//   const height = () => {
//     return 5;
//   };

//   return (
//     <>
//       <h1>
//         My name is {name} and my age is {age}
//       </h1>
//       <h2>
//         My height is {height()} ft
//       </h2>
//     </>
//   );
// };

//? this is a react component
// const Wallpaper = () => {
//   return (
//     <div>
//       <div className="img">
//         <img src="wallpaper.jpg" alt="img" height="30%" width="30%" />
//       </div>
//       <h2>This is my wallpaper</h2>
//     </div>
//   );
// };

//!we are making a card of netflix series here
//?CSS of className=series-heading is written in netflix.css 
// export const App = () => {
//   return (
//     <section className="container">
//       <h1 className={styles['series-heading']}>List of Best Netflix Series</h1>
//       <NetflixSeries />
//       {/* <Events/> */}
//       {/* <EventProps/> */}
//     </section>
//   )
// }


//!we are using hook here (useState)
// export const App = () => {
//   // return <State/>
//   // return <DerivedState/>
//   // return <LiftStateUp/>
//   return (
//     // <div className="container">
//     //   <ToggleSwitch/>
  
//     // </div>
//     // <Todo/>
    
//     // <RegistrationReact/>
    
//     // <LoginForm/>
//     <ContactForm/>
//   )
// }

//!we are using hook here (useEffect)
// export const App = () => {
//   return (
//     // <ReactUseEffect/>
//     // <UseEffectChallenge/>
//     // <CleanUp/>
//     <HowNotToFetchApi/>
//   )
// }

// //!we are using hook here (useRef)
// export const App = () => {
//   return (
//     // <UseRef/>
//     // <ForwardRefs/>
//     // <UseId/>
//   )
// }

// //!we are using prop drilling
// export const App = () => {
//   return (
//     <ParentComponent/>
//   )
// }

//!we are using 'context API' for mitigating 'prop drilling problem'
// export const App = () => {
//   return (
//     <BioProvider>
//       <Home/>
//       <About/>
//     </BioProvider>
//   )
// }

// //!we are using 'useReducer' Hook
// export const App = () => {
//   return (
//     <ReducerComp/>
//   )
// }

//!we are using React Memo and useMemo hook
export const App = () => {
  return (
    // <ReactMemo/>
    // <MemoParentComponent/>
    <UseCallback/>
  )
}