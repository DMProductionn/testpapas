type PlusProps = {
  small?: boolean;
};

export const PlusIcon: React.FC<PlusProps> = ({ small = false }) => {
  return (
    <svg
      width={small ? '108' : '162'}
      height={small ? '108' : '159'}
      viewBox="0 0 162 159"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_149_1799)">
        <path
          d="M81.0003 29.1667V124.833M33.167 77.0001H128.834"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_149_1799"
          x="0.666992"
          y="0.666748"
          width="160.667"
          height="160.667"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="15" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.45 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_149_1799" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_149_1799"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
