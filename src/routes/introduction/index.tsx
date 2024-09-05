import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <p>請閉上眼睛，仔細思考</p>

      <p>
        我今天穿了什麼衣服？
        <br />
        我的皮膚狀況如何？
        <br />
        我的名字是什麼？
        <br />
        我在哪裡？
        <br />
        我是誰？
      </p>

      <p>
        再深深吸一口氣，
        <br />
        試著用兩倍的速度，緩緩地吐出。
      </p>

      <Link href="/topic">我準備好了</Link>
    </>
  );
});
