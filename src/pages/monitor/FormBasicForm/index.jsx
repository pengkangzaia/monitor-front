import {Card, message} from 'antd';
import ProForm, {
  ProFormDateRangePicker,
  ProFormDependency,
  ProFormDigit,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-form';
import {useRequest} from 'umi';
import {PageContainer} from '@ant-design/pro-layout';
import {fakeSubmitForm} from './service';
import {Fragment, useState} from "react";
import {Form, Button, Space, Select, Checkbox, InputNumber, Radio} from 'antd';
import {MinusCircleOutlined, PlusOutlined} from '@ant-design/icons';

const {Option} = Select;


const FormBasicForm = () => {

  const [componentVisible, setComponentVisible] = useState(false)

  const {run} = useRequest(fakeSubmitForm, {
    manual: true,
    onSuccess: () => {
      message.success('提交成功');
    },
  });

  const onFinish = async (values) => {
    run(values);
    console.log('Received values of form:', values);
  };

  const [form] = Form.useForm();

  const handleChange = () => {
    form.setFieldsValue({sights: []});
  };

  const show = () => {
    setComponentVisible(true)
  }

  const hide = () => {
    setComponentVisible(false)
  }

  const options = [
    {label: '短信', value: 'text'},
    {label: '邮件', value: 'email'},
    {label: '电话', value: 'phone'},
  ];

  return (
    <PageContainer>
      <Card bordered={false}>
        <ProForm
          hideRequiredMark
          style={{margin: 'auto', marginTop: 8, maxWidth: 600}}
          name="basic"
          layout="horizontal"
          initialValues={{public: '1'}}
          onFinish={onFinish}
        >
          <ProFormText
            width="md"
            label="策略名称"
            name="title"
            rules={[
              {
                required: true,
                message: '请输入标题',
              },
            ]}
            placeholder="请输入策略名称"
          />
          <ProFormSelect
            name="select"
            label="监控主机"
            valueEnum={{
              open: '主机1',
              closed: '主机2',
              half: '主机3',
            }}
            placeholder="请选择监控主机"
            rules={[{required: true, message: 'Please select your monitor host!'}]}
          />
          <Form.Item label={"阈值类型"}>
            <Radio.Group>
              <Space direction="horizontal">
                <Radio onClick={hide} value={1}>动态</Radio>
                <Radio onClick={show} value={2}>静态</Radio>
              </Space>
            </Radio.Group>
          </Form.Item>

          <>
            {
              componentVisible ? (
                <div className={"desc"}>
                  <Form.Item>
                    <p>告警触发条件</p>
                  </Form.Item>
                  <Form.List name="users">
                    {(fields, {add, remove}) => (
                      <>
                        {fields.map(({key, name, ...restField}) => (
                          // <Space key={key} style={{display: 'flex', marginBottom: 8}} align="baseline">
                          <Space key={key} style={{marginBottom: 8}} align="baseline">
                            <Button type="text">if</Button>
                            <Select defaultValue="cpuUsage">
                              <Option value="cpuUsage">CPU利用率</Option>
                              <Option value="cpuOneMinuteLoad">CPU平均一分钟负载</Option>
                              <Option value="cpuFiveMinuteLoad">CPU平均五分钟负载</Option>
                              <Option value="cpuFifteenMinuteLoad">CPU平均十五分钟负载</Option>
                            </Select>
                            <Select defaultValue="gt">
                              <Option value="gt">大于</Option>
                              <Option value="lt">小于</Option>
                              <Option value="ge">大于等于</Option>
                              <Option value="le">小于等于</Option>
                            </Select>
                            {/*<InputNumber min={1} max={100} defaultValue={3} addonAfter={unit} style={{ width: 120 }}/>*/}
                            <InputNumber min={1} max={100} defaultValue={3}/>
                            <Select defaultValue="2">
                              <Option value="1">持续1个数据点</Option>
                              <Option value="2">持续2个数据点</Option>
                              <Option value="3">持续3个数据点</Option>
                              <Option value="5">持续5个数据点</Option>
                            </Select>
                            <Button type="text">then</Button>
                            {/*<Select defaultValue="1" style={{ width: 180 }}>*/}
                            <Select defaultValue="1">
                              <Option value="1">每1个小时告警一次</Option>
                              <Option value="2">每2个小时告警一次</Option>
                              <Option value="3">每3个小时告警一次</Option>
                            </Select>
                            <MinusCircleOutlined onClick={() => remove(name)}/>
                          </Space>
                        ))}
                        <Form.Item>
                          <a type="text" onClick={() => add()}>
                            添加指标
                          </a>
                        </Form.Item>
                      </>
                    )}
                  </Form.List>
                </div>
              ) : null
            }

          </>
          <Form.Item label={"告警方式"}>
            <Checkbox.Group options={options} defaultValue={['email']}/>
          </Form.Item>
          <ProFormSelect
            name="select"
            label="通知用户"
            valueEnum={{
              open: '彭康',
              closed: 'camille',
              half: '亚索',
            }}
            placeholder="请选择通知用户"
            rules={[{required: true, message: 'Please select your notice user!'}]}
          />
          <ProFormTextArea
            label="备注信息"
            width="xl"
            name="goal"
            rules={[
              {
                required: true,
                message: '请输入策略备注',
              },
            ]}
            placeholder=""
          />
        </ProForm>
      </Card>
    </PageContainer>
  );
};

export default FormBasicForm;


