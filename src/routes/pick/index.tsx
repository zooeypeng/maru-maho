import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <p>你的需求已經送出</p>

      <Link href="/result">請給我，我需要的指引</Link>
    </>
  );
});
