var React = require('react');
var Layout = require('./layout');

let Index = (props) => {
  return(
    <Layout title={props.title}>
      <h1>{props.title}</h1>
      <p>Welcome to {props.title}</p>
    </Layout>
  )
}

module.exports = Index;
