import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Maioridade from './components/Maioridade'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Maioridade idade = {18}/>
    <Maioridade idade = {16}/>
  </StrictMode>,
)
