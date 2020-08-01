import React from 'react'

function About() {
    return (
        <div className='about'>
            <h1>About</h1>
            <div className='about__content'>
                <p>Hello, I'm João Fernandes. And, as part of my joruney to learn React, I've built this pokedex app.</p>
                <p>This year, I've been putting most of my productive time into studying web development and, in the past few months, specifically, the React framework.
                When I first started writing this project, I did as a way to check if really had grasped nested routers.
                Supposedly, it would be very simple to display a list of pokemon that redirected the user to a more detailed card.
                Later, I ran into tricky problems, most of them caused by the enormous amount of pokemon that there are out there. I felt driven to find solutions to those and
                It took the appliance of all the knowledge I had collected until then <span className='italic'>(e.g. on the topics of reusability, performance, context, hooks etc)</span> and the seeking of much more. Among the tools that
            I've used to achieve my final app there are the <span className='bold'>react-infinite-scroll-component</span>, which have made possible this app carrying information of pokemon from 7 gerations (instead of just the first twenty ones)
            and <a href='https://www.npmjs.com/package/number-to-color' target='_blank'>number-to-color</a>, that allowed some really dynamic stats bars, dependecies. and also, <a href='https://loading.io/' target='_blank'>loading.io</a>
            provided me a super cool loading spinner.
            </p>
                <p>
                    You can check the source code to this app <a href='https://github.com/joaoaoluiz/pokedex-app' target='_blank'>here</a> and to many more on my <a href='https://joaoaoluiz.github.io/portfolio/' target='_blank'>portofolio page</a>.
            </p>

            </div>
        </div>
    )
}

export default About