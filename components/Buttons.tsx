import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type ButtonType = {
  label?: string;
  iconsInput?: string;

  /** Style props */
  buttonsBackgroundColor?: CSSProperties["backgroundColor"];
  nextColor?: CSSProperties["color"];
};

const Button: NextPage<ButtonType> = ({
  label,
  buttonsBackgroundColor,
  iconsInput,
  nextColor,
}) => {
  const buttonsStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: buttonsBackgroundColor,
    };
  }, [buttonsBackgroundColor]);

  const nextStyle: CSSProperties = useMemo(() => {
    return {
      color: nextColor,
    };
  }, [nextColor]);

  return (
    <button
      className="cursor-pointer [border:none] py-5 px-6 bg-main-green-100 self-stretch rounded-lg flex flex-row items-center justify-center gap-[10px]"
      style={buttonsStyle}
    >
      <img
        className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
        alt=""
        src={iconsInput}
      />
      <div
        className="flex-1 relative text-base leading-[24px] font-semibold font-system-text-styles-h5-titles-button text-main-white-100 text-center"
        style={nextStyle}
      >
        {label}
      </div>
    </button>
  );
};

export default Button;
