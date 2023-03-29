import '../styles/App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path :'/',
    element : <div>Root Element</div>
  },
  {
    path:'/quiz',
    element:<div>Quiz Component</div>
  },
  {
    path:'/result',
    element:<div>Result components</div>
  },

])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
