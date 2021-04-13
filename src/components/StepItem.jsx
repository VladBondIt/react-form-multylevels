import React from 'react'
import { observer } from 'mobx-react-lite'
import Data from '../store/data'


const StepItem = observer(({ title, id }) => {

    return (
        <div className={Data.tabId === id ? "tabs__item active" : "tabs__item"}>{title}</div>
    )
})

export default StepItem
