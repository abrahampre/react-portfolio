import React from 'react'; 

function Nav(props){
   

    const {
        categories=[],
        contactSelected,
        setContactSelected,
        setWork,
        workSelected,
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
                <li >
                    <a href="/">About Me </a>
                </li>
                <li className = {`selected ${contactSelected &&'navActive'}`}>
                    <span onClick={() => setContactSelected(true)} >Contact</span>
                </li>
                <li >
                    <span>Work Done</span>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default Nav;