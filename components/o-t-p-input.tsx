import type { NextPage } from "next";

const OTPInput: NextPage = () => {
  return (
    <input
      className="[border:none] bg-main-green-3 rounded-lg w-[70px] h-[70px] flex flex-col items-start justify-start"
      type="text"
    />
  );
};

export default OTPInput;
