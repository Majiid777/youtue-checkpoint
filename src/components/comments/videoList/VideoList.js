import React from 'react'



const videos =[
    {
        id: Math.random(),
        vid: "https://www.youtube.com/embed/SMgQlTSoXf0",
        title:"React : chapitre 1 introduction"
    },
    {
        id: Math.random(),
        vid: "https://www.youtube.com/embed/0PA69L88HeI?list=RDCMUCj_iGliGCkLcHSZ8eqVNPDQ",
        title:"NodeJS (1/6) : Qu'est ce que NodeJS ?"
    },
    {
        id: Math.random(),
        vid: "https://www.youtube.com/embed/SMgQlTSoXf0?list=PLjwdMgw5TTLWom67YfZuha-1iYzIirwJR",
        title:"Apprendre React"
    },
    {
        id: Math.random(),
        vid:"https://www.youtube.com/embed/okm29mVf0nM" ,
        title:"Formation Docker - Les bases en moins de 20 minutes"
    },
    {
        id: Math.random(),
        vid: "https://www.youtube.com/embed/SMgQlTSoXf0",
        title:"React : chapitre 1 introduction"
    },
    {
        id: Math.random(),
        vid: "https://www.youtube.com/embed/0PA69L88HeI?list=RDCMUCj_iGliGCkLcHSZ8eqVNPDQ",
        title:"NodeJS (1/6) : Qu'est ce que NodeJS ?"
    },
    {
        id: Math.random(),
        vid: "https://www.youtube.com/embed/SMgQlTSoXf0?list=PLjwdMgw5TTLWom67YfZuha-1iYzIirwJR",
        title:"Apprendre React"
    },
    {
        id: Math.random(),
        vid:"https://www.youtube.com/embed/okm29mVf0nM" ,
        title:"Formation Docker - Les bases en moins de 20 minutes"
    },
    {
        id: Math.random(),
        vid: "https://www.youtube.com/embed/SMgQlTSoXf0",
        title:"React : chapitre 1 introduction"
    },
    {
        id: Math.random(),
        vid: "https://www.youtube.com/embed/0PA69L88HeI?list=RDCMUCj_iGliGCkLcHSZ8eqVNPDQ",
        title:"NodeJS (1/6) : Qu'est ce que NodeJS ?"
    },
    {
        id: Math.random(),
        vid: "https://www.youtube.com/embed/SMgQlTSoXf0?list=PLjwdMgw5TTLWom67YfZuha-1iYzIirwJR",
        title:"Apprendre React"
    },
    {
        id: Math.random(),
        vid:"https://www.youtube.com/embed/okm29mVf0nM" ,
        title:"Formation Docker - Les bases en moins de 20 minutes"
    }
    
]







const VideoList = () => {
  return (
    <div>
        {videos.map(el=><div style={{display:"flex",margin:"10px"}} key={el.id}>
            <iframe width="200px" height="auto"  src={el.vid} title="vid"></iframe>
            <h5 style={{ fontSize:"12px", width:"90px",margin:"10px"}}>{el.title}</h5>
        </div>)}
    </div>
  )
}

export default VideoList