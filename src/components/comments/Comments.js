import React from 'react'


const feedbacks = [
    {
        id:Math.random(),
        name: "Emna",
        commennt: "C'est trés intéressant"

    },
    {
        id:Math.random(),
        name: "Aymen",
        commennt: "Akashi is Emperor eye is absolute"

    },
    {
        id:Math.random(),
        name: "Ali",
        commennt: "はやまほとんどドリブルしてない。3点のシュート作中で見なかった気が"


    },
    {
        id:Math.random(),
        name: "Majid",
        commennt: "Akashi missing that free throw was just all apart of his plan"

    },
    {
        id:Math.random(),
        name: "Mahdi",
        commennt: "I swear Sakurai hit every three he shot"

    },
    {
        id:Math.random(),
        name: "Souad",
        commennt: "Is there a way I could play this on my phone"

    },
    {
        id:Math.random(),
        name: "Khayri",
        commennt: "Akashi missing that free throw was just all apart of his plan"

    },
    {
        id:Math.random(),
        name: "Hatem",
        commennt: "Damn this clip make me want to play nba2k again"

    }

]






const Comments = () => {
  return (
    <div>
        <div style={{width:"730px", display:"flex", justifyContent:"space-between"}}>
            <img style={{width:"30px",height:"30px", borderRadius:"100%"}} src="https://jamaity.org/wp-content/uploads/2022/05/gomycode.jpg" alt='profImg'></img>
            <textarea style={{width:"680px",height:"50px"}} placeholder='Enter your coment' name='' id='' cols="30" rows="10"></textarea>
        </div>
    {
        feedbacks.map(el=><div style={{marginTop:"20px"}} key={el.id}>
            <img style={{width:"40px",height:"40px",borderRadius:"100%"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRALZAcoGIUr4WMJpsN3PqonWdIMd1oGXpbow&usqp=CAU' alt='img' ></img>
            <div>
                <h5>{el.name}</h5>
                <p>{el.commennt}</p>


            </div>
        </div>)
    }    

    </div>
  )
}

export default Comments