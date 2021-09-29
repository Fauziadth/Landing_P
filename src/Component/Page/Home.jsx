import React, { Fragment } from 'react';
import Fade from 'react-reveal';
import { Button } from 'antd';
import ValuesBar from '../Content/ValuesBar';
import SkillBar from '../Content/SkillBar';
import WorkProcessBar from '../Content/WorkProcessBar';
// import PartnerBar from '../Content/PartnerBar';
import Logo from '../../Pics/Logo_main.png';
import may from '../../Pics/May2.png';

const Home = () => {
    return (
        <Fragment>
            <div id="Main" className="row justify-content-center align-items-center">
                <div className='bg'/>
                <div className='col-8' style={{zIndex : 1}}>
                    <div className='row'>
                        <Fade top>
                            <div className='col-6 align-self-center'>
                                <h1>{`Get simple solutions on digitalization 
                                    and renewable energy 
                                    to reach your sustainability.`}</h1>
                                <h3>Our team brings a diverse skill set with impressive experience</h3>
                                <Button ghost>READ MORE</Button>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>  
            
            {/* <div className="profile Parent" style={{box-shadow: 0px 1px 5px grey, border-radius: 10px}}> */}
            {/* <div className="profile containers">
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
            </div> */}
            <div>
                <ValuesBar/>
            </div>
            <div>
                <SkillBar/>
            </div>
            <div>
                <WorkProcessBar/>
            </div>
        </Fragment>
    )
}

export default Home;