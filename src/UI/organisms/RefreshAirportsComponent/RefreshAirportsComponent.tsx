// TP
import { useRouter } from "next/navigation";

// BL
import useAppStore from "@/lib/store/appStore";
import { useGetAirports } from "@/lib/hooks/useGetAirports";

// UI
import Button from "@/UI/atoms/Button/Button";

interface RefreshAirportsComponentProps {
  text: string;
  isCleaningFilter?: boolean;
}

const RefreshAirportsComponent = ({
  text,
  isCleaningFilter = false,
}: RefreshAirportsComponentProps) => {
  const { getPaginatedAirportsWithSearch } = useGetAirports();
  const setSearchFilterApplied = useAppStore(
    (state) => state.setSearchFilterApplied
  );
  const router = useRouter();
  return (
    <div className=" h-screen  gap-3 flex flex-col items-center justify-center text-2xl font-bold font-inter">
      <p className=" text-center text-white">{text}</p>
      <Button
        variant="search"
        className="!w-fit"
        onClick={() => {
          if (isCleaningFilter) {
            setSearchFilterApplied(false);
            getPaginatedAirportsWithSearch(0, "");
            return;
          }
          router.push("/");
        }}
        text="Volver a la pagina principal"
      />
    </div>
  );
};

export default RefreshAirportsComponent;
