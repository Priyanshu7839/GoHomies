import React from 'react'
import PostCard from '../../Feed/PostCard'
import posts from '../../Feed//mockPost'

const PostFeedCenter = ({className}) => {
  return (
    <div className={` ${className} custom-scrollbar-hide h-[calc(100vh-80px)]`}>
      <div className="space-y-4 ">
        {posts.map((post, index) => (
          <PostCard
            key={index}
            user={post.user}
            postContent={post.postContent}
            stats={post.stats}
          />
        ))}
      </div>
    </div>
  )
}

export default PostFeedCenter