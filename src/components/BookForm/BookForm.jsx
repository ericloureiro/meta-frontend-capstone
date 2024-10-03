import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Row,
  TimePicker,
} from "antd";

const { TextArea } = Input;

export const BookForm = ({ onFinish, disabledDate, disabledTime }) => {
  return (
    <Form
      initialValues={{
        guests: 1,
        seating: "indoor",
      }}
      onFinish={onFinish}
      layout="vertical"
      requiredMark={false}
    >
      <Form.Item
        hasFeedback
        rules={[{ required: true, message: "Required" }]}
        label="First name"
        name="firstName"
      >
        <Input />
      </Form.Item>
      <Form.Item
        hasFeedback
        rules={[{ required: true, message: "Required" }]}
        label="Last name"
        name="lastName"
      >
        <Input />
      </Form.Item>
      <Form.Item
        hasFeedback
        rules={[{ required: true, message: "Required" }]}
        label="Email"
        name="email"
      >
        <Input />
      </Form.Item>
      <Form.Item
        hasFeedback
        rules={[{ required: true, message: "Required" }]}
        label="Phone"
        name="phone"
      >
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item
        hasFeedback
        rules={[{ required: true, message: "Required" }]}
        label="Date"
        name="date"
      >
        <DatePicker style={{ minWidth: "50%" }} disabledDate={disabledDate} />
      </Form.Item>
      <Form.Item
        hasFeedback
        rules={[{ required: true, message: "Required" }]}
        label="Time"
        name="time"
      >
        <TimePicker
          style={{ minWidth: "50%" }}
          format={"HH"}
          disabledTime={() => ({
            disabledHours: () => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          })}
        />
      </Form.Item>
      <Form.Item
        hasFeedback
        rules={[{ required: true, message: "Required" }]}
        label="Guests"
        name="guests"
      >
        <InputNumber style={{ minWidth: "50%" }} />
      </Form.Item>
      <Form.Item
        hasFeedback
        rules={[{ required: true, message: "Required" }]}
        label="Seating"
        name="seating"
      >
        <Radio.Group>
          <Radio value="indoor">Indoor</Radio>
          <Radio value="outdoor">Outdoor</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Additional information" name="information">
        <TextArea style={{ minWidth: "100%" }} />
      </Form.Item>
      <Row align="center">
        <Button type="primary" htmlType="submit">
          Reserve a table
        </Button>
      </Row>
    </Form>
  );
};
