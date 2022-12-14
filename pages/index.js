const Profile = () => {
  return (
    <div className="antialiased flex justify-center  text-gray-600 ">


      <div className="absolute w-full min-h-screen">
        <div className="absolute w-full h-1/4 bg-cover bg-bottom  text-white text-center">
          <img src="background.jpg"></img>
        </div>
        <section className="flex justify-center pt-32">
          <div className="relative justify-center pt-20 px-12 flex justify-center w-1/2">
            <div className="absolute z-20 bottom-10 right-0 left-0 inline-flex space-x-20 justify-center font-bold uppercase tracking-wide text-gray-600">
               </div>

            <div className="relative z-10 bg-white p-12 rounded-md shadow-md ">
              <div className="flex flex-col space-y-6 py-4"><p className="text-lg"> Hello,I am</p>
                <h1 className="text-4xl font-bold text-gray-800">Sujitha M</h1>
              </div>
              <p className="text-lg leading-relaxed">Currently pursuring my bachelor degree in B.com Information System Management
                at SDNB vaishnav college,chennai. Beginner in coding developer</p>
              <div className="text-sm">EMAIL ID : sujitham312@gmail.com</div>
              <div className="flex flex-colinline-flex space-x-4 py-2 px-2">
                
              </div>
              <div className="border-t border-gray-400 my-2"></div>
              <div className="flex justify-center">

                <img src="profile.jpg" className="w-80 rounded-full border-6  border-white shadow-nd flex-shrink-0" />
              </div>
              <div><a href="http://localhost:3000/banner" className="text-blue-600 visited:text-purple-600 ...">click here</a> to view my BANNER</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Profile;