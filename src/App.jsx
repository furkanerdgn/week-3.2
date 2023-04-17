import { useState } from 'react'
import './App.css'
import { ExampleComponent  } from 'furkan-buttons-ui'
import 'furkan-buttons-ui/dist/index.css'

function App() {

  return (
    <div className="App">
      <ExampleComponent type="primary" text="Primary" />
      <ExampleComponent type="dark" text="Dark" />
      <ExampleComponent type="light" text="Light" />
      <ExampleComponent type="dashed" text="Dashed" />
    </div>
  )
}

export default App
