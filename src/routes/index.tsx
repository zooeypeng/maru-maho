import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="h-screen bg-amber-100">
      <div class="container mx-auto text-center">
        這裡是小圈圈大神廟
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
