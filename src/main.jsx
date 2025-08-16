import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Blog from './assets/components/blog.jsx'
import Home from './assets/components/home.jsx'
import SkillCard from './assets/components/SkillCard.jsx'
import Aboutme from './assets/components/Aboutme.jsx'
import Contactme from './assets/components/Contactme.jsx'
const router = createBrowserRouter(
  [
    {
      path : "/",
      element : <App/>,
      children:[
        {
          path: "", element: <Home/>
        },
        {
          path:"skills", element: <SkillCard/>
        },
        {
          path:"aboutme", element: <Aboutme/>
        },
        {
          path:"contactme", element: <Contactme/>
        }
      ]

    },
      {
      path: "/blog",
      element: <Blog/>
      }
  ],
);


createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // <App />
  // </StrictMode>,
  <RouterProvider router={router}/>
)
