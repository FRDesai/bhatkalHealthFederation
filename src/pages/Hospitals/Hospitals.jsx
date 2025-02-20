import React from 'react';
import { Table } from 'antd';

// Function to generate dummy hospital data
const generateDummyHospitals = () => {
  const hospitalNames = [
    'City Hospital', 'Green Valley Hospital', 'Sunshine Medical Center', 'Saint Mary\'s Hospital', 'Lakeside Medical Center', 
    'Riverside Hospital', 'Mountain View Clinic', 'Westside Medical Center', 'Parkway Hospital', 'Central City Hospital'
  ];
  
  const hospitalTypes = ['General', 'Specialized', 'Pediatric', 'Orthopedic', 'Cardiac', 'Neurology', 'Dental', 'Maternity', 'Cancer Treatment', 'Rehabilitation'];

  let data = [];

  const location = ["Shiroor", "Bhatkal", "Murdeshwar"]
  
  for (let i = 1; i <= 100; i++) {
    data.push({
      key: i.toString(),
      name: hospitalNames[Math.floor(Math.random() * hospitalNames.length)],
      type: hospitalTypes[Math.floor(Math.random() * hospitalTypes.length)],
      location: location[Math.floor(Math.random() * 3)],
      contact: `1${Math.floor(Math.random() * 10000000000)}`,
    });
  }

  return data;
};

const Hospitals = () => {
  // Generate 100 dummy hospitals
  const data = generateDummyHospitals();

  // Columns configuration for the table
  const columns = [
    {
      title: 'Hospital Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Contact',
      dataIndex: 'contact',
      key: 'contact',
    },
  ];

  return (
    <div style={{ padding: '0' }}>
      <h2>Hospitals List</h2>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 7 }} />
    </div>
  );
};

export default Hospitals;
