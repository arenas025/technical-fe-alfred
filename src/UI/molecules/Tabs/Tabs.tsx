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
    <div className="flex justify-between w-[95%] px-4 py-2 rounded-lg  bg-[#3F495F]">
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
