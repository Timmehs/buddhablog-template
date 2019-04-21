import React from 'react'
import { render, hydrate } from 'react-dom'
import './style/main.scss'
import App from './components/App'

const rootElement = document.getElementById('buddhablog')

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement)
} else {
  render(<App />, rootElement)
}
