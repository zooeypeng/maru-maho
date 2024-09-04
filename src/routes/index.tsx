import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="h-screen bg-amber-100">
      <div class="container mx-auto text-center">
        <p>這裡是小圈圈大神廟</p>
        <Link href="/introduction">下一步</Link>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "小圈圈大魔法 is typing...",
  meta: [
    {
      name: "MaruMahō",
      content: "まるまほう",
    },
  ],
};
