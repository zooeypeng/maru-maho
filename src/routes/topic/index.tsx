import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <p>好的</p>

      <p>接下來請選擇你想要索取的指引</p>

      <button>我不知道問題是什麼</button>
      <button>困境中想要靈光乍現</button>
      <button>Coming Soon</button>

      <Link href="/pick">下一步</Link>
    </>
  );
});
