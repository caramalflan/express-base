var React = require('react');
var Layout = require('./layout');

let Error = (props) => {
  return(
    <Layout title={props.title}>
      <h1>{props.message}</h1>
      <h2>{props.error.status}</h2>
      <p>{props.error.stack}</p>
    </Layout>
  )
}

module.exports = Error;
