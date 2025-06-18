// src/main.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "@fortawesome/fontawesome-free/css/all.min.css";

import App from './App.svelte';

const app = new App({
  target: document.body,
});

export default app;
