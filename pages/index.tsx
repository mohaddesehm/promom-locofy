import type { NextPage } from "next";
import Input from "../components/input";
import Button from "../components/Buttons";

const SignUpFilled: NextPage = () => {
  return (
    <div className="relative bg-main-white-100 w-full h-[1024px] overflow-hidden flex flex-row items-center justify-start gap-[10px] text-center text-13xl text-text-primary-black-100 font-system-text-styles-h5-titles-button md:h-auto md:flex-col md:items-start md:justify-start">
      <div className="self-stretch flex-1 flex flex-row items-center justify-start relative gap-[10px] mix-blend-normal md:flex-[unset] md:self-stretch">
        <div className="flex-1 rounded-lg flex flex-row items-start justify-start z-[0]">
          <img
            className="flex-1 relative max-w-full overflow-hidden h-[1024px] object-cover"
            alt=""
            src="/rectangle-142@2x.png"
          />
        </div>
        <div className="absolute my-0 mx-[!important] top-[32px] left-[32px] rounded-lg box-border w-[656px] h-[960px] z-[1] border-[2px] border-solid border-main-white-100" />
      </div>
      <div className="self-stretch flex-1 bg-main-white-100 flex flex-col items-center justify-between py-[120px] px-[110px] md:flex-[unset] md:self-stretch">
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[40px]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
              <h1 className="m-0 self-stretch relative text-inherit leading-[44px] font-semibold font-inherit">
                Sign Up
              </h1>
              <p className="m-0 self-stretch relative text-base leading-[24px] text-text-secondary-black-40">
                Welcome to ProMom! Please enter your email or phone number and
                create password for having account
              </p>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[32px] text-left text-sm">
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <Input
                  label="Email or phone number"
                  stateFilledHeight="unset"
                  passwordCursor="pointer"
                  textfiledFontFamily="Rubik"
                  textfiledFontSize="14px"
                />
                <Input
                  label="Password"
                  stateFilledHeight="67px"
                  passwordCursor="pointer"
                  textfiledFontFamily="Rubik"
                  textfiledFontSize="14px"
                />
                <Input
                  label="Confirm Password"
                  stateFilledHeight="unset"
                  passwordCursor="pointer"
                  textfiledFontFamily="Rubik"
                  textfiledFontSize="14px"
                />
                <div className="self-stretch hidden flex-row items-center justify-between">
                  <div className="flex flex-row items-center justify-start gap-[8px]">
                    <div className="relative w-6 h-6">
                      <div className="absolute h-[66.67%] top-[16.67%] bottom-[16.67%] left-[calc(50%_-_8px)] rounded-sm box-border w-4 border-[1px] border-solid border-main-stroke" />
                      <img
                        className="absolute h-1/4 top-[37.5%] bottom-[37.5%] left-[calc(50%_-_4px)] max-h-full w-[7px] hidden"
                        alt=""
                        src="/vector-13.svg"
                      />
                    </div>
                    <div className="relative leading-[20px]">Remember me</div>
                    <div className="hidden flex-row items-center justify-start gap-[16px]">
                      <div className="flex flex-row items-center justify-start gap-[8px]">
                        <div className="h-6 flex flex-row items-start justify-start">
                          <img
                            className="self-stretch relative max-h-full w-6 overflow-hidden shrink-0"
                            alt=""
                            src="/icon-general3.svg"
                          />
                          <img
                            className="self-stretch relative max-h-full w-6 overflow-hidden shrink-0"
                            alt=""
                            src="/icon-general3.svg"
                          />
                          <img
                            className="self-stretch relative max-h-full w-6 overflow-hidden shrink-0"
                            alt=""
                            src="/icon-general3.svg"
                          />
                          <img
                            className="self-stretch relative max-h-full w-6 overflow-hidden shrink-0"
                            alt=""
                            src="/icon-general3.svg"
                          />
                          <img
                            className="self-stretch relative max-h-full w-6 overflow-hidden shrink-0"
                            alt=""
                            src="/icon-general3.svg"
                          />
                        </div>
                        <div className="relative leading-[20px]">4.0</div>
                      </div>
                      <div className="rounded bg-main-green-10 hidden flex-row items-center justify-start py-1 px-2 gap-[10px]">
                        <div className="relative leading-[20px] font-medium">
                          138 reviews
                        </div>
                        <img
                          className="relative w-4 h-4 overflow-hidden shrink-0"
                          alt=""
                          src="/icon-general4.svg"
                        />
                      </div>
                    </div>
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/icon-general5.svg"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-center py-1.5 px-2.5 text-main-green-100">
                    <div className="relative leading-[20px] font-semibold">
                      View all Experts
                    </div>
                  </div>
                </div>
              </div>
              <Button label="Next" iconsInput="/icons-input.svg" />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-sm">
            <span className="self-stretch relative leading-[20px]">or</span>
            <button className="cursor-pointer py-5 px-3 bg-main-white-100 self-stretch rounded-lg flex flex-row items-center justify-center gap-[12px] border-[2px] border-solid border-main-stroke">
              <img
                className="relative w-6 h-6"
                alt=""
                src="/icons-input1.svg"
              />
              <div className="relative text-base leading-[24px] font-semibold font-system-text-styles-h5-titles-button text-text-primary-black-100 text-left">
                Sign in with Google
              </div>
            </button>
          </div>
        </div>
        <a className="[text-decoration:none] self-stretch flex flex-col items-center justify-start gap-[36px] text-sm text-[inherit]">
          <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-main-stroke" />
          <div className="self-stretch flex flex-col items-center justify-center gap-[24px]">
            <div className="self-stretch relative leading-[20px]">
              <span>
                <span>Already have an account?</span>
                <span className="font-semibold text-main-green-100">{` `}</span>
              </span>
              <span className="font-semibold text-main-green-100">
                <span>{`Sign in now `}</span>
              </span>
            </div>
            <div className="self-stretch flex flex-row items-center justify-center gap-[16px] text-left text-xs text-main-green-100">
              <a className="[text-decoration:none] flex flex-row items-center justify-center gap-[10px] text-[inherit]">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/icon-general.svg"
                />
                <div className="relative leading-[16px] font-medium">
                  Terms of use
                </div>
              </a>
              <a className="[text-decoration:none] flex flex-row items-center justify-center gap-[10px] text-[inherit]">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/icon-general.svg"
                />
                <div className="relative leading-[16px] font-medium">
                  Privacy Policy
                </div>
              </a>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default SignUpFilled;
