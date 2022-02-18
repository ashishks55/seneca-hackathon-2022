import React from 'react'
import grand_prize from '../../images/prizes/Grand prize.png'
import f1_car from '../../images/prizes/F1 Car.png'
import trophy from '../../images/prizes/Trophy.png'
import confetti from '../../images/prizes/Confetti.png'

const prizes = () => {
    return (
        <section className="hero is-medium is-white">
            <div className="hero-body hero-body-3 no-padding">
                <div className='columns'>
                    <div className='column is-12-tablet is-5-desktop is-offset-1 hero-content no-padding'>
                        <p className="prize-title main-title has-text-dark-green">
                            <br /><br /><span>GRAND PRIZE</span>
                        </p>
                        <p className="prize-title has-text-orange grand-prize-title">
                            $2000
                        </p>
                        <p className="subtitle b has-text-dark-green">
                            <span><b>For the final winning team &</b></span>
                            <br />
                            <span className='has-text-dark-green'><b>a chance to present your idea to the investor</b></span>
                        </p>
                        <p className="subtitle is-size-6 mg-top-1 has-text-orange" style={{ marginRight: '8.333%' }}>
                            <b>All challenge set winners get WINNER Micro credential & sustainable Hacktahon Tees</b>
                        </p>
                        <div className='column is-5 is-hidden-desktop hero-img' style={{ paddingTop: '6%' }}>
                            <img src={grand_prize} alt="Grand Prize" width="70%" />
                        </div>
                    </div>
                    <div className='column is-5 is-hidden-touch hero-img' style={{ paddingTop: '6%' }}>
                        <img src={grand_prize} alt="Grand Prize" width="80%" />
                    </div>
                </div>
                <table border="0" cellspacing="0" cellpadding="0" className="f1-car-table">
                    <tr className='f1-car-tr'>
                        <td className='f1-car-td-white'></td>
                        <td className='f1-car-td-red'></td>
                        <td className='f1-car-td-white'></td>
                        <td className='f1-car-td-red'></td>
                    </tr>
                </table>
                <div className='f1-div column is-10 is-offset-1'>
                    <div className='f1-car hero-img'>
                        <img src={f1_car} alt="F1 car" width="100%" />
                    </div>
                    <div className='is-12-tablet is-7-desktop is-offset-1 hero-content f1-content'>
                        <p className="prize-title">
                            3 DAY PASSES FOR GRANDSTAND
                            <br />
                            31 MONTREAL GP
                        </p>
                        <p className="prize-title has-text-red">
                            <b>JUNE 17-19</b>
                        </p>
                        <p className="prize-title mg-top-3">
                            <b>Exclusively for F1 Challenge set winning team</b>
                        </p>
                    </div>
                </div>
                <table border="0" cellspacing="0" cellpadding="0" className='f1-car-table-bottom'>
                    <tr className='f1-car-tr'>
                        <td className='f1-car-td-white'></td>
                        <td className='f1-car-td-red'></td>
                        <td className='f1-car-td-white'></td>
                        <td className='f1-car-td-red'></td>
                    </tr>
                </table>
                <div className='rows is-12-tablet is-12-desktop hero-content has-text-dark-green'>
                    <div className='row prizes-trophy-left-div'>
                        <p className='width-60 prize-trophy-section'>
                            <span>Category winners get $500 & an opportunity to present the idea to Thinking North Investor Network</span>
                        </p>
                    </div>
                    <br />
                    <div className='row prizes-trophy-right-div'>
                        <p className='right-text width-60 prize-trophy-section'>
                            Extra $500 for challenge sets from Deloitte, Roche, CPOS and FutureTel
                        </p>
                    </div>
                    <br />
                    <div className='row prizes-trophy-left-div'>
                        <p className='width-60 prize-trophy-section'>
                            <b>All rule abiding participants have chances to win over $1000 worth of prizes in social media - based content & receive a participant micro credential </b>
                        </p>
                    </div>
                    <br />
                    <div className='row prizes-trophy-40-right-div'>
                        <p className='center-text width-60 is-hidden-touch' style={{ backgroundImage: 'url(' + confetti + ')' }}><img className="diagonal-image" src={trophy} alt="Trophy" width="40%" /></p>
                        <p className='center-text width-60 is-hidden-desktop' style={{ backgroundImage: 'url(' + confetti + ')' }}><img className="diagonal-image" src={trophy} alt="Trophy" width="70%" /></p>
                    </div>
                    <br />
                </div>
            </div>
        </section>
    );
};

export default prizes;