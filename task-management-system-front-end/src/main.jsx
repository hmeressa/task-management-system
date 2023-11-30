import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './Store/store.js'
import { Provider } from 'react-redux'
import { DndProvider } from 'react-dnd/dist/index.js'
import { HTML5Backend } from 'react-dnd-html5-backend/dist/index.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <App />
      </DndProvider>
    </Provider>
  </React.StrictMode>,
)
