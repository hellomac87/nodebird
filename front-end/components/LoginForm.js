import React, { useCallback } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Input, Button, Form } from "antd";
import { userInput } from "../pages/signup";
import { useDispatch } from "react-redux";
import { loginAction } from "../reducers/user";

const LoginForm = props => {
  const [id, onChangeId] = userInput("");
  const [password, onChangePassword] = userInput("");
  const dispatch = useDispatch();

  //   자식컴포넌트에 넘기는 함수는 무조건 useCallback 으로 감싸준다
  const onSubmitForm = useCallback(
    e => {
      e.preventDefault();
      dispatch(loginAction);
    },
    [id, password]
  );

  return (
    <Form onSubmit={onSubmitForm} style={{ padding: "10px" }}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <Button type="primary" htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </div>
    </Form>
  );
};

// LoginForm.propTypes = {};

export default LoginForm;
