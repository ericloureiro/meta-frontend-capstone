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
import { BookForm } from "../../components";
import dayjs from "dayjs";
import { range } from "../../utils";

const { Title, Text } = Typography;

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

  const handleDisabledDate = (current) => {
    return current < dayjs().endOf("day");
  };

  const handleDisabledTime = () => {
    return {
      disabledHours: () => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    };
  };

  return (
    <Space direction="vertical">
      <Title style={{ textAlign: "center" }} level={1}>
        Make a reservation
      </Title>
      <BookForm
        onFinish={handleSubmit}
        disabledDate={handleDisabledDate}
        disabledTime={handleDisabledTime}
      />
    </Space>
  );
};
