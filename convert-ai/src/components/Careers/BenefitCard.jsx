const BenefitCard = ({ icon: Icon, title, desc }) => {
  return (
    <article className="grid gap-4 p-6 w-full max-w-[300px] rounded-xl bg-linear-180 from-white-2 to-white-2/0 text-black-2">
      <div className="flex items-center gap-3">
        <Icon className="text-primary text-xl" />
        <h6 className="text-xl font-medium">{title}</h6>
      </div>

      <p className="text-[16px] lg:text-[17px] xl:text-[18px]">
        {desc}
      </p>
    </article>
  );
};

export default BenefitCard;
