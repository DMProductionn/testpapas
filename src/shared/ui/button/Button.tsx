import { PlusIcon } from "../../icons";

type ButtonProps = {
  full?: boolean
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ full = false, onClick }) => {
  return (
    <button onClick={onClick} className={`bg-[#2E273C] rounded-[32px] flex justify-center items-center hover:border hover:border-blue ${full ? 'w-full h-[105px] mt-[40px]' : 'w-[180px] h-[180px] mt-[115px]'}`}>
      <PlusIcon small={full} />
    </button>
  );
};
