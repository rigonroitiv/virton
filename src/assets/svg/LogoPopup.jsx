import React from "react";

const LogoPopup = ({ width = 444, height = 444 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 1237 1237"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M530.922 905.495L700.231 1074.8C703.198 1077.77 703.198 1082.48 700.231 1085.28L550.82 1234.69C547.853 1237.65 543.14 1237.65 540.173 1234.69L368.77 1063.28C367.373 1061.89 366.675 1059.97 366.675 1058.05V915.445L197.367 746.136C194.399 743.169 194.399 738.456 197.367 735.489L346.777 586.078C349.744 583.111 354.457 583.111 357.424 586.078L528.827 757.481C530.224 758.878 530.922 760.798 530.922 762.718V905.321V905.495ZM705.816 331.417L536.507 162.109C533.54 159.141 533.54 154.429 536.507 151.461L685.918 2.22545C688.885 -0.741816 693.598 -0.741816 696.565 2.22545L867.968 173.629C869.365 175.025 870.063 176.945 870.063 178.865V321.468L1039.37 490.777C1042.34 493.744 1042.34 498.457 1039.37 501.249L889.961 650.66C886.994 653.627 882.281 653.627 879.314 650.66L707.911 479.082C706.514 477.686 705.642 475.766 705.642 473.846V331.243L705.816 331.417ZM331.417 530.922L162.109 700.231C159.141 703.198 154.429 703.198 151.461 700.231L2.22545 550.82C-0.741816 547.853 -0.741816 543.14 2.22545 540.173L173.629 368.77C175.025 367.373 176.945 366.675 178.865 366.675H321.468L490.777 197.367C493.744 194.399 498.457 194.399 501.249 197.367L650.66 346.777C653.627 349.744 653.627 354.457 650.66 357.424L479.257 528.827C477.86 530.224 475.94 530.922 474.02 530.922H331.417ZM905.495 705.816L1074.8 536.507C1077.77 533.54 1082.48 533.54 1085.28 536.507L1234.69 685.918C1237.65 688.885 1237.65 693.598 1234.69 696.565L1063.28 867.968C1061.89 869.365 1059.97 870.063 1058.05 870.063H915.445L746.136 1039.37C743.169 1042.34 738.456 1042.34 735.489 1039.37L586.078 889.961C583.111 886.994 583.111 882.281 586.078 879.314L757.481 707.911C758.878 706.514 760.798 705.816 762.718 705.816H905.321H905.495Z"
        fill="#c1ac40"
        fillOpacity={0.2}
      />
    </svg>
  );
};

export default LogoPopup;