// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";
import Header from "./components/header";
import Footer from "./components/footer";
export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          {assets}
        </head>
        <body>
          <Header/>
          <div id="app">
            {children}
          </div>
          <Footer/>
          {scripts}
        </body>
      </html>
    )}
  />
));
