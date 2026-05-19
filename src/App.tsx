import { BrowserRouter } from 'react-router'
import AppRoutes from './Routes/AppRoutes'

function App() {

  return (
    <div>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </div>
  )
}

export default App
