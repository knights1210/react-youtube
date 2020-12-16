import React from 'react'
import YouTube from 'react-youtube'
import Style from './VideoPlay.module.scss'

export const VideoPlay = ({id}) => {
  return (
    <div className={Style.wrap}>
      <YouTube className={Style.video} videoId={id}/>
      
    </div>
  )
}

