import React from "react";
import { Navbar } from "./components/NavBar";
import { Container } from "./components/styled/container";
import { GlobalStyle } from "./components/styled/GlobalStyles";
import { Table } from "./components/Table";
import { TypeContext, useCurrentType } from "./context/typeContext";
const App = (): JSX.Element => {
  const { type, setType } = useCurrentType();
  return (
    <TypeContext.Provider value={{ type, setType }}>
      <Container>
        <GlobalStyle />
        <Navbar />
        <Table type={type} />
      </Container>
    </TypeContext.Provider>
  );
};

export default App;
