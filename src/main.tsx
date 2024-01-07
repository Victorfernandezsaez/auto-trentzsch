import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App.tsx'
import Contact from './components/Contact.tsx'
import Gallery from './components/Gallery.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header.tsx'
import ActiveSectionContextProvider from './context/active-section-context.tsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'contact',
    element: <Contact />,
  },
  {
    path: 'gallery',
    element: <Gallery />,
  },

])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <ActiveSectionContextProvider>
    <React.StrictMode>
      <Header />
      <RouterProvider router={router} />
    </React.StrictMode>
  </ActiveSectionContextProvider>
)

