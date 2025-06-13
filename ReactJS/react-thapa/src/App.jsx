import React, { Fragment } from "react";
import { NetflixSeries } from "./components/NetflixSeries.jsx";
// import './components/netflix.css'   //!for dedicated css file
import styles from './components/netflix.module.css'

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
export const App = () => {
  return (
    <section className="container">
      <h1 className={styles['series-heading']}>List of Best Netflix Series</h1>
      <NetflixSeries />
    </section>
  )
}