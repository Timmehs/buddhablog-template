import './style/index.scss'
import App from './components/App'

import React from 'react'
import { render, hydrate } from 'react-dom'

const rootElement = document.getElementById('buddhablog') // TODO: Make this configurable?

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement)
} else {
  render(<App />, rootElement)
}
