import App from "./App";
import ReactDom from 'react-dom'
import './index.css';
import './assets/css/bootstrap.min.css'
import {BrowserRouter} from 'react-router-dom'

ReactDom.render(<BrowserRouter><App/></BrowserRouter>,document.getElementById('root'))