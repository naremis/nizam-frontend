/*!
=========================================================
* Muse Ant Design Dashboard - v1.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React, { Component, useState } from 'react';
import {
  Layout,
  Menu,
  Button,
  Typography,
  Card,
  Form,
  Input,
  Checkbox,
  Select,
  Row,
  Col,
  message,
} from 'antd';

import { Link } from 'react-router-dom';
import api from '../api';
const { Title } = Typography;
const { Header, Content } = Layout;
const signup = [
  <svg
    data-v-4ebdc598=""
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      data-v-4ebdc598=""
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 2C5.44772 2 5 2.44772 5 3V4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V6C18 4.89543 17.1046 4 16 4H15V3C15 2.44772 14.5523 2 14 2C13.4477 2 13 2.44772 13 3V4H7V3C7 2.44772 6.55228 2 6 2ZM6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H14C14.5523 9 15 8.55228 15 8C15 7.44772 14.5523 7 14 7H6Z"
      fill="#111827"
      className="fill-muted"
    ></path>
  </svg>,
];
const signin = [
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 14 14"
  >
    <path
      className="fill-muted"
      d="M12.25,14H1.75A1.752,1.752,0,0,1,0,12.25V3.5A1.752,1.752,0,0,1,1.75,1.75h.876V.875a.875.875,0,0,1,1.75,0V1.75h5.25V.875a.875.875,0,0,1,1.75,0V1.75h.875A1.752,1.752,0,0,1,14,3.5v8.75A1.752,1.752,0,0,1,12.25,14ZM3.5,4.375a.875.875,0,0,0,0,1.75h7a.875.875,0,0,0,0-1.75Z"
    />
  </svg>,
];
const SignUp = () => {
  const [error, setError] = useState('');
  const onFinish = (values) => {
    console.log('Success:', values);
    values.email = values.email + '@iiu.edu.pk';
    api
      .post('/auth/register', values)
      .then((data) => {
        message.success('Sign Up Successfull!').then(() => {
          message.info('Please verify your email!');
        });
      })
      .catch((err) => {
        console.log(err, err.response.data.message);
        message.error(err.response.data.message);

        // err.response.message;
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <div className="layout-default ant-layout layout-sign-up">
        <Header>
          {/* <div className="header-col header-brand">
              <h5>NIZAM Portal</h5>
            </div> */}
          <div className="header-col header-nav">
            <Menu mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Link to="/sign-up">
                  {signup}
                  <span> Sign Up</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="1">
                <Link to="/sign-in">
                  {signin}
                  <span> Sign In</span>
                </Link>
              </Menu.Item>
            </Menu>
          </div>
        </Header>

        <Content className="p-0">
          <div className="sign-up-header">
            <div className="content">
              <Title>Welcome to NIZAM</Title>
            </div>
          </div>

          <Card
            className="card-signup header-solid h-full ant-card pt-0"
            title={<h5>Sign Up</h5>}
            bordered="false"
          >
            {/* <div className="sign-up-gateways">
                <Button type="false">
                  <img src={logo1} alt="logo 1" />
                </Button>
                <Button type="false">
                  <img src={logo2} alt="logo 2" />
                </Button>
                <Button type="false">
                  <img src={logo3} alt="logo 3" />
                </Button>
              </div>
              <p className="text-center my-25 font-semibold text-muted">Or</p> */}
            <Form
              name="basic"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="row-col"
            >
              <Form.Item
                name="name"
                rules={[
                  { required: true, message: 'Please input your username!' },
                ]}
              >
                <Input placeholder="Name" autoFocus />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: 'Please input your email!' },
                ]}
              >
                <Input
                  placeholder="University Email"
                  addonAfter="@iiu.edu.pk"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: 'Please input your password!' },
                ]}
              >
                <Input placeholder="Password" type="password" />
              </Form.Item>
              <Row justify="space-between">
                <Col span={7}>
                  <Form.Item
                    name="regNo"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your roll number!',
                      },
                    ]}
                  >
                    <Input placeholder="Roll Number" />
                  </Form.Item>
                </Col>
                <Col span={7}>
                  <Form.Item
                    name="batchName"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your batch!',
                      },
                    ]}
                  >
                    <Select
                      // onChange={handleChange}
                      placeholder="Batch"
                      options={[
                        {
                          value: 'F17',
                          label: 'F17',
                        },
                        {
                          value: 'F18',
                          label: 'F18',
                        },
                        {
                          value: 'F19',
                          label: 'F19',
                        },
                      ]}
                    />
                  </Form.Item>
                </Col>
                <Col span={7}>
                  <Form.Item
                    name="degreeName"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your degree!',
                      },
                    ]}
                  >
                    <Select
                      // onChange={handleChange}
                      placeholder="Degree"
                      options={[
                        {
                          value: 'bscs',
                          label: 'BSCS',
                        },
                        {
                          value: 'bsse',
                          label: 'BSSE',
                        },
                        {
                          value: 'bsit',
                          label: 'BSIT',
                        },
                      ]}
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                name="departmentName"
                rules={[
                  {
                    required: true,
                    message: 'Please input your department!',
                  },
                ]}
              >
                <Select
                  placeholder="Department"
                  // onChange={handleChange}
                  options={[
                    {
                      value: 'cs',
                      label: 'Department of Computer Science',
                    },
                    {
                      value: 'ds',
                      label: 'Department of Data Science',
                    },
                    {
                      value: 'it',
                      label: 'Department of Information Technology',
                    },
                  ]}
                />
              </Form.Item>

              {/* <Form.Item name="remember" valuePropName="checked">
                  <Checkbox>
                    I agree the{' '}
                    <a href="#pablo" className="font-bold text-dark">
                      Terms and Conditions
                    </a>
                  </Checkbox>
                </Form.Item> */}

              <Form.Item>
                <Button
                  style={{ width: '100%' }}
                  type="primary"
                  htmlType="submit"
                >
                  SIGN UP
                </Button>
              </Form.Item>
            </Form>
            <p className="font-semibold text-muted text-center">
              Already have an account?{' '}
              <Link to="/sign-in" className="font-bold text-dark">
                Sign In
              </Link>
            </p>
          </Card>
        </Content>
        {/* <Footer>
            <Menu mode="horizontal">
              <Menu.Item>Company</Menu.Item>
              <Menu.Item>About Us</Menu.Item>
              <Menu.Item>Teams</Menu.Item>
              <Menu.Item>Products</Menu.Item>
              <Menu.Item>Blogs</Menu.Item>
              <Menu.Item>Pricing</Menu.Item>
            </Menu>
            <Menu mode="horizontal" className="menu-nav-social">
              <Menu.Item>
                <Link to="#">{<DribbbleOutlined />}</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="#">{<TwitterOutlined />}</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="#">{<InstagramOutlined />}</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="#">
                  <svg
                    width="18"
                    height="18"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"></path>
                  </svg>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="#">{<GithubOutlined />}</Link>
              </Menu.Item>
            </Menu>
            <p className="copyright">
              {" "}
              Copyright © 2021 Muse by <a href="#pablo">Creative Tim</a>.{" "}
            </p>
          </Footer> */}
      </div>
    </>
  );
};

export default SignUp;
