import React from "react";
import { useForm } from "react-hook-form";

const EmailForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form__row">
                <label htmlFor="" className="form__label">Введите вашу почту</label>
                <input placeholder="example@gmail.com" className="form__input" {...register("email",
                    {
                        required: true,
                        pattern: /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm
                    })} />
                {errors.email && <span className="form__error">Адрес почты должен быть правельный</span>}
            </div>

            <button className="button">Далее</button>
        </form>
    );
}
export default EmailForm