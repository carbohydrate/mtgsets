import { Tooltip, Typography } from '@mui/material';
import React from 'react';

interface SetSizeTooltipProps {
    common: number;
    children: React.ReactNode;
}

export const SetSizeTooltip: React.FC<SetSizeTooltipProps> = (props) => {
    const { common, children } = props;

    return (
        <Tooltip placement='bottom-start' title={common}>
            <Typography>{children}</Typography>
        </Tooltip>
    );
};
