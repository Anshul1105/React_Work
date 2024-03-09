

import ClockHeading from './components/clockHeading'
import ClockPara from './components/clockPara'
import ClockTime from './components/time'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {

  return <center>
    Project Clock
    <ClockHeading></ClockHeading>
    <ClockPara></ClockPara>
    <ClockTime></ClockTime>
  </center>
}

export default App
