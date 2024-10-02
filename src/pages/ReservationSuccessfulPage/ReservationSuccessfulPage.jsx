import { Typography, Space, Button } from "antd";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

export const ReservationSuccessfulPage = () => {
  const navigate = useNavigate();

  const handleGoHomeClick = () => {
    navigate("/");
  };

  return (
    <Space align="center" direction="vertical" size="large">
      <Title style={{ textAlign: "center", color: "495E57" }} level={4}>
        We look forward to meet you.
      </Title>
      <Title style={{ textAlign: "center" }}>
        Your reservation has been confirmed!
      </Title>
      <Text style={{ textAlign: "center", color: "#495E57" }}>
        Feel free to check and review your reservation details in your profile
        section.
      </Text>
      <Button type="primary" onClick={handleGoHomeClick}>
        Go home
      </Button>
    </Space>
  );
};
