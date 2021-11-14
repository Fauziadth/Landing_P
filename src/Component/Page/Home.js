import React, { Fragment } from 'react';
import Fade from 'react-reveal';
import { Button } from 'antd';
import ValuesBar from '../Content/ValuesBar';
import SkillBar from '../Content/SkillBar';
import WorkProcessBar from '../Content/WorkProcessBar';
import PartnerBar from '../Content/PartnerBar';
import Footer from '../Content/Footer';

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
            <div>
                <ValuesBar/>
            </div>
            <div>
                <SkillBar/>
            </div>
            <div>
                <WorkProcessBar/>
            </div>
            <div>
                <PartnerBar/>
            </div>
            <Footer/>
        </Fragment>
    )
}

export default Home;