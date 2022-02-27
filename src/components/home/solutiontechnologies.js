import React from 'react'
import ESRICanada from '../../images/solutiontechnologies/ESRICanada.png'
import googlecloud from '../../images/solutiontechnologies/googlecloud.png'
import smartcomputing from '../../images/solutiontechnologies/smartcomputing.png'

const openTechnologyDiv = (technologyName) => {
    
    const technologies = document.querySelectorAll('.technology');
    technologies.forEach((technology) => {
        technology.style.display = 'none'
    });
        
    const tablinks = document.querySelectorAll('.tablink');
    for (var i = 0; i < technologies.length; i++) {
            tablinks[i].className = tablinks[i].className.replace('w3-border-green', '');
    }
    
    document.querySelector('#'+technologyName+'').style.display = 'block';
    document.querySelector('[data-id='+technologyName+']').className += ' w3-border-green';
}


const solutiontechnologies = () => {
    return (
        <section className="hero is-medium is-white">
            <div className="hero-body hero-body-3 no-padding">
                <div className="tabMenu">                    
                        <div>                        
                            <h1 class="title">Solution Technologies</h1><br />
                    <a href="javascript:void(0)" className='has-text-weight-semibold' onClick={() => { openTechnologyDiv('GoogleCloud') }}>
                            <div data-id='GoogleCloud' className="w3-third tablink w3-bottombar w3-border-green w3-hover-light-grey w3-padding">Google Cloud</div>
                    </a>
                    <a href="javascript:void(0)" className='has-text-weight-semibold' onClick={() => { openTechnologyDiv('ESRICanada') }}>
                        <div data-id='ESRICanada' className="w3-third tablink w3-bottombar w3-hover-light-grey w3-padding">ESRI Canada</div>
                    </a>
                    <a href="javascript:void(0)" className='has-text-weight-semibold' onClick={() => { openTechnologyDiv('SmartComputing') }}>
                        <div data-id='SmartComputing' className="w3-third tablink w3-bottombar w3-hover-light-grey w3-padding">Smart Computing</div>
                            </a>
                    </div>
                                        
                    <div id="GoogleCloud" className="has-text-weight-semibold w3-container technology" style={{ display: 'block' }}>
                    <h2><img className='technologyImage' src={googlecloud} alt="Google Cloud" /></h2>
                    <p>Seneca Sustainability Hackathon has partnered with Google Cloud on the Cloud Speaker Series workshop series.
                            Partnering with the Cloud Speaker Series allows us to provide a month of free access to the <a href='https://protect-us.mimecast.com/s/fgiYCJ6jWLiX2ymxSG1X2M?domain=cloudskillsboost.google/'><u>Google Cloud Skills Boost</u></a> platform where students can access a catalog of hands-on lab training for Google Cloud products and services. Access <a href='https://events.withgoogle.com/google-cloud-speaker-series/seneca/'><u>here</u></a>.</p>
                </div>

                    <div id="ESRICanada" className="has-text-weight-semibold w3-container technology" style={{ display: 'none' }}>
                        <h2><img className='technologyImage' src={ESRICanada} alt="ESRI Canada" /></h2>
                    <p>As one of the Canadian providers of enterprise geographic information system (GIS) solutions, Esri Canada allows us to provide students with multiple layers of data to be displayed on a single map. The platform can be accessed through ArcGIS Online, accessible for everyone free of charge, and ArcGIS Pro, tuned to Seneca students.</p>
                </div>

                    <div id="SmartComputing" className="has-text-weight-semibold w3-container technology" style={{ display: 'none' }}>
                        <h2><img className='technologyImage' src={smartcomputing} alt="Smart Computing" /></h2>
                    <p>SOSCIP is an R&D advanced computing consortium where their mission is to bring together industrial partners and academic researchers and provide them with sophisticated advanced computing technologies and expertise. On this account, we have partnered with them to bring the power of CPU accelerated platforms to help students solve their challenge sets.
                        To access these services contact your student success officer.</p>
                        </div>
                    </div>
            </div></section>
    );
};

export default solutiontechnologies;