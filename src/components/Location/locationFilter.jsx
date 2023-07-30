import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import { styled, useTheme } from '@mui/material/styles';


export const LocationFilter = () => {
    const theme = useTheme();
    return (
        <div className='map-filter-options'>
                    <div className="map-form-label">
                        <div>
                            <label htmlFor="">Suggested local radius</label>
                            <div>Show me listings from this general area</div>
                        </div>
                        <input type="radio" name="" id="" />
                    </div>
                    <div className="map-form-label" style={{border: '0', marginBottom: '0px'}}>
                        <div>
                            <label htmlFor="">Custom local radius</label>
                            <div>Only show me listings within a specific distance</div>
                        </div>
                        <input type="radio" name="" id="" />
                    </div>
                    <div className='map-form-slider'>
                        <Box sx={{ width: '100%', margin: 'auto', color: 'grey' }}>
                            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                            <label>3km</label>
                                <Slider 
                                sx={{
                                    color: theme.palette.mode === 'dark' ? '#FC5e38' : '#FC5e38',
                                    height: 4,
                                    '& .MuiSlider-thumb': {
                                    width: 8,
                                    height: 8,
                                    transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                                    '&:before': {
                                        boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                                    },
                                    '&:hover, &.Mui-focusVisible': {
                                        boxShadow: `0px 0px 0px 8px ${
                                        theme.palette.mode === 'dark'
                                            ? '#fc5f3819'
                                            : '#fc5f3819'
                                        }`,
                                    },
                                    '&.Mui-active': {
                                        width: 20,
                                        height: 20,
                                    },
                                    },
                                    '& .MuiSlider-rail': {
                                    opacity: 0.28,
                                    },
                                }} 
                                defaultValue={30} valueLabelDisplay='label' aria-label="slider" size='medium' />
                                <label>50km</label>
                            </Stack>
                        </Box>
                    </div>
                    <Button className='map-filter-btn' startIcon={<ZoomOutMapIcon/>}> Apply </Button>
                </div>
    )
}