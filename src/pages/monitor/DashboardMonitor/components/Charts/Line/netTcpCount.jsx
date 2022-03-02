import React, {Component} from 'react';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入折线图
import 'echarts/lib/chart/line'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/dataZoom';
import 'echarts/lib/component/title';
import 'echarts/lib/component/grid';


class NetTcpCount extends Component {
  componentDidMount() {
    const my_tooltip = {
      trigger: 'axis',
      axisPointer: {
        animation: false,
        type: 'cross',
        lineStyle: {
          // color: '#376df4',
          width: 2,
          opacity: 1
        }
      }
    };
    const my_toolbox = {
      left: 'center',
      feature: {
        dataZoom: {
          yAxisIndex: 'none'
        },
        restore: {},
        saveAsImage: {},
        magicType: {
          type: []
        }
      }
    };
    var white = null;
    var colors = ['#4bacc6', '#8064a2', '#9bbb59', '#c0504d'];
    var background_color = '#ffffff';
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById('netTcpCount'));
    let data = [{
      "address": "http://1.15.117.64:8081",
      "date": "2022-03-01 16:03:40",
      "receivePacket": 3.0,
      "sendPacket": 3.0,
      "receive": 0.37,
      "tcpCount": 6,
      "send": 0.35
    }, {
      "address": "http://1.15.117.64:8081",
      "date": "2022-03-01 16:04:10",
      "receivePacket": 4.12,
      "sendPacket": 5.15,
      "receive": 0.31,
      "tcpCount": 7,
      "send": 0.3
    }, {
      "address": "http://1.15.117.64:8081",
      "date": "2022-03-01 16:04:40",
      "receivePacket": 3.06,
      "sendPacket": 2.04,
      "receive": 0.16,
      "tcpCount": 7,
      "send": 0.11
    }, {
      "address": "http://1.15.117.64:8081",
      "date": "2022-03-01 16:05:10",
      "receivePacket": 1.02,
      "sendPacket": 1.02,
      "receive": 0.04,
      "tcpCount": 7,
      "send": 0.05
    }, {
      "address": "http://1.15.117.64:8081",
      "date": "2022-03-01 16:05:40",
      "receivePacket": 3.0,
      "sendPacket": 4.0,
      "receive": 0.22,
      "tcpCount": 7,
      "send": 0.29
    }, {
      "address": "http://1.15.117.64:8081",
      "date": "2022-03-01 16:06:10",
      "receivePacket": 1.01,
      "sendPacket": 1.01,
      "receive": 0.04,
      "tcpCount": 7,
      "send": 0.05
    }, {
      "address": "http://1.15.117.64:8081",
      "date": "2022-03-01 16:06:40",
      "receivePacket": 2.02,
      "sendPacket": 1.01,
      "receive": 0.09,
      "tcpCount": 7,
      "send": 0.05
    }, {
      "address": "http://1.15.117.64:8081",
      "date": "2022-03-01 16:07:10",
      "receivePacket": 1.02,
      "sendPacket": 1.02,
      "receive": 0.04,
      "tcpCount": 6,
      "send": 0.05
    }, {
      "address": "http://1.15.117.64:8081",
      "date": "2022-03-01 16:07:40",
      "receivePacket": 5.0,
      "sendPacket": 3.0,
      "receive": 0.26,
      "tcpCount": 7,
      "send": 0.17
    }, {
      "address": "http://1.15.117.64:8081",
      "date": "2022-03-01 16:08:10",
      "receivePacket": 1.01,
      "sendPacket": 1.01,
      "receive": 0.1,
      "tcpCount": 7,
      "send": 0.05
    }, {
      "address": "http://1.15.117.64:8081",
      "date": "2022-03-01 16:08:40",
      "receivePacket": 4.08,
      "sendPacket": 2.04,
      "receive": 0.22,
      "tcpCount": 7,
      "send": 0.11
    }, {
      "address": "http://1.15.117.64:8081",
      "date": "2022-03-01 16:09:10",
      "receivePacket": 4.95,
      "sendPacket": 6.93,
      "receive": 0.94,
      "tcpCount": 8,
      "send": 0.76
    }, {
      "address": "http://1.15.117.64:8081",
      "date": "2022-03-01 16:09:40",
      "receivePacket": 2.02,
      "sendPacket": 2.02,
      "receive": 0.09,
      "tcpCount": 7,
      "send": 0.09
    }, {
      "address": "http://1.15.117.64:8081",
      "date": "2022-03-01 16:10:10",
      "receivePacket": 1.01,
      "sendPacket": 1.01,
      "receive": 0.04,
      "tcpCount": 7,
      "send": 0.05
    }];
    myChart.setOption({
      backgroundColor: background_color,
      title: {
        subtext: '单位/个',
        textStyle: {
          color: '#fff'
        }
      },
      xAxis: {
        axisLine: {lineStyle: {color: '#8392A5'}},
        data: data.map(function (item) {
          return item.date;
        }),
        nameTextStyle: {
          color: '#fff'
        }
      },
      yAxis: {
        scale: true,
        axisLine: {lineStyle: {color: '#8392A5'}, show: true},
        splitLine: {show: false}
      },
      tooltip: my_tooltip,
      toolbox: my_toolbox,
      dataZoom: [{
        startValue: data[0].date
      }, {
        type: 'inside'
      }],
      visualMap: [{
        show: false,
        inRange: {
          color: white
        }
      }],
      series: [
        {
          name: "tcpCount",
          type: 'line',
          data: data.map(function (item) {
            return item.tcpCount;
          }),
          lineStyle: {
            color: colors[0]
          }
        }]
    });

  }

  render() {
    return (
      <div id="netTcpCount" style={{width: 550, height: 300}}/>
    );
  }
}

export default NetTcpCount;
