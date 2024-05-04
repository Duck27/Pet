import Sidebar from "../Sidebar/Sidebar";
import styles from "./MainLayout.module.css";
import React, { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode; //
};

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className={styles.background}>
      <Sidebar />
      {children}
    </div>
  );
}

export default MainLayout;
