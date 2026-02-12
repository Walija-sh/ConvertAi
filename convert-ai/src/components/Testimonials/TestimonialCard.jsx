const TestimonialCard = ({ name, role, text, image, bgColor }) => {
     const bgMap = {
    "pastel-2": "bg-linear-180 from-pastel-2/0 to-pastel-2",
    "pastel-3": "bg-linear-180 from-pastel-3/0 to-pastel-3",
    "pastel-4": "bg-linear-180 from-pastel-4/0 to-pastel-4",
    "pastel-5": "bg-linear-180 from-pastel-5/0 to-pastel-5",
    "pastel-6": "bg-linear-180 from-pastel-6/0 to-pastel-6",
  };

  const bgClass = bgMap[bgColor] || "bg-white";
  return (
    <article
      className={`border overflow-hidden border-gray-10/20 rounded-2xl grid gap-5 p-6 text-black-2 ${bgClass}`}
      
    >
      {/* top */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 overflow-hidden rounded-full">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>

        <div className="grid gap-1">
          <p className="text-[16px] lg:text-[17px] xl:text-[18px]">{name}</p>
          <p className="text-[14px] lg:text-[15px] xl:text-[16px]">{role}</p>
        </div>
      </div>

      {/* content */}
      <p dangerouslySetInnerHTML={{
    __html: text,
  }} className="text-[16px] italic lg:text-[17px] xl:text-[18px]">
        
      </p>
    </article>
  );
};

export default TestimonialCard;
