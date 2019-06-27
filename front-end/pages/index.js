import React from "react";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";

const dummy = {
  isLoggedIn: true,
  imagePath: [],
  mainPosts: [
    {
      createdAt: "2009.01.01",
      User: {
        id: 1,
        nickname: "나"
      },
      content: "첫번째 게시글",
      img:
        "https://slack-files2.s3-us-west-2.amazonaws.com/avatars/2017-12-19/288981919427_f45f04edd92902a96859_512.png"
    }
  ]
};

const Home = () => {
  return (
    <div>
      {dummy.isLoggedIn && <PostForm />}

      {dummy.mainPosts.map(c => {
        return <PostCard key={c.createdAt} post={c} />;
      })}
    </div>
  );
};

export default Home;
