export const my_tooltip = {
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
export const my_toolbox = {
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
export const white = null;
export const colors = ['#4bacc6', '#8064a2', '#9bbb59', '#c0504d'];
export const background_color = '#ffffff';
// export default Object.assign({},
//   my_tooltip, my_toolbox, white, colors)

