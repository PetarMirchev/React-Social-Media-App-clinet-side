import './App.css';
import ErrorPage from './pages/Error/ErrorPage';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import LeftBar from './components/leftBar/LeftBar';
import RightBar from './components/rightBar/RightBar';



function App() {

//Layout (navbar, side bars & etc of app) for log user(story, img, bla-bla..) & not log user (home page of app)
const Layout = () => {
  return (
    <div>
      <Navbar/>
      <div style={{display:'flex'}}>
        <LeftBar/>
        {/* Outlet - dynamic component  */}
        <Outlet/>    
        <RightBar/>
      </div>
    </div>
    );
};



const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <Register/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Layout/>,
    children: [  // what can taka/change <Outlet/> in 'Layout'
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/profile/:id",
        element: <Profile/>
      },
    ],
    errorElement: <ErrorPage />,
  },
]);



  return (
    <div className="App">
      <RouterProvider router={router} />

      {/* <Home/> */}
      {/* <Login/> */}
      {/* <Profile/> */}
      {/* <Register/> */}
    </div>
  );
}

export default App;
