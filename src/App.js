import { RouterProvider } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import { router } from './routes/route_comp';

function App() {
  return (
    <>
      <Navigation />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
