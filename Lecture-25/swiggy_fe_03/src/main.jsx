import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Offers from './components/Offers.jsx';
import Help from './components/Help.jsx';
import Signin from './components/Signin.jsx';
import Body from './components/Body.jsx';
import Error from './components/Error.jsx';

const appRouter = createBrowserRouter([
  {
    path:'/', 
    element: <App />,
    errorElement: <Error />,
    children:[
       {path:"/"       , element: <Body /> },
       {path:"/offers" , element: <Offers /> },
       {path:"/help"   , element: <Help />   },
       {path:"/signin" , element: <Signin /> },
    ]  
  },
 
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}>  </RouterProvider>  
)
