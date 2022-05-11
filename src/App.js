import './App.css'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import Header from './library/Header'
import Jotai from './library/jotai'
import Recoil from './library/recoil'
import Constate from './library/constate'
import RTK from './library/RTK'

function App() {
  return (
    <div className="App">
			<Header />
			<Routes>
				<Route exact path={'/'} element={ <Navigate to='recoil' />} />
				<Route exact path={'/constate'} element={<Constate />} />
				<Route exact path={'/jotai'} element={<Jotai />} />
				<Route exact path={'/recoil'} element={<Recoil />} />
				<Route exact path={'/RTK'} element={<RTK />} />
			</Routes>
    </div>
  );
}

export default App;
