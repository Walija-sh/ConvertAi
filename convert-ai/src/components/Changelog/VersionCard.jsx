const VersionCard = ({ version, date, title, image, paragraphs }) => {
  return (
    <article className="flex flex-col gap-8 lg:flex-row items-start relative">

      {/* header */}
      <div className="flex items-center lg:flex-col lg:w-fit gap-4 text-[14px] lg:text-[15px] xl:text-[16px] lg:sticky lg:top-[100px]">
        <p className="text-primary px-5 py-[7px] border border-gray-10/20 bg-pastel-3 rounded-lg whitespace-nowrap">
          {version}
        </p>
        <p className="text-black-2 lg:whitespace-nowrap">{date}</p>
      </div>

      {/* vertical line */}
      <div className="hidden lg:block h-full w-[2px] bg-pastel-3 rounded-lg"></div>

      {/* content */}
      <div className="grid gap-5 lg:gap-8 text-[16px] lg:text-[17px] xl:text-[18px] text-black-2">
        <h3 className="text-[22px] font-medium lg:text-[26px] xl:text-[30px]">
          {title}
        </h3>

        {image && (
          <div className="rounded-xl overflow-hidden aspect-[2.5]">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover object-top"
            />
          </div>
        )}

        <div className="grid gap-4">
          {paragraphs.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
      </div>
    </article>
  );
};

export default VersionCard;
