import { createBrowserRouter } from "react-router-dom";
import Welcome from '../Pages/Welcome'
import Home from '../Pages/Home'
import Layout from '../Pages/Layout'
import City from '../Pages/City'
import Map from '../Pages/Map'
import Setting from '../Pages/Setting'



export const router = createBrowserRouter([
  { 
    path: "/", 
    element: <Welcome/>,
    errorElement: <div>404</div>
  },
  {
    path: "/home",
    element: <Layout/>,
    children: [
      {
        path: "/home",
        element: <Home/>
      },
      {
        path: "/home/city",
        element: <City/>
      },
      {
        path: "/home/map",
        element: <Map/>
      },
      {
        path: "/home/setting",
        element: <Setting/>
      },
    ]
  }
])