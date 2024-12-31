import { faqs } from "../faqs";
import Accordion from "./Accordion";

function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

export default App;
