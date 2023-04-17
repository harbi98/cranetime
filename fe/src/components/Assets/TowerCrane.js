import React, { useEffect, useState } from 'react';
import '../../Style.css';
import { Box, Typography, Button, Modal, TextField, IconButton, Autocomplete } from '@mui/material';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import ChevronRight from '@mui/icons-material/ChevronRight';
import EditIcon from '@mui/icons-material/Edit';

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

function TowerCrane() {
  const [craneAssets, setCraneAssets] = useState([]);

  const [assetID, setAssetID] = useState();
  const [assetName, setAssetName] = useState('');
  const [assetEquipmentType, setAssetEquipmentType] = useState('');
  const [assetModel, setAssetModel] = useState('');
  const [assetMake, setAssetMake] = useState('');
  const [assetSupplier, setAssetSupplier] = useState('');

  const [customName, setCustomName] = useState();
  const [make, setMake] = useState();
  const [model, setModel] = useState();
  const [equipmentType, setEquipmentType] = useState();
  const options = [
    'Luffer',
    'Hammerhead'
  ];
  //const [equipmentType, setEquipmentType] = useState();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openSetName, setOpenSetName] = useState(false);
  const handleOpenSetName = () => setOpenSetName(true);
  const handleCloseSetName = () => setOpenSetName(false);

  const showAssets = () => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    };
    try {
      axios.get('http://127.0.0.1:8000/api/assets/crane', {
        headers: headers
      })
      .then((res) => {
        setCraneAssets(res.data.data);
      })
    } catch(e) {
      console.log(e);
    }
  }
  const showAsset = (id) => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    };
    try {
      axios.get('http://127.0.0.1:8000/api/asset/'+id, {
        headers: headers
      })
      .then((res) => {
        setAssetID(res.data.data.id);
        setAssetName(res.data.data.custom_name);
        setCustomName(res.data.data.custom_name);
        setAssetEquipmentType(res.data.data.equipment_type);
        setAssetMake(res.data.data.make);
        setAssetModel(res.data.data.model);
        setAssetSupplier(res.data.data.supplier);
      })
    } catch(e) {
      console.log(e);
    }
  }
  const showAsset_onLoad = () => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    };
    try {
      axios.get('http://127.0.0.1:8000/api/assets/crane', {
        headers: headers
      })
      .then((res) => {
        setAssetID(res.data.data[0].id);
        showAsset(res.data.data[0].id);
      })
    } catch(e) {
      console.log(e);
    }
  }
  const addAsset = () => {
    const data = {
      custom_name: customName,
      make: make,
      model: model,
      type: 'crane',
      equipment_type: equipmentType,
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
  const editAssetName = () => {
    const data = {
      custom_name: customName,
    };
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    };
    try {
      axios.put('http://127.0.0.1:8000/api/asset/'+assetID+'/edit-name', data, {
        headers: headers
      })
      .then((res) => {
        console.log(res.data.message);
        handleCloseSetName();
        showAssets();
        showAsset(assetID);
      })
    } catch(e) {
      console.log(e);
    }
  }
  useEffect(() => {
    showAssets();
    showAsset_onLoad();
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
            placeholder='Search Tower Cranes...'
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
                    <ListButton onClick={() => showAsset(craneAssets['id'])}>{craneAssets.custom_name}<ChevronRight/></ListButton>
                  </Box>
                ))
              }
            </div>
            <Box display="flex" justifyContent="center" alignItems="center" sx={{position: 'fixed', bottom: 0, height: '100px', width: 415, padding: '15px 20px', borderTop: 2, borderTopColor: '#edf2f6'}}>
              <AddButton sx={{width: '100%', height: '100%'}} onClick={() => handleOpen()}>Add Crane</AddButton>
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
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1', height: '100%', minWidth: '500px'}}>
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
            <Typography>Tower Crane Info</Typography>
          </Box>
          <Box sx={{display: 'flex', flexDirection: 'column', height: 'calc(100% - 75px)'}}>
            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', borderBottom: 2, borderColor: '#edf2f6', padding: '20px' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', padding: '10px 20px'}}>
                <Typography sx={{fontSize: 18, color: '#808080', fontWeight: '300'}}>Name</Typography>
                <Typography sx={{fontSize: 24, color: '#808080'}}>{assetName}</Typography>
              </Box>
              <Box sx={{ display: 'flex', width: '100px', borderLeft: 2, borderColor: '#edf2f6', alignItems: 'center', justifyContent: 'center'}}>
                <IconButton onClick={() => {handleOpenSetName()}}>
                  <EditIcon sx={{color: '#808080'}}/>
                </IconButton>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', borderBottom: 2, borderColor: '#edf2f6', padding: '20px' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', padding: '10px 20px'}}>
                <Typography sx={{fontSize: 18, color: '#808080', fontWeight: '300'}}>Type</Typography>
                <Typography sx={{fontSize: 24, color: '#808080'}}>{assetEquipmentType}</Typography>
              </Box>
              <Box sx={{ display: 'flex', width: '100px', borderLeft: 2, borderColor: '#edf2f6', alignItems: 'center', justifyContent: 'center'}}>
                <IconButton>
                  <EditIcon sx={{color: '#808080'}}/>
                </IconButton>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', borderBottom: 2, borderColor: '#edf2f6', padding: '20px' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', padding: '10px 20px'}}>
                <Typography sx={{fontSize: 18, color: '#808080', fontWeight: '300'}}>Make & Model</Typography>
                <Typography sx={{fontSize: 24, color: '#808080'}}>{assetMake || assetModel ? assetMake + ' - ' + assetModel : 'N/A'}</Typography>
              </Box>
              <Box sx={{ display: 'flex', width: '100px', borderLeft: 2, borderColor: '#edf2f6', alignItems: 'center', justifyContent: 'center'}}>
                <IconButton>
                  <EditIcon sx={{color: '#808080'}}/>
                </IconButton>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', borderBottom: 2, borderColor: '#edf2f6', padding: '20px' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', padding: '10px 20px'}}>
                <Typography sx={{fontSize: 18, color: '#808080', fontWeight: '300'}}>Supplier</Typography>
                <Typography sx={{fontSize: 24, color: '#808080'}}>{assetSupplier ? assetSupplier : 'N/A' }</Typography>
              </Box>
              <Box sx={{ display: 'flex', width: '100px', borderLeft: 2, borderColor: '#edf2f6', alignItems: 'center', justifyContent: 'center'}}>
                <IconButton>
                  <EditIcon sx={{color: '#808080'}}/>
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* ------------------------------------- //////////////// Modals ///////////////// ------------------------------------- */}
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
              <Typography>Add Crane</Typography>
              <Box>
                <Typography>Name</Typography>
                <TextField sx={{width: '360px'}} onChange={(e) => setCustomName(e.target.value)}/>
              </Box>
              <Box>
                <Typography>Crane Type</Typography>
                <Autocomplete
                  disablePortal
                  //value={value}
                  onChange={(event, newValue) => {setEquipmentType(newValue)}}
                  //inputValue={inputValue}
                  id="controllable-states-demo"
                  options={options}
                  sx={{ width: '360px' }}
                  renderInput={(params) => <TextField {...params}/>}
                />
              </Box>
              <Box>
                <Typography>Crane Manufacturer</Typography>
                <TextField sx={{width: '360px'}} onChange={(e) => setMake(e.target.value)}/>
              </Box>
              <Box>
                <Typography>Model</Typography>
                <TextField sx={{width: '360px'}} onChange={(e) => setModel(e.target.value)}/>
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
      <Modal
        open={openSetName}
      >
        <Box sx={style}>
          <Box borderBottom={2} borderColor='#e0e0e0' sx={{display: 'flex', width: '100%', height: '75px', justifyContent: 'flex-end', padding: '10px'}}>
            <IconButton onClick={() => handleCloseSetName()}>
              <CloseIcon/>
            </IconButton>
          </Box>
          <Box sx={{display: 'flex', margin: '50px 20px', alignItems: 'center', flexDirection: 'column'}}>
              <Typography>Set Crane Name</Typography>
              <Box>
                <Typography>Name</Typography>
                <TextField sx={{width: '360px'}} value={customName} onChange={(e) => setCustomName(e.target.value)}/>
              </Box>
              <Box sx={{display: 'flex', marginTop: '50px', flexDirection: 'column'}}>
                <Box sx={{marginTop: '10px'}}>
                  <AddButton sx={{width: '360px', height: '75px'}} onClick={() => editAssetName()}>Update</AddButton>
                </Box>
                <Box sx={{marginTop: '10px'}}>
                  <CancelButton sx={{width: '360px', height: '75px'}} onClick={() => handleCloseSetName()}>Cancel</CancelButton>
                </Box>
              </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default TowerCrane; 
