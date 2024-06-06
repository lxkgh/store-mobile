"use client";
import clsx from "clsx";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export interface TabBarItem {
  href: string;
  text: string;
  icon?: React.ReactNode;
}
export default function TabBar({
  tabBarItems,
  children,
}: Readonly<{
  tabBarItems: TabBarItem[];
  children: React.ReactNode;
}>) {
  const path = usePathname();
  const activeClassName = "text-white bg-blue-400";
  const defaultClass = "h-8 flex flex-1 justify-center items-center";
  const items = tabBarItems.map((item) => (
    <Link
      key={item.href}
      href={item.href}
      className={clsx(defaultClass, path === item.href && activeClassName)}
    >
      {item.icon} {item.text}
    </Link>
  ));
  return (
    <div className="bg-white shadow-md h-screen w-screen relative">
      <main className="" style={{ height: "calc(100vh - 2.25rem)" }}>
        {children}
      </main>
      <div className="fixed bottom-0 w-full flex justify-around bg-gray-200 pb-1 h-9">
        {items}
      </div>
    </div>
  );
}
