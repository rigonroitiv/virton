import React from 'react'
import ParkingSvg from '../components/parking/ParkingSvg'
import { Box, Typography } from '@mui/material'

const ParkingPage = () => {
  return (
    <div>
        <ParkingSvg />
        <Box sx={{
            position: 'fixed',
            left: 5,
            top: '20%'
        }}>
            <Box sx={{display: 'flex', gap: '3px'}}>
                <Box sx={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50px',
                    bgcolor: '#8b0000'
                }}></Box>
                <Typography>Shitur</Typography>
            </Box>
            <Box sx={{display: 'flex', gap: '3px'}}>
                <Box sx={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50px',
                    bgcolor: '#ff5e00'
                }}></Box>
                <Typography>Rezervuar</Typography>
            </Box>
            <Box sx={{display: 'flex', gap: '3px'}}>
                <Box sx={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50px',
                    bgcolor: '#fffb00'
                }}></Box>
                <Typography>Me qera</Typography>
            </Box>
        </Box>
    </div>
  )
}

export default ParkingPage