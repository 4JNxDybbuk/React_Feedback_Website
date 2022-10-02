import React from 'react'
import PropTypes from 'prop-types'

function Header({ text, bgColor, textColor }) {
    const headerStyle = {
        backgroundColor: bgColor,
        color: textColor
    }

    return (
        <header style={headerStyle}>
            <div className='container'>
                <h2>{text}</h2>
            </div>
        </header>

    )
}

// to set props value as default
Header.defaultProps = {
    text: "Feedback UI",
    bgColor: "rgba(0,0,0,0.4)",
    textColor: "#ff6a95"
}

// to set types of props
Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string
}


export default Header