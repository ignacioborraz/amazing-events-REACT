import HomePage from './pages/HomePage'
import EventsPage from './pages/EventsPage'
import UnderConstruction from './pages/UnderConstruction'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WebsiteLayout from './layouts/WebsiteLayout'
import Details from './components/Details'
import ScrollToTop from './components/ScrollToTop'


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <WebsiteLayout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/events' element={<EventsPage />} />
          <Route path='/events/:id/empleado/:nombreEmpleado' element={<Details />} />
          <Route path='*' element={<UnderConstruction />} />
        </Routes>
      </WebsiteLayout>
    </BrowserRouter>

  )
}

export default App;
