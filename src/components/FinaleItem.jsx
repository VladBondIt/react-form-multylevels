import React from 'react'

function FinaleItem(props) {
    console.log(props[0]);
    let visibleSpan = '';
    switch (props[0]) {
        case "lastName":
            visibleSpan = 'Ваша Фамилия'
            break;
        case "firstName":
            visibleSpan = 'Ваше Имя'

            break;
        case "subName":
            visibleSpan = 'Ваше Отчество'

            break;
        case "bithday":
            visibleSpan = 'Ваше День рождения'

            break;
        case "email":

            visibleSpan = 'Ваша Почта'
            break;

        default:
            break;
    }
    return (
        <div className="finale__item">
            <span>{visibleSpan}:</span>
            <span>{props[1]}</span>
        </div>
    )
}

export default FinaleItem
