import React from 'react';
import cm_1 from '../../images/logos/cm-1.jpg'
import cm_2 from '../../images/logos/cm-2.png'
import cm_3 from '../../images/logos/cm-3.png'
import cm_4 from '../../images/logos/cm-4.png'

import csr_1 from '../../images/logos/csr-1.png'
import csr_2 from '../../images/logos/csr-2.png'
import csr_3 from '../../images/logos/csr-3.png'
import csr_4 from '../../images/logos/csr-4.png'
import csr_5 from '../../images/logos/csr-5.jpg'

import gco_1 from '../../images/logos/gco-1.png'
import gco_2 from '../../images/logos/gco-2.png'

import nzc_1 from '../../images/logos/nzc-1.svg'
import nzc_2 from '../../images/logos/nzc-2.png'
import nzc_3 from '../../images/logos/nzc-3.png'
import nzc_4 from '../../images/logos/nzc-4.png'
import nzc_5 from '../../images/logos/nzc-5.svg'

import ts_1 from '../../images/logos/ts-1.png'
import ts_2 from '../../images/logos/ts-2.png'
import ts_3 from '../../images/logos/ts-3.png'
import ts_4 from '../../images/logos/ts-4.png'


const Sponsors = () => {

    const sponsors = [
        {
            title: 'Corporate Social Responsibility',
            logos: [csr_1, csr_2, csr_3, csr_4, csr_5],
            width: ['120px', '70px', '120px', '110px', '120px']
        },
        {
            title: 'Cities and Municipalities',
            logos: [cm_1, cm_2, cm_3, cm_4],
            width: ['160px', '160px', '120px', '110px']
        },
        {
            title: 'Global Causes and Organizations',
            logos: [gco_1, gco_2],
            width: ['100px', '140px']
        },
        {
            title: 'Net-Zero Goals',
            logos: [nzc_1, nzc_2, nzc_3, nzc_4, nzc_5],
            width: ['120px', '130px', '90px', '130px', '130px']
        },
        {
            title: 'Technology and Supporters',
            logos: [ts_1, ts_2, ts_3, ts_4],
            width: ['90px', '120px', '120px', '150px']
        }
    ]

    return (
        <section class="hero is-medium is-white">
            <div className="hero-body hero-body-2">
                <div className='columns'>
                    <div className='column is-10 is-offset-1'>
                        <h1 class="title">Our Sponsors</h1>
                        <h2 class="subtitle has-text-grey is-size-6 has-text-weight-normal">
                        Sponsors who are helping us make this Hackathon a success.
                        </h2>
                        <div className='sponsors'>
                            {
                                sponsors.map((sponsor, index) => (
                                    <div key={index} className='sponsor-list'>
                                                <h2 className='subtitle has-text-weight-bold'>{sponsor.title}</h2>
                                                <div className='sponsor-logos  is-flex-tablet '>
                                                    {
                                                        sponsor.logos.map((logo, index) => (
                                                            <div key={index} className='sponsor-logo'>
                                                                <img src={logo} alt="sponsor" width={sponsor.width[index]}/>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sponsors;
