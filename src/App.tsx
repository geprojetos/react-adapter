import "./styles.css";
import { dateAdapter } from "./adapters/dateAdapter";
import { currencyAdapter } from "./adapters/currencyAdapter";

export default function App() {
  return (
    <div className="App">
      <h5>Adapter Date BR DD/MM/YYYY</h5>
      <p>{dateAdapter.formatBarBR(new Date())}</p>
      <p>{dateAdapter.formatHypenBR(new Date())}</p>

      <h5>Adapter Date USA MM/DD/YYYY</h5>
      <p>{dateAdapter.formatBarUSA(new Date(1995, 11, 17))}</p>
      <p>{dateAdapter.formatHypenUSA(new Date(1995, 11, 17))}</p>

      <h5>Adapter Currency BR</h5>
      <p>{currencyAdapter.formatBR(7001.01)}</p>

      <h5>Adapter Currency USA</h5>
      <p>{currencyAdapter.formatUSA(7001.01)}</p>
    </div>
  );
}
