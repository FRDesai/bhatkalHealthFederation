import React from 'react';
import { Table, Tag } from 'antd';

// Function to generate dummy transaction data
const generateDummyTransactions = () => {
  const hospitals = [
    'City Hospital', 'Green Valley Hospital', 'Sunshine Medical Center', 'Saint Mary\'s Hospital', 'Lakeside Medical Center',
    'Riverside Hospital', 'Mountain View Clinic', 'Westside Medical Center', 'Parkway Hospital', 'Central City Hospital'
  ];

  const statuses = ['Completed', 'Pending', 'Failed'];

  let data = [];
  
  for (let i = 1; i <= 100; i++) {
    data.push({
      key: i.toString(),
      hospital: hospitals[Math.floor(Math.random() * hospitals.length)],
      amount: (Math.random() * 100000).toFixed(2),
      date: `2025-02-${Math.floor(Math.random() * 28) + 1}`,
      status: statuses[Math.floor(Math.random() * statuses.length)],
    });
  }

  return data;
};

const Transactions = () => {
  // Generate 100 dummy transactions
  const data = generateDummyTransactions();

  // Columns configuration for the table
  const columns = [
    {
      title: 'Hospital Name',
      dataIndex: 'hospital',
      key: 'hospital',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (text) => `₹${text}`,
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        let color;
        if (status === 'Completed') {
          color = 'green';
        } else if (status === 'Pending') {
          color = 'yellow';
        } else if (status === 'Failed') {
          color = 'red';
        }
        return <Tag color={color}>{status}</Tag>;
      },
    },
  ];

  return (
    <div style={{ padding: '0' }}>
      <h2>Transactions List</h2>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 7 }} />
    </div>
  );
};

export default Transactions;
