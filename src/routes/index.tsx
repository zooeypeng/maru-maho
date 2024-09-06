import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="flex h-full flex-wrap items-end bg-[url('/index-bg.png')] bg-cover bg-center text-white">
      <div class="w-full flex-grow mt-[300px]">
        <h4 class="text-base leading-loose mb-8">歡迎來到小圈圈大神廟</h4>

        <p class="text-base leading-loose">有人曾經這麼說過：</p>

        <p class="text-base leading-loose">
          其實你想要的答案，一直都在身邊。
          <br />
          它隱藏在你生活中的每個小角落，
          <br />
          存在於與你交談的每一個瞬間，
          <br />
          因為那個真正能打動你的答案，
          <br />
          其實一直藏在你心裡。
        </p>

        <p class="text-base leading-loose">或許，你也是眾神之一。</p>

        <p class="text-base leading-loose">深吸一口氣，</p>
      </div>

      <div class="mb-12 w-full">
        <Link class="" href="/introduction">
          準備開始
        </Link>
      </div>
    </div>
  );
});
