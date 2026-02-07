import AccordionItem from "./AccordionItem";

const Accordion = ({ items }) => {
  return (
    <div className="max-w-[620px] mx-auto grid gap-2">
      {items.map((item, idx) => (
        <AccordionItem key={idx} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
