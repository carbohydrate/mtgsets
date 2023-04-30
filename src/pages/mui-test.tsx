import React from 'react';
import { Button, CircularProgress, Link, Paper, Slider, Typography } from '@mui/material';

export const MuiTest: React.FC = () => {

    return (
        <Paper>
            <Typography variant='h1'>H1</Typography>
            <Typography variant='h2'>H2</Typography>
            <Typography variant='h3'>H3</Typography>
            <Typography variant='h4'>H4</Typography>

            <Link href='#'>This is a mui Link</Link>

            <Slider defaultValue={30} />
            <Slider defaultValue={30} style={{color: 'red'}} />
            <Button variant="contained">Hello123</Button>
            <CircularProgress />
        </Paper>
    );
};
