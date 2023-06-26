module.exports = {
  globDirectory: "build/",
  globPatterns: ["**/*.{json,ico,html,png,txt,css,js}"],
  swDest: "build/sw.js",
  swSrc: "src/sw-template.js", //generateSW NO FUNCIONA CON ESTA PROPIEDAD
//   ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
};
