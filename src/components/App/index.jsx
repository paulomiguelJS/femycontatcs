import { ThemeProvider } from "styled-components";

import GlobalStyles from "../../assets/styles/global";
import defaultTheme from "../../assets/styles/themes/default";
import Header from "../Header";

import { Container } from "./styles";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <h1>MyContacts</h1>
        <Container>
          <Header />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
