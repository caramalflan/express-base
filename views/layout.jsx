var React = require('react')

let Layout = (props) => {
  return(
    <html>
      <head>
        <title>{props.title}</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Quattrocento+Sans&display=swap" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
          integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
          crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="/public/stylesheets/app.css" />
      </head>
      <body>
        {props.children}
      </body>
    </html>
  )
}

module.exports = Layout;
