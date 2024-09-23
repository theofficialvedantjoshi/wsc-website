/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route } from '@solidjs/router';
import './index.css';
import App from './App';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import Events from './pages/Events';
import { animate, scroll } from "motion";
import Collabs from './pages/Collabs';
import Team from './pages/Team';



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
    <Route path="/contact" component={Contact} />
    <Route path="/blogs" component={Blogs} />
    <Route path="/collabs" component={Collabs} />
    <Route path="/team" component={Team} />
  </Router>
), root);

