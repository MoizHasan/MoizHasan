import React from 'react'
import Layout from "../../components/layout"
import Calculator from "../../components/calculator/Calculator"



export default class CalculatorDemo extends React.Component {
render() {

return (
  <Layout>
	<div>
	<Calculator />
  </div>
  </Layout>
	);
}
}