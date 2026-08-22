import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ToDoList from './toDoList'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToDoList>
      
    </ToDoList>
  </StrictMode>,
)
