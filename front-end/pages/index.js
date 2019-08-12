import React, { useEffect } from "react";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { loginAction, logoutAction } from "../reducers/user";

const Home = () => {
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useSelector(state => state.user);
  const { mainPosts } = useSelector(state => state.post);

  useEffect(() => {}, []);

  // useEffect 의 dependency 배열에 아무것도 넣지 않으면
  // componentDidMount 처럼 작동한다.
  // useEffect(() => {
  //   dispatch(loginAction);
  //   dispatch(logoutAction);
  //   dispatch(loginAction);
  // }, []);

  return (
    <div>
      {isLoggedIn && <PostForm />}

      {mainPosts.map(c => {
        return <PostCard key={c.createdAt} post={c} />;
      })}
    </div>
  );
};

export default Home;
