/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route } from '@solidjs/router';
import './index.css';
import App from './App';
import Blogs from './pages/Blogs';
import Events from './pages/Events';
import { animate, scroll } from "motion";
import Collabs from './pages/Collabs';
import Team from './pages/Team';
import Alumni from './pages/Alumni';
import Default from './pages/Default';
import Report from './pages/Report';

document.querySelectorAll("section > img").forEach((item) => {
  scroll(animate(item, { opacity: [0, 1, 1, 0] }), {
    target: item,
    offset: ["start end", "end end", "start start", "end start"]
  });
});

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}
render(() => (
  <Router>
    <Route path="/" component={App} />
    <Route path="/events" component={Events} />
    <Route path="/blogs" component={Blogs} />
    <Route path="/quantreport" component={Report} />
    <Route path="/collabs" component={Collabs} />
    <Route path="/team" component={Team} />
    <Route path="/alumni" component={Alumni} />
    <Route path="*" component={Default} />
  </Router>
), root);

