
// import * as React from 'react';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import MailIcon from '@mui/icons-material/Mail';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Grid, Stack, Typography, Toolbar, AppBar, Box, Divider, Drawer, CssBaseline, IconButton, Button } from '@mui/material';

// import my from '../assets/my.jpeg'
// import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
// import EmailIcon from '@mui/icons-material/Email';
// import SouthAmericaIcon from '@mui/icons-material/SouthAmerica';
// import HomeIcon from '@mui/icons-material/Home';
// import MyLocationIcon from '@mui/icons-material/MyLocation';
// import ContactsIcon from '@mui/icons-material/Contacts';
// import ListIcon from '@mui/icons-material/List';
// import BarChartIcon from '@mui/icons-material/BarChart';
// import TableViewIcon from '@mui/icons-material/TableView';
// import ArticleIcon from '@mui/icons-material/Article';
// import PersonIcon from '@mui/icons-material/Person';
// const drawerWidth = 240;

// function ResponsiveDrawer(props) {
//     const { window } = props;
//     const [mobileOpen, setMobileOpen] = React.useState(false);


//     const icons = [HomeIcon, MyLocationIcon, MailIcon, ContactsIcon, ListIcon, BarChartIcon, TableViewIcon, ArticleIcon];
//     const menuItems = ['Dashboard', 'Basic UI Elements', 'Icons', 'Forms', 'Charts', 'Tables', 'Docs', 'Documentation', 'notification', 'Sign Out'];

//     const handleDrawerToggle = () => {
//         setMobileOpen(!mobileOpen);
//     };
//     const drawer = (
//         <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
//             <List style={{ flex: 1, backgroundColor: "#C2D9FF" }}>
//                 <img style={{ paddingLeft: "15px" }} src='https://themewagon.github.io/Breeze-Free-Bootstrap-Admin-Template/assets/images/logo.svg' alt='no' />
//                 <Stack direction="row" spacing={1} style={{ paddingLeft: "15px" }}>
//                     <img className='avtar' src={my} alt="Your img" style={{ width: '30px', height: '30px', objectFit: 'cover' }} />
//                     <Typography style={{ marginTop: "5px" }}>Sonam Kumari</Typography>
//                     <Box
//                         style={{
//                             marginTop: "5px",
//                             width: "25px",
//                             height: "25px",
//                             backgroundColor: "#ED5AB3",
//                             borderRadius: '5px',
//                             display: 'flex',
//                             justifyContent: 'center',
//                             color: "white"
//                         }}>3</Box>

//                 </Stack>

//                 {menuItems.map((text, index) => (
//                     <ListItem key={text} disablePadding>
//                         <ListItemButton>
//                             <ListItemIcon>
//                                 {React.createElement(icons[index % icons.length])}
//                             </ListItemIcon>
//                             <ListItemText primary={text} />
//                         </ListItemButton>
//                     </ListItem>
//                 ))}

//             </List>
//             <Divider />
//         </div>
//     );

//     const container = window !== undefined ? () => window().document.body : undefined;

//     return (

//         <Box sx={{ display: 'flex', backgroundColor: "#F2F1EB" }}>
//             <CssBaseline />

//             <AppBar
//                 position="fixed"
//                 sx={{
//                     width: { sm: `calc(100% - ${drawerWidth}px)` },
//                     ml: { sm: `${drawerWidth}px` },
//                 }}
//             >
//                 <Toolbar style={{ backgroundColor: "black" }}>
//                     <IconButton
//                         color="inherit"
//                         aria-label="open drawer"
//                         edge="start"
//                         onClick={handleDrawerToggle}
//                         sx={{ mr: 2, display: { sm: 'none' } }}
//                     >
//                         <MenuIcon />
//                     </IconButton>

//                     <Stack className='one' sx={{ display: { xs: 'none', sm: 'flex' } }}>
//                         <MenuIcon />
//                     </Stack>


//                     <Stack className='two'>
//                         <CircleNotificationsIcon />
//                     </Stack>

//                     <Stack className='three'>
//                         <EmailIcon />
//                     </Stack>

//                     <Grid item xs={12} sm={6} md={3} lg={3} xl={2} sx={{ display: { xs: 'none', sm: 'flex' } }}>
//                         <input className='input hidden-xs' type='text' placeholder='search' style={{ backgroundColor: "#F0ECE5", marginBottom: "8px" }} />
//                     </Grid>

//                     <Stack sx={{ marginLeft: 'auto' }} className='four' direction="row" spacing={1} style={{ paddingLeft: "15px" }}>
//                         <SouthAmericaIcon style={{ width: '30px', height: '30px', objectFit: 'cover' }} />
//                         <Typography style={{ marginTop: "5px" }}>English</Typography>
//                     </Stack>


//                     <Stack
//                         className='five'
//                         direction="row"
//                         spacing={1}
//                         sx={{
//                             paddingLeft: { xs: '10px', sm: '15px' },
//                         }}
//                     >
//                         <img
//                             className='avtar'
//                             src={my}
//                             alt="Your img"
//                             style={{
//                                 width: '30px',
//                                 height: '30px',
//                                 objectFit: 'cover',
//                             }}
//                         />
//                         <Typography
//                             sx={{
//                                 marginTop: { xs: '0', sm: '5px' },
//                             }}
//                         >
//                             Sonam Kumari
//                         </Typography>
//                     </Stack>

//                 </Toolbar>
//             </AppBar>



//             <Box
//                 component="nav"
//                 sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
//                 aria-label="mailbox folders"
//             >
//                 <Drawer
//                     container={container}
//                     variant="temporary"
//                     open={mobileOpen}
//                     onClose={handleDrawerToggle}
//                     ModalProps={{
//                         keepMounted: true,
//                     }}
//                     sx={{
//                         display: { xs: 'block', sm: 'none' },
//                         '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//                     }}
//                 >
//                     {drawer}
//                 </Drawer>
//                 <Drawer
//                     variant="permanent"
//                     sx={{
//                         display: { xs: 'none', sm: 'block' },
//                         '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//                     }}
//                     open
//                 >
//                     {drawer}
//                 </Drawer>
//             </Box>



