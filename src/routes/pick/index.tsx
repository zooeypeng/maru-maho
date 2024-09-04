import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <p>the order has sent, then get your package now.</p>
      <Link href="/result">下一步</Link>
    </div>
  );
});
