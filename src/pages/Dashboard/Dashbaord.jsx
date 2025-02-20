import React from 'react';
import { Card, Col, Row, Statistic } from 'antd';
import { PlusOutlined, HomeOutlined, UserOutlined, MoneyCollectOutlined } from '@ant-design/icons';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashbaord = () => {
    // Dummy data
    // Dummy data with additional fields
    const data = [
        { month: 'January', donations: 120, amount: 500, hospitals: 10 },
        { month: 'February', donations: 150, amount: 700, hospitals: 15 },
        { month: 'March', donations: 480, amount: 100, hospitals: 20 },
        { month: 'April', donations: 350, amount: 120, hospitals: 18 },
        { month: 'May', donations: 100, amount: 400, hospitals: 8 },
        { month: 'June', donations: 100, amount: 400, hospitals: 108 },
    ];
    return (
        <div style={{ padding: '0' }}>
            <h2>Dashboard</h2>
            <Row gutter={16}>
                {/* Overview Section */}
                <Col span={8}>
                    <Card style={{ background: "#E6F4FF" }}>
                        <Statistic
                            title="Total Patients"
                            value={1200}
                            prefix={<UserOutlined />}
                            valueStyle={{ color: '#1890ff' }}
                        />
                    </Card >
                </Col>
                <Col span={8}>
                    <Card style={{ background: "#E6F4FF" }}>
                        <Statistic
                            title="Total Hospitals"
                            value={15}
                            prefix={<HomeOutlined />}
                            valueStyle={{ color: '#1890ff' }}
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card style={{ background: "#E6F4FF" }}>
                        <Statistic
                            title="Total Amount Donated (₹)"
                            value={23000}
                            prefix={<MoneyCollectOutlined />}
                            valueStyle={{ color: '#1890ff' }}
                        />
                    </Card>
                </Col>


            </Row>
            <Row gutter={16} style={{ marginTop: '24px' }}>
                <Col span={12}>
                    <Card style={{ background: "#E6F4FF" }}>
                        <Statistic
                            title="Zakath Amount"
                            value={893000}
                            prefix={<MoneyCollectOutlined />}
                            valueStyle={{ color: '#1890ff' }}
                        />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card style={{ background: "#E6F4FF" }}>
                        <Statistic
                            title="Interest Amount"
                            value={2300000}
                            prefix={<MoneyCollectOutlined />}
                            valueStyle={{ color: '#1890ff' }}
                        />
                    </Card>
                </Col>
            </Row>

            <Row gutter={16} style={{ marginTop: '24px' }}>
                <Col span={24}>
                    {/* Graph for donations over time */}
                    <Card title="Total Donations Over Time">
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                {/* Clustered Bars */}
                                <Bar dataKey="donations" fill="#c4caff" name="Number of Donations" />
                                <Bar dataKey="amount" fill="#a0b3ff" name="Amount of Donations" />
                                <Bar dataKey="hospitals" fill="#1890FF" name="Number of Hospitals" />
                            </BarChart>
                        </ResponsiveContainer>
                    </Card>
                </Col>
            </Row>

        </div>
    );
};

export default Dashbaord;
