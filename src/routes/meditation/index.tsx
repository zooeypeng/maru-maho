import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <p>clearify your question</p>
      <Link href="/pick">下一步</Link>
    </div>
  );
});
