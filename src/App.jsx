import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  DashboardOutlined,
  UserOutlined,
  UserAddOutlined,
  MedicineBoxOutlined,
  HomeOutlined,
  FileAddOutlined,
  FileSearchOutlined,
  TransactionOutlined,
  FileTextOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import Dashbaord from './pages/Dashboard/Dashbaord.jsx';
import AddPatients from './pages/AddPatients/AddPatients.jsx';
import Patients from './pages/Patients/Patients.jsx';
import Reports from './pages/Reports/Reports.jsx';
import Transactions from './pages/Transactions/Transactions.jsx';
import Verifications from './pages/Verifications/Verifications.jsx';
import AddHospitals from './pages/AddHospitals/AddHospitals.jsx';
import Hospitals from './pages/Hospitals/Hospitals.jsx';
import TransactionEntry from './pages/TransactionsEntry/TransactionEntry.jsx';
import Settings from './pages/Settings/Settings.jsx';
import "./App.css"

const { Sider, Content, Footer } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('dashboard');

  const handleMenuClick = (e) => {
    setSelectedMenu(e.key);
  };

  const renderContent = () => {
    switch (selectedMenu) {
      case 'dashboard':
        return <Dashbaord />;
      case 'patients':
        return <Patients />;
      case 'addPatient':
        return <AddPatients />;
      case 'reports':
        return <Reports />;
      case 'transactions':
        return <Transactions />;
      case 'addHospital':
        return <AddHospitals />
      case 'hospitals':
        return <Hospitals />
      case 'transactionsEntry':
        return <TransactionEntry />
      case 'settings':
        return <Settings />
      default:
        return <Dashbaord />;
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Fixed Sidebar */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(collapsed) => setCollapsed(collapsed)}
        theme="light"
        style={{ position: 'fixed', height: '100vh', overflow: 'auto' }}
      >
        <div className="logo" />
        <Menu
          theme="light"
          mode="inline"
          selectedKeys={[selectedMenu]}
          onClick={handleMenuClick}
        >
          <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="patients" icon={<UserOutlined />}>
            Patients
          </Menu.Item>
          <Menu.Item key="addPatient" icon={<UserAddOutlined />}>
            Register Patient
          </Menu.Item>
          <Menu.Item key="hospitals" icon={<HomeOutlined />}>
            Hospitals
          </Menu.Item>
          <Menu.Item key="addHospital" icon={<FileAddOutlined />}>
            Register Hospital
          </Menu.Item>
          <Menu.Item key="transactions" icon={<TransactionOutlined />}>
            Transactions
          </Menu.Item>
          <Menu.Item key="transactionsEntry" icon={<FileAddOutlined />}>
            Transactions Entry
          </Menu.Item>
          <Menu.Item key="reports" icon={<FileTextOutlined />}>
            Reports
          </Menu.Item>
          <Menu.Item key="settings" icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout style={{ marginLeft: collapsed ? 80 : 200 }}>
        {/* Scrollable Content */}
        <Content style={{ padding: '0px 24px', margin: 0, height: '100vh', overflowY: 'auto', background: '#fff' }}>
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;