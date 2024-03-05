import "./App.css";
import RandomColorPicker from "./assets/RandomColorPicker/RandomColorPicker";
import Container from "./assets/Container/Container";
import CurrencyConverter from "./assets/CurrencyConverter/CurrencyConverter";
import MyLocation from "./assets/MyLocation/MyLocation";
import BankAccount from "./assets/BankAccount/BankAccount";
import CryptoPrice from "./assets/CryptoPrice/CryptoPrice";

function App() {
  return (
    <>
      <Container appTitle={"Random Color Picker"}>
        <RandomColorPicker></RandomColorPicker>
      </Container>
      <Container appTitle={"Currency converter"}>
        <CurrencyConverter></CurrencyConverter>
      </Container>
      <Container appTitle={"My Location"}>
        <MyLocation></MyLocation>
      </Container>
      <Container appTitle={"Bank Account"}>
        <BankAccount></BankAccount>
      </Container>
      <Container appTitle={"Crypto Price"}>
        <CryptoPrice></CryptoPrice>
      </Container>
    </>
  );
}

export default App;
