import HomePage from './pages/HomePage'
import EventsPage from './pages/EventsPage'
import UnderConstruction from './pages/UnderConstruction'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WebsiteLayout from './layouts/WebsiteLayout'
import Details from './components/Details'
import ScrollToTop from './components/ScrollToTop'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <WebsiteLayout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/events' element={<EventsPage />} />
          <Route path='/events/:id' element={<Details />} />
          <Route path='*' element={<UnderConstruction />} />
        </Routes>
      </WebsiteLayout>
    </BrowserRouter>

  )
}

export default App;
