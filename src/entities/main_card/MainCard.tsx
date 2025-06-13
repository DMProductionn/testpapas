import { Link } from 'react-router-dom';

type CardProps = {
  id: number;
  title: string;
  desc: string;
  img: string;
  link: string;
};

export const MainCard: React.FC<CardProps> = ({ img, title, desc, link }) => {
  return (
    <Link
      to={`/method${link}`}
      className="max-w-[385px] w-full rounded-[16px] min-h-[180px] overflow-hidden relative p-[16px] pb-0 inline-block bg-[linear-gradient(90deg,#110033_0%,#33254E_100%)]">
      <p className="text-[28px] font-[500] mb-[10px]">{title}</p>
      <p className="text-[15px] max-w-[235px] text-grayText">{desc}</p>
      <img
        className={`${
          img === '/wave.webp'
            ? 'w-[350px] h-[175px] -right-[190px] -bottom-[45px]'
            : 'w-[185px] h-[185px] -right-[45px] -bottom-[55px]'
        } absolute`}
        src={img}
        alt="image"
      />
    </Link>
  );
};
