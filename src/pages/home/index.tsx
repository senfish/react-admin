import CardWrapper from "../../components/CardWrapper";
import { Card } from 'antd';
import BarChart from "./BarChart";
import BasicLine from './BasicLine';
import MultipleChart from './MultipleChart';
import PieChart from './PieChartComponent';
import './index.less'
import TableWrapper from "./Table";
const Home = () => {
  return (
    <div className="home-page">
      <CardWrapper>
        <div className="top-content">
          <Card style={{ width: '100%' }}> <BasicLine /></Card>
          <Card style={{ width: '100%' }}><BarChart /></Card>
        </div>
        <div className="middle-content">
          <Card style={{ width: '100%' }}><MultipleChart /></Card>
        </div>
        <div className="bottom-content">
          <Card style={{ width: '100%' }}><TableWrapper /></Card>
          <Card style={{ width: 350 }}><PieChart /></Card>
        </div>
      </CardWrapper>
    </div>

  );
};

export default Home;
