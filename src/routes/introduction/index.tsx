import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <p>Please introduce yourself</p>
      <Link href="/topic">下一步</Link>
    </div>
  );
});
