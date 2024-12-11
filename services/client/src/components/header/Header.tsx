import React from "react";
import { SearchBar } from "./SearchBar";
import { Breadcrumbs } from "./Breadcrumbs";
import { UserInfo } from "./UserInfo";

interface LayoutProps {
  crumbs: { label: string; to: string }[];
}

export const Header: React.FC<LayoutProps> = ({ crumbs }) => {
  return (
    <header className="flex items-center justify-between pb-2 bg-white shadow-sm border-b">
      <Breadcrumbs crumbs={crumbs} />
      <SearchBar />
      <UserInfo />
    </header>
  );
};
