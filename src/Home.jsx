import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./card";
import Cart from "./cart";



const Home = () => {
    const [courses,setCourses]=useState([]);
    const [select,setSelect]=useState([])
    useEffect(()=>{
        fetch('blog.json')
        .then (res=>res.json())
        .then (data=> setCourses(data));},
        [])

      const handlecart=(card) =>{
        setSelect([...select,card])
        

      }
console.log(select);
        
       
    return (
        <div className="flex  gap-16 justify-center" >
           <div className="grid grid-cols-3 ">
             {
                courses.map(card=><Card key={card.id} card={card} handlecart={handlecart}></Card>)
                        
            }
            </div>
            <div className="my-10">
               <Cart select={select}></Cart>
                </div> 
           
        </div>
    );
};

export default Home;