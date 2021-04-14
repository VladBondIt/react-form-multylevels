import React from 'react'
import StepItem from './StepItem'
import NamesForm from './NamesForm'
import Data from '../store/data'
import { observer } from 'mobx-react-lite'
import EmailForm from './EmailForm'
import PassForm from './PassForm'
import FinaleForm from './FinaleForm'

const FormBody = observer(() => {

    const stepsArr = [{ id: 1, title: "Шаг 1" }, { id: 2, title: "Шаг 2" }, { id: 3, title: "Шаг 3" }, { id: 4, title: "Шаг 4" }]

    let visibleForm = null;

    console.log(Data.tabId);


    switch (Data.tabId) {
        case 1:
            visibleForm = <NamesForm />
            break;
        case 2:
            visibleForm = <EmailForm />
            break;
        case 3:
            visibleForm = <PassForm />

            break;
        case 4:
            visibleForm = <FinaleForm />
            break;

        default:
            break;
    }

    return (
        <div className="wrapper">
            <div className="tabs">
                {stepsArr.map(value => <StepItem key={value.id} {...value} />)}
            </div>
            {visibleForm}
        </div>
    )
})

export default FormBody

