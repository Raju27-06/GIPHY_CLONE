
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/AppLayout';
import Home from './pages/Home';
import Search from './pages/Search';
import SingleGif from './pages/SingleGif';
import Favourites from './pages/Favourites';
import Categories from './pages/Categories';
import GifProvider from './context/GifContext';
//homepage
//categories
//search
//single gif
//favourites

const router = createBrowserRouter([
  {
    element : <AppLayout />,

    children : [
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/:category',
        element:<Categories/>
      },
      {
        path:'/search/:query',
        element:<Search/>
      },
      {
        path:'/:type/:slug',
        element:<SingleGif/>
      },
      {
        path:'/favourites',
        element:<Favourites/>
      }
    ]
  }
])
function App() {
  return (
    <GifProvider>
      <RouterProvider router={router}/>
    </GifProvider>
  )
}

export default App
