import './App.css'
import {Routes,Route} from 'react-router-dom'
import FetchLocation from './FetchLocation'
import Home from './Home'

function App() {

  return (
      
      <Routes>
        <Route path='*' element={<Home/>}></Route>
        <Route path='/fetch-locations' element={<FetchLocation/>}></Route>
      </Routes>
  )
}

export default App
