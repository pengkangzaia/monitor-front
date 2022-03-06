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
import {diskInfo} from "@/pages/monitor/DashboardMonitor/service";
import * as Constant from './util';


class Diskkb extends Component {
  async componentDidMount() {
    let data = await diskInfo();
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById('diskkb'));
    myChart.setOption({
      backgroundColor: Constant.background_color,
      title: {
        subtext: '单位:kb/s',
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
      tooltip: Constant.my_tooltip,
      toolbox: Constant.my_toolbox,
      dataZoom: [{
        startValue: data[0].date
      }, {
        type: 'inside'
      }],
      visualMap: [{
        show: false,
        inRange: {
          color: Constant.white
        }
      }],
      series: [
        {
          name: "磁盘读字节/秒",
          type: 'line',
          data: data.map(function (item) {
            return item.rkb;
          }),
          lineStyle: {
            color: Constant.colors[0]
          }
        },
        {
          name: "磁盘写字节/秒",
          type: 'line',
          data: data.map(function (item) {
            return item.wkb;
          }),
          lineStyle: {
            color: Constant.colors[1]
          }
        }]
    });

  }

  render() {
    return (
      <div id="diskkb" style={{width: "100%", height: 300}}/>
    );
  }
}

export default Diskkb;
