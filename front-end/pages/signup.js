import React, { useState } from "react";
import Head from "next/head";
import { Form, Input, Checkbox, Button } from "antd";
import AppLayout from "../components/AppLayout";

const Signup = () => {
  const [id, setId] = useState("");
  const [nick, setNick] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    console.log({
      id,
      nick,
      password,
      passwordCheck,
      term
    });
  };

  const onChangeId = e => {
    setId(e.target.value);
  };

  const onChangeNickName = e => {
    setNick(e.target.value);
  };

  const onChangePassword = e => {
    setPassword(e.target.value);
  };

  const onChangePasswordCheck = e => {
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  };

  const onChangeTerm = e => {
    setTermError(false);
    setTerm(e.target.checked);
  };

  return (
    <>
      <Head>
        <title>NodeBird</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.19.0/antd.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.19.0/antd.js" />
      </Head>
      <AppLayout>
        <Form onSubmit={onSubmit} style={{ padding: "10px" }}>
          <div>
            <label htmlFor="user-id">아이디</label>
            <br />
            <Input name="user-id" required value={id} onChange={onChangeId} />
          </div>
          <div>
            <label htmlFor="user-nick">닉네임</label>
            <br />
            <Input
              name="user-nick"
              required
              value={nick}
              onChange={onChangeNickName}
            />
          </div>
          <div>
            <label htmlFor="user-password">비밀번호</label>
            <br />
            <Input
              name="user-password"
              required
              value={password}
              onChange={onChangePassword}
            />
          </div>
          <div>
            <label htmlFor="user-pass-chk">비밀번호 체크</label>
            <br />
            <Input
              name="user-pass-chk"
              required
              value={passwordCheck}
              onChange={onChangePasswordCheck}
            />
            {passwordError && (
              <div style={{ color: "red" }}>비밀번호 불일치</div>
            )}
          </div>
          <div>
            <Checkbox name="user-term" value={term} onChange={onChangeTerm}>
              약관동의
            </Checkbox>
            {termError && <div style={{ color: "red" }}>약관 필수</div>}
          </div>
          <div style={{ marginTop: "10px" }}>
            <Button type="primary" htmlType="submit">
              가입하기
            </Button>
          </div>
        </Form>
      </AppLayout>
    </>
  );
};

export default Signup;
