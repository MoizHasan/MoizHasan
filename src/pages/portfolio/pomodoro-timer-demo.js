import React from 'react'
import Layout from "../../components/layout"
import Pomodoro from "../../components/pomodoro-timer/Pomodoro"



export default class PomodoroTimerDemo extends React.Component {
render() {

return (
  <Layout>
	<div>
	<Pomodoro />
  </div>
  </Layout>
	);
}
}