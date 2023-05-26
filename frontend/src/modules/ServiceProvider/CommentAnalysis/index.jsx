import { AppBar, Paper, Tab, Tabs } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import serviceApi from '../../../api/serviceApi';
const TabPanel = (props) => {
  const { children, value, index } = props;
  return <div>{value === index && <h1>{children}</h1>}</div>;
};

const AppointmentManagement = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const [serviceList, setServiceList] = useState([]);
  console.log('🚀 ~ file: index.jsx:13 ~ AppointmentManagement ~ serviceList:', serviceList);

  const getAllService = async () => {
    const res = await serviceApi.getByProvider(currentUser.id);
    if (res.statusCode == 200) {
      setServiceList(res.data);
    }
  };
  useEffect(() => {
    getAllService();
  }, []);
  const [value, setValue] = useState(0);
  const handleTabs = (e, val) => {
    setValue(val);
  };
  return (
    <div>
      <AppBar position="static">
        <Tabs value={-1} onChange={handleTabs}>
          {serviceList.map((item, index) => {
            <Tab label="Yêu cầu đã nhận" />;
          })}
          <Tab label="Yêu cầu đã nhận" />;
          <Tab label="Yêu cầu đã nhận" />;
          <Tab label="Yêu cầu đã nhận" />;
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Yêu cầu đã nhận
      </TabPanel>
      <TabPanel value={value} index={1}>
        Đã báo giá
      </TabPanel>
      <TabPanel value={value} index={2}>
        Lịch hẹn
      </TabPanel>
      <TabPanel value={value} index={3}>
        Đã xong
      </TabPanel>
      <TabPanel value={value} index={4}>
        Đã hủy
      </TabPanel>
    </div>
  );
};

export default AppointmentManagement;
