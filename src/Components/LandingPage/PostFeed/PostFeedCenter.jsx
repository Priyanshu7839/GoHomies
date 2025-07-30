import React, { useEffect, useState,useRef } from "react";
import PostCard from "../../Feed/PostCard";
import mockPosts from "../../Feed/mockPost";
import { FetchPost } from "../../../../ApiCall";
import { useDispatch, useSelector } from "react-redux";
import { setAllPosts } from "../../../Store/AllPostsSlice";

const PostFeedCenter = ({ className }) => {
  const dispatch = useDispatch();
  const [responseShow, setresponseShow] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await FetchPost();
      setresponseShow(res.data.msg === "Not Logged In");
      if (res.status === 200) {
        dispatch(setAllPosts(res.data));
      }
    };

    fetchData();
  }, []);

  const [BlogOrPost,setBlogOrPost] = useState('Posts')



  const AllPosts = useSelector((state)=>state.AllPosts);

  if(responseShow){
    return(
      <div  className='border-[1px] border-[#e0e0e0] px-[1rem] py-[1rem] rounded-[16px] flex-[.75] w-full'>
      Please log In First To View the Feed
      </div>
    );
  }



  return (
    <div className={`${className} custom-scrollbar-hide h-[calc(100vh-80px)] flex  flex-col gap-4  ` }>
      <div className="w-full  p-[.25rem] h-[73px] rounded-3xl flex items-center justify-between border border-[#d7d7d8] bg-white">
        <div className={`w-[49%] text-center py-[.5rem]  rounded-3xl relative overflow-hidden cursor-pointer
          
          `}
          onClick={()=>{setBlogOrPost('Posts')}}
          >
            <h1 className={`relative z-[200] ${BlogOrPost==='Posts' && 'text-white'}`}>Posts</h1>
         

            <div className={` h-full bg-[#0b85ff] absolute top-0 z-[100] transition-all duration-200 ${BlogOrPost==='Posts' ?'w-[100%]':'w-[0%]'}`}></div>
        </div>
        <div className={`w-[49%] text-center rounded-3xl py-[.5rem] relative overflow-hidden  cursor-pointer
          
          `}
          onClick={()=>{setBlogOrPost('Blogs')}}
          >
          <h1 className={`relative z-[200] ${BlogOrPost==='Blogs' && 'text-white'}`}>Blogs</h1>

          <div className={` h-full bg-[#0b85ff]  absolute top-0 z-[100] transition-all duration-200 ${BlogOrPost==='Blogs' ?'w-[100%]':'w-[0%]'}`}></div>

        </div>
      </div>
      <div className="space-y-4">
        {AllPosts.length > 0 &&
          AllPosts.map((post, index) => (
            <PostCard
              key={index}
              postId={post._id} // ✅ Pass postId explicitly
              user={post.userId}
              desc={post.description}
              budget={post.BudgetPerPerson}
              TravelMonth={post.TravelMonth}
              destination={post.destination}
              totalPersons={post.totalPersons}
              stats={post.stats}
              time={post.createdAt}
              initialOptedIn={post.interested_persons.includes(post.userId)}
              initialOptCount={post.interested_persons.length}
              likedPerson={post.likedBy}
              likeCount={post.likeCount}
            />
          ))}
      </div>
    </div>
  );
};

export default PostFeedCenter;
