"use client";
import Image from "next/image";
import GroupsIcon from "@mui/icons-material/Groups";
import SearchAppBar from "../components/searchbar";
import RelationTree from "@/components/relationTree";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      <header className="flex flex-col w-10/12 m-10">
        <div className="flex flex-row mb-3">
          <GroupsIcon className="mr-5 ml-5" />
          <div className="text-2xl">保戶關係查詢</div>
        </div>
        <hr className="w-screen border-solid border-5" />
        <SearchAppBar />
      </header>
      <RelationTree />
    </main>
  );
}
