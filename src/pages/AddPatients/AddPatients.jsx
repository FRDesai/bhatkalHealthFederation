
import React from 'react';
import { Form, Input, Button, Select, Card } from 'antd';

const { Option } = Select;


const AddPatients = () => {
  const [form] = Form.useForm();

  const handleReset = () => {
    form.resetFields();
  };

  const handleSubmit = (values) => {
    console.log('Submitted values:', values);
  };
  return (
    <div>
      <h2>Add Patients</h2>
      <Card style={{ maxWidth: '100vw', margin: 'auto' }}>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
      >
        <Form.Item
          label="Patient Name"
          name="name"
          rules={[{ required: true, message: 'Please enter patient name' }]}
        >
          <Input placeholder="Enter patient name" />
        </Form.Item>

        <Form.Item
          label="Age"
          name="age"
          rules={[{ required: true, message: 'Please enter age' }]}
        >
          <Input type="number" placeholder="Enter age" />
        </Form.Item>

        <Form.Item
          label="Gender"
          name="gender"
          rules={[{ required: true, message: 'Please select gender' }]}
        >
          <Select placeholder="Select gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Contact Number"
          name="contact"
          rules={[{ required: true, message: 'Please enter contact number' }]}
        >
          <Input type="tel" placeholder="Enter contact number" />
        </Form.Item>

        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: 'Please enter address' }]}
        >
          <Input.TextArea placeholder="Enter address" />
        </Form.Item>

        <Form.Item style={{ textAlign: 'right' }}>
          <Button type="default" onClick={handleReset} style={{ marginRight: 8 }}>
            Reset
          </Button>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
    </div>
  )
}

export default AddPatients