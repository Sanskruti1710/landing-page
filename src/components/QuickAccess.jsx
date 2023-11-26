import React from 'react';
import { FaPlus } from 'react-icons/fa6';
import { Tabs, Card } from 'antd';
import Allqa from './Allqa';


const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};

const CardView = ({ label }) => (
  <Card title={label} style={{ width: 300, margin: '16px' }}>
    {/* Your card content goes here */}
    <p>Card content for {label}</p>
  </Card>
);

const items = [
  {
    key: '1',
    label: 'All',
    children: <Allqa />,
  },
  {
    key: '2',
    label: 'Recently Opened',
    children: <CardView label="Recently Opened" />,
  },
  {
    key: '3',
    label: 'Shared',
    children: <CardView label="Shared" />,
  },
  {
    key: '4',
    label: 'Favorites',
    children: <CardView label="Favorites" />,
  },
  {
    key: '5',
    label: <FaPlus />,
    children: <CardView label="Add New" />,
  },
];

const items2 = [
  {
    key: '1',
    label: 'All',
    children: <CardView label="All" />,
  },
  {
    key: '2',
    label: 'Recently Opened',
    children: <CardView label="Recently Opened" />,
  },
  {
    key: '3',
    label: 'Shared',
    children: <CardView label="Shared" />,
  },
];

const App = () => (
  <Tabs defaultActiveKey="1" onChange={onChange}>
    {items.map((item) => (
      <TabPane tab={item.label} key={item.key}>
        {item.children}
      </TabPane>
    ))}
  </Tabs>
);

export default App;
