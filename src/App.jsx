import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainPage from './Components/MainPage/MainPage'
import PersonalInformation from "./components/SubPages/PersonalInformation";

function App() {

  return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="personal-information" element={<PersonalInformation />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App
