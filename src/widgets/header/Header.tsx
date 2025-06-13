import { ArrowDownIcon } from '../../shared/icons';
import { InIcon } from '../../shared/icons/in/InIcon';
import { MailIcon } from '../../shared/icons/mail/MailIcon';
import { TelegramIcon } from '../../shared/icons/telegram/TelegramIcon';
import { Logo } from '../../shared/ui';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 w-full px-[16px] z-[2] flex justify-between items-center h-[90px] border-b border-[#110033]/30 backdrop-blur-md bg-white/10">
      <div className="flex gap-[130px]">
        <Logo />

        <ul className='flex items-center gap-[25px]'>
          <li>
            <button className='flex items-center gap-1'>
              Our services <ArrowDownIcon />
            </button>
          </li>
          <li>
            <p>Blog</p>
          </li>
          <li>
            <p>Contacts</p>
          </li>
        </ul>
      </div>
      <div className='flex items-center gap-[8px]'>
        <TelegramIcon />
        <InIcon />
        <MailIcon />
      </div>
    </header>
  );
};