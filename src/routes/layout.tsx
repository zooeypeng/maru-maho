import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler, DocumentHead } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <div>
      <div class="container mx-auto text-center">
        <Slot />
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