//             <Box
//                 component="main"
//                 sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
//             >
//                 <Toolbar />

//                 <Grid container spacing={2}>
//                     <Grid
//                         item
//                         lg={12}
//                         md={12}
//                         xs={12}
//                         sx={{
//                             border: '1px solid black',
//                             marginTop: '30px',
//                             display: 'flex',
//                             flexDirection: 'row',
//                             flexWrap: 'wrap',
//                         }}
//                     >
//                         <Grid item xs={12} sm={12} md={6} lg={2}>
//                             <div style={{ border: '1px solid black', padding: '5px', marginBottom: '10px', width: '100%' }}>
//                                 <Typography variant='h6'><b>Hii, welcome user</b></Typography>
//                             </div>
//                         </Grid>

//                         <Grid item xs={12} sm={12} md={6} lg={3}>
//                             <div style={{ border: '1px solid black', padding: '9px', marginBottom: '10px', width: '100%' }}>
//                                 <Typography style={{ color: 'gray' }}><b>our web analytics dashboard template.</b></Typography>
//                             </div>
//                         </Grid>

//                         <Grid item xs={12} sm={12} md={12} lg={7} sx={{ display: 'flex', flexDirection: 'row', gap: '10px', textAlign: "center" }}>
//                             <div style={{ border: '1px solid black', padding: '1px', marginBottom: '10px', width: '100%', height: '44px' }}>
//                                 <Button variant="outlined" sx={{ ml: 'auto', float: "right", margin: "2px", backgroundColor: "#5FBDFF", color: "white" }}>
//                                     add user
//                                 </Button>

//                                 <Button variant="outlined" sx={{ ml: 'auto', float: "right", margin: "2px",backgroundColor:"white" }}>
//                                     Print
//                                 </Button>

//                                 <Button variant="outlined" sx={{ ml: 'auto', float: "right", margin: "2px" ,backgroundColor:"white"}}>
//                                     Email
//                                 </Button>
//                             </div>
//                         </Grid>

//                     </Grid>
//                 </Grid>

//                 <br></br>
//                 <Grid container spacing={2} style={{ marginTop: "40px" }}>
//                     <Grid item lg={3} md={6} sm={12} xs={12} style={{ border: '2px solid black' }}>

//                         <div className='box1' style={{ backgroundColor: "#FFB534" }}>
//                             <div style={{ display: "flex", alignItems: "center" }}>
//                                 <div style={{ flex: "90%", color: "white" }}>
//                                     <Typography className='col'>Sales</Typography>
//                                     <Typography className='col' variant='h5'><b>$8,753</b></Typography>
//                                     <Typography className='col'>18.33% Since last month</Typography>
//                                 </div>
//                                 <div style={{ flex: "10%", borderRadius: "25px", textAlign: "center" }}>
//                                     <PersonIcon style={{ color: "white" }} />
//                                 </div>
//                             </div>
//                         </div>


//                         <div className='box2' style={{ backgroundColor: "#FF6AC2", color: "white" }}>
//                             <div style={{ display: "inline-block", float: "left", width: "90%" }}>
//                                 <Typography className='col'>Margin</Typography>
//                                 <Typography className='col' variant='h5'><b>$5,300</b></Typography>
//                                 <Typography className='col' >13.21% Since last month</Typography>
//                             </div>
//                             <div style={{ display: "inline-block", float: "left", width: "10%", color: "white", borderRadius: "25px", textAlign: "center" }}>
//                                 <PersonIcon />
//                             </div>
//                         </div>


//                         <div className='box3' style={{ backgroundColor: "#4E4FEB" }}>
//                             <div style={{ display: "inline-block", float: "left", width: "90%", color: "white" }}>
//                                 <Typography className='col'>Orders</Typography>
//                                 <Typography className='col' variant='h5'><b>$1,753</b></Typography>
//                                 <Typography className='col' >67.98% Since last month</Typography>
//                             </div>
//                             <div style={{ display: "inline-block", float: "left", width: "10%", color: "white", borderRadius: "25px", textAlign: "center" }}>
//                                 <PersonIcon />
//                             </div>

//                         </div>


//                         <div className='box4' style={{ backgroundColor: "#45CFDD" }}>
//                             <div style={{ display: "inline-block", float: "left", width: "90%" }}>
//                                 <Typography className='col'>Affiliate</Typography>
//                                 <Typography className='col' variant='h5'><b>2368</b></Typography>
//                                 <Typography className='col' >20.32% Since last month</Typography>
//                             </div>
//                             <div style={{ display: "inline-block", float: "left", width: "10%", color: "white", borderRadius: "25px", textAlign: "center" }}>
//                                 <PersonIcon />
//                             </div>
//                         </div>
//                     </Grid>


//                     {/* Second Grid - One Box with Text and Download Button */}
//                     <Grid item lg={9} md={6} sm={12} xs={12} style={{ border: '2px solid black', backgroundColor: "white" }}>

//                         <div className='boxone'>
//                             <Grid container spacing={2}>
//                                 <Grid item xs={6} sm={6}>
//                                     <div style={{ width: '100%', height: '100px' }}>
//                                         <Typography><b>Business Survey</b></Typography>
//                                         <Typography>Show overview Jan 2018 - Dec 2019 See Details</Typography>
//                                     </div>
//                                 </Grid>
//                                 <Grid item xs={6} sm={6}>
//                                     <div style={{ width: '100%', height: '100px' }}>

//                                         <Button style={{ float: "right", color: "#7B66FF", backgroundColor: "#DFCCFB" }} variant="outlined">
//                                             Download
//                                         </Button>


//                                     </div>
//                                 </Grid>
//                             </Grid>
//                         </div>

