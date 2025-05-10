const UserSetting = () => {
    const message = `Hi, I'm WCKiD but you can call me Bharat :)  
I'm a passionate traveler from India who believes that the world is best experienced one destination at a time.

Traveling isn’t just a hobby for me — it's a way of life. I love planning detailed itineraries, discovering hidden gems, and sharing practical tips...

Let’s explore the world together — one adventure at a time.`;

  return (
    <div className="flex flex-col items-center justify-center px-4 py-10 space-y-6">
      
      
      <div className="bg-[#1a1a1a] p-6 rounded-lg max-w-3xl text-sm sm:text-base text-white  whitespace-pre-wrap leading-relaxed">
        {message}
      </div>

      
      {/* <div className="bg-[#1a1a1a] text-white p-6 rounded-lg flex flex-wrap justify-around max-w-3xl w-full text-center text-sm sm:text-base">
        <div className="w-1/2 sm:w-1/4 mb-4">
          <p className="text-gray-400">Total Posts</p>
          <p className="font-semibold">4</p>
        </div>
        <div className="w-1/2 sm:w-1/4 mb-4">
          <p className="text-gray-400"></p>
          <p className="font-semibold">3</p>
        </div>
        <div className="w-1/2 sm:w-1/4 mb-4">
          <p className="text-gray-400">Posts</p>
          <p className="font-semibold">51</p>
        </div>
        <div className="w-1/2 sm:w-1/4 mb-4">
          <p className="text-gray-400">Per month</p>
          <p className="font-semibold">$16.55</p>
        </div>
      </div> */}
    </div>
  )
  };
  export default UserSetting;
  