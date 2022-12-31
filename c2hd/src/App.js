import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
// import HomePage from "./HomePage";

function App() {
	return (
		<BrowserRouter>
			<Nav />
			<div className="container">
				<Routes>{/* <Route path="/" element={<HomePage />} /> */}</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
