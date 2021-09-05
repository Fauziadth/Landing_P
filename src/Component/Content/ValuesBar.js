import React from 'react';
import { valuesList as dataList } from '../../content/data';
import value_pic from '../../Pics/Values.png';

const ValuesBar = () => {
  
  return (
    <div className="part">
      <div className="inner w8 left column">
          {dataList.map((data, idx) => (
                <div key={idx} className="value_item">
                    <img src={value_pic} alt="value_n"/>
                    <div>{data}</div>
                </div>
            ))
          }
      </div>
    </div>
  );
}

export default ValuesBar;