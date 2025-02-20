import React from 'react';
import { Table, Tag } from 'antd';

// Function to generate dummy patient data
const generateDummyPatients = () => {
  const patientNames = [
    'John Doe', 'Jane Smith', 'Sam Wilson', 'Alice Brown', 'Tom Harris', 'Sara Lee', 'Emily Clark', 'Michael Scott', 'Anna Johnson', 'David Wilson'
  ];
  
  const diseases = ['Fever', 'Cold', 'Cough', 'Migraine', 'Stomach Ache', 'Headache', 'Back Pain', 'Flu', 'Pneumonia', 'Chronic Fatigue'];
  
  const hospitals = ['City Hospital', 'Green Valley Hospital', 'Sunshine Medical Center', 'Saint Mary\'s Hospital', 'Lakeside Medical Center', 'Riverside Hospital', 'Mountain View Clinic', 'Westside Medical Center', 'Parkway Hospital', 'Central City Hospital'];

  let data = [];
  
  for (let i = 1; i <= 100; i++) {
    data.push({
      key: i.toString(),
      name: patientNames[Math.floor(Math.random() * patientNames.length)],
      age: Math.floor(Math.random() * 50) + 20, // Random age between 20 and 70
      disease: diseases[Math.floor(Math.random() * diseases.length)],
      hospital: hospitals[Math.floor(Math.random() * hospitals.length)],
      phone: `1${Math.floor(Math.random() * 10000000000)}`,
      verified: Math.random() > 0.5 ? 'Verified' : 'Pending', // Randomly set as Verified or Pending
    });
  }

  return data;
};

const Patients = () => {
  // Generate 100 dummy patients
  const data = generateDummyPatients();

  // Columns configuration for the table
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Disease',
      dataIndex: 'disease',
      key: 'disease',
    },
    {
      title: 'Hospital',
      dataIndex: 'hospital',
      key: 'hospital',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Verification Status',
      dataIndex: 'verified',
      key: 'verified',
      render: (verified) => {
        const color = verified === 'Verified' ? 'green' : 'orange';
        return <Tag color={color}>{verified}</Tag>;
      },
    },
  ];

  return (
    <div>
      <h2>Patients List</h2>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 7 }} />
    </div>
  );
};

export default Patients;
