import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  // const name = 444;
  const number = 4444;
  greetUser(number);

  const heading = document.querySelector('.h1');
  if (!heading) {
    return;
  }
  heading.textContent = 'dupa';
});
