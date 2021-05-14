import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
    return <button style={{backgroundColor: color}} onClick={onClick}
    className="btn">{text}</button>;
}

Button.defaultProps = {
    color: "blue",
    text: "Button",
    onClick: () => console.log("Button has been clicked!")
    
}

Button.propTypes= {
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default Button