//                         <div className='boxsss'>
//                             <Grid container spacing={2}>
//                                 <Grid item xs={12} sm={4}>
//                                     <div style={{ width: "100%", border: "2px solid gray", height: "auto", padding: "10px",borderRadius:"5px" }}>
//                                         <Grid container spacing={2}>
//                                             <Grid item xs={6} sm={6}>
//                                                 <div style={{ width: '100%', height: 'auto' }}>
//                                                     <Typography>Today Earnings</Typography>
//                                                     <Typography variant='h6'><b>$5,300</b></Typography>
//                                                     <Typography  style={{color:"#64CCC5"}}>-310 avg. sales</Typography>
//                                                 </div>
//                                             </Grid>
//                                             <Grid item xs={6} sm={6}>
//                                                 <div style={{ width: '100%', height: 'auto' }}>
//                                                     <BarChartIcon style={{ float: "right", color: "blue", fontSize: "40px" }} />
//                                                 </div>
//                                             </Grid>
//                                         </Grid>
//                                     </div>
//                                 </Grid>

//                                 <Grid item xs={12} sm={4}>
//                                     <div style={{ width: "100%", border: "2px solid gray", height: "auto", padding: "10px" ,borderRadius:"5px"}}>
//                                         <Grid container spacing={2}>
//                                             <Grid item xs={6} sm={6}>
//                                                 <div style={{ width: '100%', height: 'auto' }}>
//                                                     <Typography>Product Sold</Typography>
//                                                     <Typography variant='h6'><b>$9,100</b></Typography>
//                                                     <Typography style={{color:"#FF4B91"}}>-310 avg. sales</Typography>
//                                                 </div>
//                                             </Grid>
//                                             <Grid item xs={6} sm={6}>
//                                                 <div style={{ width: '100%', height: 'auto' }}>
//                                                     <BarChartIcon style={{ float: "right", color: "blue", fontSize: "40px" }} />
//                                                 </div>
//                                             </Grid>
//                                         </Grid>
//                                     </div>
//                                 </Grid>

//                                 <Grid item xs={12} sm={4}>
//                                     <div style={{ width: "100%", border: "2px solid gray", height: "auto", padding: "10px",borderRadius:"5px" }}>

//                                         <Grid container spacing={2}>
//                                             <Grid item xs={6} sm={6}>
//                                                 <div style={{ width: '100%', height: 'auto' }}>
//                                                     <Typography>Today Orders</Typography>
//                                                     <Typography variant='h6'><b>$4,354</b></Typography>
//                                                     <Typography style={{color:"#64CCC5"}}>-310 avg. sales</Typography>
//                                                 </div>
//                                             </Grid>
//                                             <Grid item xs={6} sm={6}>
//                                                 <div style={{ width: '100%', height: 'auto' }}>
//                                                     <BarChartIcon style={{ float: "right", color: "blue", fontSize: "40px" }} />
//                                                 </div>
//                                             </Grid>
//                                         </Grid>
//                                     </div>
//                                 </Grid>
//                             </Grid>
//                         </div>


//                         <div className='boxthree' style={{ backgroundColor: "#B4BDFF" }}>
//                             <Grid container spacing={2}>
//                                 <Grid item xs={12}>
//                                     <Typography>NOW THIS GRID IS FREE</Typography>
//                                 </Grid>

//                             </Grid>
//                         </div>



//                         <div className='boxfour'>
//                             <Grid container spacing={2}>
//                                 <Grid item xs={12} sm={8}>
//                                     <div style={{ width: "100%", border: "2px solid red" }}>
//                                         <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. <b style={{ color: "gray" }}>Learn More</b></Typography>
//                                     </div>
//                                 </Grid>

//                                 <Grid item xs={12} sm={4}>
//                                     <div style={{ width: "100%", border: "2px solid red" }}>
//                                         <Typography>Sales Revenue</Typography>

//                                         <span>
//                                             <b>$2,45,500</b>
//                                             <span style={{ color: "#FF6AC2" }}>last 8 months</span>
//                                         </span>
//                                     </div>
//                                 </Grid>
//                             </Grid>
//                         </div>

//                     </Grid>
//                 </Grid>


//             </Box>
//         </Box>
//     );
// }

// export default ResponsiveDrawer;



































// import * as React from 'react';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import MailIcon from '@mui/icons-material/Mail';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Grid, Stack, Typography, Toolbar, AppBar, Box, Divider, Drawer, CssBaseline, IconButton, Button } from '@mui/material';

// import my from '../assets/my.jpeg'
// import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
// import EmailIcon from '@mui/icons-material/Email';
// import SouthAmericaIcon from '@mui/icons-material/SouthAmerica';
// import HomeIcon from '@mui/icons-material/Home';
// import MyLocationIcon from '@mui/icons-material/MyLocation';
// import ContactsIcon from '@mui/icons-material/Contacts';
// import ListIcon from '@mui/icons-material/List';
// import BarChartIcon from '@mui/icons-material/BarChart';
// import TableViewIcon from '@mui/icons-material/TableView';
// import ArticleIcon from '@mui/icons-material/Article';
// import PersonIcon from '@mui/icons-material/Person';
// const drawerWidth = 240;

// function ResponsiveDrawer(props) {
//     const { window } = props;
//     const [mobileOpen, setMobileOpen] = React.useState(false);


//     const icons = [HomeIcon, MyLocationIcon, MailIcon, ContactsIcon, ListIcon, BarChartIcon, TableViewIcon, ArticleIcon];
//     const menuItems = ['Dashboard', 'Basic UI Elements', 'Icons', 'Forms', 'Charts', 'Tables', 'Docs', 'Documentation', 'notification', 'Sign Out'];

