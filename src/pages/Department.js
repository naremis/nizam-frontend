import React from 'react';
import { Col, Row, Card } from 'antd';
import '../assets/styles/department.css';

function Department() {
  return (
    <div className="page">

        <h1 className="heading">Welcome to Nizam</h1>
        <h2 className="heading">Select the department</h2>
      <Row justify="space-around">
        <Col span={4}>
          <div className="card">Department of Computer Science</div>
        </Col>
        <Col span={4}>
          <div className="card">Department of Data Science</div>
        </Col>
        <Col span={4}>
          <div className="card">Department of Information Technology</div>
        </Col>
      </Row>
    </div>
  );
}

export default Department;
