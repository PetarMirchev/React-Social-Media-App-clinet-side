import './App.css';
import ErrorPage from './pages/Error/ErrorPage';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";




function App() {

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
    path: "/profile",
    element: <Profile/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Home/>,
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
