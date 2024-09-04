import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <p>Please choose your topic</p>
      <Link href="/meditation">下一步</Link>
    </div>
  );
});
