import AccordionItem from "./AccordionItem";

export default function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((item, i) => (
        <AccordionItem item={item} number={i} key={i} />
      ))}
    </div>
  );
}
