import React, { Fragment } from 'react';
import Fade from 'react-reveal';
import ValuesBar from '../Content/ValuesBar';
import SkillBar from '../Content/SkillBar';

import Logo from '../../Pics/Logo_main.png'
import may from '../../Pics/May2.png'
import WorkProcessBar from '../Content/WorkProcessBar';
import { Button } from 'antd';
import PartnerBar from '../Content/PartnerBar';

const Home = () => {
    return (
        <Fragment>
            <div id="Welcome" className="containers main">
                <div className="row">
                    <div className='col-6 align-self-center'>
                      <h1>Input Slogan Here</h1>

                      <Button type="ghost">CLick me</Button>
                    </div>    
                    <div className='col-6 align-self-center'>
                        <img src={Logo} alt={'pics'} style={{height:"200px"}}/>
                    </div>
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
                        <h2>{"Values"}</h2>
                        <ValuesBar/>
                    </div>
                </Fade>
            </div>

            <div id = "Process"  className='containers'>
                <Fade right>
                    <div className='inner'>
                        <h2>{"Work Process"}</h2>
                        <WorkProcessBar/>
                    </div>
                </Fade>
            </div>

            <div id = "Partner"  className='containers'>
                <Fade right>
                    <div className='inner'>
                        <h2>{"Our Partner"}</h2>
                        <PartnerBar/>
                    </div>
                </Fade>
            </div>
        </Fragment>
    )
}

export default Home;