import React from "react";
import PropTypes from "prop-types";
import { Card, Avatar } from "antd";

const dummy = {
  nickname: "haha",
  post: [{}, {}],
  followings: ["aa", "bb"],
  followers: ["cc", "dd"],
  isLoggedIn: false
};

const UserProfile = props => {
  return (
    <Card
      actions={[
        <div key="twit">
          짹짹 <br />
          {dummy.post.length}
        </div>,
        <div key="twit">
          following <br />
          {dummy.followings.length}
        </div>,
        <div key="twit">
          follower <br />
          {dummy.followers.length}
        </div>
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
        title={dummy.nickname}
      />
    </Card>
  );
};

UserProfile.propTypes = {};

export default UserProfile;
