import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';



/**
 * [Универсальный TextArea, который автоматически расстягивается по длинне 
 * конентной области страницы]
 * 
 * @param {Array}  props [Массив данных для формирования ТекстАреа]
 * @param {Num}    props.id    [Уникальный идентификатор ТекстАреа]
 * @param {Bool}   props.full  [Сделать текстАреа на всю ширину контента]
 * @param {String} props.value [Значение в ТекстАреа по умолчанию]
 * @param {String} props.label [Название ТекстАреа (LAbel)]
 * @param {String} props.place [Placeholder - если не передан то ничего и не выводим]
 * 
 */

export default function ModalInput (props) {    
  const 
    classes = useStyles(),
    full   = (props.full) ? true: false, // Full width resize input  
    defVal = (props.value) ? props.value : '', // Defualt value input
    label  = (props.label) ? props.label : false, // Label input REQ
    place  = (props.place) ? props.place: false; // Placeholder
    


    return (
        <FormControlLabel
        control={
            <TextField
                fullWidth={full}
                id={props.id}           
                placeholder={place}
                multiline
                defaultValue={defVal}

                variant="outlined"                
                size="small"
           />
        }
        label={label} 
        labelPlacement="top"  
        className={classes.label}         
        />
    );
}

// LOC CSS
const useStyles = makeStyles((theme) => ({
  label: {
      display: 'flex',        
      alignItems: 'baseline',
      margin: '10px 0',
      width: '100%',
      maxWidth: '100%',
      color: theme.palette.text.secondary,  
  },
}));
