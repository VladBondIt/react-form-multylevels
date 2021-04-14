import React from 'react'
import Data from '../store/data'
import FinaleItem from './FinaleItem'


function FinaleForm() {

    console.log();

    return (
        <div className="finale">
            <div className="finale__title">Благодарим вас регистрация прошла успешно!!!</div>
            <div className="finale__subtitle">Ваши данные:</div>
            <div className="finale__box">
                {Object.entries(Data.clientInfo)
                    .map((value) => <FinaleItem key={value[0]} {...value} />)}
            </div>
        </div>
    )
}

export default FinaleForm
