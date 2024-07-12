import SidebarPanelLayout from "@/components/sidebar-panel/sidebar-panel-layout";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarPanelLayout>
      <div className="dark:bg-[#161D26]">{children}</div>
    </SidebarPanelLayout>
  );
}
