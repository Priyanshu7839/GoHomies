const UserPost = () => {
    const message = `Kyu re priyanshu bhadwe, kya haal chaal  ?
    tu thoda chutiya hai, par koi nahi, sabko pata hai ki tu aisa hi hai.
    
    Post karne ka time aa gaya hai, toh chalo milke kuch karte hain.
    Post wala bana aur kuch nahi, par tu toh sab kuch kar sakta hai.`;
    
      return (
        <div className="flex flex-col items-center justify-center px-4 py-10 space-y-6">
          
          
          <div className="bg-[#1a1a1a] p-6 rounded-lg max-w-3xl text-sm sm:text-base text-white  whitespace-pre-wrap leading-relaxed">
            {message}
          </div>
    
          
        </div>
      )
  };
  export default UserPost;
  