import { useState } from "react";
import AccordionItem from "./AccordionItem";

export default function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((item, i) => (
        <AccordionItem
          onOpen={setCurOpen}
          curOpen={curOpen}
          item={item}
          number={i}
          key={i}
        />
      ))}
    </div>
  );
}
