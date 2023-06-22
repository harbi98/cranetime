import React, {useState} from 'react';
import '../../Style.css';
import {Modal, Box, IconButton, Button, Checkbox} from '@mui/material';
import { styled } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import GoogleMapReact from 'google-map-react';
import CloseIcon from '@mui/icons-material/Close';

const Marker = () => (
  <div style={{
    position: 'absolute', 
    width: '60px',
    height: '60px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '-70px 0 0 -35px',
  }}>
    <img src={require("../../images/marker.png")} alt="Logo"/>
  </div>
);
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
const BpIcon = styled("span")(() => ({
  borderRadius: 3,
  width: '32px',
  height: '32px',
  boxShadow: "0 0 0 1px rgb(16 22 26 / 40%)",
  backgroundColor: "#ffffff",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2
  },
  "input:hover ~ &": {
    backgroundColor: "#ebf1f5"
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background: "rgba(206,217,224,.5)"
  }
}));
const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#ffffff",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: '32px',
    height: '32px',
    backgroundImage: `url(${require("../../icons/check.png")})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '70%',
    filter: 'invert(27%) sepia(66%) saturate(7495%) hue-rotate(194deg) brightness(98%) contrast(88%)',
    content: '""'
  },
  "input:hover ~ &": {
    backgroundColor: "#ebf1f5"
  }
});
function BpCheckbox(props) {
  return (
    <Checkbox
      sx={{
        "&:hover": { bgcolor: "transparent" }
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ "aria-label": "Checkbox demo" }}
      {...props}
    />
  );
}
const modal_style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  height: '100%',
  backgroundColor: 'white',
  paddingBottom: '50px',
};
function SettingsSite() {
  const defaultProps = {
    center: {
      lat: -31.945422703303525,
      lng: 115.86795544252955
    },
    zoom: 15
  };
  const [openSetType, setOpenSetType] = useState(false);
  const handleOpenSetType = () => setOpenSetType(true);
  const handleCloseSetType = () => setOpenSetType(false);
  return (
    <>
      <div className='settings-site tabs__section'>
        <div className='settings-sidebar scrollbar-none'>
          <div className='settings-sidebar__top'>
            <div className="settings-sidebar__img">
              <img src={require("../../images/settings_img.jpg")} alt=""/>
              <div className="tabs__wrap">
                <div className="tab__container tab__container_visible">
                  <a className="btn__edit btn__edit_circle settings-popup__show" href="#settings-popup__image">
                    <svg className="svg_edit_icon" fill='#000000' width={15} height={15}>
                      <use xlinkHref={"../../images/sprite/sprite.svg#edit_icon"}></use>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="settings-sidebar__info">
              <p className="settings-sidebar__name">Queens Wharf</p>
              <p className="settings-sidebar__location">Brisbane, Australia</p>
            </div>
          </div>
          <div className='settings-details'>
            <div className="header__titles">
              <p className="text__small">Site Details</p>
            </div>
            <ul className='settings-details__nav tabs'>
              <li className="nav-block tab_current">
                <div className="nav-block__left">
                  <div className="nav-block__icon">
                    <svg className="svg_home_icon">
                      <use xlinkHref="../../images/sprite/sprite.svg#home_icon"></use>
                    </svg>
                  </div>
                  <div className="nav-block__info">
                    <p className="text__middle">Site Information</p>
                    <p className="text__small">Completed</p>
                  </div>
                </div>
              </li>
              <li className="nav-block">
                <div className="nav-block__left">
                  <div className="nav-block__icon">
                    <svg className="svg_time_icon">
                      <use xlinkHref="../../images/sprite/sprite.svg#time_icon"></use>
                    </svg>
                  </div>
                  <div className="nav-block__info">
                    <p className="text__middle">Opening Times</p>
                    <p className="text__small text__small_red">Incomplete</p>
                  </div>
                </div>
                <div className="nav-block__arrow">
                  <svg className="svg_arrow_right">
                    <use xlinkHref="images/sprite/sprite.svg#arrow_right"></use>
                  </svg>
                </div>
              </li>
              <li className="nav-block">
                <div className="nav-block__left">
                  <div className="nav-block__icon">
                    <svg className="svg_user_plus">
                      <use xlinkHref="../../images/sprite/sprite.svg#user_plus"></use>
                    </svg>
                  </div>
                  <div className="nav-block__info">
                    <p className="text__middle">Key Contacts</p>
                    <p className="text__small">Completed</p>
                  </div>
                </div>
                <div className="nav-block__arrow">
                  <svg className="svg_arrow_right">
                    <use xlinkHref="../../images/sprite/sprite.svg#arrow_right"></use>
                  </svg>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className='settings__main'>
          <header className="settings__header">
            <div className="tabs__wrap">
              <div className="tab__container tab__container_visible">
                <h2 className="settings__title">Site Information</h2>
              </div>
              <div className="tab__container">
                <h2 className="settings__title">Opening Times</h2>
              </div>
              <div className="tab__container">
                <h2 className="settings__title">Key Contacts</h2>
              </div>
            </div>
            <div className="header-profile">
              <div className="header-profile__toggle"></div>
            </div>
          </header>
          <div className='settings__content scrollbar-none'>
            <div className='tabs__wrap'>
              <div className='tab__container tab__container_visible'>
                <div className="settings-map__wrap">
                  <div className='settings__map'>
                  <GoogleMapReact
                    //bootstrapURLKeys={{ key: "" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                    yesIWantToUseGoogleMapApiInternals
                    options={{
                      zoomControl: false,
                      fullscreenControl: false,
                      gestureHandling: 'none',
                    }}
                  >
                    <Marker
                      lat={-31.945422703303525}
                      lng={115.86795544252955}
                    />
                  </GoogleMapReact>
                  </div>
                  <a className="btn__edit btn__edit_circle settings-popup__show" href="#settings-popup__location">
                    <svg className="svg_edit_icon">
                      <use xlinkHref="../../images/sprite/sprite.svg#edit_icon"></use>
                    </svg>
                  </a>
                </div>
                <div className='site-information'>
                  <div className="site-information__block">
                    <div className="site-information__title">
                      <p className="settings__title">Project Details</p>
                    </div>
                    <div className="settings-row">
                      <div className="settings-row__left">
                        <div className="settings-row__text">
                          <p className="text__small">Type</p>
                          <p className="text__middle">Mixed Use Urban Development</p>
                        </div>
                      </div>
                      <IconButton sx={{alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginLeft: '30px'}} onClick={() => handleOpenSetType()}>
                        <EditIcon/>
                      </IconButton>
                      {/* <a className="btn__edit settings-popup__show" href="#settings-popup__type">
                        <svg className="svg_edit_icon">
                          <use xlinkHref="../../images/sprite/sprite.svg#edit_icon"></use>
                        </svg>
                      </a> */}
                    </div>
                    <div className="settings-row">
                      <div className="settings-row__left">
                        <div className="settings-row__text">
                          <p className="text__small">Projected Cost</p>
                          <p className="text__middle">$3.2bn AUD</p>
                        </div>
                      </div>
                      <IconButton sx={{alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginLeft: '30px'}} onClick={() => alert('pressed')}>
                        <EditIcon/>
                      </IconButton>
                    </div>
                    <div className="settings-row">
                      <div className="settings-row__left">
                        <div className="settings-row__text">
                          <p className="text__small">Expected Duration</p>
                          <p className="text__middle">Sep 2019 - Nov 2025 (5yrs 3mo)</p>
                        </div>
                      </div>
                      <IconButton sx={{alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginLeft: '30px'}} onClick={() => alert('pressed')}>
                        <EditIcon/>
                      </IconButton>
                    </div>
                  </div>
                  <div className='site-iniformation__block'>
                    <div className="site-information__title">
                      <p className="settings__title">Localisation</p>
                    </div>
                  </div>
                  <div className="settings-row">
                    <div className="settings-row__left">
                      <div className="settings-row__text">
                        <p className="text__small">Timezone</p>
                        <p className="text__middle">Brisbane GMT + 10</p>
                      </div>
                    </div>
                    <IconButton sx={{alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginLeft: '30px'}} onClick={() => alert('pressed')}>
                      <EditIcon/>
                    </IconButton>
                  </div>
                  <div className="settings-row">
                    <div className="settings-row__left">
                      <div className="settings-row__text">
                        <p className="text__small">Date Format</p>
                        <p className="text__middle">DD / MM / YY</p>
                      </div>
                    </div>
                    <IconButton sx={{alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginLeft: '30px'}} onClick={() => alert('pressed')}>
                      <EditIcon/>
                    </IconButton>
                  </div>
                  <div className="settings-row">
                    <div className="settings-row__left">
                      <div className="settings-row__text">
                        <p className="text__small">Units Of Measurement</p>
                        <p className="text__middle">Metric</p>
                      </div>
                    </div>
                    <IconButton sx={{alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginLeft: '30px'}} onClick={() => alert('pressed')}>
                      <EditIcon/>
                    </IconButton>
                  </div>
                </div>
              </div>
              <div className='tab__container tab__container_visible'></div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={openSetType}
      >
        <Box sx={modal_style}>
          <Box sx={{display: 'flex', borderBottom: '1px solid #edf2f6', width: '100%', height: '75px', justifyContent: 'flex-end', padding: '10px'}}>
            <IconButton sx={{alignSelf: 'center'}} onClick={() => handleCloseSetType()}>
              <CloseIcon/>
            </IconButton>
          </Box>
          <Box sx={{display: 'block', margin: '50px 20px', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
              <h3 style={{textAlign: 'center', color: '#505e71', fontWeight: '600', fontSize: '2.125rem', marginBottom: '55px'}}>Set Project Type</h3>
              <div style={{ display: 'block', maxWidth: '380px', margin: '0 auto' }}>
                <div style={{ display: 'block', borderRadius: '3px', border: '1px solid #edf2f6' }}>
                  <div style={{ display: 'block', padding: '15px', borderBottom: '1px dotted #edf2f6' }}>
                      <BpCheckbox defaultChecked/>
                      <span style={{lineHeight: '32px', color: '#889ab1', fontSize: '1.125rem'}}>Residential</span>
                  </div>
                  <div style={{ display: 'block', padding: '15px', borderBottom: '1px dotted #edf2f6' }}>
                      <BpCheckbox defaultChecked/>
                      <span style={{lineHeight: '32px', color: '#889ab1', fontSize: '1.125rem'}}>Office</span>
                  </div>
                  <div style={{ display: 'block', padding: '15px', borderBottom: '1px dotted #edf2f6' }}>
                      <BpCheckbox defaultChecked/>
                      <span style={{lineHeight: '32px', color: '#889ab1', fontSize: '1.125rem'}}>Hotel</span>
                  </div>
                  <div style={{ display: 'block', padding: '15px', borderBottom: '1px dotted #edf2f6' }}>
                      <BpCheckbox defaultChecked/>
                      <span style={{lineHeight: '32px', color: '#889ab1', fontSize: '1.125rem'}}>Industrial</span>
                  </div>
                </div>
              </div>
              <div style={{ display: 'block', maxWidth: '380px', margin: '70px auto 0' }}>
                <Box sx={{marginTop: '10px'}}>
                  <AddButton sx={{width: '100%', height: '75px'}}>Update</AddButton>
                </Box>
                <Box sx={{marginTop: '10px'}}>
                  <CancelButton sx={{width: '100%', height: '75px'}} onClick={() => handleCloseSetType()}>Cancel</CancelButton>
                </Box>
              </div>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default SettingsSite; 
