import {Button, Card, Col, Row, Select} from 'antd';
import {GridContent, PageContainer} from '@ant-design/pro-layout';
import CpuUsage from "@/pages/monitor/DashboardMonitor/components/Charts/Line/cpuUsage";
import CpuLoad from "@/pages/monitor/DashboardMonitor/components/Charts/Line/cpuLoad";
import MemoryPercent from "@/pages/monitor/DashboardMonitor/components/Charts/Line/memoryPercent";
import MemoryUsage from "@/pages/monitor/DashboardMonitor/components/Charts/Line/memoryUsage";
import Diskio from "@/pages/monitor/DashboardMonitor/components/Charts/Line/diskio";
import Diskkb from "@/pages/monitor/DashboardMonitor/components/Charts/Line/diskkb";
import Diskwait from "@/pages/monitor/DashboardMonitor/components/Charts/Line/diskwait";
import Diskserver from "@/pages/monitor/DashboardMonitor/components/Charts/Line/diskserver";
import Diskutil from "@/pages/monitor/DashboardMonitor/components/Charts/Line/diskutil";
import NetRetx from "@/pages/monitor/DashboardMonitor/components/Charts/Line/netRetx";
import NetRetxPacket from "@/pages/monitor/DashboardMonitor/components/Charts/Line/netRetxPacket";
import NetTcpCount from "@/pages/monitor/DashboardMonitor/components/Charts/Line/netTcpCount";
import {useLocation} from "umi";

const {Option} = Select;



const DashboardMonitor = () => {
  const location = useLocation();
  let hostName = 'vejpo-2v9f00zm';
  let hostId = 1;
  if (location.state !== undefined) {
     hostName = location.state.hostName;
     hostId = location.state.hostId;
  }

  return (
    <PageContainer header={{extra:[
        <Button type={"text"}>主机名称：</Button>,
        <Select defaultValue={hostName}>
          <Option value="主机1">lhins-2v9f00zm</Option>
          <Option value="主机2">ghbes-2v9f00zm</Option>
          <Option value="主机3">ysjoe-2v9f00zm</Option>
          <Option value="主机4">vejpo-2v9f00zm</Option>
        </Select>]
    }}>
      <GridContent>
        <>
          <Row gutter={24}>
            <Col
              xl={12} lg={24} md={24} sm={24} xs={24}
              style={{
                marginBottom: 24,
              }}
            >
              <Card title="系统CPU利用率" bordered={false}>
                <div>
                  <CpuUsage hostId={hostId}/>
                </div>
              </Card>
            </Col>
            <Col xl={12} lg={24} md={24} sm={24} xs={24} style={{
              marginBottom: 24,
            }}>
              <Card title="系统CPU负载" bordered={false}>
                <div>
                  <CpuLoad hostId={hostId}/>
                </div>
              </Card>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col
              xl={12} lg={24} md={24} sm={24} xs={24}
              style={{
                marginBottom: 24,
              }}
            >
              <Card title="内存利用率" bordered={false}>
                <div>
                  <MemoryPercent hostId={hostId}/>
                </div>
              </Card>
            </Col>
            <Col xl={12} lg={24} md={24} sm={24} xs={24} style={{
              marginBottom: 24,
            }}>
              <Card title="内存使用量" bordered={false}>
                <div>
                  <MemoryUsage hostId={hostId}/>
                </div>
              </Card>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col
              xl={12} lg={24} md={24} sm={24} xs={24}
              style={{
                marginBottom: 24,
              }}
            >
              <Card title="磁盘IO次数" bordered={false}>
                <div>
                  <Diskio hostId={hostId}/>
                </div>
              </Card>
            </Col>
            <Col xl={12} lg={24} md={24} sm={24} xs={24} style={{
              marginBottom: 24,
            }}>
              <Card title="磁盘IO字节数" bordered={false}>
                <div>
                  <Diskkb hostId={hostId}/>
                </div>
              </Card>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col
              xl={12} lg={24} md={24} sm={24} xs={24}
              style={{
                marginBottom: 24,
              }}
            >
              <Card title="磁盘读写等待时间" bordered={false}>
                <div>
                  <Diskwait hostId={hostId}/>
                </div>
              </Card>
            </Col>
            <Col xl={12} lg={24} md={24} sm={24} xs={24} style={{
              marginBottom: 24,
            }}>
              <Card title="磁盘服务时间" bordered={false}>
                <div>
                  <Diskserver hostId={hostId}/>
                </div>
              </Card>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col
              xl={12} lg={24} md={24} sm={24} xs={24}
              style={{
                marginBottom: 24,
              }}
            >
              <Card title="磁盘/CPU利用率" bordered={false}>
                <div>
                  <Diskutil hostId={hostId}/>
                </div>
              </Card>
            </Col>
            <Col xl={12} lg={24} md={24} sm={24} xs={24} style={{
              marginBottom: 24,
            }}>
              <Card title="外网带宽" bordered={false}>
                <div>
                  <NetRetx hostId={hostId}/>
                </div>
              </Card>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col
              xl={12} lg={24} md={24} sm={24} xs={24}
              style={{
                marginBottom: 24,
              }}
            >
              <Card title="外网出入包量" bordered={false}>
                <div>
                  <NetRetxPacket hostId={hostId}/>
                </div>
              </Card>
            </Col>
            <Col xl={12} lg={24} md={24} sm={24} xs={24} style={{
              marginBottom: 24,
            }}>
              <Card title="TCP连接数" bordered={false}>
                <div>
                  <NetTcpCount hostId={hostId}/>
                </div>
              </Card>
            </Col>
          </Row>

        </>
      </GridContent>
    </PageContainer>

  );
};

export default DashboardMonitor;
