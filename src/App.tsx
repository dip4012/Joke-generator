import "./App.css"
import { Joke } from "./components/Joke/Joke"

function App() {
	return (
		<div className="App">
			<h1>Joke generator using React and Joke API</h1>
			<Joke />
		</div>
	)
}

export default App
