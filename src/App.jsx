import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './pages/Root';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import BingoBoard, {
  loader as boardLoader,
} from './pages/BingoBoard/BingoBoard';
import Admin from './pages/Admin/Admin';
import Master from './pages/Master/Master';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/admin',
        element: <Admin />,
      },
      {
        path: '/master',
        element: <Master />,
      },
      {
        path: '/board',
        element: <BingoBoard />,
        loader: boardLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
