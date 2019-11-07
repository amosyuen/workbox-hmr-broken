Repro for `workbox-webpack-plugin@5.0.0-rc.0` breaking HMR.

1. Start dev server with:

   ```
   yarn start
   ```

1. Visit dev server at http://localhost:8080

1. Make a change in `main.js` e.g. change the title

1. Notice that it doesn't update

1. Do a hard refresh Ctrl+R, and it still doesn't refresh

1. If you change `workbox-webpack-plugin` to version `4.3.1`, it works fine
