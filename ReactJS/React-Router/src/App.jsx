
import {
  createBrowserRouter,
  RouterProvider,
  // eslint-disable-next-line no-unused-vars
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Movie } from "./pages/Movie.jsx";
import { Contact } from "./pages/Contact.jsx";
import { About } from "./pages/About.jsx";
import { AppLayout } from "./components/layout/AppLayout.jsx";
import { ErrorPage } from "./pages/ErrorPage.jsx";
import { getMoviesData } from "./api/GetAPIData.jsx";

export const App = () => {
  //! old method
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //       <Route path='/' element={<Home/>}/>
  //       <Route path='/about' element={<About/>}/>
  //       <Route path='/contact' element={<Contact/>}/>
  //       <Route path='/movie' element={<Movie/>}/>
  //     </Route>
  //   )
  // )

  // ! new method
  // const router = createBrowserRouter([
  //   {
  //     path : '/',
  //     element : <Home/>
  //   },
  //   {
  //     path : '/movie',
  //     element : <Movie/>
  //   },
  //   {
  //     path : '/contact',
  //     element : <Contact/>
  //   },
  //   {
  //     path : '/about',
  //     element : <About/>
  //   },
  // ])

  //!For accessing header and footer in every router according to app layout
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement : <ErrorPage/>,    //!Here i have handled error routes
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/movie",
          element: <Movie />,
          loader : getMoviesData,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
