import Button from "./Button";
import PropTypes from "prop-types";
const Header = ({ title, onAdd, showAdd }) => {
	return (
		<header className="header">
			<h1>{title}</h1>
			<Button
				text={!showAdd ? "Add" : "Close"}
				color={!showAdd ? "#1ed760" : "red"}
				onAdd={onAdd}
			/>
		</header>
	);
};
Header.propTypes = {
	title: PropTypes.string,
	color: PropTypes.string,
};

export default Header;
