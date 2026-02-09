import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ title, desc, author, date, image, authorImg,link }) => {
  return (
    <Link to={link} className="block">
      <article className="p-6 grid gap-7 border-[1px] border-gray-2/20 rounded-xl blog-shadow transition-all duration-100 ease-in hover:cursor-pointer group bg-linear-180 from-pastel-3 to-pastel-3/40">

        <div className="border-[1px] border-gray-2/20 overflow-hidden rounded-[6px] aspect-[2.08929]">
          <img
            src={image}
            className="w-full h-full object-cover transition-all duration-100 ease-in group-hover:scale-105"
            alt=""
          />
        </div>

        <div className="grid gap-8 text-black-2">
          <div className="grid gap-3">
            <h4 className="text-xl lg:text-[22px] xl:text-[24px] font-medium">
              {title}
            </h4>
            <p className="text-[16px] lg:text-[17px] xl:text-[18px]">
              {desc}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[14px] lg:text-[15px] xl:text-[16px]">
            <div className="grid gap-3">
              <p className="opacity-70">Written by</p>
              <div className="flex gap-3 items-center">
                <img
                  src={authorImg}
                  className="w-6 h-6 object-cover rounded-full"
                  alt=""
                />
                <p>{author}</p>
              </div>
            </div>

            <div className="grid gap-3 text-end">
              <p className="opacity-70">Published on</p>
              <p>{date}</p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
