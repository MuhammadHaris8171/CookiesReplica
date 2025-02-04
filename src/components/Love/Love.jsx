import React from 'react'
import './Love.css'
import '../../../public/Images/person_2.jpeg'
import Card from '../Card/Card'
const Love = () => {
  return (
    <div>
        <div id="reviews" className="Love1 bg-blue-100 h-[250vh]">
        <div className="Love2">
            <h2>
            That’s why 100,000+ Love Frame
            </h2>
            <p className='text-zinc-500 mt-10'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
        </div>
        <div className="Love4">
       <Card 
       paragraph="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar." author="Garry Alexander" imgSource="='../../../public/Images/person_1.jpeg" starColor="#f5b642"
       />
       <Card
       paragraph="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth." author="James Robertson"
       imgSource="='../../../public/Images/person_2.jpeg" starColor="#f5b642"
       />
       <Card 
       paragraph="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar." author="Ben Goodrich" imgSource="='../../../public/Images/person_3.jpeg" starColor="#f5b642"
       />
       <Card 
       paragraph="And if she hasn’t been rewritten, then they are still using her." author="Kip Hugh" imgSource="../../../public/Images/person_4.jpeg"starColor="gray"
       /> 
       <Card 
        paragraph="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth." author="James Robertson"
        imgSource="='../../../public/Images/person_2.jpeg" starColor="#f5b642"
       />
       <Card 
       paragraph="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar." author="Ben Goodrich" imgSource="='../../../public/Images/person_3.jpeg" starColor="#f5b642"
       />
        </div>
        </div>
    </div>
  )
}

export default Love