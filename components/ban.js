const Ban = () => {
    return (
        <div className="flex-center  " >
            <div className="pt-4 pl-64 px-64">
                <div className=" w-90 border-4 rounded-xl border-spacing-1 border-black "
                    style={{ background: "url('/map.jpg')" }}>


                    <h1 className=" flex justify-center mt-80 bg-white  text-4xl w-1/4 bg-opacity-50">
                        Proud to be Indian </h1>
                    <p className="font-bold bg-white bg-opacity-50 bg-gradient-to-r from-transparent to-orange-400 
                mt-20 font-Serif text-xl ">

                        India has been a very accepting culture. We pride ourselves on that.
                        That is a global truth. In fact, it forms a major theme in my books.
                    </p>
                    <p className="flex justify-end font-sans bg-opacity-50 bg-white bg-gradient-to-r from-transparent
                 to-orange-400 text-xl">— Chitra Banerjee Divakaruni</p>


                    <div className="flex justify-center ">

                        <img className=" w-full" src='flag.jpg' />
                    </div>


                    <div className="flex justify-center text-white  bg-gradient-to-r from-transparent
                 to-green-800 text-6xl ">
                        HAPPY 75th INDEPENDENCE DAY
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Ban;
