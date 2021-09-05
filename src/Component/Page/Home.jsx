import React, { Fragment } from 'react';
import { IconContext } from 'react-icons';
import SkillBar from '../Content/SkillBar';
import { dataLink } from '../../content/data';
import Fade from 'react-reveal';

import may from '../../Pics/May2.png'


const iconLink = (data, idx) => (
    <a href={data.lnk} key={idx}><data.icon className='icon'/></a>
)

const Home = () => {
    return (
        <Fragment>
            <div id="Welcome" className="containers main">
                <div>
                    <div>
                    </div>    
                    <h1>{"Landing Page"}</h1>
                    <IconContext.Provider value={{size : '30px'}}>
                        <div className='iconContainer'>
                            {dataLink.map((data, idx) => iconLink(data, idx))}
                        </div>
                    </IconContext.Provider>
                </div>
            </div>  
            
            {/* <div className="profile Parent" style={{box-shadow: 0px 1px 5px grey, border-radius: 10px}}> */}
            <div className="profile containers">
                <Fade left>
                    <div className="profileContainer inner">
                        <div className="profile about">
                            <h2>{"Lorem ipsum dolor sit amet!"}</h2>
                            <div className='par'>
                                <div>
                                    <p>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}</p>
                                    <p>{"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}</p>
                                    <p>{"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}</p>
                                    <p>{"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}</p> 
                                    <p>{"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}</p>
                                </div>
                                <img src={may} alt={'pics'}></img>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
            
            <div className= "containers">
                <Fade right>
                    <div className='inner'>
                        <h2>{"Capabilities"}</h2>
                        <SkillBar/>
                    </div>
                </Fade>
            </div>

            <div id = "Experiences"  className='containers'>
                <Fade left>
                    <div className='inner'>
                        <h2>{"Lorem Ipsum"}</h2>
                    </div>
                </Fade>
            </div>
        </Fragment>
    )
}

export default Home;