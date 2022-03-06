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
import * as Constant from './util';
import {diskInfo} from "@/pages/monitor/DashboardMonitor/service";


class Diskio extends Component {
  async componentDidMount() {
    let data = await diskInfo();
    var background_color = '#ffffff';
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById('diskio'));
    myChart.setOption({
      backgroundColor: background_color,
      title: {
        subtext: '单位/个',
        textStyle: {
          color: '#fff'
        }
      },
      xAxis: {
        axisLine: { lineStyle: { color: '#8392A5' } },
        data: data.map(function (item) {
          return item.date;
        }),
        nameTextStyle: {
          color: '#fff'
        }
      },
      yAxis: {
        scale: true,
        axisLine: { lineStyle: { color: '#8392A5' }, show: true },
        splitLine: { show: false }
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
          name: "磁盘读IO次数/秒",
          type: 'line',
          data: data.map(function (item) {
            return item.rio;
          }),
          lineStyle: {
            color: Constant.colors[0]
          }
        },
        {
          name: "磁盘写IO次数/秒",
          type: 'line',
          data: data.map(function (item) {
            return item.wio;
          }),
          lineStyle: {
            color: Constant.colors[1]
          }
        }]
    });

  }

  render() {
    return (
      <div id="diskio" style={{width: "100%", height: 300}}/>
    );
  }
}

export default Diskio;
