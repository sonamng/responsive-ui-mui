
import * as React from 'react';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { Grid, Stack, Typography, Toolbar, AppBar, Box, Divider, Drawer, CssBaseline, IconButton } from '@mui/material';

import my from '../assets/my.jpeg'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import EmailIcon from '@mui/icons-material/Email';
import SouthAmericaIcon from '@mui/icons-material/SouthAmerica';


const drawerWidth = 240;

function ResponsiveDrawer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <List style={{ flex: 1, backgroundColor: "#C2D9FF" }}>
                <img style={{ paddingLeft: "15px" }} src='https://themewagon.github.io/Breeze-Free-Bootstrap-Admin-Template/assets/images/logo.svg' alt='no' />
                <Stack direction="row" spacing={1} style={{ paddingLeft: "15px" }}>
                    <img className='avtar' src={my} alt="Your img" style={{ width: '30px', height: '30px', objectFit: 'cover' }} />
                    <Typography style={{ marginTop: "5px" }}>Sonam Kumari</Typography>
                    <Box
                        style={{
                            marginTop: "5px",
                            width: "25px",
                            height: "25px",
                            backgroundColor: "#ED5AB3",
                            borderRadius: '5px',
                            display: 'flex',
                            justifyContent: 'center',
                            color: "white"
                        }}>3</Box>

                </Stack>


                {['Dashboard', 'Basic UI Elements', 'Icons', 'Forms', 'Charts', 'Tables', 'Docs', 'Documentation', 'notification', 'Sign Out'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (

        <Box sx={{ display: 'flex', backgroundColor: "lightgray" }}>
            <CssBaseline />

            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar style={{ backgroundColor: "black" }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Stack className='one'>
                        <MenuIcon />
                    </Stack>

                    <Stack className='two'>
                        <CircleNotificationsIcon />
                    </Stack>

                    <Stack className='three'>
                        <EmailIcon />
                    </Stack>

                    <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
                        <input className='input hidden-xs' type='text' placeholder='search' style={{ backgroundColor: "#F0ECE5", marginBottom: "8px" }} />
                    </Grid>

                    <Stack sx={{ marginLeft: 'auto' }} className='four' direction="row" spacing={1} style={{ paddingLeft: "15px" }}>
                        <SouthAmericaIcon style={{ width: '30px', height: '30px', objectFit: 'cover' }} />
                        <Typography style={{ marginTop: "5px" }}>English</Typography>
                    </Stack>

                    <Stack className='five' direction="row" spacing={1} style={{ paddingLeft: "15px" }}>
                        <img className='avtar' src={my} alt="Your img" style={{ width: '30px', height: '30px', objectFit: 'cover' }} />
                        <Typography style={{ marginTop: "5px" }}>Sonam Kumari</Typography>
                    </Stack>


                </Toolbar>
            </AppBar>

            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>


            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Grid container spacing={2}>
                    <Grid item lg={12} md={6} xs={12} style={{ border: '1px solid black', marginTop: "30px" }}>
                        <Typography>hiii</Typography>
                    </Grid>
                </Grid>
                <br></br>

                <Grid container spacing={2} style={{ marginTop: "40px" }}>
                    <Grid item lg={3} md={6} xs={12} className='MuiGrid-item-responsive' style={{ border: '2px solid black' }}>
                        <div className='box1' style={{ backgroundColor: "#FFB534" }}>
                            First Row
                        </div>

                        <div className='box2' style={{ backgroundColor: "#FF6AC2", color: "white" }}>
                            Second Row
                        </div>

                        <div className='box3' style={{ backgroundColor: "#4E4FEB" }}>
                            Third Row
                        </div>

                        <div className='box4' style={{ backgroundColor: "#45CFDD" }}>
                            four Row
                        </div>
                    </Grid>

                    {/* Second Grid */}
                    <Grid item lg={9} md={6} xs={12} style={{ border: '2px solid black' }}>
                        <div className='border2'>
                            {/* Content for the third row goes here */}
                            Third Row
                        </div>
                    </Grid>
                </Grid>


            </Box>

        </Box>
    );
}

export default ResponsiveDrawer;




