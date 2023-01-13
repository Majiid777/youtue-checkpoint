import React from 'react'

const VideoLink = {
    url: "https://www.youtube.com/embed/eopdY_rD2FE" ,
    videoName:"How To Copy Code From Youtube Videos | Video To Code",
    hachtag:"All trick and tips related to Chrome browser"
}





const VideoPlayer = () => {
  return (
    <div>
        <iframe width="727" height="409" src={VideoLink.url}title="How To Copy Code From Youtube Videos | Video To Code" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p style={{color:"blue", fontSize:"12px"}}
        >{VideoLink.hachtag}</p>
        <h3 style={{fontSize:"18px", lineHeight:"26px"}}>{VideoLink.videoName}</h3>
    </div>
  )
}

export default VideoPlayer
