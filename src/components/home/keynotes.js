import React, { useState } from 'react'
import ReactPlayer from "react-player"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import video_thumbnail from '../../images/keynotes/KeyNote_Image1.jpg';
import keynote2image from '../../images/keynotes/KeyNote_Image2.jpg';
import keynote3image from '../../images/keynotes/KeyNote_Image3.jpg';
import keynote4image from '../../images/keynotes/KeyNote_Image4.jpg';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const displayVideo = (videoUrl) => {
    debugger;
    const videoDivs = document.querySelectorAll('.defaultVideoView')
    videoDivs.forEach((videoDiv) => {
        videoDiv.getElementsByTagName('iframe')[0].src = videoUrl
        });
}

const Keynotes = () => {
    const videos = [
        {
            image: keynote2image,
            url: 'https://www.youtube.com/embed/6JUx9QfOj9o?autoplay=0&mute=0&controls=1&playsinline=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=1'
        },
        {
            image: keynote3image,
            url: 'https://www.youtube.com/embed/3jFy11Mn9Vk?autoplay=0&mute=0&controls=1&playsinline=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=1'
        },
        {
            image: keynote4image,
            url: 'https://www.youtube.com/embed/yFmsSgDN6-E?autoplay=0&mute=0&controls=1&playsinline=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=1'
        },
    ];

    return (
        <section className="hero is-medium is-white">
            <div className="hero-body hero-body-2">
                <div className='columns'>
                    <div className='column is-10 is-offset-1'>
                        <h1 className="title is-marginless">Videos</h1>
                        <div className= 'is-hidden-touch defaultVideoView'>
                            
                                <ReactPlayer                                    
                                url="https://youtu.be/jrMhTRNDYwM"
                                    controls={true}
                                    width="100%"
                                    height="450px"
                                    playing={false}
                                />
                            
                        </div>
                        <div className='video-container-2 is-hidden-desktop defaultVideoView'>
                                <ReactPlayer
                                url="https://youtu.be/jrMhTRNDYwM"
                                    controls={true}
                                    width="100%"
                                    height="300px"
                                    playing={false}
                                />
                        </div>
                        <div style={{ marginTop: '1%',maxWidth: '100%' }}>
                            <Carousel responsive={responsive}>
                                {
                                    videos.map((video, index) => (
                                        <div key={index}>
                                            {
                                                <img src={video.image} onClick={() => { displayVideo(video.url) }} style={{ cursor: 'pointer' }}></img>
                                            }
                                        </div>
                                    ))
                                }

                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Keynotes;
