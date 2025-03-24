// UI
import Tab from "@/UI/atoms/Tab/Tab";

const Tabs = ({
  setActiveTab,
  headers,
  activeTab,
}: {
  setActiveTab: (tab: string) => void;
  headers: string[];
  activeTab: string;
}) => {
  return (
    <div className="flex max-w-[1500px] justify-between w-full md:w-[95%] md:px-4 px-1 py-2 rounded-lg  bg-[#3F495F]">
      {headers.map((header) => (
        <Tab
          key={header}
          text={header}
          isActive={activeTab === header}
          onClick={() => setActiveTab(header)}
        />
      ))}
    </div>
  );
};

export default Tabs;
