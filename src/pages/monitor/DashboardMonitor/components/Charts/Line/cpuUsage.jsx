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


class CpuUsage extends Component {
  componentDidMount() {
    // 基于准备好的dom，初始化echarts实例
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

    let myChart = echarts.init(document.getElementById('cpuUsage'));
    let data = [{
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.01849983181971073,
      "fifteenMinuteLoad": 0.06,
      "fiveMinuteLoad": 0.15,
      "oneMinuteLoad": 0.15,
      "date": "2022-03-01 13:31:54"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.01950235373234701,
      "fifteenMinuteLoad": 0.06,
      "fiveMinuteLoad": 0.13,
      "oneMinuteLoad": 0.09,
      "date": "2022-03-01 13:32:24"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.018823529411764704,
      "fifteenMinuteLoad": 0.06,
      "fiveMinuteLoad": 0.13,
      "oneMinuteLoad": 0.11,
      "date": "2022-03-01 13:32:54"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.019185459441265568,
      "fifteenMinuteLoad": 0.06,
      "fiveMinuteLoad": 0.12,
      "oneMinuteLoad": 0.06,
      "date": "2022-03-01 13:33:24"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.023553162853297442,
      "fifteenMinuteLoad": 0.06,
      "fiveMinuteLoad": 0.11,
      "oneMinuteLoad": 0.04,
      "date": "2022-03-01 13:33:54"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.019831932773109243,
      "fifteenMinuteLoad": 0.05,
      "fiveMinuteLoad": 0.1,
      "oneMinuteLoad": 0.02,
      "date": "2022-03-01 13:34:24"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.021148036253776436,
      "fifteenMinuteLoad": 0.06,
      "fiveMinuteLoad": 0.1,
      "oneMinuteLoad": 0.06,
      "date": "2022-03-01 13:34:54"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.020840336134453782,
      "fifteenMinuteLoad": 0.05,
      "fiveMinuteLoad": 0.09,
      "oneMinuteLoad": 0.04,
      "date": "2022-03-01 13:35:24"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.018462571332661968,
      "fifteenMinuteLoad": 0.05,
      "fiveMinuteLoad": 0.08,
      "oneMinuteLoad": 0.02,
      "date": "2022-03-01 13:35:54"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.021169354838709676,
      "fifteenMinuteLoad": 0.05,
      "fiveMinuteLoad": 0.07,
      "oneMinuteLoad": 0.01,
      "date": "2022-03-01 13:36:24"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.018193847171683757,
      "fifteenMinuteLoad": 0.04,
      "fiveMinuteLoad": 0.06,
      "oneMinuteLoad": 0.01,
      "date": "2022-03-01 13:36:54"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.0215311004784689,
      "fifteenMinuteLoad": 0.04,
      "fiveMinuteLoad": 0.06,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 13:37:24"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.021527077026572486,
      "fifteenMinuteLoad": 0.04,
      "fiveMinuteLoad": 0.05,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 13:37:54"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.01917255297679112,
      "fifteenMinuteLoad": 0.03,
      "fiveMinuteLoad": 0.04,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 13:38:24"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.01882985877605918,
      "fifteenMinuteLoad": 0.03,
      "fiveMinuteLoad": 0.04,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 13:38:54"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.027600134634803097,
      "fifteenMinuteLoad": 0.03,
      "fiveMinuteLoad": 0.03,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 13:39:24"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.019179004037685063,
      "fifteenMinuteLoad": 0.03,
      "fiveMinuteLoad": 0.03,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 13:39:54"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.02049731182795699,
      "fifteenMinuteLoad": 0.02,
      "fiveMinuteLoad": 0.02,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 13:40:24"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.02214765100671141,
      "fifteenMinuteLoad": 0.02,
      "fiveMinuteLoad": 0.02,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 13:40:54"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.018518518518518517,
      "fifteenMinuteLoad": 0.02,
      "fiveMinuteLoad": 0.02,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 13:41:24"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.01950235373234701,
      "fifteenMinuteLoad": 0.02,
      "fiveMinuteLoad": 0.03,
      "oneMinuteLoad": 0.08,
      "date": "2022-03-01 13:41:54"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.019831932773109247,
      "fifteenMinuteLoad": 0.02,
      "fiveMinuteLoad": 0.03,
      "oneMinuteLoad": 0.05,
      "date": "2022-03-01 13:42:24"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.020154517971111858,
      "fifteenMinuteLoad": 0.01,
      "fiveMinuteLoad": 0.02,
      "oneMinuteLoad": 0.03,
      "date": "2022-03-01 13:42:54"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.020154517971111858,
      "fifteenMinuteLoad": 0.01,
      "fiveMinuteLoad": 0.02,
      "oneMinuteLoad": 0.02,
      "date": "2022-03-01 13:43:24"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.0198252688172043,
      "fifteenMinuteLoad": 0.03,
      "fiveMinuteLoad": 0.08,
      "oneMinuteLoad": 0.26,
      "date": "2022-03-01 13:43:54"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.020490426603963722,
      "fifteenMinuteLoad": 0.03,
      "fiveMinuteLoad": 0.07,
      "oneMinuteLoad": 0.16,
      "date": "2022-03-01 13:44:24"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.02119071644803229,
      "fifteenMinuteLoad": 0.02,
      "fiveMinuteLoad": 0.07,
      "oneMinuteLoad": 0.09,
      "date": "2022-03-01 13:44:54"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.02187079407806191,
      "fifteenMinuteLoad": 0.02,
      "fiveMinuteLoad": 0.06,
      "oneMinuteLoad": 0.06,
      "date": "2022-03-01 13:45:24"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.01849983181971073,
      "fifteenMinuteLoad": 0.02,
      "fiveMinuteLoad": 0.05,
      "oneMinuteLoad": 0.03,
      "date": "2022-03-01 13:45:54"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.020531807472231572,
      "fifteenMinuteLoad": 0.02,
      "fiveMinuteLoad": 0.05,
      "oneMinuteLoad": 0.02,
      "date": "2022-03-01 13:46:24"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.018855218855218854,
      "fifteenMinuteLoad": 0.01,
      "fiveMinuteLoad": 0.04,
      "oneMinuteLoad": 0.01,
      "date": "2022-03-01 13:46:54"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.01749663526244953,
      "fifteenMinuteLoad": 0.01,
      "fiveMinuteLoad": 0.03,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 13:47:24"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.021212121212121213,
      "fifteenMinuteLoad": 0.01,
      "fiveMinuteLoad": 0.03,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 13:47:54"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.01952204644900707,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.03,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 13:48:24"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.01915966386554622,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.02,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 13:48:54"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.02119071644803229,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.02,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 13:49:24"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.018518518518518517,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.03,
      "oneMinuteLoad": 0.06,
      "date": "2022-03-01 13:49:54"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.018861569552037723,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.03,
      "oneMinuteLoad": 0.03,
      "date": "2022-03-01 13:50:24"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.02154882154882155,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.02,
      "oneMinuteLoad": 0.02,
      "date": "2022-03-01 13:50:54"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.01952204644900707,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.02,
      "oneMinuteLoad": 0.01,
      "date": "2022-03-01 13:51:24"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.017809139784946235,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.02,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 13:51:54"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.021498152502519317,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.02,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 13:52:24"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.017833109017496636,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.01,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 13:52:54"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.01818181818181818,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.01,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 13:53:24"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.018842530282637954,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.01,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 13:53:54"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.017851128326035703,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.02,
      "oneMinuteLoad": 0.06,
      "date": "2022-03-01 13:54:24"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.016835016835016835,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.02,
      "oneMinuteLoad": 0.03,
      "date": "2022-03-01 13:54:54"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.01752021563342318,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.02,
      "oneMinuteLoad": 0.02,
      "date": "2022-03-01 13:55:24"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.017502524402558062,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.01,
      "oneMinuteLoad": 0.01,
      "date": "2022-03-01 13:55:54"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.017905405405405406,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.01,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 13:56:24"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.01984527413387151,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.01,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 13:56:54"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.018462571332661968,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.0,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 13:57:24"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.016167059616032334,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.0,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 13:57:54"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.01915966386554622,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.0,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 13:58:24"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.01815736381977135,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.0,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 13:58:54"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.015503875968992248,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.0,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 13:59:24"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.01915966386554622,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.0,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 13:59:54"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.017851128326035703,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.0,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 14:00:24"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.01716593739481656,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.0,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 14:00:54"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.017490750084090144,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.0,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 14:01:24"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.020875420875420873,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.0,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 14:01:54"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.01853099730458221,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.0,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 14:02:24"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.01849983181971073,
      "fifteenMinuteLoad": 0.01,
      "fiveMinuteLoad": 0.05,
      "oneMinuteLoad": 0.19,
      "date": "2022-03-01 14:02:54"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.016156176371592057,
      "fifteenMinuteLoad": 0.01,
      "fiveMinuteLoad": 0.04,
      "oneMinuteLoad": 0.11,
      "date": "2022-03-01 14:03:24"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.01717171717171717,
      "fifteenMinuteLoad": 0.01,
      "fiveMinuteLoad": 0.04,
      "oneMinuteLoad": 0.07,
      "date": "2022-03-01 14:03:54"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.017845117845117844,
      "fifteenMinuteLoad": 0.01,
      "fiveMinuteLoad": 0.03,
      "oneMinuteLoad": 0.04,
      "date": "2022-03-01 14:04:24"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.019153225806451613,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.03,
      "oneMinuteLoad": 0.02,
      "date": "2022-03-01 14:04:54"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.01549865229110512,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.02,
      "oneMinuteLoad": 0.01,
      "date": "2022-03-01 14:05:24"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.02048354600402955,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.02,
      "oneMinuteLoad": 0.01,
      "date": "2022-03-01 14:05:54"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.01881720430107527,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.02,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 14:06:24"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.01948270070540813,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.01,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 14:06:54"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.022834116856950974,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.01,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 14:07:24"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.022155085599194362,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.01,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 14:07:54"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.02187948350071736,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.01,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 14:08:22"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.02212236432768752,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.02,
      "oneMinuteLoad": 0.06,
      "date": "2022-03-01 14:08:52"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.021483719368915744,
      "fifteenMinuteLoad": 0.01,
      "fiveMinuteLoad": 0.03,
      "oneMinuteLoad": 0.1,
      "date": "2022-03-01 14:09:22"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.01948270070540813,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.03,
      "oneMinuteLoad": 0.06,
      "date": "2022-03-01 14:09:52"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.019599666388657212,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.03,
      "oneMinuteLoad": 0.04,
      "date": "2022-03-01 14:10:16"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.019978594363182306,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.02,
      "oneMinuteLoad": 0.02,
      "date": "2022-03-01 14:10:44"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.01662625562868029,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.02,
      "oneMinuteLoad": 0.01,
      "date": "2022-03-01 14:11:13"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.018848872433524066,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.02,
      "oneMinuteLoad": 0.01,
      "date": "2022-03-01 14:11:43"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.027552674230145867,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.0,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 14:14:07"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.01869158878504673,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.0,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 14:14:37"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.020710059171597635,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.0,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 14:15:11"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.01903772931810315,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.0,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 14:15:40"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.01782111634162744,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.0,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 14:16:10"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.01917255297679112,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.0,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 14:16:40"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.01714862138533961,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.0,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 14:17:10"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.019772117962466487,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.01,
      "oneMinuteLoad": 0.05,
      "date": "2022-03-01 14:17:40"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.016891891891891893,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.01,
      "oneMinuteLoad": 0.03,
      "date": "2022-03-01 14:18:10"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.022169969768223045,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.01,
      "oneMinuteLoad": 0.02,
      "date": "2022-03-01 14:18:40"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.023793565683646115,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.01,
      "oneMinuteLoad": 0.01,
      "date": "2022-03-01 14:19:10"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.01716593739481656,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.0,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 14:19:40"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.01881720430107527,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.0,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 14:20:10"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.018481182795698926,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.0,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 14:20:40"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.019153225806451613,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.0,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 14:21:10"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.04135843981170141,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.0,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 14:21:40"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.016492763379333558,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.0,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 14:22:10"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.0188108834397044,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.0,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 14:22:40"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.01984527413387151,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.02,
      "oneMinuteLoad": 0.06,
      "date": "2022-03-01 14:23:10"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.018163471241170535,
      "fifteenMinuteLoad": 0.01,
      "fiveMinuteLoad": 0.04,
      "oneMinuteLoad": 0.17,
      "date": "2022-03-01 14:23:40"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.018848872433524066,
      "fifteenMinuteLoad": 0.01,
      "fiveMinuteLoad": 0.04,
      "oneMinuteLoad": 0.1,
      "date": "2022-03-01 14:24:10"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.019865319865319864,
      "fifteenMinuteLoad": 0.01,
      "fiveMinuteLoad": 0.03,
      "oneMinuteLoad": 0.06,
      "date": "2022-03-01 14:24:40"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.018481182795698926,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.03,
      "oneMinuteLoad": 0.04,
      "date": "2022-03-01 14:25:10"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.017502524402558062,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.03,
      "oneMinuteLoad": 0.02,
      "date": "2022-03-01 14:25:40"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.018474974806852534,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.02,
      "oneMinuteLoad": 0.01,
      "date": "2022-03-01 14:26:10"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.018487394957983194,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.02,
      "oneMinuteLoad": 0.01,
      "date": "2022-03-01 14:26:40"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.017490750084090144,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.02,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 14:27:10"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.01815126050420168,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.01,
      "oneMinuteLoad": 0.0,
      "date": "2022-03-01 14:27:40"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.018823529411764704,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.03,
      "oneMinuteLoad": 0.06,
      "date": "2022-03-01 14:28:10"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.01848739495798319,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.02,
      "oneMinuteLoad": 0.04,
      "date": "2022-03-01 14:28:40"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.020490426603963722,
      "fifteenMinuteLoad": 0.0,
      "fiveMinuteLoad": 0.02,
      "oneMinuteLoad": 0.02,
      "date": "2022-03-01 14:29:10"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.02046979865771812,
      "fifteenMinuteLoad": 0.03,
      "fiveMinuteLoad": 0.1,
      "oneMinuteLoad": 0.33,
      "date": "2022-03-01 14:29:40"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.021885521885521887,
      "fifteenMinuteLoad": 0.02,
      "fiveMinuteLoad": 0.09,
      "oneMinuteLoad": 0.2,
      "date": "2022-03-01 14:30:10"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.017502524402558062,
      "fifteenMinuteLoad": 0.03,
      "fiveMinuteLoad": 0.11,
      "oneMinuteLoad": 0.24,
      "date": "2022-03-01 14:30:40"
    }, {
      "address": "http://1.15.117.64:8081",
      "cpuUsage": 0.01781512605042017,
      "fifteenMinuteLoad": 0.03,
      "fiveMinuteLoad": 0.1,
      "oneMinuteLoad": 0.14,
      "date": "2022-03-01 14:31:10"
    }];

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
          name: "usage",
          type: 'line',
          data: data.map(x => x.cpuUsage),
          lineStyle: {
            color: colors[0]
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
