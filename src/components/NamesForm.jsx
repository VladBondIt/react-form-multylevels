import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Data from '../store/data';
import { observer } from 'mobx-react-lite'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ButtonNext from "./ButtonNext";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));


const Steps = observer(() => {
    const classes = useStyles();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [bithday, setBithday] = useState('')

    const onSubmit = data => {
        if (bithday) {
            console.log(data)
            Data.handlerFio({ ...data, bithday: bithday })
            console.log(Data.fio);
            Data.incTabId()
        }
    };

    const handlerBirthday = (e) => {
        setBithday(e.target.value)
    }


    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form__row">
                <label htmlFor="" className="form__label">Введите вашу фамилию</label>
                <input className="form__input"
                    {...register("lastName",
                        {
                            required: true,
                            minLength: 3,
                            pattern: /^[A-Za-z]+$/i
                        })
                    } />
                {errors.lastName && <span className="form__error">Это поле должно быть заполнено</span>}
            </div>
            <div className="form__row">
                <label htmlFor="" className="form__label">Введите ваше имя</label>
                <input className="form__input" {...register("firstName",
                    {
                        required: true,
                        minLength: 3,
                        pattern: /^[A-Za-z]+$/i
                    })
                } />
                {errors.firstName && <span className="form__error">Это поле должно быть заполнено</span>}
            </div>
            <div className="form__row">
                <label htmlFor="" className="form__label">Введите ваше отчество</label>
                <input className="form__input" {...register("subName",
                    {
                        required: true,
                        minLength: 3,
                        pattern: /^[A-Za-z]+$/i
                    })
                } />
                {errors.subName && <span className="form__error">Это поле должно быть заполнено</span>}
            </div>
            <div className="form__row form__row_birthday">
                <TextField
                    id="date"
                    label="Выберите день рождения"
                    onChange={handlerBirthday}
                    type="date"
                    defaultValue="1990-01-01"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                {!bithday && <span className="form__error">Это поле должно быть изменено</span>}
            </div>

            <ButtonNext />

        </form>
    );
})
export default Steps;