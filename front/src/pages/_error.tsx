// 404.js

import Link from "next/link";

export default function FourOhFour() {
  return (
    <>
      <h1>Произошла ошибка загрузки.</h1>

      <Link href="/">
        <button>Go back home</button>
      </Link>
    </>
  );
}
