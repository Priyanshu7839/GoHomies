import React, { useEffect, useState } from "react";
import PostCard from "../../Feed/PostCard";
import mockPosts from "../../Feed/mockPost";
import { FetchPost } from "../../../../ApiCall";
import { useDispatch, useSelector } from "react-redux";
import { setAllPosts } from "../../../Store/AllPostsSlice";

const PostFeedCenter = ({className}) => {

  
   const dispatch = useDispatch();
   const [responseShow,setresponseShow] = useState(false) 

  useEffect(() => {
    const fetchData = async () => {
      const res = await FetchPost();
      setresponseShow(res.data.msg === 'Not Logged In')
      if(res.status === 200){
        
          dispatch(setAllPosts(res.data))
          
      }
      
    };
  
    fetchData();
  }, []);
  






  const AllPosts = useSelector((state)=>state.AllPosts);
  if(responseShow){
    return(
      <div  className='border-[1px] border-[#e0e0e0] px-[1rem] py-[1rem] rounded-[16px] flex-[.75] w-full'>
      Please log In First To View the Feed
      </div>
    )
  }

  

  return (
    <div className={`${className} custom-scrollbar-hide h-[calc(100vh-80px)]`}>
      <div className="space-y-4">
        {
         AllPosts.length > 0 && 
        AllPosts.map((post, index) => (
          <PostCard
            key={index}
            user={post.userId}
            desc={post.description}
            budget={post.BudgetPerPerson}
            TravelMonth={post.TravelMonth}
            destination={post.destination}
            totalPersons={post.totalPersons}
            stats={post.stats}
          />
        ))}
      </div>
    </div>
  );
};

export default PostFeedCenter;
