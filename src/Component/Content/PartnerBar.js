import React from 'react';

import partner_1 from '../../Pics/Partner/Partner_1.png';
import partner_2 from '../../Pics/Partner/Partner_2.png';
import partner_3 from '../../Pics/Partner/Partner_3.png';
import partner_4 from '../../Pics/Partner/Partner_4.png';
import partner_5 from '../../Pics/Partner/Partner_5.png';

const PartnerBar = () => {
  
  return (
    <div className="part">
        <div className="inner w9 flex-nowrap">
            <div className="partner_item col-auto">
                <img src={partner_1} alt="partner_1"/>
            </div>
            <div className="partner_item col-auto">
                <img src={partner_2} alt="partner_2"/>
            </div>
            <div className="partner_item col-auto">
                <img src={partner_3} alt="partner_3"/>
            </div>
            <div className="partner_item col-auto">
                <img src={partner_4} alt="partner_4"/>
            </div>
            <div className="partner_item col-auto">
                <img src={partner_5} alt="partner_5"/>
            </div>
        </div>
    </div>
  );
}

export default PartnerBar;