import React from "react";
import fishingRepo from '../../assets/repos/fishing.jpg'
import hero from '../../assets/repos/hero-bg.jpg'
import weather from '../../assets/repos/weather.png'


function Repos (){
    
    return(
        <section class="samples">

        <article class="sample">
            <div class="left">
                <a href="https://github.com/abrahampre/run-buddy.git">
                 <img src={hero} alt="Run Buddy Webpage" className="ref-image" />
                </a>
            </div>
            <div class="description right">
                <h3>Run Buddy</h3>
                <p>Run Buddy is my first project with the Austin Texas University Coding Boot Camp. On this excercise I learned some of the most important concepts to be able to work with HTML and CSS </p>
            </div>
        </article>

        <article class="sample" id="flip">
            <div class="description left">
                <h3>Weather API Website</h3>
                <p>During this excercise I was able to create a website that used a free weather API in order to look for weather forecast.</p>
            </div>
            <div class="right">
                <a href="https://abrahampre.github.io/weather-report-using-api/">
                    <img src= {weather} alt="Weather API website screenshot" class="ref-image"/> 
                </a>
            </div>
        </article>

        <article class="sample">
            <div class="left">
                <a href="https://boiling-hamlet-94098.herokuapp.com/">
                <img src={fishingRepo} alt="Bait and tracker screenshot" class="ref-image"/>
                </a>
            </div>
            <div class="description right">
                <h3>Bait-and-Tracker</h3>
                <p>During this team project, we created an app able to register fishing records during a tournament. We were able to create profiles for each participant, login sessions and leader boards.</p>
            </div>
        </article>
    </section>
    )
}

export default Repos;
