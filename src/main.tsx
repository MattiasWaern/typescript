import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ToDoList from './toDoList'
import ColorPicker from './palettGenerator'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ColorPicker>
    </ColorPicker>
    <ToDoList>
      
    </ToDoList>
  </StrictMode>,
)
