import HomePage from './pages/HomePage'
import EventsPage from './pages/EventsPage'
import UnderConstruction from './pages/UnderConstruction'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/events' element={<EventsPage />}/>
          {/* <UnderConstruction /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
