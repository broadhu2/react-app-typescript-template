// https://create-react-app.dev/docs/proxying-api-requests-in-development/#configuring-the-proxy-manually
// https://github.com/chimurai/http-proxy-middleware/blob/master/recipes/proxy-events.md

const { createProxyMiddleware } = require("http-proxy-middleware");

const PokemonProxyOptions = {
  alias: "/PokemonProxy",
  target: "https://pokeapi.co/api/v2/",
};

const proxies = [PokemonProxyOptions];

// eslint-disable-next-line func-names
module.exports = function (app) {
  proxies.forEach((proxy) => {
    const { alias, target, ...rest } = proxy;

    app.use(
      alias,
      createProxyMiddleware({
        target,
        changeOrigin: true,
        pathRewrite: { [`^${alias}`]: "" },
        ...rest,
      })
    );
  });
};
