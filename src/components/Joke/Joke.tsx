import "./Joke.css"
import { useState } from "react"
import { Button } from "../Button/Button"

export const Joke: React.FC = () => {
	const [joke, setJoke] = useState<string>("")

	const callApi = async () => {
		const res = await fetch(
			"https://sv443.net/jokeapi/v2/joke/Programming?type=single"
		)
		const resJson = await res.json()
		setJoke(resJson.joke)
	}

	return (
		<div className="joke">
			<Button handleClick={callApi} />
			<p>{joke}</p>
		</div>
	)
}
