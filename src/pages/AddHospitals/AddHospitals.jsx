import React from 'react';
import { Form, Input, Button, Col, Row, Card } from 'antd';
import { HomeOutlined, EnvironmentOutlined, PhoneOutlined } from '@ant-design/icons';

const AddHospitals = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Form values:', values);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <div>
      <h2>Add Hospitals</h2>
      <Card style={{ maxWidth: '100vw', margin: 'auto', marginTop: 20 }}>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            label="Hospital Name"
            name="hospitalName"
            rules={[{ required: true, message: 'Please enter the hospital name' }]}
          >
            <Input prefix={<HomeOutlined />} placeholder="Enter hospital name" />
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: 'Please enter the address' }]}
          >
            <Input prefix={<EnvironmentOutlined />} placeholder="Enter address" />
          </Form.Item>

          <Form.Item
            label="Phone Number"
            name="phoneNumber"
            rules={[{ required: true, message: 'Please enter the phone number' }]}
          >
            <Input prefix={<PhoneOutlined />} placeholder="Enter phone number" />
          </Form.Item>

          <Form.Item style={{ textAlign: 'right' }}>
            <Button type="default" onClick={onReset} style={{ marginRight: 8 }}>
              Reset
            </Button>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default AddHospitals;
