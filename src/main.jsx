import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home';
import About from './components/header/About';
import Contact from './components/header/Contact';
import Users from './components/users/Users';
import UserDetails from './components/users/UserDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children: [
      {
        path: "/about",
        element:<About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/users",
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users/>
      },
      {
        path: "/users/:id",
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
        element:<UserDetails/>
      }

    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
