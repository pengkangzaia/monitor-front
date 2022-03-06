import {request} from 'umi';

export async function queryTags() {
  return request('/api/tags');
}

export async function queryTestData() {
  // 查询测试数据
  return request('/mock_test_data', {
    method: 'POST',
    body: {},
  });
}

export async function cpuInfo(params) {
  return request('/api/cpu', {
    params: params
  })
}

export async function diskInfo(params) {
  return request('/api/disk', {
    params: params
  })
}

export async function memoryInfo(params) {
  return request('/api/memory', {
    params: params
  })
}

export async function netInfo(params) {
  return request('/api/net', {
    params: params
  })
}
