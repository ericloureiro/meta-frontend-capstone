import { Button, Typography, Space } from "antd";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

export const HomePage = () => {
  const navigate = useNavigate();

  const handleReserveTableClick = () => {
    navigate("/reservation");
  };

  return (
    <Space align="center" direction="vertical" size="large">
      <Title style={{ textAlign: "center" }} level={1}>
        Book a table
      </Title>
      <Title style={{ textAlign: "center" }} level={2}>
        Celebrate your special occasion with us! To ensure we create the perfect
        atmosphere for your event, please place a reservation.
      </Title>
      <Title style={{ textAlign: "center" }} level={4}>
        Let us know the details of your event, including the date, time, and
        number of guests, so we can make the best arrangements tailored to your
        needs. Whether it’s an intimate gathering or a grand celebration, we’re
        here to make your experience unforgettable!
      </Title>
      <Button type="primary" onClick={handleReserveTableClick}>
        Reserve a table
      </Button>
    </Space>
  );
};
