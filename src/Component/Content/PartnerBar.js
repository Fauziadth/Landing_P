import React from 'react';

import partner_1 from '../../Pics/Partner/Partner_1.png';
import partner_2 from '../../Pics/Partner/Partner_2.png';
import partner_3 from '../../Pics/Partner/Partner_3.png';
import partner_4 from '../../Pics/Partner/Partner_4.png';
import partner_5 from '../../Pics/Partner/Partner_5.png';
import Wrapper from '../Part/Wrapper';

const PartnerBar = () => {
  
  return (
    <Wrapper subTitle={"Our partners"} title={"To bring our very best"} direction="left">
        <div className="row justify-content-md-center" style={{paddingTop : '20px'}}>
            <div className="col-2" style={{display : 'flex', alignItems: 'center'}}>
                <img src={partner_1} style={{maxWidth : '100%'}} alt="partner_1"/>
            </div>
            <div className="col-2" style={{display : 'flex', alignItems: 'center'}}>
                <img src={partner_2} style={{maxWidth : '100%'}} alt="partner_2"/>
            </div>
            <div className="col-3" style={{display : 'flex', alignItems: 'center'}}>
                <img src={partner_5} style={{maxWidth : '100%'}} alt="partner_5"/>
            </div>
            <div className="col-2" style={{display : 'flex', alignItems: 'center'}}>
                <img src={partner_3} style={{maxWidth : '100%'}} alt="partner_3"/>
            </div>
            <div className="col-2" style={{display : 'flex', alignItems: 'center'}}>
                <img src={partner_4} style={{maxWidth : '100%'}} alt="partner_4"/>
            </div>
        </div>
    </Wrapper>
  );
}

export default PartnerBar;