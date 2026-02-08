const FlipTeamCard = ({
  name,
  role,
  bio,
  image,
  link = "#"
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="h-[200px] w-[160px] lg:w-[240px] lg:h-[280px] shrink-0 rounded-2xl overflow-hidden cursor-pointer relative perspective-[1000px] group inline-block
      shadow-xl hover:shadow-[0.301094px_0.602187px_0.673266px_-0.833333px_rgba(255,85,0,0.25),1.14427px_2.28853px_2.55866px_-1.66667px_rgba(255,85,0,0.25),5px_10px_11.1803px_-2.5px_rgba(255,85,0,0.25)]"
    >
      {/* inner */}
      <div className="w-full h-full relative transition-all duration-300 ease-linear will-change-transform group-hover:-rotate-y-180 transform-3d">

        {/* FRONT */}
        <div
          className="absolute inset-0 backface-hidden bg-cover bg-top bg-no-repeat grid items-end"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="relative w-full">

            {/* blur mask */}
            <div className="absolute inset-0 backdrop-blur-[10px] bg-black/25
              [mask-image:linear-gradient(to_top,black_70%,transparent)]" />

            <div className="relative p-4 flex flex-col gap-1 text-white">
              <h6 className="text-xl font-medium">{name}</h6>
              <p className="text-[14px] lg:text-[15px] xl:text-[16px]">{role}</p>
            </div>
          </div>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 backface-hidden -rotate-y-180 p-5 text-[16px] lg:text-[18px] text-black-2 bg-linear-to-b from-white-2/20 to-white-2 border border-gray-4 rounded-2xl">
          <p>{bio}</p>
        </div>
      </div>
    </a>
  );
};

export default FlipTeamCard;
