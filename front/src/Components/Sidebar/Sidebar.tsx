"use client";

import { useState } from "react";
import styles from "./Sidebar.module.css";
import Link from "next/link";

const Sidebar = () => {
  const modulesInfo = [
    {
      href: "/Calculator",
      src: "/calcIcon.png",
      alt: "Модуль-калькулятор",
      title: "Калькулятор",
    },
    {
      href: "/CurrencyConvertor",
      src: "/convertIcon.png",
      alt: "Модуль по конвертации валюты",
      title: "Конвертация валют",
    },
  ];
  const [open, setOpen] = useState(true);
  const [currentModuleName, setCurrentModuleName] = useState(
    modulesInfo[0].title
  );

  return (
    <div className={open ? styles.main__wrapper : styles.main__closeWrapper}>
      <div className={open ? styles.wrapper : styles.closeWrapper}>
        <div className={styles.sidebar}>
          {open && (
            <>
              <h2>{currentModuleName}</h2>
              <span className={styles.selector}>Выбери нужное приложение</span>
              <div className={styles.module__grid}>
                {modulesInfo.map((module) => (
                  <Link
                    href={module.href}
                    key={module.href}
                    onClick={() => setCurrentModuleName(module.title)}
                  >
                    <img
                      src={module.src}
                      alt={module.alt}
                      title={module.title}
                    />
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
        <button
          className={open ? styles.toggleBtn : styles.closeToggleBtn}
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          {open ? "<" : ">"}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
