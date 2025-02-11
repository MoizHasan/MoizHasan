import React from 'react'
import Layout from "../../components/layout"
import DinnerList from "../../components/what-should-i-eat/DinnerList"



export default class MenuGen extends React.Component {
render() {

return (
  <Layout>
	<div>
	<DinnerList />
  </div>
  </Layout>
	);
}
}