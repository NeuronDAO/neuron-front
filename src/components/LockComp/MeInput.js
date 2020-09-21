import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';


/**
 * [Мы создаем универсальный инпут. который настраиваем через передаваемые пропсы 
 * На всякий случай, есть дефолтные значения, если ты ничего не передал]
 * 
 * @param {Array} props [Массив данных для формирования Инпута]
 * @param {Num}    props.id    [Уникальный идентификатор Инпута]
 * @param {Bool}   props.full  [Сделать инпут на всю ширину контента]
 * @param {String} props.value [Значение в инпуте по умолчанию]
 * @param {String} props.label [Название инпута (LAbel)]
 * @param {String} props.place [Placeholder - если не передан то ничего и не выводим]
 * @param {String} props.type  [Тип инпута (text | pass | number) ]
 * 
 */
export default function UniversalInput (props) {
    const 
        classes = useStyles(), // Use style
        full   = (props.full)  ? true: false, // Full width resize input  
        defVal = (props.value) ? props.value : '', // Defualt value input
        label  = (props.label) ? props.label : false, // Label input REQ
        place  = (props.place) ? props.place : false, // Placeholder
        type   = (props.type)  ? props.type  : "text"; // Type Input

    return (
        <FormControlLabel className={classes.root}
        control={
            <TextField            
                id={props.id}             
                fullWidth={full}
                defaultValue={defVal}
                placeholder={place}          
                type={type}      
                size="small"                
                variant="outlined"
            />
        }
        label={label} 
        className={classes.label}
        labelPlacement="top"     
        />
    );
}

//  Local CSS
const useStyles = makeStyles((theme) => ({
    root: {margin: '20px 0',},
    label: {
        display: 'flex',        
        alignItems: 'baseline',
        margin: '10px 0',
        width: '100%',
        maxWidth: '100%',
        color: theme.palette.text.secondary,  
    }
}));

