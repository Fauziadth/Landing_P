import React from 'react';
import { workProcess as dataList } from '../../content/data';


const Item = ({ data }) => (
  <div className="wp_item col-5">
    <div>
        <div className="flex-center" style={{color:'#f68a12', backgroundColor:'#1c5574', borderRadius: "3px"}}><h3>{data.title.charAt(0)}</h3></div>
        <h3 style={{color:'#1c5574'}}>{data.title.slice(1)}</h3>
    </div>
    <p>{data.desc}</p>
  </div>
);

const WorkProcessBar = () => {
  
  return (
    <div className="part">
      <div className="inner w9">
          {dataList.map((data, idx) => (
            <Item data={data} key={idx} />
            ))
          }
      </div>
    </div>
  );
}

export default WorkProcessBar;