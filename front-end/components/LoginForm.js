import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Input, Button, Form } from 'antd';
import { userInput } from '../pages/signup';

import { LOG_IN_REQUEST } from '../reducers/user';

const LoginForm = props => {
  const [id, onChangeId] = userInput('');
  const [password, onChangePassword] = userInput('');
  const { isLoggingIn } = useSelector(state => state.user);
  const dispatch = useDispatch();

  //   자식컴포넌트에 넘기는 함수는 무조건 useCallback 으로 감싸준다
  const onSubmitForm = useCallback(
    e => {
      e.preventDefault();
      dispatch({
        type: LOG_IN_REQUEST,
      });
    },
    [id, password]
  );

  return (
    <Form onSubmit={onSubmitForm} style={{ padding: '10px' }}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input name="user-password" value={password} onChange={onChangePassword} required />
      </div>
      <div style={{ marginTop: '10px' }}>
        <Button type="primary" htmlType="submit" loading={isLoggingIn}>
          로그인
        </Button>
        <Link href="/signup">
          <Button>회원가입</Button>
        </Link>
      </div>
    </Form>
  );
};

// LoginForm.propTypes = {};

export default LoginForm;
