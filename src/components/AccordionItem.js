export default function AccordionItem({ item, number, curOpen, onOpen }) {
  function handleToggle(isOpen) {
    if (isOpen) onOpen(null);
    if (!isOpen) onOpen(number);
  }
  const isOpen = curOpen === number ? true : false;
  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={() => handleToggle(isOpen)}
    >
      <p className="number">{number < 10 ? `0${number + 1}` : number + 1}</p>
      <p className="title">{item.title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{item.text}</div>}
    </div>
  );
}
