import type { NextPage } from "next";
import OTPInput from "../components/o-t-p-input";
import Button from "../components/Buttons";

const EmailVerificationEmpty: NextPage = () => {
  return (
    <div className="relative bg-main-white-100 w-full h-[1024px] overflow-hidden text-left text-xs text-main-green-100 font-system-text-styles-h5-titles-button">
      <div className="absolute top-[0px] left-[0px] w-[1440px] h-[1024px] flex flex-row items-center justify-start">
        <div className="self-stretch flex flex-row items-center justify-start relative gap-[10px] mix-blend-normal">
          <div className="rounded-lg flex flex-row items-start justify-start z-[0]">
            <img
              className="relative w-[720px] h-[1024px] object-cover"
              alt=""
              src="/rectangle-1421@2x.png"
            />
          </div>
          <div className="absolute my-0 mx-[!important] top-[32px] left-[32px] rounded-lg box-border w-[656px] h-[960px] z-[1] border-[2px] border-solid border-main-white-100" />
        </div>
        <div className="self-stretch bg-main-white-100 w-[720px] flex flex-col items-start justify-between py-[120px] px-[110px] box-border">
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0"
              alt=""
              src="/icon-general.svg"
            />
            <div className="relative leading-[16px] font-medium">
              Previous Step
            </div>
          </div>
          <section className="self-stretch flex flex-col items-start justify-start gap-[60px] text-center text-13xl text-text-primary-black-100 font-system-text-styles-h5-titles-button">
            <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
              <h1 className="m-0 self-stretch relative text-inherit leading-[44px] font-semibold font-inherit">
                Email Verification
              </h1>
              <span className="self-stretch relative text-base leading-[24px] text-text-secondary-black-40">
                <span>{`Please, check your inbox for verification code sent to `}</span>
                <span className="font-semibold text-text-primary-black-100">
                  email@gmail.com
                </span>
              </span>
            </div>
            <form className="self-stretch flex flex-col items-start justify-start gap-[32px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <div className="self-stretch h-[70px] flex flex-row items-start justify-start gap-[16px]">
                  <OTPInput />
                  <OTPInput />
                  <OTPInput />
                  <OTPInput />
                  <OTPInput />
                  <OTPInput />
                </div>
                <div className="self-stretch flex flex-row items-center justify-end">
                  <a className="[text-decoration:none] flex flex-row items-center justify-end py-1.5 pr-0 pl-2.5">
                    <div className="relative text-sm leading-[20px] font-semibold font-system-text-styles-h5-titles-button text-main-green-100 text-left">
                      Resend Code
                    </div>
                  </a>
                </div>
              </div>
              <Button
                label="Verify"
                buttonsBackgroundColor="#e8e8e8"
                iconsInput="/icons-input.svg"
                nextColor="#a4a4a4"
              />
            </form>
          </section>
          <div className="self-stretch flex flex-col items-center justify-start gap-[36px] text-center text-sm text-text-primary-black-100">
            <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-main-stroke" />
            <div className="self-stretch flex flex-col items-center justify-center gap-[24px]">
              <span className="self-stretch relative leading-[20px]">
                Can’t find? Please check your spam folder
              </span>
              <a className="[text-decoration:none] self-stretch flex flex-row items-center justify-center gap-[16px] text-left text-xs text-main-green-100">
                <div className="flex flex-row items-center justify-center gap-[10px]">
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/icon-general1.svg"
                  />
                  <div className="relative leading-[16px] font-medium">
                    Terms of use
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center gap-[10px]">
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/icon-general1.svg"
                  />
                  <div className="relative leading-[16px] font-medium">
                    Privacy Policy
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerificationEmpty;
