
export const SubmitButtons: React.FC = () => {
  return (
    <div className="flex gap-[16px] w-full">
      <button type="submit" className="w-full h-[55px] flex justify-center items-center font-[500] text-white bg-blue rounded-[40px]">SAVE & CLOSE</button>
      <button type="submit" className="w-full h-[55px] flex justify-center border border-blue items-center font-[500] text-blue bg-transparent rounded-[40px]">SAVE & COPY TO NEW</button>
    </div>
  );
};
