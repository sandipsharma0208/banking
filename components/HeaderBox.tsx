import React from "react";
// import type {HeaderBoxProps} from "@types"

const HeaderBox = ({
  type = "title",
  title,
  subtext,
  user,
}: HeaderBoxProps) => {
  return (
    <div className="header-box">
      <h1 className="header-box-title">
        {title}
        {type === "greeting" && (
          <span className="text-bankGradient">&nbsp;{user}</span>
        )}
      </h1>
      <p>{subtext}</p>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
    </div>
  );
};

export default HeaderBox;
