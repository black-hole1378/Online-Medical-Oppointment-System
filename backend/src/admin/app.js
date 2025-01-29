import favicon from "./extensions/favicon.png";

const config = {
  locales: ['en'],
  translations: {
    en: {
      "Auth.form.welcome.title": "Welcome Back!",
      "Auth.form.welcome.subtitle": "Easily manage doctor appointments",
    },
  },
  head: {
    favicon: favicon
  }
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
