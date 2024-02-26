import { Flex } from "@chakra-ui/react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router";

function App() {
  return (
    <Flex direction={{ sm: "column", md: "column", lg: "row" }}>
      <Routes>
        <Route path="/" index element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Sidebar />
    </Flex>
  );
}

export default App;
