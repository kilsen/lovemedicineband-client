import React from 'react';
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './routes/Home';
import Meet from './routes/Meet';
import Shows from './routes/Shows';
import Gallery from './routes/Gallery';
import EPK from './routes/EPK';
import Contact from './routes/Contact';
import FightFireWithMusic from "./routes/FightFireWithMusic";
import AdminHome from './routes/admin/AdminHome';

import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/css/element.css";
import "./assets/css/font-awesome.min.css";

import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_serverURL || '';

const App = () => {
  const router = createBrowserRouter([
    {
      element: <Layout/>,
      children: [
        {path: '/', element: <Home/>},
        {path: '/meet', element: <Meet/>},
        {path: '/shows', element: <Shows/>},
        {path: '/gallery', element: <Gallery/>},
        {path: '/epk', element: <EPK/>},
        {path: '/contact', element: <Contact/>},
        {path: '/fightfirewithmusic', element: <FightFireWithMusic/>},
        {path: '/admin/*', element: <AdminHome/>}
      ]
    }
  ]);

  return (
    <RouterProvider router={router}/>
  );
}

const Layout = () => (
  <>
    <Header/>

        <Outlet/>

    <Footer/>
  </>
)

export default App;
