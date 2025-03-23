import { cn } from "@/lib/utils/utils";
import Image from "next/image";

interface AirportCardProps {
  onClick: () => void;
  children: React.ReactNode;
  hasIcon: boolean;
  className?: string;
  classNameContainerChildren?: string;
}

const AirportCard = ({
  hasIcon,
  onClick,
  children,
  className,
  classNameContainerChildren,
}: AirportCardProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "  hover:scale-105 transition-all duration-300 cursor-pointer  md:h-[235px]  md:max-w-[1500px] w-[95%] md:border-white md:border-[1px] md:rounded-[8px] flex items-center justify-center  ",
        className
      )}
    >
      <div
        className={cn(
          " p-2 md:justify-between md:gap-9 md:w-[500px] lg:w-[90%] items-center md:items-start bg-linear-to-r flex md:p-5 lg:pl-10 flex-row md:flex-col justify-between h-full w-full from-[#3F495F] border-white md:border-none border-[1px] rounded-[8px] to-[#0E1934]",
          classNameContainerChildren
        )}
      >
        {children}
      </div>
      <div
        id="help"
        className=" md:block md:h-full md:w-full md:rounded-r-[8px] bg-[url('/image-card.webp')] bg-cover bg-center bg-no-repeat relative"
      >
        <div className="bg-[#0E1934] md:rounded-r-[8px] z-10 opacity-90 w-full h-full absolute top-0 left-0" />
        {hasIcon && (
          <Image
            src="/airplane-icon.svg"
            alt="airport"
            width={55}
            height={55}
            className="absolute top-5 z-10 right-5"
          />
        )}
      </div>
    </div>
  );
};

export default AirportCard;
