import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  // static async getInitialProps (ctx) {
  //   console.log("getInitialProps _document")

  //   const initialProps = await Document.getInitialProps(ctx)
  //   return { ...initialProps }
  // }

  render() {
    return (
      <html>
        <Head>
          {/* React Resux Toastr  https://github.com/diegoddox/react-redux-toastr#readme */}
          {/* <link href="https://diegoddox.github.io/react-redux-toastr/7.1/react-redux-toastr.min.css" rel="stylesheet" type="text/css" /> */}
          <link rel="stylesheet" href="/static/css/redux_toaster.css" />
          {/* <script src="http://d3js.org/d3.v4.min.js"></script> */}
          <script src="/static/vendor/d3/d3.min.js" />
          {/* <script src="http://techanjs.org/techan.min.js"></script> */}
          <script src="/static/vendor/techan/techan.min.js" />
          <script src="/static/vendor/dimple/dimple.min.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/static/js/jq.js" />
          <script src="/static/js/tether.js" />
          <script src="/static/js/popper.js" />
          <script src="/static/js/bootstrap.js" />

          {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.4/socket.io.js"></script> */}
        </body>
      </html>
    );
  }
}
