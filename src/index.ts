import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  // const name = 444;
  const number = 444;
  greetUser(number);
});
