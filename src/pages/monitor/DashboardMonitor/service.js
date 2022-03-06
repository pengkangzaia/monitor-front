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

export async function cpuInfo() {
  return request('/api/cpu')
}

export async function diskInfo() {
  return request('/api/disk')
}

export async function memoryInfo() {
  return request('/api/memory')
}

export async function netInfo() {
  return request('/api/net')
}
