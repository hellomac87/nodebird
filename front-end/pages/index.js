import React, { useEffect } from "react";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { loginAction, logoutAction } from "../reducers/user";

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
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector(state => state.user);

  // useEffect 의 dependency 배열에 아무것도 넣지 않으면
  // componentDidMount 처럼 작동한다.
  useEffect(() => {
    dispatch(loginAction);
    dispatch(logoutAction);
    dispatch(loginAction);
  }, []);

  return (
    <div>
      {user ? (
        <div>로그인 했습니다: {user.nickname}</div>
      ) : (
        <div>로그아웃 했습니다.</div>
      )}
      {dummy.isLoggedIn && <PostForm />}

      {dummy.mainPosts.map(c => {
        return <PostCard key={c.createdAt} post={c} />;
      })}
    </div>
  );
};

export default Home;
