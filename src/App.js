import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Header from './components/header';
import Home from './pages/home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>Something went wrong!</div>,
  },
  {
    path: "Home",
    element: <Home />,
  },
  {
    path: "About",
    element: <div>Hello About!</div>,
  },
  {
    path: "**",
    element: <div>not found!</div>,
  },
]);


function App() {
  return (
    <div style={{
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
    }}>
      <Header />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#f5f5f5',
        height: '100%',
      }}>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
