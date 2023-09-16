
import { useEffect } from "react";
import { useState } from "react";
import Card from "./card";
import Cart from "./cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Home = () => {
  const [courses, setCourses] = useState([]);
  const [select, setSelect] = useState([]);
  const [total, setTotal] = useState(0);
  const [remaine, setRemaine] = useState(20);
  const [price, setPrice] = useState(0);
  useEffect(() => {
    fetch('blog.json')
      .then(res => res.json())
      .then(data => setCourses(data));
  },
    [])

  const handlecart = (card) => {
    const exist = select.find(item => item.id == card.id)
    let count = card.credit;
    let totalPrice = card.price

    if (exist) {
      return toast("Already Token!");
    }
    else {
      select.forEach(item => {
        count = count + item.credit;
        totalPrice = totalPrice + item.price;
      })

      const remaining = 20 - count;
      if (remaining < 0) {
        return toast("you have no longer Credit hour!");
      }
      else {
        setPrice(totalPrice);
        setRemaine(remaining);
        setTotal(count);
        setSelect([...select, card])
      }

    }



  }



  return (
   <>
    <div className="flex  gap-16 justify-center" >
      <div className="grid grid-cols-3 ">

        {
          courses.map(card => <Card key={card.id} card={card} handlecart={handlecart}></Card>)

        }
      </div>
      <div className="my-10">
        <Cart select={select} total={total} remaine={remaine} price={price}></Cart>
      </div>
     
    </div>

    <ToastContainer/>
   </>
  );
};

export default Home;