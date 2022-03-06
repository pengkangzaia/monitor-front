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
import {cpuInfo} from "@/pages/monitor/DashboardMonitor/service";
import * as Constant from './util';


class CpuUsage extends Component {

  async componentDidMount() {
    const hostId = this.props.hostId;
    const params = {id : hostId};
    let data = await cpuInfo(params);
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById('cpuUsage'));
    myChart.setOption({
      backgroundColor: '#ffffff',
      title: {
        subtext: '单位/%',
        textStyle: {
          color: '#fff'
        }
      },
      xAxis: {
        axisLine: {lineStyle: {color: '#8392A5'}},
        // data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        data: data.map(x => x.date),
        nameTextStyle: {
          color: '#fff'
        }
      },
      yAxis: {
        scale: true,
        axisLine: {lineStyle: {color: '#8392A5'}, show: true},
        splitLine: {show: false},
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
          name: "usage",
          type: 'line',
          data: data.map(x => x.cpuUsage),
          lineStyle: {
            color: Constant.colors[0]
          }
        }]
    });


  }

  render() {
    return (
      <div id="cpuUsage" style={{width: "100%", height: 300}}/>
    );
  }
}

export default CpuUsage;
