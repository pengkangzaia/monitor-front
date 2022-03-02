import { request } from 'umi';
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
