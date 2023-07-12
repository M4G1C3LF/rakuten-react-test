import React from 'react';
import './VideoPlayer.css';
import RakutenLogo from '../Logo/RakutenLogo/RakutenLogo';
import ExpandLogo from '../Logo/ExpandLogo/ExpandLogo';
import CollapseLogo from '../Logo/CollapseLogo/CollapseLogo';
import LeftArrowLogo from '../Logo/LeftArrowLogo/LeftArrowLogo';

const SECONDS_TO_HIDE_UI = 3;

type VideoPlayerProps = {
    videoUrl: string;
    closeVideoPlayer?: Function;
}

export default (props: VideoPlayerProps) => {

    const [isFullscreen, setIsFullscreen] = React.useState(false);
    const [mousePosition, setMousePosition] = React.useState({x: 0, y: 0});
    const [isShowingUIElements, setIsShowingUIElements] = React.useState(false);

    const switchFullscreen = () => {
        const element = document.querySelector("#root");
        if (!isFullscreen) {
            element && element.requestFullscreen()
            .then(() => {
                setIsFullscreen(true);
            })
        } else {
            document.exitFullscreen()
            .then(() => {
                setIsFullscreen(false);
            })
        }
    }

    const showUIElements = (mousePositionCaptured: {x: number, y: number}) => {
        setIsShowingUIElements(true);

        if (mousePosition.x === mousePositionCaptured.x && mousePosition.y === mousePositionCaptured.y) {
            setTimeout(() => {
                setIsShowingUIElements(false);
            }, SECONDS_TO_HIDE_UI * 1000);
        }
    }

    return (
        <div onMouseMoveCapture={(e)=> {
            const mousePositionCaptured = {x: e.clientX, y: e.clientY};
            showUIElements(mousePositionCaptured);
            setMousePosition({x: e.clientX, y: e.clientY});
        }}>
            
            <div className='video-player-wrapper' >
                <RakutenLogo className="position-abolute m-3" color="#ffffff"/>
                <div className={`close-button position-abolute m-1 transition-ease-in-out-1s ${(!isShowingUIElements || isFullscreen) &&  "d-none"}`} onClick={() => props.closeVideoPlayer && props.closeVideoPlayer() }>
                    <span className="close-button">
                        <LeftArrowLogo />
                    </span>
                </div>
                <div className={`fullscreen-button position-abolute m-3 transition-ease-in-out-1s ${!isShowingUIElements && "d-none"}`} onClick={() => switchFullscreen() }>
                    <span className="close-button">
                        {!isFullscreen ? <ExpandLogo /> : <CollapseLogo />}
                    </span>
                </div>
                <video className='video-player' controls autoPlay >
                    <source 
                        src={props.videoUrl}
                        type="video/mp4"
                    />
                </video>
            </div>
        </div>
    );
       
}