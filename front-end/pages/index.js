import React from "react";
import { Form, Input, Button, Card, Icon, Avatar } from "antd";

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
  return (
    <div>
      {dummy.isLoggedIn && (
        <Form encType="multipart/form-data" style={{ marginBottom: 20 }}>
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
      )}

      {dummy.mainPosts.map(c => {
        return (
          <Card
            key={c.createdAt}
            cover={c.img && <img alt="example" src={c.img} />}
            actions={[
              <Icon type="retweet" key="retweet" />,
              <Icon type="heart" key="heart" />,
              <Icon type="message" key="message" />,
              <Icon type="ellipsis" key="ellipsis" />
            ]}
            extra={<Button>팔로우</Button>}
          >
            <Card.Meta
              avatar={<Avatar>{c.User.nickname[0]}</Avatar>}
              title={c.User.nickname}
              description={c.content}
            />
          </Card>
        );
      })}
    </div>
  );
};

export default Home;
