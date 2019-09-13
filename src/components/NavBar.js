import React from 'react'

const NavBar = () => {
    return (
        <header id="navbar" className="bg-white black-80 tc pv3 avenir w-100">
            <a href="https://image.flaticon.com/icons/svg/2034/2034751.svg">
                <img className="pa3 w3 h3" alt="LightSaber ;)" src="https://image.flaticon.com/icons/svg/2034/2034751.svg"></img>
            </a>
            <h1 className="mt2 mb0 ttu baskerville i fw1 f1">Star Wars Wiki</h1>
            <h2 className="mt2 mb0 f6 fw4 tracked">Details of Characters</h2>
            <nav className="bt bb tc center mt4">
                <a className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" href="#navbar">Home</a>
                <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="#footer">Contact</a>
            </nav>
        </header>
    )
}

export default NavBar