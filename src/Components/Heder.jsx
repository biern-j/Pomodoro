import React from 'react'
import Button from '@material-ui/core/Button';

const Header = ({ onClick, headerDescription }) =>
        <Button onClick={() => onClick()}>{headerDescription}</Button>;
 export default Header