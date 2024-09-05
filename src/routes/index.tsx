import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <p>歡迎來到小圈圈大神廟</p>

      <p>有人曾經這麼說過：</p>

      <p>
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

      <p>或許，你也是眾神之一。</p>

      <p>深吸一口氣，</p>

      <Link href="/introduction">準備開始</Link>
    </>
  );
});
