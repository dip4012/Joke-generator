import "./Button.css"

export const Button: React.FC<{ handleClick: () => void }> = ({
	handleClick,
}) => {
	return (
		<button className="jokeButton" onClick={handleClick}>
			Click to generate a joke.
		</button>
	)
}