//     const handleDrawerToggle = () => {
//         setMobileOpen(!mobileOpen);
//     };
//     const drawer = (
//         <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
//             <List style={{ flex: 1, backgroundColor: "#C2D9FF" }}>
//                 <img style={{ paddingLeft: "15px" }} src='https://themewagon.github.io/Breeze-Free-Bootstrap-Admin-Template/assets/images/logo.svg' alt='no' />
//                 <Stack direction="row" spacing={1} style={{ paddingLeft: "15px" }}>
//                     <img className='avtar' src={my} alt="Your img" style={{ width: '30px', height: '30px', objectFit: 'cover' }} />
//                     <Typography style={{ marginTop: "5px" }}>Sonam Kumari</Typography>
//                     <Box
//                         style={{
//                             marginTop: "5px",
//                             width: "25px",
//                             height: "25px",
//                             backgroundColor: "#ED5AB3",
//                             borderRadius: '5px',
//                             display: 'flex',
//                             justifyContent: 'center',
//                             color: "white"
//                         }}>3</Box>

//                 </Stack>

//                 {menuItems.map((text, index) => (
//                     <ListItem key={text} disablePadding>
//                         <ListItemButton>
//                             <ListItemIcon>
//                                 {React.createElement(icons[index % icons.length])}
//                             </ListItemIcon>
//                             <ListItemText primary={text} />
//                         </ListItemButton>
//                     </ListItem>
//                 ))}

//             </List>
//             <Divider />
//         </div>
//     );

//     const container = window !== undefined ? () => window().document.body : undefined;

//     return (

//         <>
//             <Box sx={{ display: 'flex', backgroundColor: "#F2F1EB" }}>
//                 <CssBaseline />

//                 <AppBar
//                     position="fixed"
//                     sx={{
//                         width: { sm: `calc(100% - ${drawerWidth}px)` },
//                         ml: { sm: `${drawerWidth}px` },
//                     }}
//                 >
//                     <Toolbar style={{ backgroundColor: "black" }}>
//                         <IconButton
//                             color="inherit"
//                             aria-label="open drawer"
//                             edge="start"
//                             onClick={handleDrawerToggle}
//                             sx={{ mr: 2, display: { sm: 'none' } }}
//                         >
//                             <MenuIcon />
//                         </IconButton>

//                         <Stack className='one' sx={{ display: { xs: 'none', sm: 'flex' } }}>
//                             <MenuIcon />
//                         </Stack>


//                         <Stack className='two'>
//                             <CircleNotificationsIcon />
//                         </Stack>

//                         <Stack className='three'>
//                             <EmailIcon />
//                         </Stack>

//                         <Grid item xs={12} sm={6} md={3} lg={3} xl={2} sx={{ display: { xs: 'none', sm: 'flex' } }}>
//                             <input className='input hidden-xs' type='text' placeholder='search' style={{ backgroundColor: "#F0ECE5", marginBottom: "8px" }} />
//                         </Grid>

//                         <Stack sx={{ marginLeft: 'auto' }} className='four' direction="row" spacing={1} style={{ paddingLeft: "15px" }}>
//                             <SouthAmericaIcon style={{ width: '30px', height: '30px', objectFit: 'cover' }} />
//                             <Typography style={{ marginTop: "5px" }}>English</Typography>
//                         </Stack>


//                         <Stack
//                             className='five'
//                             direction="row"
//                             spacing={1}
//                             sx={{
//                                 paddingLeft: { xs: '10px', sm: '15px' },
//                             }}
//                         >
//                             <img
//                                 className='avtar'
//                                 src={my}
//                                 alt="Your img"
//                                 style={{
//                                     width: '30px',
//                                     height: '30px',
//                                     objectFit: 'cover',
//                                 }}
//                             />
//                             <Typography
//                                 sx={{
//                                     marginTop: { xs: '0', sm: '5px' },
//                                 }}
//                             >
//                                 Sonam Kumari
//                             </Typography>
//                         </Stack>

//                     </Toolbar>
//                 </AppBar>



//                 <Box
//                     component="nav"
//                     sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
//                     aria-label="mailbox folders"
//                 >
//                     <Drawer
//                         container={container}
//                         variant="temporary"
//                         open={mobileOpen}
//                         onClose={handleDrawerToggle}
//                         ModalProps={{
//                             keepMounted: true,
//                         }}
//                         sx={{
//                             display: { xs: 'block', sm: 'none' },
//                             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//                         }}
//                     >
//                         {drawer}
//                     </Drawer>
//                     <Drawer
//                         variant="permanent"
//                         sx={{
//                             display: { xs: 'none', sm: 'block' },
//                             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//                         }}
//                         open
//                     >
//                         {drawer}
//                     </Drawer>
//                 </Box>



//                 <Box
//                     component="main"
//                     sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
//                 >
//                     <Toolbar />

//                     <Grid container spacing={2}>
//                         <Grid
//                             item
//                             lg={12}
//                             md={12}
//                             xs={12}
//                             sx={{
//                                 marginTop: '30px',
//                                 display: 'flex',
//                                 flexDirection: 'row',
//                                 flexWrap: 'wrap',
//                             }}
//                         >
//                             <Grid item xs={12} sm={12} md={6} lg={2}>
//                                 <div style={{ padding: '5px', marginBottom: '10px', width: '100%' }}>
//                                     <Typography variant='h6'><b>Hii, welcome user</b></Typography>
//                                 </div>
//                             </Grid>

//                             <Grid item xs={12} sm={12} md={6} lg={3}>
//                                 <div style={{ padding: '9px', marginBottom: '10px', width: '100%' }}>
//                                     <Typography style={{ color: 'gray' }}><b>our web analytics dashboard template.</b></Typography>
//                                 </div>
//                             </Grid>

//                             <Grid item xs={12} sm={12} md={12} lg={7} sx={{ display: 'flex', flexDirection: 'row', gap: '10px', textAlign: "center" }}>
//                                 <div style={{ padding: '1px', marginBottom: '10px', width: '100%', height: '44px' }}>
//                                     <Button variant="outlined" sx={{ ml: 'auto', float: "right", margin: "2px", backgroundColor: "#5FBDFF", color: "white" }}>
//                                         add user
//                                     </Button>

