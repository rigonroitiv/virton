import { Box, Popover, Typography } from '@mui/material'
import React from 'react'

const ApartmentPopup = ( { anchorEl, setPopupMenu, data } ) => {
    const open = new Boolean(anchorEl);
  return (
    <Popover
    open={open}
    anchorEl={anchorEl}
    sx={{pointerEvents: 'none'}}
    >
        <Box>
            <Typography>{data.name}</Typography>
        </Box>
    </Popover>
  )
}

export default ApartmentPopup