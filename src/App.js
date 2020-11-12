import "./App.css";
import { Container } from "react-bootstrap";

import UserList from "./components/user/UserList";

const App = () => {
  return (
    <Container fluid>
      My React Apollo App <UserList />
    </Container>
  );
};

export default App;
