import React from "react";
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
   const history = useHistory()
   return (
      <>
         <h1>Страница информации</h1>
         <p>Инфомация</p>
         <button className="btn" onClick={() => history.push('/')}>
            Вернуться к списку дел
         </button>
      </>
   )
}