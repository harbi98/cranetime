import * as React from 'react';
import '../../Style.css';

function SettingsSite() {
  return (
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
                    <a className="btn__edit settings-popup__show" href="#settings-popup__type">
                      <svg className="svg_edit_icon">
                        <use xlinkHref="../../images/sprite/sprite.svg#edit_icon"></use>
                      </svg>
                    </a>
                  </div>
                  <div className="settings-row">
                    <div className="settings-row__left">
                      <div className="settings-row__text">
                        <p className="text__small">Projected Cost</p>
                        <p className="text__middle">$3.2bn AUD</p>
                      </div>
                    </div>
                    <a className="btn__edit settings-popup__show" href="#settings-popup__cost">
                      <svg className="svg_edit_icon">
                        <use xlinkHref="../../images/sprite/sprite.svg#edit_icon"></use>
                      </svg>
                    </a>
                  </div>
                  <div className="settings-row">
                    <div className="settings-row__left">
                      <div className="settings-row__text">
                        <p className="text__small">Expected Duration</p>
                        <p className="text__middle">Sep 2019 - Nov 2025 (5yrs 3mo)</p>
                      </div>
                    </div>
                    <a className="btn__edit settings-popup__show" href="#settings-popup__duration">
                      <svg className="svg_edit_icon">
                        <use xlinkHref="../../images/sprite/sprite.svg#edit_icon"></use>
                      </svg>
                    </a>
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
                  <a className="btn__edit settings-popup__show" href="#settings-popup__timezone">
                    <svg className="svg_edit_icon">
                      <use xlinkHref="../../images/sprite/sprite.svg#edit_icon"></use>
                    </svg>
                  </a>
                </div>
                <div className="settings-row">
                  <div className="settings-row__left">
                    <div className="settings-row__text">
                      <p className="text__small">Date Format</p>
                      <p className="text__middle">DD / MM / YY</p>
                    </div>
                  </div>
                  <a className="btn__edit settings-popup__show" href="#settings-popup__duration">
                    <svg className="svg_edit_icon">
                      <use xlinkHref="../../images/sprite/sprite.svg#edit_icon"></use>
                    </svg>
                  </a>
                </div>
                <div className="settings-row">
                  <div className="settings-row__left">
                    <div className="settings-row__text">
                      <p className="text__small">Units Of Measurement</p>
                      <p className="text__middle">Metric</p>
                    </div>
                  </div>
                  <a className="btn__edit settings-popup__show" href="#settings-popup__cost">
                    <svg className="svg_edit_icon">
                      <use xlinkHref="../../images/sprite/sprite.svg#edit_icon"></use>
                    </svg>
                  </a>
                </div>
                <div className="settings-row">
                  <div className="settings-row__left">
                    <div className="settings-row__text">
                      <p className="text__small">Language</p>
                      <p className="text__middle">British English</p>
                    </div>
                  </div>
                  <a className="btn__edit settings-popup__show" href="#settings-popup__language">
                    <svg className="svg_edit_icon">
                      <use xlinkHref="../../images/sprite/sprite.svg#edit_icon"></use>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className='tab__container tab__container_visible'>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsSite; 
