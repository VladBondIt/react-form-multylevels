import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Data from '../store/data';
import ButtonNext from "./ButtonNext";

const PassForm = () => {
    const [chackPassError, setChackPassError] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = ({ password, checkpassword }) => {
        if (password === checkpassword) {
            Data.handlerPassword(checkpassword)
            Data.incTabId()
            setChackPassError(true)
        } else {
            setChackPassError(false)
        }
    };



    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form__row">
                <label htmlFor="" className="form__label">Введите ваш пароль</label>
                <input className="form__input" type="password" {...register("password", { required: true, minLength: 6 })} />
                {errors.password && <span className="form__error">Это поле должно быть заполнено и не меньнее 6 символов</span>}
            </div>
            <div className="form__row">
                <label htmlFor="" className="form__label">Повторите ваш пароль</label>
                <input className="form__input" type="password" {...register("checkpassword", { required: true })} />
                {!chackPassError && <span className="form__error">Пароли должны совпадать</span>}
            </div>

            <ButtonNext />
        </form>
    );
}

export default PassForm;