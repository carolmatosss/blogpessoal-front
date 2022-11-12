import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Grid } from '@material-ui/core'
import { Box } from '@mui/material';
import './Footer.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReduce';

function Footer() {

    const token = useSelector<TokenState,TokenState["tokens"]>((state)=> state.tokens);
    
    var footerComponent;

    if (token !== ""){
      footerComponent =
      <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className='texto'>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/carolmatosss" target="_blank">
                                <GitHubIcon className='redes' />
                           
                            </a>
                            <a href="https://www.linkedin.com/in/carolyne-matos-71a80718a/" target="_blank">
                                <LinkedInIcon className='redes'  />
                            </a>
                        </Box>
                    </Box>
                    <Box className='box2'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='texto' >© 2022 Copyright:</Typography>
                        </Box>
                        <Box>
                                <Typography variant="subtitle2" gutterBottom className='texto'align="center">Carolyne Matos</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
    }
    return (
        <>
        {footerComponent }  
        </>
    )
}
export default Footer