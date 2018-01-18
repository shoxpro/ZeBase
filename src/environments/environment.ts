// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyA8B3HAFBb8l5glcL8UkSPV7IGXSrjxlxQ',
    authDomain: 'zebase-project.firebaseapp.com',
    databaseURL: 'https://zebase-project.firebaseio.com',
    projectId: 'zebase-project',
    storageBucket: 'zebase-project.appspot.com',
    messagingSenderId: '535175579244'
  }
};
