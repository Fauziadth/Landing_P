import React, { Fragment } from 'react';
import Footer from '../Content/Footer';
import Wrapper from '../Part/Wrapper';

const Contact = () => {
    return (
        <Fragment>
            <Wrapper
                subTitle={"You can reach us here"} title={"Our contact"} style={{ minHeight: '90vh', paddingTop: '30px' }}>
                <div className="row align-items-center">


                    Under Construction

                    <div style={{ textAlign: 'center' }}>

                        {/* {slideShow.map((data, idx) => 
                    {
                        if (slide === idx)
                            return <FaCircle key={idx} style={{margin : '6px 8px', cursor : 'pointer', color : '#1c658d'}}/>;
                        else 
                            return <FaRegCircle key={idx} onClick={()=>{goto(idx)}} style={{margin : '6px 8px', cursor : 'pointer', color : '#1c658d'}}/>;
                    }
                )} */}
                    </div>
                </div>
            </Wrapper>
            <Footer />
        </Fragment>
    )
}

export default Contact;