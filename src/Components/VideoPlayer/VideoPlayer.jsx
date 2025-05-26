import React from 'react'
import "./VideoPlayer.css"
import video from '../../assets/video.mp4'
import {useRef} from 'react'

const VideoPlayer = ({playeState,setPlayState}) => {

  const player = useRef(null);

  const closePlayer = (e) => {
        if(e.target === player.current){
          setPlayState(!playeState)
        }
  }

  return (
    <div className={`video-player ${playeState?'hide':''}`} ref={player} onClick={closePlayer}>
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer

