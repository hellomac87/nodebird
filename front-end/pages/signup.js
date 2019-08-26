/* eslint-disable consistent-return */
/* eslint-disable no-alert */
import React, { useState, useCallback, useEffect } from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import { SIGN_UP_REQUEST } from '../reducers/user';

export const userInput = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback(e => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

const Signup = () => {
  const [id, setId] = useState('');
  const [nick, setNick] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);
  const { me, isSigningUp } = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (me) {
      alert('로그인 했으니 메인페이지로 이동합니다.');
      Router.push('/');
    }
  }, [me && me.id]);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      if (password !== passwordCheck) {
        return setPasswordError(true);
      }
      if (!term) {
        return setTermError(true);
      }
      dispatch({
        type: SIGN_UP_REQUEST,
        data: {
          id,
          password,
          nick,
        },
      });
      console.log({
        id,
        nick,
        password,
        passwordCheck,
        term,
      });
    },
    [password, passwordCheck, term]
  );

  const onChangeId = useCallback(e => {
    setId(e.target.value);
  });

  const onChangeNickName = useCallback(e => {
    setNick(e.target.value);
  });

  const onChangePassword = useCallback(e => {
    setPassword(e.target.value);
  });

  const onChangePasswordCheck = useCallback(
    e => {
      setPasswordError(e.target.value !== password);
      setPasswordCheck(e.target.value);
    },
    [password]
  );

  const onChangeTerm = useCallback(e => {
    setTermError(false);
    setTerm(e.target.checked);
  });

  return (
    <>
      <Form onSubmit={onSubmit} style={{ padding: '10px' }}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input name="user-id" required value={id} onChange={onChangeId} />
        </div>
        <div>
          <label htmlFor="user-nick">닉네임</label>
          <br />
          <Input name="user-nick" required value={nick} onChange={onChangeNickName} />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input name="user-password" required value={password} onChange={onChangePassword} />
        </div>
        <div>
          <label htmlFor="user-pass-chk">비밀번호 체크</label>
          <br />
          <Input name="user-pass-chk" required value={passwordCheck} onChange={onChangePasswordCheck} />
          {passwordError && <div style={{ color: 'red' }}>비밀번호 불일치</div>}
        </div>
        <div>
          <Checkbox name="user-term" value={term} onChange={onChangeTerm}>
            약관동의
          </Checkbox>
          {termError && <div style={{ color: 'red' }}>약관 필수</div>}
        </div>
        <div style={{ marginTop: '10px' }}>
          <Button type="primary" htmlType="submit" loading={isSigningUp}>
            가입하기
          </Button>
        </div>
      </Form>
    </>
  );
};

export default Signup;
