import { ArrowDownIcon } from '../../shared/icons';
import { InIcon } from '../../shared/icons/in/InIcon';
import { MailIcon } from '../../shared/icons/mail/MailIcon';
import { TelegramIcon } from '../../shared/icons/telegram/TelegramIcon';
import { Logo } from '../../shared/ui';

export const Footer: React.FC = () => {
  return (
    <footer className="pt-[35px] pb-[45px] mt-[120px] bg-gradient-to-t from-[#110033] to-[#33254e]/20 shadow-[0_0_40px_35px_#10002E] h-full">
      <div className="max-w-[1207px] px-[16px] mx-auto flex flex-col justify-between">
        <div className="flex flex-col items-center gap-[30px] lg:items-start">
          <div className="flex flex-col gap-[70px] items-center lg:flex-row lg:gap-x-[150px]">
            <Logo />
            <ul className="flex flex-col lg:flex-row items-center gap-[25px] mb-[45px] lg:mb-0">
              <li className="text-[18px]">
                <button className="flex items-center gap-1">
                  Our services <ArrowDownIcon />
                </button>
              </li>
              <li className="text-[18px]">
                <p>Blog</p>
              </li>
              <li className="text-[18px]">
                <p>Contacts</p>
              </li>
            </ul>
          </div>
          <div className="flex gap-[8px] mb-[95px]">
            <TelegramIcon />
            <InIcon />
            <MailIcon />
          </div>
        </div>

        <div className="flex flex-col gap-y-[25px] justify-between items-center lg:items-start lg:flex-row">
          <p className="text-[15px] order-2 lg:order-1">© Testpapas 2025</p>
          <div className="flex gap-[32px] items-center lg:order-2">
            <p className="text-[15px]">Terms of Use</p>
            <p className="text-[15px]">Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