//                                     <Button variant="outlined" sx={{ ml: 'auto', float: "right", margin: "2px", backgroundColor: "white" }}>
//                                         Print
//                                     </Button>

//                                     <Button variant="outlined" sx={{ ml: 'auto', float: "right", margin: "2px", backgroundColor: "white" }}>
//                                         Email
//                                     </Button>
//                                 </div>
//                             </Grid>

//                         </Grid>
//                     </Grid>

//                     <br></br>
//                     <Grid container spacing={2} style={{ marginTop: "40px" }}>
//                         <Grid item lg={3} md={6} sm={12} xs={12} >

//                             <div className='box1' style={{ backgroundColor: "#FFB534" }}>
//                                 <div style={{ display: "flex", alignItems: "center" }}>
//                                     <div style={{ flex: "90%", color: "white" }}>
//                                         <Typography className='col'>Sales</Typography>
//                                         <Typography className='col' variant='h5'><b>$8,753</b></Typography>
//                                         <Typography className='col'>18.33% Since last month</Typography>
//                                     </div>
//                                     <div style={{ flex: "10%", borderRadius: "25px", textAlign: "center" }}>
//                                         <PersonIcon style={{ color: "white" }} />
//                                     </div>
//                                 </div>
//                             </div>


//                             <div className='box2' style={{ backgroundColor: "#FF6AC2", color: "white" }}>
//                                 <div style={{ display: "inline-block", float: "left", width: "90%" }}>
//                                     <Typography className='col'>Margin</Typography>
//                                     <Typography className='col' variant='h5'><b>$5,300</b></Typography>
//                                     <Typography className='col' >13.21% Since last month</Typography>
//                                 </div>
//                                 <div style={{ display: "inline-block", float: "left", width: "10%", color: "white", borderRadius: "25px", textAlign: "center" }}>
//                                     <PersonIcon />
//                                 </div>
//                             </div>


//                             <div className='box3' style={{ backgroundColor: "#4E4FEB" }}>
//                                 <div style={{ display: "inline-block", float: "left", width: "90%", color: "white" }}>
//                                     <Typography className='col'>Orders</Typography>
//                                     <Typography className='col' variant='h5'><b>$1,753</b></Typography>
//                                     <Typography className='col' >67.98% Since last month</Typography>
//                                 </div>
//                                 <div style={{ display: "inline-block", float: "left", width: "10%", color: "white", borderRadius: "25px", textAlign: "center" }}>
//                                     <PersonIcon />
//                                 </div>

//                             </div>


//                             <div className='box4' style={{ backgroundColor: "#45CFDD" }}>
//                                 <div style={{ display: "inline-block", float: "left", width: "90%" }}>
//                                     <Typography className='col'>Affiliate</Typography>
//                                     <Typography className='col' variant='h5'><b>2368</b></Typography>
//                                     <Typography className='col' >20.32% Since last month</Typography>
//                                 </div>
//                                 <div style={{ display: "inline-block", float: "left", width: "10%", color: "white", borderRadius: "25px", textAlign: "center" }}>
//                                     <PersonIcon />
//                                 </div>
//                             </div>
//                         </Grid>


//                         {/* Second Grid - One Box with Text and Download Button */}
//                         <Grid item lg={9} md={6} sm={12} xs={12} style={{ backgroundColor: "white" }}>

//                             <div className='boxone'>
//                                 <Grid container spacing={2}>
//                                     <Grid item xs={6} sm={6}>
//                                         <div style={{ width: '100%', height: '100px' }}>
//                                             <Typography><b>Business Survey</b></Typography>
//                                             <Typography>Show overview Jan 2018 - Dec 2019 See Details</Typography>
//                                         </div>
//                                     </Grid>
//                                     <Grid item xs={6} sm={6}>
//                                         <div style={{ width: '100%', height: '100px' }}>

//                                             <Button style={{ float: "right", color: "#7B66FF", backgroundColor: "#DFCCFB" }} variant="outlined">
//                                                 Download
//                                             </Button>


//                                         </div>
//                                     </Grid>
//                                 </Grid>
//                             </div>

//                             <div className='boxsss'>
//                                 <Grid container spacing={2}>
//                                     <Grid item xs={12} sm={4}>
//                                         <div style={{ width: "100%", border: "2px solid gray", height: "auto", padding: "10px", borderRadius: "5px" }}>
//                                             <Grid container spacing={2}>
//                                                 <Grid item xs={6} sm={6}>
//                                                     <div style={{ width: '100%', height: 'auto' }}>
//                                                         <Typography>Today Earnings</Typography>
//                                                         <Typography variant='h6'><b>$5,300</b></Typography>
//                                                         <Typography style={{ color: "#64CCC5" }}>-310 avg. sales</Typography>
//                                                     </div>
//                                                 </Grid>
//                                                 <Grid item xs={6} sm={6}>
//                                                     <div style={{ width: '100%', height: 'auto' }}>
//                                                         <BarChartIcon style={{ float: "right", color: "blue", fontSize: "40px" }} />
//                                                     </div>
//                                                 </Grid>
//                                             </Grid>
//                                         </div>
//                                     </Grid>

//                                     <Grid item xs={12} sm={4}>
//                                         <div style={{ width: "100%", border: "2px solid gray", height: "auto", padding: "10px", borderRadius: "5px" }}>
//                                             <Grid container spacing={2}>
//                                                 <Grid item xs={6} sm={6}>
//                                                     <div style={{ width: '100%', height: 'auto' }}>
//                                                         <Typography>Product Sold</Typography>
//                                                         <Typography variant='h6'><b>$9,100</b></Typography>
//                                                         <Typography style={{ color: "#FF4B91" }}>-310 avg. sales</Typography>
//                                                     </div>
//                                                 </Grid>
//                                                 <Grid item xs={6} sm={6}>
//                                                     <div style={{ width: '100%', height: 'auto' }}>
//                                                         <BarChartIcon style={{ float: "right", color: "blue", fontSize: "40px" }} />
//                                                     </div>
//                                                 </Grid>
//                                             </Grid>
//                                         </div>
//                                     </Grid>

