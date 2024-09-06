import { component$ } from "@builder.io/qwik";

export default component$(() => {
  const currentYear = new Date().getFullYear();
  return (
    <footer class="bg-blue-950 py-2 font-maven text-sm text-white">
      &copy; {currentYear} mumukuma
    </footer>
  );
});
