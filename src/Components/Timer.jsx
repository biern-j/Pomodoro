import React from 'react';
import Button from '@material-ui/core/Button';

const Timer = ({timePeriod, description, onClick}) =>

    <Button
        onClick={(e) => onClick(e, timePeriod)}
    >
        {description}
    </Button>;


export default Timer