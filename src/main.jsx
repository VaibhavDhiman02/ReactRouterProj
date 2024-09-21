import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { createBrowserRouter , Route , createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Layout from './Layout'
import Github, { githubInfoLoader } from './components/Github/Github'
import Contact from './components/Contact/Contact'
import User from './components/User/User'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "/about",
//         element: <About />
//       },
//       {
//         path: "/contact",
//         element: <Contact />
//       },
//       {
//         path: "/github",
//         element: <Github />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} /> 
      <Route path='/about' element={<About />} /> 
      <Route path='/contact' element={<Contact />} /> 
      <Route loader={githubInfoLoader} path='/github' element={<Github />} /> 
      <Route path='user/:userid' element={<User />} /> 
  </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