//                                     <Grid item xs={12} sm={4}>
//                                         <div style={{ width: "100%", border: "2px solid gray", height: "auto", padding: "10px", borderRadius: "5px" }}>

//                                             <Grid container spacing={2}>
//                                                 <Grid item xs={6} sm={6}>
//                                                     <div style={{ width: '100%', height: 'auto' }}>
//                                                         <Typography>Today Orders</Typography>
//                                                         <Typography variant='h6'><b>$4,354</b></Typography>
//                                                         <Typography style={{ color: "#64CCC5" }}>-310 avg. sales</Typography>
//                                                     </div>
//                                                 </Grid>
//                                                 <Grid item xs={6} sm={6}>
//                                                     <div style={{ width: '100%', height: 'auto' }}>
//                                                         <BarChartIcon style={{ float: "right", color: "blue", fontSize: "40px" }} />
//                                                     </div>
//                                                 </Grid>
//                                             </Grid>
//                                         </div>
//                                     </Grid>
//                                 </Grid>
//                             </div>


//                             <div className='boxthree' style={{ backgroundColor: "#B4BDFF" }}>
//                                 <Grid container spacing={2}>
//                                     <Grid item xs={12}>
//                                         <Typography>NOW THIS GRID IS FREE</Typography>
//                                     </Grid>

//                                 </Grid>
//                             </div>



//                             <div className='boxfour'>
//                                 <Grid container spacing={2}>
//                                     <Grid item xs={12} sm={8}>
//                                         <div style={{ width: "100%" }}>
//                                             <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. <b style={{ color: "gray" }}>Learn More</b></Typography>
//                                         </div>
//                                     </Grid>

//                                     <Grid item xs={12} sm={4}>
//                                         <div style={{ width: "100%" }}>
//                                             <Typography>Sales Revenue</Typography>

//                                             <span>
//                                                 <b>$2,45,500</b>
//                                                 <span style={{ color: "#FF6AC2" }}>last 8 months</span>
//                                             </span>
//                                         </div>
//                                     </Grid>
//                                 </Grid>
//                             </div>

//                         </Grid>
//                     </Grid>
//                 </Box>
//             </Box>


//         </>
//     );
// }

// export default ResponsiveDrawer;













































































import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { Grid, Stack, Typography, Toolbar, AppBar, Box, Divider, Drawer, CssBaseline, IconButton, Button } from '@mui/material';

import my from '../assets/my.jpeg'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import EmailIcon from '@mui/icons-material/Email';
import SouthAmericaIcon from '@mui/icons-material/SouthAmerica';
import HomeIcon from '@mui/icons-material/Home';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import ContactsIcon from '@mui/icons-material/Contacts';
import ListIcon from '@mui/icons-material/List';
import BarChartIcon from '@mui/icons-material/BarChart';
import TableViewIcon from '@mui/icons-material/TableView';
import ArticleIcon from '@mui/icons-material/Article';
import PersonIcon from '@mui/icons-material/Person';
import crop from '../assets/crop.png'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function createData(name, project, Invoice, Amount) {
    return { name, project, Invoice, Amount };
}
const rows = [
    createData('Cecelia Cooper', "Angular Admin", "Completed", "$ 77.99"),
    createData('Victor Watkins', "Angular Admin	", "Completed", "$245.30 "),
    createData('Ada Burgess', "One page html", "Completed", "$160.25"),
    createData('Dollie Lynch', "Wordpress	", "Declined", "$ 123.21"),
    createData('Harry Holloway', "VueJs Application	", "Declined", "$ 150.00"),
];


const drawerWidth = 240;

