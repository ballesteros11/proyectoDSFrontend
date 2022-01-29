// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  authUrl:"http://localhost:8080/AUTH",
  reservaUrl:"http://localhost:8080/api/reservas",
  countriesUrl:"https://www.universal-tutorial.com/api",
  authCountryToken:"0OvE90urYhvhKm27jhhfFNejmOKC6tQsq-TCNuN4NqrCNdqtJ8ewbNRMRyt9TkGVS9Y",
  houseUrl:"http://localhost:8080/api/casas",
  firebaseConfig:{
    apiKey: "AIzaSyCApSyu__12OYjJDrwIgyhKkeKWpemC2PE",
    authDomain: "retobackend-1f6d8.firebaseapp.com",
    projectId: "retobackend-1f6d8",
    storageBucket: "retobackend-1f6d8.appspot.com",
    messagingSenderId: "280768521935",
    appId: "1:280768521935:web:9210d30156ec9d90c2f9ba",
    measurementId: "G-S5X4K3HX9N"
  },
  calificacionUrl:'http://localhost:8080/api/calificaciones',
  userUrl:'http://localhost:8080/api/usuariopublico'
};

