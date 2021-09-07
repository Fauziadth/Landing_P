import React, { Fragment } from 'react';
import { workProcess as dataList } from '../../content/data';


const Item = ({ data }) => (
  <div className="wp_item col-md-4">
    <div>
        <div className="flex-center" style={{backgroundColor:'#1c5574', borderRadius: "3px"}}><h3 style={{color:'#f68a12'}}>{data.title.charAt(0)}</h3></div>
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
            <Fragment>
              <Item data={data} key={idx} />
              {idx === 1 && <div className={'w-100'}/>}
            </Fragment>
            ))
          }
      </div>
    </div>
  );
}

export default WorkProcessBar;