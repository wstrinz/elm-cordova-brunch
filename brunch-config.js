module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!app)/,
        'app.js': /^app/
      }
    },
    stylesheets: {joinTo: 'app.css'}
  },

  plugins: {
    babel: {presets: ['es2015']},
    elmBrunch: {
      mainModules: ['Main.elm'],
      outputFile: 'elm.js',
      makeParameters: ['--warn']
    }
  },

  paths: {
    public: 'cordova/www',
    watched: ["css", "js", "elm", "app", "Main.elm"]
  }
};
