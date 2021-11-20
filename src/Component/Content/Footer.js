import React from 'react';

const address = [
      'Perumahan Jatinegara Baru',
      'Jl. Gunung Taman Puspa AA 33',
      'Penggilingan, Cakung, Jakarta Timur',
      'Telp. (021) 2246 1256/76',
      'Fax. (021) 2246 1207'
]

const Footer = () => {
  
  return (
    <div className="footer_custom row justify-content-center">
        <div className="col-8 row">
          <h3>
            Invitek Daya Industri
          </h3>
          <div className="col-6">
            <p>
              {`Specializing in delivering digitalization and renewable energy solutions in simplest way, Our team brings a diverse skill set with impressive experience provide simple solutions on digitalization and renewable energy to reach your sustainability.`}
            </p>
          </div>
          <div className="col-1">
          </div>
          <div className="col-5">
            {address.map( (det, idx) => 
              <p key={idx}>
                {det}
              </p>
            )}
          </div>
        </div>
    </div>
  );
}

export default Footer;