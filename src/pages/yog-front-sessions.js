import React from 'react';
import "./session.css"

const Session = () => {

    const sessions = [
        {
            title: 'Annamaya Kosha - Sustainability Program',
            link: 'https://www.youtube.com/embed/Tyn78ECtV6s',
            author: 'Yog Front Organization',
            disable: false
        },
        {
            title: 'Pranamaya Kosha',
            link: 'https://www.youtube.com/embed/xivp1kWZ7W0',
            author: 'Yog Front Organization',
            disable: false
        },
        {
            title: 'Manomaya Kosha',
            link: 'https://www.youtube.com/embed/GrdmHHsM4o4',
            author: 'Yog Front Organization',
            disable: false
        },
        {
            title: 'VIGYANMAY KOSHA ...​',
            link: 'https://www.youtube.com/embed/HqTcsVe4pak',
            author: 'Yog Front Organization',
            disable: false
        },
        {
            title: 'AnandMaya Kosha',
            link: 'https://www.youtube.com/embed/IW1INghHtwc',
            author: 'Yog Front Organization',
            disable: false
        }
    ]

    return (
        <section id="sessions">
            <div className="full">
                <div className="container">
                    <div className="streamContainer">
                        <div className="stream appear-first">
                            <iframe allowFullScreen="" frameBorder="0" src="https://www.youtube.com/embed/Tyn78ECtV6s" title="updatedStage.name" width="100%" height="100%">
                            </iframe>
                            <div className="bottom appear appear-second">
                                <div className="messageContainer">
                                    <h2 className="stageName">Annamaya Kosha - Sustainability Program</h2>
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="schedule">
                        <h3 className="header">Yog Front Sessions</h3>
                        <br />
                        <div>
                            {
                                sessions.map((session, index) => (

                                    <div className="talk" key={index}>
                                        <div className="card-body">
                                            <h4 title={session.title} className="title">{session.title}</h4>
                                            <div className="speaker">
                                                <h5 className="name">{session.author}</h5>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Session