// 404.js

import Link from "next/link";

export default function FourOhFour() {
  return (
    <>
      <h1>Страница не найдена.</h1>

      <Link href="/">
        <button>Go back home</button>
      </Link>
    </>
  );
}
