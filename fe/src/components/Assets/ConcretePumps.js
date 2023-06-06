import React, { useEffect, useState } from 'react';
import '../../Style.css';
import { Box, Typography, Button, Modal, TextField, IconButton, Tab, Tabs } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import ChevronRight from '@mui/icons-material/ChevronRight';
import EditIcon from '@mui/icons-material/Edit';
import ReplayIcon from '@mui/icons-material/Replay';
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
const SquareButton = styled(Button)({
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
    backgroundColor: '#0f72bd',
    borderColor: '#0f72bd',
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

function BuildingHoist() {
  const [tabIndex, setTabIndex] = useState("1");
  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
    if(newValue === "3") {
      getTowerCranes();
    }
    if(newValue === "4") {
      getPlatforms();
    }
    if(newValue === "5") {
      getDeliveryBays();
    }
    if(newValue === "6") {
      getMCranes();
    }
    if(newValue === "7") {
      getHoists();
    }
    if(newValue === "8") {
      getHandlers();
    }
  };

  const [craneAssets, setCraneAssets] = useState([]);
  const [towerCraneAssets, setTowerCraneAssets] = useState([]);
  const [hoistAssets, setHoistAssets] = useState([]);
  const [deliveryBayAssets, setDeliveryBayAssets] = useState([]);
  const [loadingPlatformAssets, setLoadingPlatformAssets] = useState([]);
  const [mCraneAssets, setMCraneAssets] = useState([]);
  const [mHandlingAssets, setMHandlingAssets] = useState([]);

  const [assetID, setAssetID] = useState();
  const [assetName, setAssetName] = useState('');

  const [customName, setCustomName] = useState();

  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ]

  const [customAvailability, setCustomAvailability] = useState([]);
  const [customAvailabilityID, setCustomAvailabilityID] = useState();
  const [customAvailabilityHours, setCustomAvailabilityHours] = useState([]);
  const [customAvailabilityName, setCustomAvailabilityName] = useState();
  const [customDateFrom, setCustomDateFrom] = useState();
  const [customDateTo, setCustomDateTo] = useState();
  const [customDays, setCustomDays] = useState([
    [true, '', ''],
    [true, '', ''],
    [true, '', ''],
    [true, '', ''],
    [true, '', ''],
    [true, '', ''],
    [true, '', ''],
  ]);

  const [breakTimeName, setBreakTimeName] = useState();
  const handleChangeCustomDays = (day, e) => {
    let newFormValues = [...customDays];
    newFormValues[day][0] = e.target.checked ? true : false;
    setCustomDays(newFormValues);
  }
  const handleChangeCustomDaysTimeStart = (day, e) => {
    let newFormValues = [...customDays];
    newFormValues[day][1] = e;
    setCustomDays(newFormValues);
  }
  const handleChangeCustomDaysTimeEnd = (day, e) => {
    let newFormValues = [...customDays];
    newFormValues[day][2] = e;
    setCustomDays(newFormValues);
  }

  const [breakTimeField, setBreakTimeField] = useState([{time_start: "", time_end: ""}]);
  const handleChangeBreakTimeStart = (i, e) => {
    let newFormValues = [...breakTimeField];
    newFormValues[i]['time_start'] = e;
    setBreakTimeField(newFormValues);
  }
  const handleChangeBreakTimeEnd = (i, e) => {
    let newFormValues = [...breakTimeField];
    newFormValues[i]['time_end'] = e;
    setBreakTimeField(newFormValues);
  }
    
  const addFormFields = () => {
      setBreakTimeField([...breakTimeField, {time_start: "", time_end: ""}])
  }

  const removeFormFields = (i) => {
      let newFormValues = [...breakTimeField];
      newFormValues.splice(i, 1);
      setBreakTimeField(newFormValues)
  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openSetName, setOpenSetName] = useState(false);
  const handleOpenSetName = () => setOpenSetName(true);
  const handleCloseSetName = () => setOpenSetName(false);

  const [openAddCustomAvailability, setOpenAddCustomAvailability] = useState(false);
  const handleOpenAddCustomAvailability = () => setOpenAddCustomAvailability(true);
  const handleCloseAddCustomAvailability = () => setOpenAddCustomAvailability(false);

  const [openAddBreaktime, setOpenAddBreaktime] = useState(false);
  const handleOpenAddBreaktime = (id) => {
    setOpenAddBreaktime(true);
    setCustomAvailabilityID(id);
  };
  const handleCloseAddBreaktime = () => setOpenAddBreaktime(false);

  const showAssets = () => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    };
    try {
      axios.get('http://127.0.0.1:8000/api/assets/concrete', {
        headers: headers
      })
      .then((res) => {
        setCraneAssets(res.data.data);
      })
    } catch(e) {
      console.log(e);
    }
  }
  const getTowerCranes = () => {
    const headers = {
      'Accept': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    };
    try {
      axios.get('http://127.0.0.1:8000/api/assets/crane', {
        headers: headers
      })
      .then((res) => {
        setTowerCraneAssets(res.data.data);
      })
    } catch(e) {
      console.log(e);
    }
  }
  const getHoists = () => {
    const headers = {
      'Accept': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    };
    try {
      axios.get('http://127.0.0.1:8000/api/assets/hoist', {
        headers: headers
      })
      .then((res) => {
        setHoistAssets(res.data.data);
      })
    } catch(e) {
      console.log(e);
    }
  }
  const getDeliveryBays = () => {
    const headers = {
      'Accept': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    };
    try {
      axios.get('http://127.0.0.1:8000/api/assets/bays', {
        headers: headers
      })
      .then((res) => {
        setDeliveryBayAssets(res.data.data);
      })
    } catch(e) {
      console.log(e);
    }
  }
  const getMCranes = () => {
    const headers = {
      'Accept': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    };
    try {
      axios.get('http://127.0.0.1:8000/api/assets/mcrane', {
        headers: headers
      })
      .then((res) => {
        setMCraneAssets(res.data.data);
      })
    } catch(e) {
      console.log(e);
    }
  }
  const getPlatforms = () => {
    const headers = {
      'Accept': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    };
    try {
      axios.get('http://127.0.0.1:8000/api/assets/loading_platform', {
        headers: headers
      })
      .then((res) => {
        setLoadingPlatformAssets(res.data.data);
      })
    } catch(e) {
      console.log(e);
    }
  }
  const getHandlers = () => {
    const headers = {
      'Accept': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    };
    try {
      axios.get('http://127.0.0.1:8000/api/assets/material_handling', {
        headers: headers
      })
      .then((res) => {
        setMHandlingAssets(res.data.data);
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
        setTabIndex("1");
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
      axios.get('http://127.0.0.1:8000/api/assets/concrete', {
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
      type: 'concrete',
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
  }
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
    showAsset_onLoad(); // eslint-disable-next-line
  }, [])
  const tabView = () => {
    if(tabIndex === "1") {
      return (
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1', height: '100%', minWidth: '500px', overflow: 'scroll'}}>
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
            <p style={{fontSize: '1.5rem', fontWeight: '300', color: '#505e71'}}>Concrete Pump Info</p>
          </Box>
          <Box sx={{display: 'flex', flexDirection: 'column', height: 'calc(100% - 75px)'}}>
            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', borderBottom: 2, borderColor: '#edf2f6', padding: '30px' }}>
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
          </Box>
        </Box>
      )
    } else if(tabIndex === "2") {
      return (
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1', height: '100%', minWidth: '500px', overflow: 'scroll'}}>
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
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1', height: '100%', minWidth: '500px', overflow: 'scroll'}}>
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
            <p style={{fontSize: '1.5rem', fontWeight: '300', color: '#505e71'}}>Tower Cranes</p>
          </Box>
          <Box sx={{display: 'flex', flexDirection: 'column', height: 'calc(100% - 75px)'}}>
          {towerCraneAssets.map((crane) => (
            <Box sx={{display: 'block', borderBottom: '1px solid #edf2f6'}}>
              <div style={{minHeight: '95px', justifyContent: 'space-between', display: 'flex', alignItems: 'center'}}>
                <div style={{paddingRight: '20px'}}>
                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      boxSizing: 'border-box',
                      height: '35px',
                      minWidth: '80px',
                      width: '80px',
                      textAlign: 'center',
                      justifyContent: 'center',
                      marginRight: '20px',
                      borderRight: '1px solid #edf2f6'
                    }}>
                      {/* <img style={{overflowClipMargin: 'content-box', overflow: 'clip'}} src={require("../../icons/truck.png")} alt="Delivery Bays"/> */}
                      <img style={{width: '32px', height: '32px', filter: "invert(73%) sepia(6%) saturate(1288%) hue-rotate(175deg) brightness(98%) contrast(82%)"}} src={require("../../icons/crane.png")} alt="Tower Crane"/>
                    </div>
                    <div style={{display: 'block', boxSizing: 'border-box'}}>
                      <p style={{color: '#505e71', fontWeight: '300', fontSize: '1.125rem', marginBottom: '5px'}}>{crane.custom_name}</p>
                      <p style={{marginBottom: 0, display: 'inline-block', color: '#889ab1', fontWeight: '300', fontSize: '0.875rem'}}>Est. Distance: [no data yet]</p>
                    </div>
                  </div>
                </div>
                <div style={{display: 'flex', paddingRight: '30px', alignItems: 'center'}}>
                  <span style={{padding: '0 20px 0 0', fontWeight: '300', fontSize: '1.125rem', color: '#505e71'}}>
                    Reachable
                  </span>
                  <input
                    style={{width: '32px', height: '32px', margin: 'auto'}}
                    type="checkbox"
                  />
                </div> 
              </div>
              <div style={{padding: '0 30px 30px'}}>
                <div style={{
                  minHeight: 400,
                  backgroundImage: `url(${require("../../images/map.jpg")})`,
                  backgroundPosition: 'right top',
                  backgroundRepeat: 'no-repeat',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '3px'
                }}>

                </div>
              </div>
            </Box>
          ))}
          </Box>
        </Box>
      )
    } else if(tabIndex === "4") {
      return (
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1', height: '100%', minWidth: '500px', overflow: 'scroll'}}>
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
          <Box sx={{display: 'flex', flexDirection: 'column', height: 'calc(100% - 75px)'}}>
          {loadingPlatformAssets.map((platform) => (
            <Box sx={{display: 'block', borderBottom: '1px solid #edf2f6'}}>
              <div style={{minHeight: '95px', justifyContent: 'space-between', display: 'flex', alignItems: 'center'}}>
                <div style={{paddingRight: '20px'}}>
                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      boxSizing: 'border-box',
                      height: '35px',
                      minWidth: '80px',
                      width: '80px',
                      textAlign: 'center',
                      justifyContent: 'center',
                      marginRight: '20px',
                      borderRight: '1px solid #edf2f6'
                    }}>
                      {/* <img style={{overflowClipMargin: 'content-box', overflow: 'clip'}} src={require("../../icons/truck.png")} alt="Delivery Bays"/> */}
                      <img style={{width: '32px', height: '32px', filter: "invert(73%) sepia(6%) saturate(1288%) hue-rotate(175deg) brightness(98%) contrast(82%)"}} src={require("../../icons/platform.png")} alt="Loading Platform"/>
                    </div>
                    <div style={{display: 'block', boxSizing: 'border-box'}}>
                      <p style={{color: '#505e71', fontWeight: '300', fontSize: '1.125rem', marginBottom: '5px'}}>{platform.custom_name}</p>
                      <p style={{marginBottom: 0, display: 'inline-block', color: '#889ab1', fontWeight: '300', fontSize: '0.875rem'}}>Est. Distance: [no data yet]</p>
                    </div>
                  </div>
                </div>
                <div style={{display: 'flex', paddingRight: '30px', alignItems: 'center'}}>
                  <span style={{padding: '0 20px 0 0', fontWeight: '300', fontSize: '1.125rem', color: '#505e71'}}>
                    Reachable
                  </span>
                  <input
                    style={{width: '32px', height: '32px', margin: 'auto'}}
                    type="checkbox"
                  />
                </div> 
              </div>
              <div style={{padding: '0 30px 30px'}}>
                <div style={{
                  minHeight: 400,
                  backgroundImage: `url(${require("../../images/map.jpg")})`,
                  backgroundPosition: 'right top',
                  backgroundRepeat: 'no-repeat',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '3px'
                }}>

                </div>
              </div>
            </Box>
          ))}
          </Box>
        </Box>
      )
    } else if(tabIndex === "5") {
      return (
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1', height: '100%', minWidth: '500px', overflow: 'scroll'}}>
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
          <Box sx={{display: 'flex', flexDirection: 'column', height: 'calc(100% - 75px)'}}>
          {deliveryBayAssets.map((bays) => (
            <Box sx={{display: 'block', borderBottom: '1px solid #edf2f6'}}>
              <div style={{minHeight: '95px', justifyContent: 'space-between', display: 'flex', alignItems: 'center'}}>
                <div style={{paddingRight: '20px'}}>
                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      boxSizing: 'border-box',
                      height: '35px',
                      minWidth: '80px',
                      width: '80px',
                      textAlign: 'center',
                      justifyContent: 'center',
                      marginRight: '20px',
                      borderRight: '1px solid #edf2f6'
                    }}>
                      {/* <img style={{overflowClipMargin: 'content-box', overflow: 'clip'}} src={require("../../icons/truck.png")} alt="Delivery Bays"/> */}
                      <img style={{width: '32px', height: '32px', filter: "invert(73%) sepia(6%) saturate(1288%) hue-rotate(175deg) brightness(98%) contrast(82%)"}} src={require("../../icons/truck.png")} alt="Delivery Bays"/>
                    </div>
                    <div style={{display: 'block', boxSizing: 'border-box'}}>
                      <p style={{color: '#505e71', fontWeight: '300', fontSize: '1.125rem', marginBottom: '5px'}}>{bays.custom_name}</p>
                      <p style={{marginBottom: 0, display: 'inline-block', color: '#889ab1', fontWeight: '300', fontSize: '0.875rem'}}>Est. Distance: [no data yet]</p>
                    </div>
                  </div>
                </div>
                <div style={{display: 'flex', paddingRight: '30px', alignItems: 'center'}}>
                  <span style={{padding: '0 20px 0 0', fontWeight: '300', fontSize: '1.125rem', color: '#505e71'}}>
                    Reachable
                  </span>
                  <input
                    style={{width: '32px', height: '32px', margin: 'auto'}}
                    type="checkbox"
                  />
                </div> 
              </div>
              <div style={{padding: '0 30px 30px'}}>
                <div style={{
                  minHeight: 400,
                  backgroundImage: `url(${require("../../images/map.jpg")})`,
                  backgroundPosition: 'right top',
                  backgroundRepeat: 'no-repeat',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '3px'
                }}>

                </div>
              </div>
            </Box>
          ))}
          </Box>
        </Box>
      )
    } else if(tabIndex === "6") {
      return (
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1', height: '100%', minWidth: '500px', overflow: 'scroll'}}>
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
          <Box sx={{display: 'flex', flexDirection: 'column', height: 'calc(100% - 75px)'}}>
          {mCraneAssets.map((mcrane) => (
            <Box sx={{display: 'block', borderBottom: '1px solid #edf2f6'}}>
              <div style={{minHeight: '95px', justifyContent: 'space-between', display: 'flex', alignItems: 'center'}}>
                <div style={{paddingRight: '20px'}}>
                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      boxSizing: 'border-box',
                      height: '35px',
                      minWidth: '80px',
                      width: '80px',
                      textAlign: 'center',
                      justifyContent: 'center',
                      marginRight: '20px',
                      borderRight: '1px solid #edf2f6'
                    }}>
                      {/* <img style={{overflowClipMargin: 'content-box', overflow: 'clip'}} src={require("../../icons/truck.png")} alt="Delivery Bays"/> */}
                      <img style={{width: '32px', height: '32px', filter: "invert(73%) sepia(6%) saturate(1288%) hue-rotate(175deg) brightness(98%) contrast(82%)"}} src={require("../../icons/mcrane.png")} alt="Mobile Crane"/>
                    </div>
                    <div style={{display: 'block', boxSizing: 'border-box'}}>
                      <p style={{color: '#505e71', fontWeight: '300', fontSize: '1.125rem', marginBottom: '5px'}}>{mcrane.custom_name}</p>
                      <p style={{marginBottom: 0, display: 'inline-block', color: '#889ab1', fontWeight: '300', fontSize: '0.875rem'}}>Est. Distance: [no data yet]</p>
                    </div>
                  </div>
                </div>
                <div style={{display: 'flex', paddingRight: '30px', alignItems: 'center'}}>
                  <span style={{padding: '0 20px 0 0', fontWeight: '300', fontSize: '1.125rem', color: '#505e71'}}>
                    Reachable
                  </span>
                  <input
                    style={{width: '32px', height: '32px', margin: 'auto'}}
                    type="checkbox"
                  />
                </div> 
              </div>
              <div style={{padding: '0 30px 30px'}}>
                <div style={{
                  minHeight: 400,
                  backgroundImage: `url(${require("../../images/map.jpg")})`,
                  backgroundPosition: 'right top',
                  backgroundRepeat: 'no-repeat',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '3px'
                }}>

                </div>
              </div>
            </Box>
          ))}
          </Box>
        </Box>
      )
    } else if(tabIndex === "7") {
      return (
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1', height: '100%', minWidth: '500px', overflow: 'scroll'}}>
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
            <p style={{fontSize: '1.5rem', fontWeight: '300', color: '#505e71'}}>Hoists</p>
          </Box>
          <Box sx={{display: 'flex', flexDirection: 'column', height: 'calc(100% - 75px)'}}>
          {hoistAssets.map((hoist) => (
            <Box sx={{display: 'block', borderBottom: '1px solid #edf2f6'}}>
              <div style={{minHeight: '95px', justifyContent: 'space-between', display: 'flex', alignItems: 'center'}}>
                <div style={{paddingRight: '20px'}}>
                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      boxSizing: 'border-box',
                      height: '35px',
                      minWidth: '80px',
                      width: '80px',
                      textAlign: 'center',
                      justifyContent: 'center',
                      marginRight: '20px',
                      borderRight: '1px solid #edf2f6'
                    }}>
                      {/* <img style={{overflowClipMargin: 'content-box', overflow: 'clip'}} src={require("../../icons/truck.png")} alt="Delivery Bays"/> */}
                      <img style={{width: '32px', height: '32px', filter: "invert(73%) sepia(6%) saturate(1288%) hue-rotate(175deg) brightness(98%) contrast(82%)"}} src={require("../../icons/elevator.png")} alt="Hoist"/>
                    </div>
                    <div style={{display: 'block', boxSizing: 'border-box'}}>
                      <p style={{color: '#505e71', fontWeight: '300', fontSize: '1.125rem', marginBottom: '5px'}}>{hoist.custom_name}</p>
                      <p style={{marginBottom: 0, display: 'inline-block', color: '#889ab1', fontWeight: '300', fontSize: '0.875rem'}}>Est. Distance: [no data yet]</p>
                    </div>
                  </div>
                </div>
                <div style={{display: 'flex', paddingRight: '30px', alignItems: 'center'}}>
                  <span style={{padding: '0 20px 0 0', fontWeight: '300', fontSize: '1.125rem', color: '#505e71'}}>
                    Reachable
                  </span>
                  <input
                    style={{width: '32px', height: '32px', margin: 'auto'}}
                    type="checkbox"
                  />
                </div> 
              </div>
              <div style={{padding: '0 30px 30px'}}>
                <div style={{
                  minHeight: 400,
                  backgroundImage: `url(${require("../../images/map.jpg")})`,
                  backgroundPosition: 'right top',
                  backgroundRepeat: 'no-repeat',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '3px'
                }}>

                </div>
              </div>
            </Box>
          ))}
          </Box>
        </Box>
      )
    } else if(tabIndex === "8") {
      return (
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1', height: '100%', minWidth: '500px', overflow: 'scroll'}}>
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
          <Box sx={{display: 'flex', flexDirection: 'column', height: 'calc(100% - 75px)'}}>
          {mHandlingAssets.map((handler) => (
            <Box sx={{display: 'block', borderBottom: '1px solid #edf2f6'}}>
              <div style={{minHeight: '95px', justifyContent: 'space-between', display: 'flex', alignItems: 'center'}}>
                <div style={{paddingRight: '20px'}}>
                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      boxSizing: 'border-box',
                      height: '35px',
                      minWidth: '80px',
                      width: '80px',
                      textAlign: 'center',
                      justifyContent: 'center',
                      marginRight: '20px',
                      borderRight: '1px solid #edf2f6'
                    }}>
                      {/* <img style={{overflowClipMargin: 'content-box', overflow: 'clip'}} src={require("../../icons/truck.png")} alt="Delivery Bays"/> */}
                      <img style={{width: '32px', height: '32px', filter: "invert(73%) sepia(6%) saturate(1288%) hue-rotate(175deg) brightness(98%) contrast(82%)"}} src={require("../../icons/lifter.png")} alt="Handler"/>
                    </div>
                    <div style={{display: 'block', boxSizing: 'border-box'}}>
                      <p style={{color: '#505e71', fontWeight: '300', fontSize: '1.125rem', marginBottom: '5px'}}>{handler.custom_name}</p>
                      <p style={{marginBottom: 0, display: 'inline-block', color: '#889ab1', fontWeight: '300', fontSize: '0.875rem'}}>Est. Distance: [no data yet]</p>
                    </div>
                  </div>
                </div>
                <div style={{display: 'flex', paddingRight: '30px', alignItems: 'center'}}>
                  <span style={{padding: '0 20px 0 0', fontWeight: '300', fontSize: '1.125rem', color: '#505e71'}}>
                    Reachable
                  </span>
                  <input
                    style={{width: '32px', height: '32px', margin: 'auto'}}
                    type="checkbox"
                  />
                </div> 
              </div>
              <div style={{padding: '0 30px 30px'}}>
                <div style={{
                  minHeight: 400,
                  backgroundImage: `url(${require("../../images/map.jpg")})`,
                  backgroundPosition: 'right top',
                  backgroundRepeat: 'no-repeat',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '3px'
                }}>

                </div>
              </div>
            </Box>
          ))}
          </Box>
        </Box>
      )
    } else if(tabIndex === "9") {
      return (
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1', height: '100%', minWidth: '500px', overflow: 'scroll'}}>
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
                <AddButton sx={{width: '100%'}} onClick={() => handleOpenAddCustomAvailability()}>Add Custom Availability</AddButton>
              </Box>
            </Box>
            <Box sx={{borderBottom: '1px solid #edf2f6', padding: '35px'}}>
              <p style={{color: '#505e71', fontWeight: '300', fontSize: '1.5rem', marginBottom: '5px'}}>Custom Opening Times</p>
              <p style={{display: 'inline-block', color: '#889ab1', fontWeight: '300', fontSize: '0.875rem'}}>1st January - 1st January</p>
            </Box>
            <Box sx={{borderBottom: '1px solid #edf2f6', padding: '35px'}}>
              <p style={{color: '#505e71', fontWeight: '300', fontSize: '1.125rem'}}>Daily Opening Times</p>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'space-between', padding: '15px 0', borderBottom: '1px solid #edf2f6'}}>
              <p style={{display: 'inline-block', color: '#889ab1', fontWeight: '300', fontSize: '0.875rem', padding: '0 35px', minWidth: '150px', width: '100%'}}>Day</p>
              <p style={{display: 'inline-block', color: '#889ab1', fontWeight: '300', fontSize: '0.875rem', padding: '0 35px', minWidth: '150px'}}>Start</p>
              <p style={{display: 'inline-block', color: '#889ab1', fontWeight: '300', fontSize: '0.875rem', padding: '0 35px', minWidth: '150px'}}>End</p>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'space-between', padding: '25px 0', borderBottom: '1px dotted #edf2f6'}}>
              <p style={{color: '#505e71', fontWeight: '300', fontSize: '1.125rem', padding: '0 35px', minWidth: '150px', width: '100%'}}>Monday</p>
              <p style={{color: '#505e71', fontWeight: '300', fontSize: '1.125rem', padding: '0 35px', minWidth: '150px'}}>12:00 AM</p>
              <p style={{color: '#505e71', fontWeight: '300', fontSize: '1.125rem', padding: '0 35px', minWidth: '150px'}}>11:59 PM</p>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'space-between', padding: '25px 0', borderBottom: '1px dotted #edf2f6'}}>
              <p style={{color: '#505e71', fontWeight: '300', fontSize: '1.125rem', padding: '0 35px', minWidth: '150px', width: '100%'}}>Tuesday</p>
              <p style={{color: '#505e71', fontWeight: '300', fontSize: '1.125rem', padding: '0 35px', minWidth: '150px'}}>12:00 AM</p>
              <p style={{color: '#505e71', fontWeight: '300', fontSize: '1.125rem', padding: '0 35px', minWidth: '150px'}}>11:59 PM</p>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'space-between', padding: '25px 0', borderBottom: '1px dotted #edf2f6'}}>
              <p style={{color: '#505e71', fontWeight: '300', fontSize: '1.125rem', padding: '0 35px', minWidth: '150px', width: '100%'}}>Wednesday</p>
              <p style={{color: '#505e71', fontWeight: '300', fontSize: '1.125rem', padding: '0 35px', minWidth: '150px'}}>12:00 AM</p>
              <p style={{color: '#505e71', fontWeight: '300', fontSize: '1.125rem', padding: '0 35px', minWidth: '150px'}}>11:59 PM</p>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'space-between', padding: '25px 0', borderBottom: '1px dotted #edf2f6'}}>
              <p style={{color: '#505e71', fontWeight: '300', fontSize: '1.125rem', padding: '0 35px', minWidth: '150px', width: '100%'}}>Thursday</p>
              <p style={{color: '#505e71', fontWeight: '300', fontSize: '1.125rem', padding: '0 35px', minWidth: '150px'}}>12:00 AM</p>
              <p style={{color: '#505e71', fontWeight: '300', fontSize: '1.125rem', padding: '0 35px', minWidth: '150px'}}>11:59 PM</p>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'space-between', padding: '25px 0', borderBottom: '1px dotted #edf2f6'}}>
              <p style={{color: '#505e71', fontWeight: '300', fontSize: '1.125rem', padding: '0 35px', minWidth: '150px', width: '100%'}}>Friday</p>
              <p style={{color: '#505e71', fontWeight: '300', fontSize: '1.125rem', padding: '0 35px', minWidth: '150px'}}>12:00 AM</p>
              <p style={{color: '#505e71', fontWeight: '300', fontSize: '1.125rem', padding: '0 35px', minWidth: '150px'}}>11:59 PM</p>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'space-between', padding: '25px 0', borderBottom: '1px dotted #edf2f6'}}>
              <p style={{color: '#505e71', fontWeight: '300', fontSize: '1.125rem', padding: '0 35px', minWidth: '150px', width: '100%'}}>Saturday</p>
              <p style={{color: '#505e71', fontWeight: '300', fontSize: '1.125rem', padding: '0 35px', minWidth: '150px'}}>12:00 AM</p>
              <p style={{color: '#505e71', fontWeight: '300', fontSize: '1.125rem', padding: '0 35px', minWidth: '150px'}}>11:59 PM</p>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'space-between', padding: '25px 0', borderBottom: '1px dotted #edf2f6'}}>
              <p style={{color: '#505e71', fontWeight: '300', fontSize: '1.125rem', padding: '0 35px', minWidth: '150px', width: '100%'}}>Sunday</p>
              <p style={{color: '#505e71', fontWeight: '300', fontSize: '1.125rem', padding: '0 35px', minWidth: '150px'}}>12:00 AM</p>
              <p style={{color: '#505e71', fontWeight: '300', fontSize: '1.125rem', padding: '0 35px', minWidth: '150px'}}>11:59 PM</p>
            </Box>
            <Box sx={{textAlign: 'center', padding: '20px', borderBottom: '1px solid #edf2f6'}}>
              <IconButton onClick={() => alert('pressed')}>
                <EditIcon/>
              </IconButton>
            </Box>
            <Box sx={{borderBottom: '1px solid #edf2f6', padding: '35px'}}>
              <p style={{color: '#505e71', fontWeight: '300', fontSize: '1.125rem'}}>Breaks</p>
            </Box>
            <Box sx={{borderBottom: '1px solid #edf2f6', padding: '20px'}}>
              <AddButton sx={{width: '100%'}} onClick={() => handleOpenAddBreaktime()}>Add Breaktime</AddButton>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'space-between', padding: '30px', borderBottom: '1px solid #edf2f6'}}>
              <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingRight: '30px', borderRight: '1px solid #edf2f6'}}>
                <Box sx={{width: '100%'}}>
                  <p style={{color: '#505e71', fontWeight: '300', fontSize: '1.125rem', marginBottom: '5px', textOverflow: 'ellipsis', overflow: 'hidden'}}>Custom Break</p>
                  <p style={{display: 'inline-block', color: '#889ab1', fontWeight: '300', fontSize: '0.875rem'}}>12:00 PM:00 - 01:00 PM / Every day</p>
                </Box>
              </Box>
              <IconButton sx={{alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginLeft: '30px'}} onClick={() => alert('pressed')}>
                <EditIcon/>
              </IconButton>
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
            placeholder='Search Concrete...'
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
              <AddButton sx={{width: '100%', height: '100%'}} onClick={() => handleOpen()}>Add Concrete</AddButton>
            </Box>
          </Box>
        </Box>
      </Box>
      {craneAssets.length ?
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
                  <img style={{width: '32px', height: '32px', filter: "invert(36%) sepia(18%) saturate(535%) hue-rotate(175deg) brightness(94%) contrast(93%)"}} src={require("../../icons/concrete-truck.png")} alt="Crane"/>
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
                <Typography sx={{display: 'inline-block', fontWeight: 300, fontSize: '0.875rem', color: '#889ab1'}}>Asset Settings</Typography>
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
                            <img style={{width: '32px', height: '32px'}} src={require("../../icons/lifter.png")} alt="Crane"/>
                            <Box sx={{height: '50px', borderLeft: 1, borderColor: '#edf2f6', margin: '0px 25px'}}/>
                            <Typography sx={{fontWeight: 400, fontSize: '1.125rem'}}>Concrete Pump Info</Typography>
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
                            <img style={{width: '32px', height: '32px'}} src={require("../../icons/crane.png")} alt="Grid"/>
                            <Box sx={{height: '50px', borderLeft: 1, borderColor: '#edf2f6', margin: '0px 25px'}}/>
                            <Typography sx={{fontWeight: 400, fontSize: '1.125rem'}}>Tower Cranes</Typography>
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
                  <AntTab value="5" label={
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
                            <Typography sx={{fontWeight: 400, fontSize: '1.125rem'}}>Hoists</Typography>
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
        :
          null
      }
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
              <Typography>Add Concrete Pump</Typography>
              <Box>
                <Typography>Name</Typography>
                <TextField sx={{width: '360px'}} onChange={(e) => setCustomName(e.target.value)}/>
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
              <Typography>Set Mobile Crane Name</Typography>
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
        open={openAddCustomAvailability}
      >
        <Box sx={style}>
          <Box sx={{display: 'flex', borderBottom: '1px solid #edf2f6', width: '100%', height: '75px', justifyContent: 'flex-end', padding: '10px'}}>
            <IconButton sx={{alignSelf: 'center'}} onClick={() => handleCloseAddCustomAvailability()}>
              <CloseIcon/>
            </IconButton>
          </Box>
          <Box sx={{
            padding: '70px 25px',
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            overflowY: 'scroll'
          }}>
            <Box sx={{maxWidth: '650px', margin: 'auto'}}>
              <h3 style={{textAlign: 'center', color: '#505e71', fontWeight: '600', fontSize: '2.125rem', marginBottom: '55px'}}>Set Custom Opening Times</h3>
              <Box style={{margin: 'auto', maxWidth: '640px'}}>
                <Box sx={{marginBottom: '15px'}}>
                  <span style={{display: 'inline-block', color: '#889ab1', fontWeight: '300', fontSize: '0.875', marginBottom: '5px'}}>Period Description</span>
                  <TextField sx={{width: '100%', height: '60px'}} onChange={(e) => setCustomAvailabilityName(e.target.value)}/>
                </Box>
                <Box sx={{marginBottom: '15px'}}>
                  <Box sx={{marginBottom: '15px'}}>
                    <Box sx={{display: 'flex', margin: '0 -10px'}}>
                      <Box sx={{flex: 1, margin: '0 10px'}}>
                        <span style={{display: 'inline-block', color: '#889ab1', fontWeight: '300', fontSize: '0.875', marginBottom: '5px'}}>From</span>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker sx={{width: '100%', height: '60px'}} onChange={(e) => setCustomDateFrom(e)}/>
                        </LocalizationProvider>
                      </Box>
                      <Box sx={{flex: 1, margin: '0 10px'}}>
                        <span style={{display: 'inline-block', color: '#889ab1', fontWeight: '300', fontSize: '0.875', marginBottom: '5px'}}>To</span>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker sx={{width: '100%', height: '60px'}} onChange={(e) => setCustomDateTo(e)}/>
                        </LocalizationProvider>
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
                        <input
                          style={{width: '32px', height: '32px'}}
                          type="checkbox"
                          checked={customDays[0][0] ? true : false}
                          onChange={(e) => handleChangeCustomDays(0, e)}
                        />
                        <span style={{fontSize: '1.125rem', color: '#8796aa', paddingLeft: '18px'}}>Monday</span>
                      </Box>
                      <Box sx={{position: 'relative', display: 'flex', alignItems: 'center', flex: 1, margin: '0 0 0 5px'}}>
                        {customDays[0][0] ?
                          <>
                            <Box sx={{flex: 1, margin: '0 5px', minWidth: '58px', maxWidth: '58px'}}>
                              <SquareButton>
                                <ReplayIcon/>
                              </SquareButton>
                            </Box>
                            <Box sx={{position: 'relative', display: 'flex', width: '100%'}}>
                              <Box sx={{flex: 1, minWidth: '140px', margin: '0 5px'}}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                  <TimePicker
                                    value={customDays[0][1]}
                                    onChange={(e) => handleChangeCustomDaysTimeStart(0, e)}
                                  />
                                </LocalizationProvider>
                              </Box>
                              <Box sx={{flex: 1, minWidth: '140px', margin: '0 5px'}}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                  <TimePicker
                                    value={customDays[0][2]}
                                    onChange={(e) => handleChangeCustomDaysTimeEnd(0, e)}
                                  />
                                </LocalizationProvider>
                              </Box>
                            </Box>
                          </>
                        :
                          <div style={{
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            left: '5px',
                            right: '5px',
                            padding: '0 10px',
                            textAlign: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '3px',
                            border: '1px solid #edf2f6',
                            backgroundImage: `url(${require("../../images/update_bg.jpg")})`,
                            backgroundRepeat: 'repeat',
                          }}>
                            <p style={{color: '#8796aa', fontWeight: '300', fontSize: '0.875rem'}}>Day Set To Closed</p>
                          </div>
                        }
                      </Box>
                    </Box>
                    <Box sx={{display: 'flex', minHeight: '60px', margin: '0 0 10px'}}>
                      <Box sx={{display: 'flex', alignItems: 'center', width: '210px', minWidth: '210px', margin: '0 5px 0 0'}}>
                        <input
                          style={{width: '32px', height: '32px'}}
                          type="checkbox"
                          checked={customDays[1][0] ? true : false}
                          onChange={(e) => handleChangeCustomDays(1, e)}
                        />
                        <span style={{fontSize: '1.125rem', color: '#8796aa', paddingLeft: '18px'}}>Tuesday</span>
                      </Box>
                      <Box sx={{position: 'relative', display: 'flex', alignItems: 'center', flex: 1, margin: '0 0 0 5px'}}>
                        {customDays[1][0] ?
                          <>
                            <Box sx={{flex: 1, margin: '0 5px', minWidth: '58px', maxWidth: '58px'}}>
                              <SquareButton>
                                <ReplayIcon/>
                              </SquareButton>
                            </Box>
                            <Box sx={{position: 'relative', display: 'flex', width: '100%'}}>
                              <Box sx={{flex: 1, minWidth: '140px', margin: '0 5px'}}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                  <TimePicker
                                    value={customDays[1][1]}
                                    onChange={(e) => handleChangeCustomDaysTimeStart(1, e)}
                                  />
                                </LocalizationProvider>
                              </Box>
                              <Box sx={{flex: 1, minWidth: '140px', margin: '0 5px'}}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                  <TimePicker
                                    value={customDays[1][2]}
                                    onChange={(e) => handleChangeCustomDaysTimeEnd(1, e)}
                                  />
                                </LocalizationProvider>
                              </Box>
                            </Box>
                          </>
                        :
                          <div style={{
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            left: '5px',
                            right: '5px',
                            padding: '0 10px',
                            textAlign: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '3px',
                            border: '1px solid #edf2f6',
                            backgroundImage: `url(${require("../../images/update_bg.jpg")})`,
                            backgroundRepeat: 'repeat',
                          }}>
                            <p style={{color: '#8796aa', fontWeight: '300', fontSize: '0.875rem'}}>Day Set To Closed</p>
                          </div>
                        }
                      </Box>
                    </Box>
                    <Box sx={{display: 'flex', minHeight: '60px', margin: '0 0 10px'}}>
                      <Box sx={{display: 'flex', alignItems: 'center', width: '210px', minWidth: '210px', margin: '0 5px 0 0'}}>
                        <input
                          style={{width: '32px', height: '32px'}}
                          type="checkbox"
                          checked={customDays[2][0] ? true : false}
                          onChange={(e) => handleChangeCustomDays(2, e)}
                        />
                        <span style={{fontSize: '1.125rem', color: '#8796aa', paddingLeft: '18px'}}>Wednesday</span>
                      </Box>
                      <Box sx={{position: 'relative', display: 'flex', alignItems: 'center', flex: 1, margin: '0 0 0 5px'}}>
                        {customDays[2][0] ?
                          <>
                            <Box sx={{flex: 1, margin: '0 5px', minWidth: '58px', maxWidth: '58px'}}>
                              <SquareButton>
                                <ReplayIcon/>
                              </SquareButton>
                            </Box>
                            <Box sx={{position: 'relative', display: 'flex', width: '100%'}}>
                              <Box sx={{flex: 1, minWidth: '140px', margin: '0 5px'}}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                  <TimePicker
                                    value={customDays[2][1]}
                                    onChange={(e) => handleChangeCustomDaysTimeStart(2, e)}
                                  />
                                </LocalizationProvider>
                              </Box>
                              <Box sx={{flex: 1, minWidth: '140px', margin: '0 5px'}}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                  <TimePicker
                                    value={customDays[2][2]}
                                    onChange={(e) => handleChangeCustomDaysTimeEnd(2, e)}
                                  />
                                </LocalizationProvider>
                              </Box>
                            </Box>
                          </>
                        :
                          <div style={{
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            left: '5px',
                            right: '5px',
                            padding: '0 10px',
                            textAlign: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '3px',
                            border: '1px solid #edf2f6',
                            backgroundImage: `url(${require("../../images/update_bg.jpg")})`,
                            backgroundRepeat: 'repeat',
                          }}>
                            <p style={{color: '#8796aa', fontWeight: '300', fontSize: '0.875rem'}}>Day Set To Closed</p>
                          </div>
                        }
                      </Box>
                    </Box>
                    <Box sx={{display: 'flex', minHeight: '60px', margin: '0 0 10px'}}>
                      <Box sx={{display: 'flex', alignItems: 'center', width: '210px', minWidth: '210px', margin: '0 5px 0 0'}}>
                        <input
                          style={{width: '32px', height: '32px'}}
                          type="checkbox"
                          checked={customDays[3][0] ? true : false}
                          onChange={(e) => handleChangeCustomDays(3, e)}
                        />
                        <span style={{fontSize: '1.125rem', color: '#8796aa', paddingLeft: '18px'}}>Thursday</span>
                      </Box>
                      <Box sx={{position: 'relative', display: 'flex', alignItems: 'center', flex: 1, margin: '0 0 0 5px'}}>
                        {customDays[3][0] ?
                          <>
                            <Box sx={{flex: 1, margin: '0 5px', minWidth: '58px', maxWidth: '58px'}}>
                              <SquareButton>
                                <ReplayIcon/>
                              </SquareButton>
                            </Box>
                            <Box sx={{position: 'relative', display: 'flex', width: '100%'}}>
                              <Box sx={{flex: 1, minWidth: '140px', margin: '0 5px'}}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                  <TimePicker
                                    value={customDays[3][1]}
                                    onChange={(e) => handleChangeCustomDaysTimeStart(3, e)}
                                  />
                                </LocalizationProvider>
                              </Box>
                              <Box sx={{flex: 1, minWidth: '140px', margin: '0 5px'}}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                  <TimePicker
                                    value={customDays[3][2]}
                                    onChange={(e) => handleChangeCustomDaysTimeEnd(3, e)}
                                  />
                                </LocalizationProvider>
                              </Box>
                            </Box>
                          </>
                        :
                          <div style={{
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            left: '5px',
                            right: '5px',
                            padding: '0 10px',
                            textAlign: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '3px',
                            border: '1px solid #edf2f6',
                            backgroundImage: `url(${require("../../images/update_bg.jpg")})`,
                            backgroundRepeat: 'repeat',
                          }}>
                            <p style={{color: '#8796aa', fontWeight: '300', fontSize: '0.875rem'}}>Day Set To Closed</p>
                          </div>
                        }
                      </Box>
                    </Box>
                    <Box sx={{display: 'flex', minHeight: '60px', margin: '0 0 10px'}}>
                      <Box sx={{display: 'flex', alignItems: 'center', width: '210px', minWidth: '210px', margin: '0 5px 0 0'}}>
                        <input
                          style={{width: '32px', height: '32px'}}
                          type="checkbox"
                          checked={customDays[4][0] ? true : false}
                          onChange={(e) => handleChangeCustomDays(4, e)}
                        />
                        <span style={{fontSize: '1.125rem', color: '#8796aa', paddingLeft: '18px'}}>Friday</span>
                      </Box>
                      <Box sx={{position: 'relative', display: 'flex', alignItems: 'center', flex: 1, margin: '0 0 0 5px'}}>
                        {customDays[4][0] ?
                          <>
                            <Box sx={{flex: 1, margin: '0 5px', minWidth: '58px', maxWidth: '58px'}}>
                              <SquareButton>
                                <ReplayIcon/>
                              </SquareButton>
                            </Box>
                            <Box sx={{position: 'relative', display: 'flex', width: '100%'}}>
                              <Box sx={{flex: 1, minWidth: '140px', margin: '0 5px'}}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                  <TimePicker
                                    value={customDays[4][1]}
                                    onChange={(e) => handleChangeCustomDaysTimeStart(4, e)}
                                  />
                                </LocalizationProvider>
                              </Box>
                              <Box sx={{flex: 1, minWidth: '140px', margin: '0 5px'}}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                  <TimePicker
                                    value={customDays[4][2]}
                                    onChange={(e) => handleChangeCustomDaysTimeEnd(4, e)}
                                  />
                                </LocalizationProvider>
                              </Box>
                            </Box>
                          </>
                        :
                          <div style={{
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            left: '5px',
                            right: '5px',
                            padding: '0 10px',
                            textAlign: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '3px',
                            border: '1px solid #edf2f6',
                            //backgroundImage: `url(${"../../images/update_bg.jpg"})`,
                            backgroundImage: `url(${require("../../images/update_bg.jpg")})`,
                            backgroundRepeat: 'repeat',
                          }}>
                            <p style={{color: '#8796aa', fontWeight: '300', fontSize: '0.875rem'}}>Day Set To Closed</p>
                          </div>
                        }
                      </Box>
                    </Box>
                    <Box sx={{display: 'flex', minHeight: '60px', margin: '0 0 10px'}}>
                      <Box sx={{display: 'flex', alignItems: 'center', width: '210px', minWidth: '210px', margin: '0 5px 0 0'}}>
                        <input
                          style={{width: '32px', height: '32px'}}
                          type="checkbox"
                          checked={customDays[5][0] ? true : false}
                          onChange={(e) => handleChangeCustomDays(5, e)}
                        />
                        <span style={{fontSize: '1.125rem', color: '#8796aa', paddingLeft: '18px'}}>Saturday</span>
                      </Box>
                      <Box sx={{position: 'relative', display: 'flex', alignItems: 'center', flex: 1, margin: '0 0 0 5px'}}>
                        {customDays[5][0] ?
                          <>
                            <Box sx={{flex: 1, margin: '0 5px', minWidth: '58px', maxWidth: '58px'}}>
                              <SquareButton>
                                <ReplayIcon/>
                              </SquareButton>
                            </Box>
                            <Box sx={{position: 'relative', display: 'flex', width: '100%'}}>
                              <Box sx={{flex: 1, minWidth: '140px', margin: '0 5px'}}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                  <TimePicker
                                    value={customDays[5][1]}
                                    onChange={(e) => handleChangeCustomDaysTimeStart(5, e)}
                                  />
                                </LocalizationProvider>
                              </Box>
                              <Box sx={{flex: 1, minWidth: '140px', margin: '0 5px'}}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                  <TimePicker
                                    value={customDays[5][2]}
                                    onChange={(e) => handleChangeCustomDaysTimeEnd(5, e)}
                                  />
                                </LocalizationProvider>
                              </Box>
                            </Box>
                          </>
                        :
                          <div style={{
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            left: '5px',
                            right: '5px',
                            padding: '0 10px',
                            textAlign: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '3px',
                            border: '1px solid #edf2f6',
                            //backgroundImage: `url(${"../../images/update_bg.jpg"})`,
                            backgroundImage: `url(${require("../../images/update_bg.jpg")})`,
                            backgroundRepeat: 'repeat',
                          }}>
                            <p style={{color: '#8796aa', fontWeight: '300', fontSize: '0.875rem'}}>Day Set To Closed</p>
                          </div>
                        }
                      </Box>
                    </Box>
                    <Box sx={{display: 'flex', minHeight: '60px', margin: '0 0 10px'}}>
                      <Box sx={{display: 'flex', alignItems: 'center', width: '210px', minWidth: '210px', margin: '0 5px 0 0'}}>
                        <input
                          style={{width: '32px', height: '32px'}}
                          type="checkbox"
                          checked={customDays[6][0] ? true : false}
                          onChange={(e) => handleChangeCustomDays(6, e)}
                        />
                        <span style={{fontSize: '1.125rem', color: '#8796aa', paddingLeft: '18px'}}>Sunday</span>
                      </Box>
                      <Box sx={{position: 'relative', display: 'flex', alignItems: 'center', flex: 1, margin: '0 0 0 5px'}}>
                        {customDays[6][0] ?
                            <>
                              <Box sx={{flex: 1, margin: '0 5px', minWidth: '58px', maxWidth: '58px'}}>
                                <SquareButton>
                                  <ReplayIcon/>
                                </SquareButton>
                              </Box>
                              <Box sx={{position: 'relative', display: 'flex', width: '100%'}}>
                                <Box sx={{flex: 1, minWidth: '140px', margin: '0 5px'}}>
                                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <TimePicker
                                      value={customDays[6][1]}
                                      onChange={(e) => handleChangeCustomDaysTimeStart(6, e)}
                                    />
                                  </LocalizationProvider>
                                </Box>
                                <Box sx={{flex: 1, minWidth: '140px', margin: '0 5px'}}>
                                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <TimePicker
                                      value={customDays[6][2]}
                                      onChange={(e) => handleChangeCustomDaysTimeEnd(6, e)}
                                    />
                                  </LocalizationProvider>
                                </Box>
                              </Box>
                            </>
                          :
                            <div style={{
                              position: 'absolute',
                              top: 0,
                              bottom: 0,
                              left: '5px',
                              right: '5px',
                              padding: '0 10px',
                              textAlign: 'center',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              borderRadius: '3px',
                              border: '1px solid #edf2f6',
                              //backgroundImage: `url(${"../../images/update_bg.jpg"})`,
                              backgroundImage: `url(${require("../../images/update_bg.jpg")})`,
                              backgroundRepeat: 'repeat',
                            }}>
                              <p style={{color: '#8796aa', fontWeight: '300', fontSize: '0.875rem'}}>Day Set To Closed</p>
                            </div>
                        }
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box style={{maxWidth: '380px', margin: '70px auto 0'}}>
                <AddButton sx={{width: '360px', height: '75px', marginBottom: '10px'}}>Update</AddButton>
                {/* <AddButton sx={{width: '360px', height: '75px', marginBottom: '10px'}} onClick={() => console.log(customDays)}>Update</AddButton> */}
                <CancelButton sx={{width: '360px', height: '75px'}} onClick={() => handleCloseAddCustomAvailability()}>Cancel</CancelButton>
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
          <Box sx={{
            padding: '70px 25px',
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            overflowY: 'scroll',
          }}>
            <Box sx={{maxWidth: '650px', margin: 'auto'}}>
              <h3 style={{textAlign: 'center', color: '#505e71', fontWeight: '600', fontSize: '2.125rem', marginBottom: '55px'}}>Set Custom Break Times</h3>
              <Box style={{margin: 'auto', maxWidth: '640px'}}>
                <Box sx={{marginBottom: '15px'}}>
                  <span style={{display: 'inline-block', color: '#889ab1', fontWeight: '300', fontSize: '0.875rem', marginBottom: '5px'}}>Break Description</span>
                  <TextField
                    value={breakTimeName}
                    onChange={(e) => setBreakTimeName(e.target.value)}
                    sx={{width: '100%', height: '60px'}}
                  />
                </Box>
                {breakTimeField.map((element, index) => {
                  return (
                    <Box sx={{display: 'flex', alignItems: 'flex-end', margin: '5px 0'}}>
                      <Box sx={{flex: 1}}>
                        <span style={{display: 'inline-block', color: '#889ab1', fontWeight: '300', fontSize: '0.875rem', marginBottom: '5px'}}>Time Start</span>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <TimePicker
                            sx={{width: '100%', height: '60px'}}
                          />
                        </LocalizationProvider>
                      </Box>
                      <Box sx={{flex: 1, margin: '0 5px'}}>
                        <span style={{display: 'inline-block', color: '#889ab1', fontWeight: '300', fontSize: '0.875rem', marginBottom: '5px'}}>Time End</span>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <TimePicker
                            sx={{width: '100%', height: '60px'}}
                          />
                        </LocalizationProvider>
                      </Box>
                      {index ? 
                        <Box sx={{flex: 1, margin: '0 5px', minWidth: '60px', maxWidth: '60px'}}>
                          <SquareButton onClick={() => removeFormFields(index)}>
                            <RemoveCircleOutlineIcon/>
                          </SquareButton>
                        </Box>
                        :
                        <Box sx={{flex: 1, margin: '0 5px', minWidth: '60px', maxWidth: '60px'}}>
                          <SquareButton disabled>
                            <RemoveCircleOutlineIcon/>
                          </SquareButton>
                        </Box>
                      }
                    </Box>
                  )
                })}
              <Box sx={{display: 'flex', justifyContent: 'flex-end', margin: '15px 0 0 0'}}>
                <SquareButton onClick={() => addFormFields()}>
                  <ControlPointIcon/>
                </SquareButton>
              </Box>
              </Box>
              <Box style={{maxWidth: '380px', margin: '70px auto 0'}}>
                <AddButton sx={{width: '360px', height: '75px', marginBottom: '10px'}}>Update</AddButton>
                <CancelButton sx={{width: '360px', height: '75px'}} onClick={() => handleCloseAddBreaktime()}>Cancel</CancelButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default BuildingHoist; 
