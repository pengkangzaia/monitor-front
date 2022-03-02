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


class Diskwait extends Component {
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
    let myChart = echarts.init(document.getElementById('diskwait'));
    let data = [{
      "address": "http://1.15.117.64:8081",
      "rio": 0.07,
      "wio": 2.62,
      "rkb": 3.91,
      "wkb": 24.77,
      "svctm": 0.126667,
      "util": 0.0166667,
      "date": "2022-02-13 21:16:22",
      "wawait": 0.486667,
      "rawait": 1.14333
    }, {
      "address": "http://1.15.117.64:8081",
      "rio": 0.07,
      "wio": 2.62,
      "rkb": 3.91,
      "wkb": 24.77,
      "svctm": 0.126667,
      "util": 0.0166667,
      "date": "2022-02-13 21:16:51",
      "wawait": 0.486667,
      "rawait": 1.14333
    }, {
      "address": "http://1.15.117.64:8081",
      "rio": 0.07,
      "wio": 2.62,
      "rkb": 3.91,
      "wkb": 24.77,
      "svctm": 0.126667,
      "util": 0.0166667,
      "date": "2022-02-13 21:17:21",
      "wawait": 0.486667,
      "rawait": 1.14333
    }, {
      "address": "http://1.15.117.64:8081",
      "rio": 0.07,
      "wio": 2.62,
      "rkb": 3.91,
      "wkb": 24.77,
      "svctm": 0.126667,
      "util": 0.0166667,
      "date": "2022-02-13 21:17:51",
      "wawait": 0.486667,
      "rawait": 1.14333
    }, {
      "address": "http://1.15.117.64:8081",
      "rio": 0.07,
      "wio": 2.62,
      "rkb": 3.91,
      "wkb": 24.77,
      "svctm": 0.126667,
      "util": 0.0166667,
      "date": "2022-02-13 21:18:25",
      "wawait": 0.486667,
      "rawait": 1.14333
    }, {
      "address": "http://1.15.117.64:8081",
      "rio": 0.07,
      "wio": 2.62,
      "rkb": 3.91,
      "wkb": 24.77,
      "svctm": 0.126667,
      "util": 0.0166667,
      "date": "2022-02-13 21:18:53",
      "wawait": 0.486667,
      "rawait": 1.14333
    }, {
      "address": "http://1.15.117.64:8081",
      "rio": 0.07,
      "wio": 2.62,
      "rkb": 3.91,
      "wkb": 24.77,
      "svctm": 0.126667,
      "util": 0.0166667,
      "date": "2022-02-13 21:19:23",
      "wawait": 0.486667,
      "rawait": 1.14333
    }, {
      "address": "http://1.15.117.64:8081",
      "rio": 0.07,
      "wio": 2.62,
      "rkb": 3.91,
      "wkb": 24.77,
      "svctm": 0.126667,
      "util": 0.0166667,
      "date": "2022-02-13 21:19:51",
      "wawait": 0.486667,
      "rawait": 1.14333
    }, {
      "address": "http://1.15.117.64:8081",
      "rio": 0.07,
      "wio": 2.62,
      "rkb": 3.91,
      "wkb": 24.77,
      "svctm": 0.126667,
      "util": 0.0166667,
      "date": "2022-02-13 21:20:25",
      "wawait": 0.486667,
      "rawait": 1.14333
    }, {
      "address": "http://1.15.117.64:8081",
      "rio": 0.07,
      "wio": 2.62,
      "rkb": 3.91,
      "wkb": 24.77,
      "svctm": 0.126667,
      "util": 0.0166667,
      "date": "2022-02-13 21:20:49",
      "wawait": 0.486667,
      "rawait": 1.14333
    }, {
      "address": "http://1.15.117.64:8081",
      "rio": 0.07,
      "wio": 2.62,
      "rkb": 3.91,
      "wkb": 24.77,
      "svctm": 0.126667,
      "util": 0.0166667,
      "date": "2022-02-13 21:21:19",
      "wawait": 0.486667,
      "rawait": 1.14333
    }];
    myChart.setOption({
      backgroundColor: background_color,
      title: {
        subtext: '单位/ms',
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
          name: "磁盘读等待时间",
          type: 'line',
          data: data.map(function (item) {
            return item.rawait;
          }),
          lineStyle: {
            color: colors[0]
          }
        },
        {
          name: "磁盘写等待时间",
          type: 'line',
          data: data.map(function (item) {
            return item.wawait;
          }),
          lineStyle: {
            color: colors[1]
          }
        }]
    });

  }

  render() {
    return (
      <div id="diskwait" style={{width: "100%", height: 300}}/>
    );
  }
}

export default Diskwait;
