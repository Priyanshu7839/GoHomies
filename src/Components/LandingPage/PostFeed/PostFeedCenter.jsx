import React, { useEffect, useState } from "react";
import PostCard from "../../Feed/PostCard";
import mockPosts from "../../Feed/mockPost";

const PostFeedCenter = () => {
  const [userPosts, setUserPosts] = useState([]);

  const fetchUserPosts = () => {
    const savedPosts = JSON.parse(localStorage.getItem("travel_posts")) || [];
    const formattedUserPosts = savedPosts.map((post) => ({
      user: {
        name: "Ashutosh Bhadwa",
        title: "Randi",
        profilePic: "https://randomuser.me/api/portraits/women/68.jpg",
        occupation: "Porn Star",
        time: "5h",
      },
      postContent: `Destination: ${post.destination}, Description: ${post.description}, Total Persons: ${post.totalPersons}, Travel Month: ${post.travelMonth}, Budget: ${post.budget}`,
      stats: {
        likes: 7,
        comments: 7,
        reposts: 7,
        views: 7,
      },
    }));

    setUserPosts(formattedUserPosts);
  };

  useEffect(() => {
    fetchUserPosts(); // Initial fetch on page load

    // 👇 Listen for new posts
    const handlePostCreated = () => {
      fetchUserPosts();
    };

    window.addEventListener("postCreated", handlePostCreated);

    // Cleanup when component unmounts
    return () => {
      window.removeEventListener("postCreated", handlePostCreated);
    };
  }, []);

  const allPosts = [...userPosts, ...mockPosts];

  return (
    <div className="overflow-auto custom-scrollbar-hide h-[calc(100vh-145px)]">
      <div className="space-y-4">
        {allPosts.map((post, index) => (
          <PostCard
            key={index}
            user={post.user}
            postContent={post.postContent}
            stats={post.stats}
          />
        ))}
      </div>
    </div>
  );
};

export default PostFeedCenter;
