

const Cart = ({ select, total, remaine, price }) => {

    return (
        <div className='  bg-white rounded-3xl mx-auto'>
            <div className='border-2 w-[380px] h-[350px] px-8 ' >
                <h1 className="text-2xl font-bold text-blue-600 my-6" >Credit Hour Remaining  :{remaine}</h1>
                <hr className="border-b-2 border-slate-200 w-full " />

                <h1 className="text-xl font-semibold">Course Name </h1>
                <ol className="list-decimal list-inside">
                    {
                        select.map(card =>

                            <li className="items-start" key={card.id}>{card.course_title}</li>
                        )
                    }
                     </ol>
                <hr className="border-b-2 border-slate-100 w-full mt-6 " />
                <h3 className="text-lg from-neutral-600 my-4">Total Credit Hour :{total}</h3>
                <hr className="border-b-2 border-slate-100 w-full mt-6 " />
                <h3 className="text-lg font-medium mt-4">Total Price :{price}</h3>
            </div>
        </div>

    );
};

export default Cart;