import type { Metadata } from "next";
import "../globals.css";
import CatInfo from "../components/CatInfo";

export const metadata: Metadata = {
  title: "Cat Tracker",
  description: "Generated by create next app",
};

type CatInfoLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    catId: string;
  }>;
};

export default async function CatInfoLayout({
  children,
  params,
}: CatInfoLayoutProps) {
  const { catId } = await params;
  return (
    <>
      <aside>
        <CatInfo catId={catId} />
      </aside>
      <section>{children}</section>
    </>
  );
}
