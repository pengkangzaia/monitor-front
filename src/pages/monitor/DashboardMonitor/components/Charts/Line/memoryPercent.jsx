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


class MemoryPercent extends Component {
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
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById('memoryPercent'));
    let data = [{
      "address": "http://1.15.117.64:8081",
      "used": 791.0,
      "usedPercent": 0.431533,
      "date": "2022-02-13 20:56:13"
    }, {
      "address": "http://1.15.117.64:8081",
      "used": 791.0,
      "usedPercent": 0.431533,
      "date": "2022-02-13 20:56:42"
    }, {
      "address": "http://1.15.117.64:8081",
      "used": 791.0,
      "usedPercent": 0.431533,
      "date": "2022-02-13 20:57:11"
    }, {
      "address": "http://1.15.117.64:8081",
      "used": 791.0,
      "usedPercent": 0.430987,
      "date": "2022-02-13 20:57:42"
    }, {
      "address": "http://1.15.117.64:8081",
      "used": 791.0,
      "usedPercent": 0.431533,
      "date": "2022-02-13 20:58:11"
    }, {
      "address": "http://1.15.117.64:8081",
      "used": 792.0,
      "usedPercent": 0.431533,
      "date": "2022-02-13 20:58:41"
    }, {
      "address": "http://1.15.117.64:8081",
      "used": 791.0,
      "usedPercent": 0.432079,
      "date": "2022-02-13 20:59:12"
    }, {
      "address": "http://1.15.117.64:8081",
      "used": 792.0,
      "usedPercent": 0.432079,
      "date": "2022-02-13 20:59:41"
    }, {
      "address": "http://1.15.117.64:8081",
      "used": 792.0,
      "usedPercent": 0.431533,
      "date": "2022-02-13 21:00:12"
    }, {
      "address": "http://1.15.117.64:8081",
      "used": 792.0,
      "usedPercent": 0.431533,
      "date": "2022-02-13 21:00:41"
    }, {
      "address": "http://1.15.117.64:8081",
      "used": 792.0,
      "usedPercent": 0.432079,
      "date": "2022-02-13 21:01:11"
    }, {
      "address": "http://1.15.117.64:8081",
      "used": 792.0,
      "usedPercent": 0.431533,
      "date": "2022-02-13 21:01:41"
    }, {
      "address": "http://1.15.117.64:8081",
      "used": 791.0,
      "usedPercent": 0.431533,
      "date": "2022-02-13 21:02:11"
    }, {
      "address": "http://1.15.117.64:8081",
      "used": 792.0,
      "usedPercent": 0.431533,
      "date": "2022-02-13 21:02:41"
    }, {
      "address": "http://1.15.117.64:8081",
      "used": 792.0,
      "usedPercent": 0.431533,
      "date": "2022-02-13 21:03:12"
    }, {
      "address": "http://1.15.117.64:8081",
      "used": 792.0,
      "usedPercent": 0.432079,
      "date": "2022-02-13 21:03:41"
    }, {
      "address": "http://1.15.117.64:8081",
      "used": 792.0,
      "usedPercent": 0.432079,
      "date": "2022-02-13 21:04:11"
    }, {
      "address": "http://1.15.117.64:8081",
      "used": 792.0,
      "usedPercent": 0.432079,
      "date": "2022-02-13 21:04:42"
    }, {
      "address": "http://1.15.117.64:8081",
      "used": 792.0,
      "usedPercent": 0.431533,
      "date": "2022-02-13 21:05:11"
    }, {"address": "http://1.15.117.64:8081", "used": 793.0, "usedPercent": 0.432079, "date": "2022-02-13 21:05:41"}];

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
          name: "percent",
          type: 'line',
          data: data.map(function (item) {
            return item.usedPercent;
          }),
          lineStyle: {
            color: colors[0]
          }
        }]
    });

  }

  render() {
    return (
      <div id="memoryPercent" style={{width: 550, height: 300}}/>
    );
  }
}

export default MemoryPercent;
