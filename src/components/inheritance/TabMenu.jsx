import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

export default function TabMenu() {
  return (
    <Tabs aria-label="Tabs with underline" style="underline">
      <Tabs.Item active title="신탁 계약 조회" icon={HiUserCircle}>
        This is{" "}
        <span className="font-medium text-gray-800 dark:text-white">
          Profile tab's associated content
        </span>
        . Clicking another tab will toggle the visibility of this one for the
        next. The tab JavaScript swaps classes to control the content visibility
        and styling.
      </Tabs.Item>
      <Tabs.Item title="자산 조회" icon={HiClipboardList}>
        This is{" "}
        <span className="font-medium text-gray-800 dark:text-white">
          Contacts tab's associated content
        </span>
        . Clicking another tab will toggle the visibility of this one for the
        next. The tab JavaScript swaps classes to control the content visibility
        and styling.
      </Tabs.Item>
    </Tabs>
  );
}
