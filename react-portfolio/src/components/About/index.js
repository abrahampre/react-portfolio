import React from 'react';
import profilePicture from '../../assets/cover/profilepic.jpg';

function About(){
    return (
        <div className="home">
        
        <section className="images">
            <img src= {profilePicture} alt="Profile Picture" id="pp"/>
        </section>

        
        <section className="about">
            
            <h2>About Me</h2>
            <article className="early">
                <h3> My Early Life </h3>
                <p>From early age i was a hands on kind of person. Always building something with cardboard, wood, junk pieces of metal from my grandparents backyard.
                    I enjoyed the outdoors, playing with my neigborhood friends in the small town in Mexico where i was born Ciudad Victoria. After having my first LEGO toy,
                    I decided to just have those kind of toys for chirstmas. My mom always said "He will be an engineer", She was wrong I became an Mechanical engineer and
                    now im pursuing my dream of becoming a Software Developer
                </p>
            </article>
            <article className="education">
                <h3>My Education</h3>
                <p>I graduated from Texas A&M Kingsville in 2018 with a degree on Mechanical Engineer. I had work on the oil industry and semiconductor industry.</p>
            </article>
            <article className="future">
                <h3>Future Goals</h3>
                <p>My goals are to become a good Software Developer and be able to teach those skills at some point in my life. I will like to become a teacher in my hometown when ever I retire.</p>
            </article>
        </section>
    </div>
    )
}

export default About;