module.exports = {
  content: [
    './*.html', // scans ALL HTML files in the root folder
  ],

  safelist: [
    {
      pattern: /^[a-z\d-]+\[.*?\]$/, // supports all arbitrary classes
    },
  ],

  theme: {
    extend: {},
  },
  plugins: [],
}
