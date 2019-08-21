import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Avatar, Button } from 'antd';
import { LOG_OUT_REQUEST } from '../reducers/user';

const UserProfile = props => {
  const { me } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const onLogout = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  }, []);
  return (
    <Card
      actions={[
        <div key="twit">
          짹짹 <br />
          {me.posts.length}
        </div>,
        <div key="twit">
          following <br />
          {me.followings.length}
        </div>,
        <div key="twit">
          follower <br />
          {me.followers.length}
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>{me.nickname[0]}</Avatar>} title={me.nickname} />
      <Button onClick={onLogout}>로그아웃</Button>
    </Card>
  );
};

UserProfile.propTypes = {};

export default UserProfile;
