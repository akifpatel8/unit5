import React from 'react'

function Home2() {
    const array=[{img:"https://secure-content.meetupstatic.com/images/next/images/homepage/first_story_member.jpeg/340x190.jpeg?w=1920",
    title:"How to Resume Your Social Life after a Year on Pause",
    des:"Getting back out there is exciting, but it’s understandable to feel a bit nervous. Here’s how you can make the transition easier."},
{
    img:"https://secure-content.meetupstatic.com/images/next/images/homepage/second_story_member.jpeg/340x190.jpeg?w=1920",
    title:"Get Creative: Artistic Hobbies Do More Than Pass the Time",
    des:"Reduce stress, improve your mood, and connect with others by pursuing your new artistic hobby through Meetup."
},{
    img:"https://secure-content.meetupstatic.com/images/next/images/homepage/third_story_member.jpeg/340x190.jpeg?w=1920",
    title:"Three Ways to Make Coworker Friendships While Working From Home",
    des:"Work friendships don’t need to fade just because you’re working remotely. Here are three fun ways you can get to know your colleagues."
}
]
    return (
        <div>
            <div style={{display:"flex"}}>
          {array.map((e)=>(
              <div style={{border:'1px solid gray',margin:'10px',borderRadius:'10px'}}>
                  <img src={e.img} style={{marginTop:'10px',borderRadius:'10px'}} alt="no" />
                  <h3>{e.title}</h3>
                  <p>{e.des}</p>
              </div>
          ))}
      </div>
        </div>
    )
}

export {Home2}
