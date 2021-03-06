import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route, Link
} from 'react-router-dom';
import './App.css';
import { routes } from './components/configs/routes';
import { AppBar, Button, Dialog, IconButton, Toolbar, Typography } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import Filters from './components/Filters';
import MenuIcon from '@material-ui/icons/Menu';
import { useDispatch } from 'react-redux';
import { actors } from './data/data';
import { actorsDataSuccess } from './slices/actors';

function App() {

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    // dispatch(actorsDataSuccess())
  }, [])

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setOpen(open);
  };

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClickClose = () => {
    setOpenDialog(false);
  };

  return (
    <div className="App">
      <AppBar position="sticky">
        <Toolbar>
          <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <div>
              <img style={{ width: 70, height: 70, margin: '0 16px 0 0' }} src="/logo.PNG" alt=""/>
            </div>
            <Typography>
              Actor’s Base
            </Typography>
          </div>
          <Button variant="contained" color="secondary" onClick={handleClickOpen} style={{ margin: '0 16px' }}>
            Замовити актора
          </Button>
          <IconButton edge="start" color="inherit" aria-label="menu"
                      onClick={toggleDrawer(true)}
                      onKeyDown={toggleDrawer(true)}>
            <MenuIcon/>
          </IconButton>
        </Toolbar>
        <Drawer open={open} anchor="left" onClose={toggleDrawer(false)}>
          <div style={{ width: 348 }}>
            <Filters/>
          </div>
        </Drawer>
      </AppBar>
      <Dialog onClose={handleClickClose} aria-labelledby="simple-dialog-title" open={openDialog}>
        <div style={{ padding: 32, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="body2">
            Телефон: +380 63 119 9945
          </Typography>
          <a href="tel:+380 63 119 9945" style={{ textDecoration: 'none', color: 'black' }}>
            Зателефонувати
          </a>

        </div>
      </Dialog>
      <BrowserRouter>
        <Switch>
          {routes.map((route) => {
            return <Route key={route.path} {...route}/>
          })}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
