import React from "react";
import {
  Form,
  Input,
  Select,
  Cascader,
  TreeSelect,
  DatePicker,
  Upload,
  Button,
  InputNumber,
  Switch,
  Divider,
  Typography,
  Row,
  Col,
  Checkbox,
} from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const { TextArea } = Input;
const { RangePicker } = DatePicker;

const FormInfo = () => {
  const handledSubmit = (value) => {
    console.log(value);
  };
  return (
    <div>
      <Form onFinish={handledSubmit}>
        <Form.Item label='Name' name='name'>
          <Input name='name' />
        </Form.Item>
        <Divider orientation='left' orientationMargin={10}>
          <Typography.Title level={4}>User Info</Typography.Title>
        </Divider>

        <Row gutter={10}>
          <Col xs={24} md={12}>
            <Form.Item
              label='Phone No'
              name={["user", "phone_no"]}
              rules={[{ required: true }]}
            >
              <Input type='number' />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label='Email' name={["user", "email"]}>
              <Input type='email' />
            </Form.Item>
          </Col>
        </Row>
        <Divider orientation='left' orientationMargin={10}>
          <Typography.Title level={4}>Office</Typography.Title>
        </Divider>
        <Form.Item label='Name' name={["office", 0, "name"]}>
          <Input />
        </Form.Item>
        <Divider orientation='left' orientationMargin={0}>
          <Typography.Title level={4}>Office Address</Typography.Title>
        </Divider>
        <Row gutter={10}>
          <Col xs={24} md={12}>
            <Form.Item label='Name' name={["office", 0, "address", 0, "state"]}>
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label='State'
              name={["office", 0, "address", 0, "district"]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item label='City' name={["office", 0, "address", 0, "city"]}>
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item label='Tole' name={["office", 0, "address", 0, "tole"]}>
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Divider orientation='left' orientationMargin={0}>
          <Typography.Title level={4}>Office Contact</Typography.Title>
        </Divider>
        <Form.List
          name={["office", 0, "contact"]}
          initialValue={[
            {
              phone_no: "",
              is_primary: false,
            },
          ]}
        >
          {(fields, { add, remove, move }) => (
            <div>
              {fields.map(({ name, key, ...restField }) => {
                console.log("Fields::", { ...restField });
                return (
                  <Row gutter={24} key={key}>
                    <Col xs={18} md={12}>
                      <Form.Item label='Phone No' name={[name, "phone_no"]}>
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col xs={4}>
                      <Form.Item
                        {...restField}
                        label='Is Primary'
                        name={[name, "is_primary"]}
                        valuePropName={"checked"}
                      >
                        <Checkbox />
                      </Form.Item>
                    </Col>
                    <Col xs={2}>
                      <Typography.Title
                        level={4}
                        style={{ width: 8, cursor: "pointer", margin: 0 }}
                        onClick={() => remove(key)}
                      >
                        <DeleteOutlined />
                      </Typography.Title>
                    </Col>
                  </Row>
                );
              })}
              <Form.Item>
                <Button
                  onClick={() => add({ phone_no: "", is_primary: false })}
                >
                  Add
                </Button>
              </Form.Item>
            </div>
          )}
        </Form.List>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormInfo;
