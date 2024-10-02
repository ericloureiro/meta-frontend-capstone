import "./App.css";
import { Image, Typography } from "antd";
import logo from "./assets/logo.png";
import { Route, Routes } from "react-router-dom";
import { HomePage, ReservationPage, ReservationSuccessfulPage } from "./pages";

const { Title, Text } = Typography;

function App() {
  return (
    <div className="app">
      <header>
        <Image src={logo} width="128px" preview={false} />
        <Title level={2}>Little Lemon</Title>
      </header>
      <main>
        <Routes>
          <Route path="*" index element={<HomePage />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route
            path="/reservation/successful"
            element={<ReservationSuccessfulPage />}
          />
        </Routes>
      </main>
      <footer>
        <Text>2024 © Copyright</Text>
      </footer>
    </div>
  );
}

export default App;
