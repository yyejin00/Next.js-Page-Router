import { ReactNode } from "react";
import Style from "./global-layout.module.css";
import Link from "next/link";
export default function GlobalLyout({ children }: { children: ReactNode }) {
  return (
    <div className={Style.container}>
      <header className={Style.header}>
        <Link href={"/"}>📚 One Bite Books</Link>
      </header>
      <main className={Style.main}>{children}</main>

      <footer className={Style.footer}>제작 yejin</footer>
    </div>
  );
}
