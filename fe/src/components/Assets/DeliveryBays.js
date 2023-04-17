import React, { useEffect, useState } from 'react';
import '../../Style.css';
import { Box, Typography, Button, Modal, TextField, IconButton, Autocomplete } from '@mui/material';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import ChevronRight from '@mui/icons-material/ChevronRight';

const AddButton = styled(Button)({
  borderRadius: 3,
  padding: '21px 20px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  backgroundColor: '#0f72bd',
  lineHeight: 1.5,
  borderColor: '#0f72bd',
  color: '#ffffff',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#004f8a',
    borderColor: '#004f8a',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0f72bd',
    borderColor: '#0f72bd',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});
const CancelButton = styled(Button)({
  borderRadius: 3,
  padding: '21px 20px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  backgroundColor: '#ededed',
  lineHeight: 1.5,
  borderColor: '#0f72bd',
  color: '#505e71',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#e0e0e0',
    borderColor: '#e0e0e0',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#e0e0e0',
    borderColor: '#e0e0e0',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});
const ListButton = styled(Button)({
  borderRadius: 0,
  width:'100%',
  padding: '21px 50px',
  justifyContent: 'space-between',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 20,
  fontWeight: '300',
  backgroundColor: '#fffff',
  lineHeight: 1.5,
  borderColor: '#0f72bd',
  color: '#505e71',
  fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
      backgroundColor: '#e0e0e0',
      borderColor: '#e0e0e0',
      boxShadow: 'none',
  }
});
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  height: '100%',
  backgroundColor: 'white',
};

function DeliveryBays() {
  const [craneAssets, setCraneAssets] = useState([]);

  const [customName, setCustomName] = useState();
  const [maxLength, setMaxLength] = useState();
  const [unit, setUnit] = useState();
  const options = [
    'metres',
    'cm'
  ];

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const showAssets = () => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    };
    try {
      axios.get('http://127.0.0.1:8000/api/assets/bays', {
        headers: headers
      })
      .then((res) => {
        setCraneAssets(res.data.data);
      })
    } catch(e) {
      console.log(e);
    }
  }
  const addAsset = () => {
    const data = {
      custom_name: customName,
      max_length: maxLength,
      unit: unit,
      type: 'bays',
    };
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    };
    try {
      axios.post('http://127.0.0.1:8000/api/assets', data, {
        headers: headers
      })
      .then((res) => {
        console.log(res.data.message);
        handleClose();
        showAssets();
      })
    } catch(e) {
      console.log(e);
    }
  };

  useEffect(() => {
    showAssets();
  }, [])

  return (
    <>
      <Box sx={{
          position: 'relative', 
          width: 415,
          maxWidth: 415,
          paddingBottom: '100px',
          boxShadow: '3px 3px 7px rgba(103, 162, 206, 0.2)', 
          zIndex: 5,
        }}
      >
        <Box display="flex" sx={{
          height: '75px',
          borderBottom: 2,
          borderColor: '#edf2f6',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Box borderRight={2} borderColor='#e0e0e0' sx={{display: 'flex', width:100, height:75}}>
            <Button sx={{flexDirection: 'column', width: '100%', height: '100%'}}>
                <Box border={2} borderColor='#9cb1cd' sx={{width: '20px', marginBottom: '2px', borderRadius: 1}}/>
                <Box border={2} borderColor='#9cb1cd' sx={{width: '13px', marginBottom: '2px', borderRadius: 1}}/>
                <Box border={2} borderColor='#9cb1cd' sx={{width: '5px', borderRadius: 1}}/>
            </Button>
          </Box>
          <TextField
            sx={{width: '100%', margin: '0 5px'}}
            placeholder='Search Delivery Bays...'
            InputProps={{
              endAdornment: (
                <SearchIcon/>
              ),
            }}
            />
        </Box>
        <Box display="flex" sx={{
          height: '100%',
        }}>
          <Box display="flex" sx={{height: '100%'}}>
            <div style={{ width: 415, overflow: "hidden", overflowY: 'scroll', height: 'calc(100% - 75px)'}}>
              {
                craneAssets.map((craneAssets) => (
                  <Box sx={{display: 'flex', minHeight: 100, borderBottom: 2, borderBottomColor: '#edf2f6'}} key={craneAssets['id']}>
                    <ListButton>{craneAssets.custom_name}<ChevronRight/></ListButton>
                  </Box>
                ))
              }
            </div>
            <Box display="flex" justifyContent="center" alignItems="center" sx={{position: 'fixed', bottom: 0, height: '100px', width: 415, padding: '15px 20px', borderTop: 2, borderTopColor: '#edf2f6'}}>
              <AddButton sx={{width: '100%', height: '100%'}} onClick={() => handleOpen()}>Add Delivery Bays</AddButton>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{display: 'flex', width: '100%'}}>
        <Box sx={{
            width: 415,
            maxWidth: 415,
            height: '100%',
            paddingBottom: '100px',
            boxShadow: '3px 3px 7px rgba(103, 162, 206, 0.2)', 
            zIndex: 5,
          }}
        ></Box>
        <Box sx={{ flex: '1', height: '100%'}}>
          <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              top: 0,
              width: '100%',
              height: '75px',
              boxShadow: '3px 3px 7px rgba(103, 162, 206, 0.2)', 
              zIndex: 5,
              padding : '10px 50px',
            }}
          >
            <Typography>Delivery Bay Info</Typography>
          </Box>
        </Box>
      </Box>
      <Modal
        open={open}
      >
        <Box sx={style}>
          <Box borderBottom={2} borderColor='#e0e0e0' sx={{display: 'flex', width: '100%', height: '75px', justifyContent: 'flex-end', padding: '10px'}}>
            <IconButton onClick={() => handleClose()}>
              <CloseIcon/>
            </IconButton>
          </Box>
          <Box sx={{display: 'flex', margin: '50px 20px', alignItems: 'center', flexDirection: 'column'}}>
              <Typography>Add Delivery Bay</Typography>
              <Box>
                <Typography>Name</Typography>
                <TextField sx={{width: '360px'}} onChange={(e) => setCustomName(e.target.value)}/>
              </Box>
              <Box>
                <Typography>Maximum Length</Typography>
                <TextField sx={{width: '360px'}} onChange={(e) => setMaxLength(e.target.value)}/>
              </Box>
              <Box>
                <Typography>Unit</Typography>
                <Autocomplete
                  disablePortal
                  //value={value}
                  onChange={(event, newValue) => {setUnit(newValue)}}
                  //inputValue={inputValue}
                  id="controllable-states-demo"
                  options={options}
                  sx={{ width: '360px' }}
                  renderInput={(params) => <TextField {...params} placeholder='Select...'/>}
                />
              </Box>
              <Box sx={{display: 'flex', marginTop: '50px', flexDirection: 'column'}}>
                <Box sx={{marginTop: '10px'}}>
                  <AddButton sx={{width: '360px', height: '75px'}} onClick={() => addAsset()}>Add</AddButton>
                </Box>
                <Box sx={{marginTop: '10px'}}>
                  <CancelButton sx={{width: '360px', height: '75px'}} onClick={() => handleClose()}>Cancel</CancelButton>
                </Box>
              </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default DeliveryBays; 
