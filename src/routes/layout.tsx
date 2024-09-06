import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler, DocumentHead } from "@builder.io/qwik-city";
import Footer from "~/components/footer";

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
    <div class="h-[100dvh] w-screen bg-indigo-50">
      <div class="mx-auto flex h-full max-w-[660px] flex-col bg-white text-center">
        <div class="flex-grow">
          <Slot />
        </div>
        <Footer />
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
