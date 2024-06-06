import MainNav from "@/components/main-nav"
import dynamic from "next/dynamic";
const DynamicMainNav = dynamic(() => import("@/components/main-nav"), {
  ssr: false,
});
export default function shopLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div className="relative h-screen bg-slate-50">
      {children}
      <DynamicMainNav className="fixed bottom-0 left-0 right-0" />
    </div>
  );
}