import React from 'react';


function Nav(props){

    const {
        categories=[],
        // setCurrentCategories,
        // currentCategory
        contactSelected,
        setContactSelected
    } = props;

    return (
    <header>
        <h1>
            <a href ="/">
            Abraham Perez Reyes
            </a>
        </h1>
        <nav>
            <ul>
                <li className = {`selected ${contactSelected &&'navActive'}`}>
                    <a href="#about" onClick={() => setContactSelected(false)}>About Me </a>
                </li>
                <li className = {`selected ${contactSelected &&'navActive'}`}>
                    <span onClick={() => setContactSelected(true)}>Contact</span>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default Nav;