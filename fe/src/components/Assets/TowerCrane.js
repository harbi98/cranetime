import React, { useEffect, useState } from 'react';
import '../../Style.css';
import { Box, Typography, Button, Modal, TextField, IconButton, Autocomplete, Tab, Tabs, InputAdornment } from '@mui/material';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import ChevronRight from '@mui/icons-material/ChevronRight';
import EditIcon from '@mui/icons-material/Edit';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ReplayIcon from '@mui/icons-material/Replay';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

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
  }
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
const ReloadButton = styled(Button)({
  padding: '0',
  width: '60px',
  height: '60px',
  border: '1px solid #edf2f6',
  color: '#8897aa',
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
    color: '#ffff'
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0f72bd',
    borderColor: '#0f72bd',
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
  borderBottom: '1px solid #edf2f6',
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
    backgroundColor: '#f9fbfd',
    boxShadow: 'none',
  }
});
const AntTabs = styled(Tabs)({
  display: 'flex',
  height: '300px',
  '& .MuiTabs-indicator': {
    backgroundColor: '#1890ff',
  },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  minHeight: '100px',
  borderBottom: '1px solid #edf2f6',
  textTransform: 'none',
  minWidth: '415px',
  fontWeight: theme.typography.fontWeightRegular,
  marginRight: theme.spacing(1),
  color: '#7f8fa4',
  img: {
    filter: "invert(73%) sepia(6%) saturate(1288%) hue-rotate(175deg) brightness(98%) contrast(82%)"
  },
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
    backgroundColor: '#f9fbfd',
    boxShadow: "10px 0 5px -5px rgba(103, 162, 206, 0.05) inset"
  },
  '&.Mui-selected': {
    color: '#0f72bd',
    img: {
      filter: "invert(29%) sepia(100%) saturate(1141%) hue-rotate(181deg) brightness(96%) contrast(88%)"
    },
    fontWeight: theme.typography.fontWeightMedium,
  },
}));
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
  const [tabIndex, setTabIndex] = useState(0);
  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

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

  const [openSetType, setOpenSetType] = useState(false);
  const handleOpenSetType = () => setOpenSetType(true);
  const handleCloseSetType = () => setOpenSetType(false);

  const [openSetMakeModel, setOpenSetMakeModel] = useState(false);
  const handleOpenSetMakeModel = () => setOpenSetMakeModel(true);
  const handleCloseSetMakeModel = () => setOpenSetMakeModel(false);

  const [openAddExemption, setOpenAddExemption] = useState(false);
  const handleOpenAddExemption = () => setOpenAddExemption(true);
  const handleCloseAddExemption = () => setOpenAddExemption(false);

  const [openAddBreaktime, setOpenAddBreaktime] = useState(false);
  const handleOpenAddBreaktime = () => setOpenAddBreaktime(true);
  const handleCloseAddBreaktime = () => setOpenAddBreaktime(false);

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
        setEquipmentType(res.data.data.equipment_type);

        setAssetMake(res.data.data.make);
        setMake(res.data.data.make);

        setAssetModel(res.data.data.model);
        setModel(res.data.data.model);

        setAssetSupplier(res.data.data.supplier);
        
        setTabIndex("1");
      })
    } catch(e) {
      console.log(e);
    }
  }
  const searchAsset = (custom_name) => {
    setCraneAssets([]);
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    };
    if(custom_name !== "") {
      try {
        axios.get('http://127.0.0.1:8000/api/asset/search/crane/'+custom_name, {
          headers: headers
        })
        .then((res) => {
          if(res.data.data.length > 0) {
            setCraneAssets(res.data.data);
            showAsset(res.data.data[0].id);
          } else {
            setAssetID('');
            setAssetName('');
            setCustomName('');
            setAssetEquipmentType('');
            setEquipmentType('');
            setAssetMake('');
            setMake('');
            setAssetModel('');
            setModel('');
          }
        })
      } catch(e) {
        console.log(e);
      }
    } else {
      showAssets();
      showAsset_onLoad();
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
        showAsset_onLoad();
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
  const editAssetType = () => {
    const data = {
      equipment_type: equipmentType,
    };
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    };
    try {
      axios.put('http://127.0.0.1:8000/api/asset/'+assetID+'/edit-type', data, {
        headers: headers
      })
      .then((res) => {
        console.log(res.data.message);
        handleCloseSetType();
        showAssets();
        showAsset(assetID);
      })
    } catch(e) {
      console.log(e);
    }
  }
  const editAssetMakeModel = () => {
    const data = {
      make: make,
      model: model
    };
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    };
    try {
      axios.put('http://127.0.0.1:8000/api/asset/'+assetID+'/edit-make-model', data, {
        headers: headers
      })
      .then((res) => {
        console.log(res.data.message);
        handleCloseSetMakeModel();
        showAssets();
        showAsset(assetID);
      })
    } catch(e) {
      console.log(e);
    }
  }
  useEffect(() => {
    showAssets();
    showAsset_onLoad(); // eslint-disable-next-line
  }, [])
  const tabView = () => {
    if(tabIndex === "1") {
      return (
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1', height: '100%', minWidth: '500px'}}>
          <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              height: '65px',
              boxShadow: '3px 3px 7px rgba(103, 162, 206, 0.2)',
              padding : '0 10px 0 25px',
            }}
          >
            <p style={{fontSize: '1.5rem', fontWeight: '300', color: '#505e71'}}>Tower Crane Info</p>
          </Box>
          <Box sx={{display: 'flex', flexDirection: 'column', height: 'calc(100% - 75px)'}}>
            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', borderBottom: '1px solid #edf2f6', borderColor: '#edf2f6', padding: '30px' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center'}}>
                <p style={{fontSize: '0.875rem', color: '#889ab1', fontWeight: '300', marginBottom: '5px'}}>Name</p>
                <p style={{fontSize: '1.125rem', fontWeight: '200', color: '#505e71', textOverflow: 'ellipsis', overflow: 'hidden'}}>{assetName ? assetName : 'N/A'}</p>
              </Box>
              <Box sx={{ display: 'flex', width: '100px', borderLeft: 2, borderColor: '#edf2f6', alignItems: 'center', justifyContent: 'center'}}>
                <IconButton onClick={() => {handleOpenSetName()}}>
                  <EditIcon sx={{color: '#808080'}}/>
                </IconButton>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', borderBottom: 2, borderColor: '#edf2f6', padding: '30px' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center'}}>
                <p style={{fontSize: '0.875rem', color: '#889ab1', fontWeight: '300', marginBottom: '5px'}}>Type</p>
                <p style={{fontSize: '1.125rem', fontWeight: '200', color: '#505e71', textOverflow: 'ellipsis', overflow: 'hidden'}}>{assetEquipmentType ? assetEquipmentType : 'N/A'}</p>
              </Box>
              <Box sx={{ display: 'flex', width: '100px', borderLeft: 2, borderColor: '#edf2f6', alignItems: 'center', justifyContent: 'center'}}>
                <IconButton onClick={() => {handleOpenSetType()}}>
                  <EditIcon sx={{color: '#808080'}}/>
                </IconButton>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', borderBottom: 2, borderColor: '#edf2f6', padding: '30px' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center'}}>
                <p style={{fontSize: '0.875rem', color: '#889ab1', fontWeight: '300', marginBottom: '5px'}}>Make & Model</p>
                <p style={{fontSize: '1.125rem', fontWeight: '200', color: '#505e71', textOverflow: 'ellipsis', overflow: 'hidden'}}>{assetMake ? assetMake : 'N/A'} - {assetModel ? assetModel : 'N/A'}</p>
              </Box>
              <Box sx={{ display: 'flex', width: '100px', borderLeft: 2, borderColor: '#edf2f6', alignItems: 'center', justifyContent: 'center'}}>
                <IconButton onClick={() => {handleOpenSetMakeModel()}}>
                  <EditIcon sx={{color: '#808080'}}/>
                </IconButton>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', borderBottom: 2, borderColor: '#edf2f6', padding: '30px' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center'}}>
                <p style={{fontSize: '0.875rem', color: '#889ab1', fontWeight: '300', marginBottom: '5px'}}>Supplier</p>
                <p style={{fontSize: '1.125rem', fontWeight: '200', color: '#505e71', textOverflow: 'ellipsis', overflow: 'hidden'}}>{assetSupplier ? assetSupplier : 'N/A' }</p>
              </Box>
              <Box sx={{ display: 'flex', width: '100px', borderLeft: 2, borderColor: '#edf2f6', alignItems: 'center', justifyContent: 'center'}}>
                <IconButton>
                  <EditIcon sx={{color: '#808080'}}/>
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      )
    } else if(tabIndex === "2") {
      return (
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1', height: '100%', minWidth: '500px'}}>
          <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              height: '65px',
              boxShadow: '3px 3px 7px rgba(103, 162, 206, 0.2)',
              padding : '0 10px 0 25px',
            }}
          >
            <p style={{fontSize: '1.5rem', fontWeight: '300', color: '#505e71'}}>Location</p>
          </Box>
        </Box>
      )
    } else if(tabIndex === "3") {
      return (
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1', height: '100%', minWidth: '500px'}}>
          <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              height: '65px',
              boxShadow: '3px 3px 7px rgba(103, 162, 206, 0.2)',
              padding : '0 10px 0 25px',
            }}
          >
            <p style={{fontSize: '1.5rem', fontWeight: '300', color: '#505e71'}}>Capacity Matrix</p>
          </Box>
        </Box>
      )
    } else if(tabIndex === "4") {
      return (
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1', height: '100%', minWidth: '500px'}}>
          <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              height: '65px',
              boxShadow: '3px 3px 7px rgba(103, 162, 206, 0.2)',
              padding : '0 10px 0 25px',
            }}
          >
            <p style={{fontSize: '1.5rem', fontWeight: '300', color: '#505e71'}}>Delivery Bays</p>
          </Box>
        </Box>
      )
    } else if(tabIndex === "5") {
      return (
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1', height: '100%', minWidth: '500px'}}>
          <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              height: '65px',
              boxShadow: '3px 3px 7px rgba(103, 162, 206, 0.2)',
              padding : '0 10px 0 25px',
            }}
          >
            <p style={{fontSize: '1.5rem', fontWeight: '300', color: '#505e71'}}>Loading Platforms</p>
          </Box>
        </Box>
      )
    } else if(tabIndex === "6") {
      return (
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1', height: '100%', minWidth: '500px'}}>
          <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              height: '65px',
              boxShadow: '3px 3px 7px rgba(103, 162, 206, 0.2)',
              padding : '0 10px 0 25px',
            }}
          >
            <p style={{fontSize: '1.5rem', fontWeight: '300', color: '#505e71'}}>Mobile Cranes</p>
          </Box>
        </Box>
      )
    } else if(tabIndex === "7") {
      return (
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1', height: '100%', minWidth: '500px'}}>
          <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              height: '65px',
              boxShadow: '3px 3px 7px rgba(103, 162, 206, 0.2)',
              padding : '0 10px 0 25px',
            }}
          >
            <p style={{fontSize: '1.5rem', fontWeight: '300', color: '#505e71'}}>Hoist</p>
          </Box>
        </Box>
      )
    } else if(tabIndex === "8") {
      return (
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1', height: '100%', minWidth: '500px'}}>
          <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              height: '65px',
              boxShadow: '3px 3px 7px rgba(103, 162, 206, 0.2)',
              padding : '0 10px 0 25px',
            }}
          >
            <p style={{fontSize: '1.5rem', fontWeight: '300', color: '#505e71'}}>Material Handling</p>
          </Box>
        </Box>
      )
    } else if(tabIndex === "9") {
      return (
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1', height: '100%', minWidth: '500px'}}>
          <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              height: '65px',
              boxShadow: '3px 3px 7px rgba(103, 162, 206, 0.2)',
              padding : '0 10px 0 25px',
            }}
          >
            <p style={{fontSize: '1.5rem', fontWeight: '300', color: '#505e71'}}>Concrete Pumps</p>
          </Box>
        </Box>
      )
    } else if(tabIndex === "10") {
      return (
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1', width: '100%', overflowY: 'scroll'}}>
          <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              height: '65px',
              minHeight: '65px',
              boxShadow: '3px 3px 7px rgba(103, 162, 206, 0.2)',
              padding : '0 10px 0 25px',
            }}
          >
            <p style={{fontSize: '1.5rem', fontWeight: '300', color: '#505e71'}}>Availability</p>
          </Box>
          <Box sx={{display: 'block'}}>
            <Box sx={{textAlign: 'center', padding: '40px 0', borderBottom: '1px solid #edf2f6', backgroundColor: '#f1fdf1', boxShadow: "10px 0 5px -5px rgba(103, 162, 206, 0.1) inset"}}>
              <p style={{fontWeight: '600', fontSize: '1.5rem', marginBottom: '5px', color: '#090'}}>Available Now</p>
              <p style={{fontWeight: '300', fontSize: '0.875rem', color: '#090'}}>13:00 - 15:00 - Currently 13:20</p>
            </Box>
            <Box sx={{display: 'flex', backgroundColor: '#f9fbfd', borderBottom: '1px solid #edf2f6', padding: '30px 0', boxShadow: "10px 0 5px -5px rgba(103, 162, 206, 0.1) inset"}}>
              <Box sx={{width: '50%', padding: '0 35px'}}>
                <p style={{color: '#505e71', fontWeight: '300', fontSize: '1.125rem', marginBottom: '5px'}}>Custom Availability</p>
                <p style={{color: '#889ab1', fontWeight: '300', fontSize: '0.875rem'}}>Asset availability runs off the site opening times and exemptions unless you set custom availability.</p>
              </Box>
              <Box sx={{width: '50%', padding: '0 25px'}}>
                <AddButton sx={{width: '100%'}} onClick={() => handleOpenAddExemption()}>Add Custom Availability</AddButton>
              </Box>
            </Box>
            <Box sx={{borderBottom: '1px solid #edf2f6', padding: '35px'}}>
              <p style={{color: '#505e71', fontWeight: '300', fontSize: '1.125rem'}}>Breaks</p>
            </Box>
            <Box sx={{borderBottom: '1px solid #edf2f6', padding: '20px'}}>
              <AddButton sx={{width: '100%'}} onClick={() => handleOpenAddBreaktime()}>Add Break Time</AddButton>
            </Box>
            <Box sx={{borderBottom: '1px solid #edf2f6', padding: '35px'}}>
              <p style={{color: '#505e71', fontWeight: '300', fontSize: '1.5rem', marginBottom: '5px'}}>Exemptions</p>
              <p style={{display: 'inline-block', color: '#889ab1', fontWeight: '300', fontSize: '0.875rem'}}>Create periods either open or closed overriding all opening times.</p>
            </Box>
            <Box sx={{borderBottom: '1px solid #edf2f6', padding: '20px'}}>
              <AddButton sx={{width: '100%'}}>Add Exemptions</AddButton>
            </Box>
          </Box>
        </Box>
      )
    }
  }
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
            onChange={(e) => searchAsset(e.target.value)}
            />
        </Box>
        <Box display="flex" sx={{
          height: '100%',
        }}>
          <Box display="flex" sx={{height: '100%'}}>
            <div style={{ width: 415, overflow: "hidden", overflowY: 'scroll', height: 'calc(100% - 75px)'}}>
              {
                craneAssets.map((craneAssets) => (
                  <Box sx={{display: 'flex', minHeight: 100}} key={craneAssets['id']}>
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
          overflow: 'auto',
          width: 415,
          maxWidth: 415,
          height: '100%',
          boxShadow: '3px 3px 7px rgba(103, 162, 206, 0.2)',
        }}
        >
          <Box sx={{
            padding: '30px',
            borderBottom: 1,
            borderBottomColor: '#edf2f6',
          }}>
            <Box sx={{
              minHeight: '215px',
              borderRadius: '3px',
              border: 1,
              borderColor: '#edf2f6',
              backgroundColor: '#f9fbfd',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '25px'
            }}>
              <img style={{width: '32px', height: '32px', filter: "invert(36%) sepia(18%) saturate(535%) hue-rotate(175deg) brightness(94%) contrast(93%)"}} src={require("../../icons/crane.png")} alt="Crane"/>
            </Box>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              textAlign: 'center',
            }}>
              <Typography sx={{color: '#505e71', fontWeight: 300, fontSize: '1.5rem'}}>{assetName ? assetName : 'N/A'}</Typography>
            </Box>
          </Box>
          <Box sx={{
            display: 'flex',
            padding: '15px 20px',
            borderBottom: 1,
            borderBottomColor: '#edf2f6'
          }}>
            <Typography sx={{display: 'inline-block', fontWeight: 300, fontSize: '0.875rem', color: '#889ab1'}}>Crane Settings</Typography>
          </Box>
          <Box display="block">
            <AntTabs
              orientation='vertical'
              value={tabIndex}
              onChange={handleChange}
              TabIndicatorProps={{
                sx: {
                  left: 5,
                  width: 5,
                  borderRadius: 2,
                },
                style: {
                  backgroundColor: '#0f72bd',
                }
              }}
              sx={{height: '100%'}}
              scrollButtons={false}
            >
              <AntTab value="1" label={
                  <React.Fragment>
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '0px 20px'}}>
                        <img style={{width: '32px', height: '32px'}} src={require("../../icons/crane.png")} alt="Crane"/>
                        <Box sx={{height: '50px', borderLeft: 1, borderColor: '#edf2f6', margin: '0px 25px'}}/>
                        <Typography sx={{fontWeight: 400, fontSize: '1.125rem'}}>Crane Info</Typography>
                      </Box>
                      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '0px 20px'}}>
                        <ChevronRight/>
                      </Box>
                    </Box>
                  </React.Fragment>
                }
              />
              <AntTab value="2" label={
                  <React.Fragment>
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '0px 20px'}}>
                        <img style={{width: '32px', height: '32px'}} src={require("../../icons/pin.png")} alt="Location"/>
                        <Box sx={{height: '50px', borderLeft: 1, borderColor: '#edf2f6', margin: '0px 25px'}}/>
                        <Typography sx={{fontWeight: 400, fontSize: '1.125rem'}}>Location</Typography>
                      </Box>
                      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '0px 20px'}}>
                        <ChevronRight/>
                      </Box>
                    </Box>
                  </React.Fragment>
                }
              />
              <AntTab value="3" label={
                  <React.Fragment>
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '0px 20px'}}>
                        <img style={{width: '32px', height: '32px'}} src={require("../../icons/grid.png")} alt="Grid"/>
                        <Box sx={{height: '50px', borderLeft: 1, borderColor: '#edf2f6', margin: '0px 25px'}}/>
                        <Typography sx={{fontWeight: 400, fontSize: '1.125rem'}}>Capacity Matrix</Typography>
                      </Box>
                      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '0px 20px'}}>
                        <ChevronRight/>
                      </Box>
                    </Box>
                  </React.Fragment>
                }
              />
              <AntTab value="4" label={
                  <React.Fragment>
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '0px 20px'}}>
                        <img style={{width: '32px', height: '32px'}} src={require("../../icons/truck.png")} alt="Delivery Bays"/>
                        <Box sx={{height: '50px', borderLeft: 1, borderColor: '#edf2f6', margin: '0px 25px'}}/>
                        <Typography sx={{fontWeight: 400, fontSize: '1.125rem'}}>Delivery Bays</Typography>
                      </Box>
                      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '0px 20px'}}>
                        <ChevronRight/>
                      </Box>
                    </Box>
                  </React.Fragment>
                }
              />
              <AntTab value="5" label={
                  <React.Fragment>
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '0px 20px'}}>
                        <img style={{width: '32px', height: '32px'}} src={require("../../icons/platform.png")} alt="Loading Platforms"/>
                        <Box sx={{height: '50px', borderLeft: 1, borderColor: '#edf2f6', margin: '0px 25px'}}/>
                        <Typography sx={{fontWeight: 400, fontSize: '1.125rem'}}>Loading Platforms</Typography>
                      </Box>
                      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '0px 20px'}}>
                        <ChevronRight/>
                      </Box>
                    </Box>
                  </React.Fragment>
                }
              />
              <AntTab value="6" label={
                  <React.Fragment>
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '0px 20px'}}>
                        <img style={{width: '32px', height: '32px'}} src={require("../../icons/mcrane.png")} alt="Mobile Cranes"/>
                        <Box sx={{height: '50px', borderLeft: 1, borderColor: '#edf2f6', margin: '0px 25px'}}/>
                        <Typography sx={{fontWeight: 400, fontSize: '1.125rem'}}>Mobile Cranes</Typography>
                      </Box>
                      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '0px 20px'}}>
                        <ChevronRight/>
                      </Box>
                    </Box>
                  </React.Fragment>
                }
              />
              <AntTab value="7" label={
                  <React.Fragment>
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '0px 20px'}}>
                        <img style={{width: '32px', height: '32px'}} src={require("../../icons/elevator.png")} alt="Hoist"/>
                        <Box sx={{height: '50px', borderLeft: 1, borderColor: '#edf2f6', margin: '0px 25px'}}/>
                        <Typography sx={{fontWeight: 400, fontSize: '1.125rem'}}>Hoist</Typography>
                      </Box>
                      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '0px 20px'}}>
                        <ChevronRight/>
                      </Box>
                    </Box>
                  </React.Fragment>
                }
              />
              <AntTab value="8" label={
                  <React.Fragment>
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '0px 20px'}}>
                        <img style={{width: '32px', height: '32px'}} src={require("../../icons/lifter.png")} alt="Material Handling"/>
                        <Box sx={{height: '50px', borderLeft: 1, borderColor: '#edf2f6', margin: '0px 25px'}}/>
                        <Typography sx={{fontWeight: 400, fontSize: '1.125rem'}}>Material Handling</Typography>
                      </Box>
                      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '0px 20px'}}>
                        <ChevronRight/>
                      </Box>
                    </Box>
                  </React.Fragment>
                }
              />
              <AntTab value="9" label={
                  <React.Fragment>
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '0px 20px'}}>
                        <img style={{width: '32px', height: '32px'}} src={require("../../icons/concrete-truck.png")} alt="Concrete Pumps"/>
                        <Box sx={{height: '50px', borderLeft: 1, borderColor: '#edf2f6', margin: '0px 25px'}}/>
                        <Typography sx={{fontWeight: 400, fontSize: '1.125rem'}}>Concrete Pumps</Typography>
                      </Box>
                      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '0px 20px'}}>
                        <ChevronRight/>
                      </Box>
                    </Box>
                  </React.Fragment>
                }
              />
              <AntTab value="10" label={
                  <React.Fragment>
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '0px 20px'}}>
                        <img style={{width: '32px', height: '32px'}} src={require("../../icons/calendar.png")} alt="Availability"/>
                        <Box sx={{height: '50px', borderLeft: 1, borderColor: '#edf2f6', margin: '0px 25px'}}/>
                        <Typography sx={{fontWeight: 400, fontSize: '1.125rem'}}>Availability</Typography>
                      </Box>
                      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '0px 20px'}}>
                        <ChevronRight/>
                      </Box>
                    </Box>
                  </React.Fragment>
                }
              />
            </AntTabs>
          </Box>
        </Box>
        {tabView()}
      </Box>
      {/* ------------------------------------- //////////////// Modals ///////////////// ------------------------------------- */}
      <Modal
        open={open}
      >
        <Box sx={style}>
          <Box sx={{display: 'flex', borderBottom: '1px solid #edf2f6', width: '100%', height: '75px', justifyContent: 'flex-end', padding: '10px'}}>
            <IconButton sx={{alignSelf: 'center'}} onClick={() => handleClose()}>
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
          <Box sx={{display: 'flex', borderBottom: '1px solid #edf2f6', width: '100%', height: '75px', justifyContent: 'flex-end', padding: '10px'}}>
            <IconButton sx={{alignSelf: 'center'}} onClick={() => handleCloseSetName()}>
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
      <Modal
        open={openSetType}
      >
        <Box sx={style}>
          <Box sx={{display: 'flex', borderBottom: '1px solid #edf2f6', width: '100%', height: '75px', justifyContent: 'flex-end', padding: '10px'}}>
            <IconButton sx={{alignSelf: 'center'}} onClick={() => handleCloseSetType()}>
              <CloseIcon/>
            </IconButton>
          </Box>
          <Box sx={{display: 'flex', margin: '50px 20px', alignItems: 'center', flexDirection: 'column'}}>
              <Typography>Set Crane Type</Typography>
              <Box>
                <Typography>Type</Typography>
                <Autocomplete
                  disablePortal
                  value={equipmentType}
                  onChange={(event, newValue) => {setEquipmentType(newValue)}}
                  //inputValue={inputValue}
                  id="controllable-states-demo"
                  options={options}
                  sx={{ width: '360px' }}
                  renderInput={(params) => <TextField {...params} placeholder='Select...'/>}
                />
              </Box>
              <Box sx={{display: 'flex', marginTop: '50px', flexDirection: 'column'}}>
                <Box sx={{marginTop: '10px'}}>
                  <AddButton sx={{width: '360px', height: '75px'}} onClick={() => editAssetType()}>Update</AddButton>
                </Box>
                <Box sx={{marginTop: '10px'}}>
                  <CancelButton sx={{width: '360px', height: '75px'}} onClick={() => handleCloseSetType()}>Cancel</CancelButton>
                </Box>
              </Box>
          </Box>
        </Box>
      </Modal>
      <Modal
        open={openSetMakeModel}
      >
        <Box sx={style}>
          <Box sx={{display: 'flex', borderBottom: '1px solid #edf2f6', width: '100%', height: '75px', justifyContent: 'flex-end', padding: '10px'}}>
            <IconButton sx={{alignSelf: 'center'}} onClick={() => handleCloseSetMakeModel()}>
              <CloseIcon/>
            </IconButton>
          </Box>
          <Box sx={{display: 'flex', margin: '50px 20px', alignItems: 'center', flexDirection: 'column'}}>
              <Typography>Set Make & Model</Typography>
              <Box>
                <Box>
                  <Typography>Crane Manufacturer</Typography>
                  <TextField sx={{width: '360px'}} value={make} onChange={(e) => setMake(e.target.value)}/>
                </Box>
                <Box>
                  <Typography>Model</Typography>
                  <TextField sx={{width: '360px'}} value={model} onChange={(e) => setModel(e.target.value)}/>
                </Box>
              </Box>
              <Box sx={{display: 'flex', marginTop: '50px', flexDirection: 'column'}}>
                <Box sx={{marginTop: '10px'}}>
                  <AddButton sx={{width: '360px', height: '75px'}} onClick={() => editAssetMakeModel()}>Update</AddButton>
                </Box>
                <Box sx={{marginTop: '10px'}}>
                  <CancelButton sx={{width: '360px', height: '75px'}} onClick={() => handleCloseSetMakeModel()}>Cancel</CancelButton>
                </Box>
              </Box>
          </Box>
        </Box>
      </Modal>
      <Modal
        open={openAddExemption}
      >
        <Box sx={style}>
          <Box sx={{display: 'flex', borderBottom: '1px solid #edf2f6', width: '100%', height: '75px', justifyContent: 'flex-end', padding: '10px'}}>
            <IconButton sx={{alignSelf: 'center'}} onClick={() => handleCloseAddExemption()}>
              <CloseIcon/>
            </IconButton>
          </Box>
          <Box sx={{padding: '70px 25px'}}>
            <Box sx={{maxWidth: '650px', margin: 'auto'}}>
              <h3 style={{textAlign: 'center', color: '#505e71', fontWeight: '600', fontSize: '2.125rem', marginBottom: '55px'}}>Set Custom Opening Times</h3>
              <Box style={{margin: 'auto', maxWidth: '640px'}}>
                <Box sx={{marginBottom: '15px'}}>
                  <span style={{display: 'inline-block', color: '#889ab1', fontWeight: '300', fontSize: '0.875', marginBottom: '5px'}}>Period Description</span>
                  <TextField sx={{width: '100%', height: '60px'}}/>
                </Box>
                <Box sx={{marginBottom: '15px'}}>
                  <Box sx={{marginBottom: '15px'}}>
                    <Box sx={{display: 'flex', margin: '0 -10px'}}>
                      <Box sx={{flex: 1, margin: '0 10px'}}>
                        <span style={{display: 'inline-block', color: '#889ab1', fontWeight: '300', fontSize: '0.875', marginBottom: '5px'}}>From</span>
                        <TextField
                          sx={{width: '100%', height: '60px'}}
                          InputProps={{startAdornment: (
                            <InputAdornment position='start'>
                              <CalendarTodayIcon/>
                            </InputAdornment>
                          )}}
                        />
                      </Box>
                      <Box sx={{flex: 1, margin: '0 10px'}}>
                        <span style={{display: 'inline-block', color: '#889ab1', fontWeight: '300', fontSize: '0.875', marginBottom: '5px'}}>To</span>
                        <TextField
                          sx={{width: '100%', height: '60px'}}
                          InputProps={{startAdornment: (
                            <InputAdornment position='start'>
                              <CalendarTodayIcon/>
                            </InputAdornment>
                          )}}
                        />
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={{overflow: 'auto'}}>
                    <Box sx={{marginBottom: '5px', display: 'flex'}}>
                        <Box sx={{display: 'flex', alignItems: 'center', width: '210px', minWidth: '210px', margin: '0 5px 0 0'}}>
                          <Box sx={{flex: 1, minWidth: '140px', margin: '0 5px'}}>
                            <span style={{display: 'inline-block', color: '#889ab1', fontWeight: '300', fontSize: '0.875rem'}}>Open</span>
                          </Box>
                        </Box>
                        <Box sx={{position: 'relative', display: 'flex', alignItems: 'center', flex: 1, margin: '0 0 0 5px'}}>
                          <Box sx={{flex: 1, margin: '0 5px', minWidth: '58px', maxWidth: '58px'}}>
                            <span style={{display: 'inline-block', color: '#889ab1', fontWeight: '300', fontSize: '0.875rem'}}>24hr</span>
                          </Box>
                          <Box sx={{position: 'relative', display: 'flex', width: '100%'}}>
                            <Box sx={{flex: 1, minWidth: '140px', margin: '0 5px'}}>
                              <span style={{display: 'inline-block', color: '#889ab1', fontWeight: '300', fontSize: '0.875rem'}}>Start</span>
                            </Box>
                            <Box sx={{flex: 1, minWidth: '140px', margin: '0 5px'}}>
                              <span style={{display: 'inline-block', color: '#889ab1', fontWeight: '300', fontSize: '0.875rem'}}>End</span>
                            </Box>
                          </Box>
                        </Box>
                    </Box>
                    <Box sx={{display: 'flex', minHeight: '60px', margin: '0 0 10px'}}>
                      <Box sx={{display: 'flex', alignItems: 'center', width: '210px', minWidth: '210px', margin: '0 5px 0 0'}}>
                        <input style={{width: '32px', height: '32px'}} type="checkbox"/>
                        <span style={{fontSize: '1.125rem', color: '#8796aa', paddingLeft: '18px'}}>Monday</span>
                      </Box>
                      <Box sx={{position: 'relative', display: 'flex', alignItems: 'center', flex: 1, margin: '0 0 0 5px'}}>
                        <Box sx={{flex: 1, margin: '0 5px', minWidth: '58px', maxWidth: '58px'}}>
                          <ReloadButton>
                            <ReplayIcon/>
                          </ReloadButton>
                        </Box>
                        <Box sx={{position: 'relative', display: 'flex', width: '100%'}}>
                          <Box sx={{flex: 1, minWidth: '140px', margin: '0 5px'}}>
                            <TextField
                              sx={{width: '100%', height: '60px'}}
                              InputProps={{startAdornment: (
                                <InputAdornment position='start'>
                                  <AccessTimeIcon/>
                                </InputAdornment>
                              )}}
                            />
                          </Box>
                          <Box sx={{flex: 1, minWidth: '140px', margin: '0 5px'}}>
                            <TextField
                              sx={{width: '100%', height: '60px'}}
                              InputProps={{startAdornment: (
                                <InputAdornment position='start'>
                                  <AccessTimeIcon/>
                                </InputAdornment>
                              )}}
                            />
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box style={{maxWidth: '380px', margin: '70px auto 0'}}>
                <AddButton sx={{width: '360px', height: '75px', marginBottom: '10px'}} onClick={() => alert('add')}>Update</AddButton>
                <CancelButton sx={{width: '360px', height: '75px'}} onClick={() => handleCloseAddExemption()}>Cancel</CancelButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
      <Modal
        open={openAddBreaktime}
      >
        <Box sx={style}>
          <Box sx={{display: 'flex', borderBottom: '1px solid #edf2f6', width: '100%', height: '75px', justifyContent: 'flex-end', padding: '10px'}}>
            <IconButton sx={{alignSelf: 'center'}} onClick={() => handleCloseAddBreaktime()}>
              <CloseIcon/>
            </IconButton>
          </Box>
          <Box sx={{padding: '70px 25px'}}>
            <Box sx={{maxWidth: '650px', margin: 'auto'}}>
              <h3 style={{textAlign: 'center', color: '#505e71', fontWeight: '600', fontSize: '2.125rem', marginBottom: '55px'}}>Set Custom Break Times</h3>
              <Box style={{margin: 'auto', maxWidth: '640px'}}>
                <Box sx={{marginBottom: '15px'}}>
                  <span style={{display: 'inline-block', color: '#889ab1', fontWeight: '300', fontSize: '0.875', marginBottom: '5px'}}>Break Description</span>
                  <TextField sx={{width: '100%', height: '60px'}}/>
                </Box>
                <Box sx={{display: 'flex', alignItems: 'flex-end', margin: '0 -5'}}>
                  <Box sx={{flex: 1}}>
                    <TextField
                      sx={{width: '100%', height: '60px'}}
                      InputProps={{startAdornment: (
                        <InputAdornment position='start'>
                          <AccessTimeIcon/>
                        </InputAdornment>
                      )}}
                    />
                  </Box>
                  <Box sx={{flex: 1, margin: '0 5px'}}>
                    <TextField
                      sx={{width: '100%', height: '60px'}}
                      InputProps={{startAdornment: (
                        <InputAdornment position='start'>
                          <AccessTimeIcon/>
                        </InputAdornment>
                      )}}
                    />
                  </Box>
                  <Box sx={{flex: 1, margin: '0 5px', minWidth: '60px', maxWidth: '60px'}}>
                    <ReloadButton>
                      <RemoveCircleOutlineIcon/>
                    </ReloadButton>
                  </Box>
                </Box>
              </Box>
              <Box style={{maxWidth: '380px', margin: '70px auto 0'}}>
                <AddButton sx={{width: '360px', height: '75px', marginBottom: '10px'}} onClick={() => alert('add')}>Update</AddButton>
                <CancelButton sx={{width: '360px', height: '75px'}} onClick={() => handleCloseAddExemption()}>Cancel</CancelButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default TowerCrane; 
