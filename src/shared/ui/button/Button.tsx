import { PlusIcon } from "../../icons";

type ButtonProps = {
  full?: boolean
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ full = false, onClick }) => {
  return (
    <button onClick={onClick} className={`bg-[#2E273C] rounded-[32px] flex justify-center items-center hover:border hover:border-blue ${full ? 'w-full h-[105px]' : 'w-[180px] h-[180px]'}`}>
      <PlusIcon small={full} />
    </button>
  );
};
