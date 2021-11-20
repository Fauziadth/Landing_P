import React, { Fragment } from 'react';
import Footer from '../Content/Footer';
import Wrapper from '../Part/Wrapper';

const contactList = [{
    name : 'Kantor Pusat',
    details : [
        'Perumahan Jatinegara Baru',
        'Jl. Gunung Taman Puspa AA 33',
        'Penggilingan, Cakung, Jakarta Timur',
        'Telp. (021) 2246 1256/76',
        'Fax. (021) 2246 1207'
    ]
},{
    name : 'Kantor Cabang',
    details : [
        'SOHO Pancoran',
        'MT Haryono St No. Kav 2-3, RT.1/RW.6',
        'West Tebet,  Tebet, South Jakarta City',
        'Jakarta 12810',
        '',
        'Jl. Kiarasari Permai IV No.2',
        'Komplek Kiarasari Asri, Kec. Buah Batu',
        'Kota Bandung, Jawa Barat 40286'
    ]
}]

const Contact = () => {
    return (
        <Fragment>
            <Wrapper
                subTitle={"Our contacts"} title={"Get in touch with us"} style={{ minHeight: '90vh', paddingTop: '90px' }}>
                <div className="row align-items-center">

                    {
                        contactList.map(con => (
                            <Fragment>
                                <h1 style={{fontSize:'1.8em', marginTop : '40px'}}>{con.name}</h1>
                                {con.details.map(det => (
                                    det ? <h3 style={{lineHeight : '20px'}}>{det}</h3> : (<div style={{height : '10px'}}/>)
                                ))}
                            </Fragment>
                        ))
                    }

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