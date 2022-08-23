import HomePage from './pages/HomePage'
import EventsPage from './pages/EventsPage'
import UnderConstruction from './pages/UnderConstruction'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WebsiteLayout from './layouts/WebsiteLayout'


function App() {
  return (
      <BrowserRouter>
      <WebsiteLayout>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/events' element={<EventsPage />}/>
          <Route path='*' element={<UnderConstruction />}/>
        </Routes>
      </WebsiteLayout>      
      </BrowserRouter>
      
  )
}

export default App;
