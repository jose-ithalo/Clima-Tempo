import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import { useState } from 'react';

function Loading() {
    const [open, setOpen] = useState<boolean>(true);

    setTimeout(() => {
        setOpen(false);
    }, 3000);

    return (
        <div>
            <Backdrop
                sx={{ backgroundColor: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="secondary" />
            </Backdrop>
        </div>
    );
}

export default Loading;