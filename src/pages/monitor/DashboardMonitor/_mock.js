import mockjs from 'mockjs';

const getTags = (_, res) => {
  return res.json({
    data: mockjs.mock({
      'list|100': [
        {
          name: '@city',
          'value|1-100': 150,
          'type|0-2': 1,
        },
      ],
    }),
  });
};

export default {
  'GET  /api/tags': getTags,
  'POST /mock_test_data': (req, res) => {
    res.send({
      status: 'ok',
      code: 200,
      x_data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    });
  },
};
