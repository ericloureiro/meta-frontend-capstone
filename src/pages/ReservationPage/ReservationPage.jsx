import {
  Typography,
  Space,
  Button,
  Form,
  Input,
  InputNumber,
  DatePicker,
  TimePicker,
  Radio,
  Modal,
  Row,
} from "antd";
import { useNavigate } from "react-router-dom";
import { useSubmit } from "../../hooks";

const { Title, Text } = Typography;
const { TextArea } = Input;
const { confirm } = Modal;

export const ReservationPage = () => {
  const { submit } = useSubmit();
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    const { firstName, lastName, guests, email, phone, date, time, seating } =
      data;

    confirm({
      title: "Confirm reservation",
      okText: "Confirm",
      cancelText: "Edit",
      onOk: async () => {
        await submit(data);

        navigate("/reservation/successful");
      },
      content: (
        <Space direction="vertical">
          <Text>
            {`Are you sure you want to confirm a `}
            <Text strong>{seating}</Text>
            {` table for ${guests} guest(s)?`}
          </Text>
          <Text>
            {`The name reservation is on the name of `}
            <Text strong>
              {firstName} {lastName}
            </Text>
            {`, with email `}
            <Text strong>{email}</Text>
            {` and phone `}
            <Text strong>{phone}</Text>
            {`.`}
          </Text>
          <Text>
            {`Please be at the restaurant at `}
            <Text strong>
              {new Date(time).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </Text>
            {` on day `}
            <Text strong>
              {new Date(date).toLocaleDateString([], {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
              })}
            </Text>
            {`.`}
          </Text>
        </Space>
      ),
    });
  };

  return (
    <Space direction="vertical">
      <Title style={{ textAlign: "center" }} level={1}>
        Make a reservation
      </Title>
      <Form
        initialValues={{
          guests: 1,
          seating: "indoor",
        }}
        onFinish={handleSubmit}
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
          <DatePicker style={{ minWidth: "50%" }} />
        </Form.Item>
        <Form.Item
          hasFeedback
          rules={[{ required: true, message: "Required" }]}
          label="Time"
          name="time"
        >
          <TimePicker style={{ minWidth: "50%" }} format={"HH:mm"} />
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
    </Space>
  );
};
