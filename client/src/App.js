import './App.css';
import ErrorPage from './pages/Error/ErrorPage';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register';
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import LeftBar from './components/leftBar/LeftBar';
import RightBar from './components/rightBar/RightBar';



function App() {

// user status -> Login (true)/not Login(false)  //to be expanded whit backend logic
  const currentUser = true;



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


// protected routes - to check user login
const ProtectedRoute = ({children}) => {
  if (!currentUser){ //no user go to 'login page'
    return <Navigate to="/login"/>
  }

  return children; // yes 'user login'
};



const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute> <Layout/> </ProtectedRoute>, //call 'ProtectedRoute' to check user login status
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
]);



  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
