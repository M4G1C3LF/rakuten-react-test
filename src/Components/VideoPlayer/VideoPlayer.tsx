import React from 'react';
import './VideoPlayer.css';
import RakutenLogo from '../Logo/RakutenLogo/RakutenLogo';

type VideoPlayerProps = {
    videoUrl: string;
}

export default (props: VideoPlayerProps) => {

    return (
        <div>
            
            <div className='video-player-wrapper' >
                <RakutenLogo className="position-abolute m-3" color="#ffffff"/>
                <video className='video-player' controls>
                    <source 
                        src={props.videoUrl}
                        type="video/mp4"
                    />
                </video>
            </div>
        </div>
    );
       
}