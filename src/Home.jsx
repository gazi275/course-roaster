import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./card";

const Home = () => {
    const [courses,setCourses]=useState([]);

    useEffect(()=>{
        fetch('blog.json')
        .then (res=>res.json())
        .then (data=> setCourses(data));},
        [])
       
    return (
        <div>
            <h2>name: {courses.length}</h2>
            {
                courses.map(card=><Card key={card.id} card={card} ></Card>)
                    

                
                    
            }
        </div>
    );
};

export default Home;