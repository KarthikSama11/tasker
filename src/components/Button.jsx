const Button = ({ text, color, onAdd }) => {
	return (
		<div>
			<button
				style={{ backgroundColor: color }}
				onClick={onAdd}
				className="btn"
			>
				{text}
			</button>
		</div>
	);
};

export default Button;