function ResponsiveDrawer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);


    const icons = [HomeIcon, MyLocationIcon, MailIcon, ContactsIcon, ListIcon, BarChartIcon, TableViewIcon, ArticleIcon];
    const menuItems = ['Dashboard', 'Basic UI Elements', 'Icons', 'Forms', 'Charts', 'Tables', 'Docs', 'Documentation', 'notification', 'Sign Out'];

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

                {menuItems.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {React.createElement(icons[index % icons.length])}
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

        <Box sx={{ display: 'flex', backgroundColor: "#F2F1EB" }}>
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

                    <Stack className='one' sx={{ display: { xs: 'none', sm: 'flex' } }}>
                        <MenuIcon />
                    </Stack>


                    <Stack className='two'>
                        <CircleNotificationsIcon />
                    </Stack>

                    <Stack className='three'>
                        <EmailIcon />
                    </Stack>

                    <Grid item xs={12} sm={6} md={3} lg={3} xl={2} sx={{ display: { xs: 'none', sm: 'flex' } }}>
                        <input className='input hidden-xs' type='text' placeholder='search' style={{ backgroundColor: "#F0ECE5", marginBottom: "8px" }} />
                    </Grid>

                    <Stack sx={{ marginLeft: 'auto' }} className='four' direction="row" spacing={1} style={{ paddingLeft: "15px" }}>
                        <SouthAmericaIcon style={{ width: '30px', height: '30px', objectFit: 'cover' }} />
                        <Typography style={{ marginTop: "5px" }}>English</Typography>
                    </Stack>


                    <Stack
                        className='five'
                        direction="row"
                        spacing={1}
                        sx={{
                            paddingLeft: { xs: '10px', sm: '15px' },
                        }}
                    >
                        <img
                            className='avtar'
                            src={my}
                            alt="Your img"
                            style={{
                                width: '30px',
                                height: '30px',
                                objectFit: 'cover',
                            }}
                        />
                        <Typography
                            sx={{
                                marginTop: { xs: '0', sm: '5px' },
                            }}
                        >
                            Sonam Kumari
                        </Typography>
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
                    <Grid
                        item
                        lg={12}
                        md={12}
                        xs={12}
                        sx={{
                            // border: '1px solid black',
                            marginTop: '30px',
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                        }}
                    >
                        <Grid item xs={12} sm={12} md={6} lg={2}>
                            <div style={{ padding: '5px', marginBottom: '10px', width: '100%' }}>
                                <Typography variant='h6'><b>Hii, welcome user</b></Typography>
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={3}>
                            <div style={{ padding: '9px', marginBottom: '10px', width: '100%' }}>
                                <Typography style={{ color: 'gray' }}><b>our web analytics dashboard template.</b></Typography>
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={7} sx={{ display: 'flex', flexDirection: 'row', gap: '10px', textAlign: "center" }}>
                            <div style={{ padding: '1px', marginBottom: '10px', width: '100%', height: '44px' }}>
                                <Button variant="outlined" sx={{ ml: 'auto', float: "right", margin: "2px", backgroundColor: "#5FBDFF", color: "white" }}>
                                    add user
                                </Button>

                                <Button variant="outlined" sx={{ ml: 'auto', float: "right", margin: "2px", backgroundColor: "white" }}>
                                    Print
                                </Button>

                                <Button variant="outlined" sx={{ ml: 'auto', float: "right", margin: "2px", backgroundColor: "white" }}>
                                    Email
                                </Button>
                            </div>
                        </Grid>

                    </Grid>
                </Grid>

                <br></br>
                <Grid container spacing={2} style={{ marginTop: "5px" }}>
                    <Grid item lg={3} md={6} sm={12} xs={12} >

                        <div className='box1' style={{ backgroundColor: "#FFB534" }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <div style={{ flex: "90%", color: "white" }}>
                                    <Typography className='col'>Sales</Typography>
                                    <Typography className='col' variant='h5'><b>$8,753</b></Typography>
                                    <Typography className='col'>18.33% Since last month</Typography>
                                </div>
                                <div style={{ flex: "10%", borderRadius: "25px", textAlign: "center" }}>
                                    <PersonIcon style={{ color: "white" }} />
                                </div>
                            </div>
                        </div>


                        <div className='box2' style={{ backgroundColor: "#FF6AC2", color: "white" }}>
                            <div style={{ display: "inline-block", float: "left", width: "90%" }}>
                                <Typography className='col'>Margin</Typography>
                                <Typography className='col' variant='h5'><b>$5,300</b></Typography>
                                <Typography className='col' >13.21% Since last month</Typography>
                            </div>
                            <div style={{ display: "inline-block", float: "left", width: "10%", color: "white", borderRadius: "25px", textAlign: "center" }}>
                                <PersonIcon />
                            </div>
                        </div>


                        <div className='box3' style={{ backgroundColor: "#4E4FEB" }}>
                            <div style={{ display: "inline-block", float: "left", width: "90%", color: "white" }}>
                                <Typography className='col'>Orders</Typography>
                                <Typography className='col' variant='h5'><b>$1,753</b></Typography>
                                <Typography className='col' >67.98% Since last month</Typography>
                            </div>
                            <div style={{ display: "inline-block", float: "left", width: "10%", color: "white", borderRadius: "25px", textAlign: "center" }}>
                                <PersonIcon />
                            </div>

                        </div>


                        <div className='box4' style={{ backgroundColor: "#45CFDD" }}>
                            <div style={{ display: "inline-block", float: "left", width: "90%" }}>
                                <Typography className='col'>Affiliate</Typography>
                                <Typography className='col' variant='h5'><b>2368</b></Typography>
                                <Typography className='col' >20.32% Since last month</Typography>
                            </div>
                            <div style={{ display: "inline-block", float: "left", width: "10%", color: "white", borderRadius: "25px", textAlign: "center" }}>
                                <PersonIcon />
                            </div>
                        </div>
                    </Grid>


                    {/* Second Grid - One Box with Text and Download Button */}
                    <Grid item lg={9} md={6} sm={12} xs={12} style={{ backgroundColor: "white" }}>

                        <div className='boxone'>
                            <Grid container spacing={2}>
                                <Grid item xs={6} sm={6}>
                                    <div style={{ width: '100%', height: '100px' }}>
                                        <Typography><b>Business Survey</b></Typography>
                                        <Typography>Show overview Jan 2018 - Dec 2019 See Details</Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <div style={{ width: '100%', height: '100px' }}>

                                        <Button style={{ float: "right", color: "#7B66FF", backgroundColor: "#DFCCFB" }} variant="outlined">
                                            Download
                                        </Button>


                                    </div>
                                </Grid>
                            </Grid>
                        </div>

                        <div className='boxsss'>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={4}>
                                    <div style={{ width: "100%", border: "2px solid gray", height: "auto", padding: "10px", borderRadius: "5px" }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={6} sm={6}>
                                                <div style={{ width: '100%', height: 'auto' }}>
                                                    <Typography>Today Earnings</Typography>
                                                    <Typography variant='h6'><b>$5,300</b></Typography>
                                                    <Typography style={{ color: "#64CCC5" }}>-310 avg. sales</Typography>
                                                </div>
                                            </Grid>
                                            <Grid item xs={6} sm={6}>
                                                <div style={{ width: '100%', height: 'auto' }}>
                                                    <BarChartIcon style={{ float: "right", color: "blue", fontSize: "40px" }} />
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Grid>

                                <Grid item xs={12} sm={4}>
                                    <div style={{ width: "100%", border: "2px solid gray", height: "auto", padding: "10px", borderRadius: "5px" }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={6} sm={6}>
                                                <div style={{ width: '100%', height: 'auto' }}>
                                                    <Typography>Product Sold</Typography>
                                                    <Typography variant='h6'><b>$9,100</b></Typography>
                                                    <Typography style={{ color: "#FF4B91" }}>-310 avg. sales</Typography>
                                                </div>
                                            </Grid>
                                            <Grid item xs={6} sm={6}>
                                                <div style={{ width: '100%', height: 'auto' }}>
                                                    <BarChartIcon style={{ float: "right", color: "blue", fontSize: "40px" }} />
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Grid>

                                <Grid item xs={12} sm={4}>
                                    <div style={{ width: "100%", border: "2px solid gray", height: "auto", padding: "10px", borderRadius: "5px" }}>

                                        <Grid container spacing={2}>
                                            <Grid item xs={6} sm={6}>
                                                <div style={{ width: '100%', height: 'auto' }}>
                                                    <Typography>Today Orders</Typography>
                                                    <Typography variant='h6'><b>$4,354</b></Typography>
                                                    <Typography style={{ color: "#64CCC5" }}>-310 avg. sales</Typography>
                                                </div>
                                            </Grid>
                                            <Grid item xs={6} sm={6}>
                                                <div style={{ width: '100%', height: 'auto' }}>
                                                    <BarChartIcon style={{ float: "right", color: "blue", fontSize: "40px" }} />
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>

                        <div className='boxthree'>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <img
                                        src={crop}
                                        alt="Your img"
                                        style={{
                                            width: '100%',
                                            height: '80%',
                                            objectFit: 'cover',
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </div>

                        <div className='boxfour'>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={8}>
                                    <div >
                                        <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. <b style={{ color: "gray" }}>Learn More</b></Typography>
                                    </div>
                                </Grid>

                                <Grid item xs={12} sm={4}>
                                    <div>
                                        <Typography>Sales Revenue</Typography>

                                        <span>
                                            <b>$2,45,500</b>
                                            <span style={{ color: "#FF6AC2" }}>last 8 months</span>
                                        </span>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid
                            item
                            lg={12}
                            md={12}
                            xs={12}
                            sx={{
                                marginTop: '30px',
                                display: 'flex',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                            }}
                        >
                            <Grid item xs={12} sm={12} md={12} lg={8} style={{ padding: "0px 18px",border:"2px solid black" }} spacing={2} >
                                <div style={{ width: '100%' }}>
                                    <TableContainer component={Paper}>
                                        <b style={{ margin: "10px" }}> Purchase History</b>
                                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Customer</TableCell>
                                                    <TableCell align="right">Project</TableCell>
                                                    <TableCell align="right">Invoice</TableCell>
                                                    <TableCell align="right">Amount</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {rows.map((row) => (
                                                    <TableRow
                                                        key={row.name}
                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell component="th" scope="row">
                                                            {row.name}
                                                        </TableCell>
                                                        <TableCell align="right">{row.project}</TableCell>
                                                        <TableCell align="right">{row.Invoice}</TableCell>
                                                        <TableCell align="right">{row.Amount}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </div>
                            </Grid>


                            <Grid item xs={12} sm={12} md={12} lg={4} sx={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: "18px", backgroundColor: "white" }}>
                                {/* First Row */}
                                <Grid item >
                                    <div style={{ padding: '1px', marginBottom: '10px', width: '100%', height: 'auto' }}>
                                        <Typography><b>Business Survey</b></Typography>
                                        <Typography>Lorem ipsum dolor sitadipiscing elit, sed amet do eiusmod tempor we find a new solution</Typography>
                                    </div>
                                </Grid>


                                <Grid item >
                                    {/* First Column */}
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={4} sm={6}>
                                            <div style={{ padding: '1px', marginBottom: '10px', width: '100%', height: 'auto' }}>
                                                <img
                                                    src={img1}
                                                    alt="Your img"
                                                    style={{
                                                        width: '80px',
                                                        height: '50px',
                                                        objectFit: 'cover',
                                                        borderRadius: "5px"
                                                    }}

                                                />

                                            </div>
                                        </Grid>

                                        {/* Second Column */}
                                        <Grid item xs={12} md={8} sm={6} >
                                            <Typography><b>Villa called Archagel</b></Typography>
                                            <Typography>St, San Diego, CA</Typography>
                                            <Typography>St, San Diego, CA</Typography>

                                        </Grid>
                                    </Grid>
                                </Grid>

                                {/* Third Row */}
                                <Grid item >
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={4} sm={6}>
                                            <div style={{ padding: '1px', marginBottom: '10px', width: '100%', height: 'auto' }}>
                                                <img
                                                    src={img2}
                                                    alt="Your img"
                                                    style={{
                                                        width: '80px',
                                                        height: '50px',
                                                        objectFit: 'cover',
                                                        borderRadius: "5px"
                                                    }}
                                                />

                                            </div>
                                        </Grid>

                                        {/* Second Column */}
                                        <Grid item xs={12} md={8} sm={6} >
                                            <Typography><b>Luxury villa in Hermo</b></Typography>
                                            <Typography>Glendale, CA</Typography>
                                            <Typography>$900/mo</Typography>

                                        </Grid>
                                    </Grid>
                                </Grid>

                                {/* four Row */}
                                <Grid item >
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={4} sm={6}>
                                            <div style={{ padding: '1px', marginBottom: '10px', width: '100%', height: 'auto' }}>
                                                <img
                                                    src={img3}
                                                    alt="Your img"
                                                    style={{
                                                        width: '80px',
                                                        height: '50px',
                                                        objectFit: 'cover',
                                                        borderRadius: "5px"
                                                    }}

                                                />

                                            </div>
                                        </Grid>

                                        {/* Second Column */}
                                        <Grid item xs={12} md={8} sm={6} >
                                            <Typography><b>House on the Clarita</b></Typography>
                                            <Typography>Business Survey</Typography>
                                            <Typography>$459/mo</Typography>

                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>


                        </Grid>
                    </Grid>

                </Grid>
            </Box>

        </Box>
    );
}

export default ResponsiveDrawer;








