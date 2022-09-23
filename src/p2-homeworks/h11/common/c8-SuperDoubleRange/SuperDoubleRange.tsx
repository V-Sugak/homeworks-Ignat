import React from 'react'
import {Box, Slider} from "@mui/material";
import s from './SuperDoubleRange.module.css'

type SuperDoubleRangePropsType = {
    onChangeRange: ( value:  number | number[]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    function valuetext(value: number) {
        return `${value}°C`;
    }

    // const [value, setValue] = React.useState<number[]>([20, 37]);

    const onChangeCallback = (event: Event, newValue: number | number[]) => {
        onChangeRange(newValue);
    };

    return (
        <Box sx={{width: 200}}>
            <Slider
                size="small"
                color="secondary"
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={onChangeCallback}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
            />
        </Box>
    );
}

export default SuperDoubleRange








