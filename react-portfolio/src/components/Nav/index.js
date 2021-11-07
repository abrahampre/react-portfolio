import React from 'react';


const categories = [
    {
        name: "Portfolio", description: "portfolio with some of my last applications"
    },
    {
        name: "Resume", description: "Professional Resume"
    }
]

function Nav(){

    function categorySelected(name){
        console.log(`${name} clicked`)
    }

    return (
    <header>
        <h1>
            <a href ="/">
            Abraham Perez Reyes
            </a>
        </h1>
        <nav>
            <ul>
                <li>
                    <a href="/index.html">About Me </a>
                </li>
                <li>
                    <a href="./contact.html">Contact </a>
                </li>
                    
                {categories.map((category)=>(
                    <li key ={category.name}>
                        <span onClick={() => categorySelected(category.name)}>
                            {category.name}
                        </span>
                    </li>
                ))}

            </ul>
        </nav>
    </header>
    )
}

export default Nav;