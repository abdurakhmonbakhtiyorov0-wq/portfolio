import React from "react";

function Project({
  title,
  tags,
  level,
  diff,
  image,
  styles_bg,
  styles_border,
  styles_text,
}) {
  return (
    <div className="overflow-hidden w-148 rounded-xl flex  flex-col  mt-10 cursor-pointer border border-[#d6d6d6]">
      <div className="overflow-hidden  h-96.75">
        <img
          className="object-cover h-96.75 w-full transition duration-300 hover:scale-105"
          src={image}
          alt=""
        />
      </div>{" "}
      <div className="py-6 px-8">
        <h1 className="text-2xl text-start font-medium title">{title}</h1>
        <div className="flex justify-between mt-4 items-center">
          {" "}
          <div className="uppercase flex gap-2 font-medium">
            <h3 className="text-yellow-500 ">{tags[0]}</h3>
            <h3 className="text-[#6abecd]">{tags[1]}</h3>
          </div>
          <div className={`border rounded-sm  flex  ${styles_border}`}>
            <p
              className={`${styles_bg} px-2 -ml-px text-white
                       font-medium rounded-l-sm`}
            >
              {diff}
            </p>
            <p className={`text-center px-2 ${styles_text}`}>{level}</p>
          </div>
        </div>{" "}
        <p className="text-gray-600 hover:underline">
          Click on the panel for more details
        </p>
      </div>
    </div>
  );
}

export default Project;
