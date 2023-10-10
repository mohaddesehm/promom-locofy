import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type InputType = {
  label?: string;

  /** Style props */
  stateFilledHeight?: CSSProperties["height"];
  passwordCursor?: CSSProperties["cursor"];
  textfiledFontFamily?: CSSProperties["fontFamily"];
  textfiledFontSize?: CSSProperties["fontSize"];
};

const Input: NextPage<InputType> = ({
  label,
  stateFilledHeight,
  passwordCursor,
  textfiledFontFamily,
  textfiledFontSize,
}) => {
  const stateFilledStyle: CSSProperties = useMemo(() => {
    return {
      height: stateFilledHeight,
    };
  }, [stateFilledHeight]);

  const passwordStyle: CSSProperties = useMemo(() => {
    return {
      cursor: passwordCursor,
    };
  }, [passwordCursor]);

  const textfiledStyle: CSSProperties = useMemo(() => {
    return {
      fontFamily: textfiledFontFamily,
      fontSize: textfiledFontSize,
    };
  }, [textfiledFontFamily, textfiledFontSize]);

  return (
    <div
      className="flex flex-col items-start justify-start gap-[4px] text-left text-xs text-text-primary-black-100 font-system-text-styles-h5-titles-button self-stretch"
      style={stateFilledStyle}
    >
      <div
        className="relative leading-[16px] font-medium"
        style={passwordStyle}
      >
        {label}
      </div>
      <div
        className="self-stretch rounded-lg bg-main-green-3 box-border h-[54px] flex flex-row items-center justify-between py-3 px-4 text-sm border-[1px] border-solid border-main-stroke"
        style={textfiledStyle}
      >
        <div className="hidden flex-row items-center justify-start gap-[15px]">
          <div className="relative leading-[20px] font-medium">+1</div>
          <div className="relative box-border w-px h-[41px] border-r-[1px] border-solid border-main-stroke" />
        </div>
        <div className="flex-1 flex flex-row items-center justify-between">
          <div className="flex-1 relative leading-[20px]">Password1</div>
        </div>
        <img
          className="relative rounded-8xs w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/icons-input21.svg"
        />
      </div>
    </div>
  );
};

export default Input;
