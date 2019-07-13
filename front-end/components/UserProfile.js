import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { Card, Avatar, Button } from "antd";
import { logoutAction } from "../reducers/user";

const UserProfile = props => {
  const { user } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const onLogout = useCallback(() => {
    dispatch(logoutAction);
  }, []);
  return (
    <Card
      actions={[
        <div key="twit">
          짹짹 <br />
          {user.posts.length}
        </div>,
        <div key="twit">
          following <br />
          {user.followings.length}
        </div>,
        <div key="twit">
          follower <br />
          {user.followers.length}
        </div>
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{user.nickname[0]}</Avatar>}
        title={user.nickname}
      />
      <Button onClick={onLogout}>로그아웃</Button>
    </Card>
  );
};

UserProfile.propTypes = {};

export default UserProfile;
