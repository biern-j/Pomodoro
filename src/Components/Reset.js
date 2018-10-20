import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const Reset = styled(Button)`
    color: black;
    background: black;
`;

const ResetTimer = ({ onClick }) =>
    <Reset onClick={() => onClick(true) }>
        Cancel
    </Reset>;

export default ResetTimer;
