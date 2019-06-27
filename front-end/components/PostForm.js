import React from "react";
import PropTypes from "prop-types";
import { Form, Input, Button } from "antd";

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

const PostForm = props => {
  return (
    <Form encType="multipart/form-data" style={{ margin: "10px 0 20px" }}>
      <Input.TextArea
        maxLength={140}
        placeholder="어떤 신기한 일이 있었나요?"
      />
      <div>
        <Input type="file" multiple hidden />
        <Button>이미지 업로드</Button>
        <Button type="primary" style={{ float: "right" }} htmlType="submit">
          짹짹
        </Button>
      </div>

      <div>
        {dummy.imagePath.map((v, i) => {
          return (
            <div key={v} style={{ display: "inline-block" }}>
              <img
                src={"http://localhost:3065/" + v}
                style={{ width: "200px" }}
                alt={v}
              />
              <div>
                <Button>저거</Button>
              </div>
            </div>
          );
        })}
      </div>
    </Form>
  );
};

PostForm.propTypes = {};

export default PostForm;
