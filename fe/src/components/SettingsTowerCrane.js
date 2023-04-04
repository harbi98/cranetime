import * as React from 'react';
import '../Style.css';

function SettingsTowerCrane() {
  return (
    <>
      <div className='settings-search'>
        <div className='settings-search__header'>
          <div className='settings-search__toggle'>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <form className='settings-search__form'>
            <input type="text" className='settings-search__field' placeholder='Seach Milestones...'/>
            <div className='settings-search__icon'>
              <div className='icon_search'></div>
            </div>
          </form>
        </div>
        <div className='settings-search__body settings-search__body_pb scrollbar__none'>
          <div className='settings-search__content'>
            <div className='settings-search__block'>
              <div className='header__titles'>
                <p class='text__small'>Search Tower Cranes...</p>
              </div>
              <div className='settings-search__item nav-block'>
                <div className='nav-block__left'>
                  <div className='nav-block__icon'>
                    <img className='image__current' src={require('../images/cran_big_icon.png')} alt=""/>
                  </div>
                  <p className='nav-block__name settings-search__name'>TC 1</p>
                </div>
                <div className='nav-block__arrow'></div>
              </div>
              <div className='settings-search__item nav-block'>
                <div className='nav-block__left'>
                  <div className='nav-block__icon'>
                    <img className='image__current' src={require('../images/cran_big_icon.png')} alt=""/>
                  </div>
                  <p className='nav-block__name settings-search__name'>TC 2</p>
                </div>
                <div className='nav-block__arrow'></div>
              </div>
              <div className='settings-search__item nav-block nav-block_active'>
                <div className='nav-block__left'>
                  <div className='nav-block__icon'>
                    <img className='image__active' src={require('../images/cran_big_blue.png')} alt=""/>
                  </div>
                  <p className='nav-block__name settings-search__name'>TC 3</p>
                </div>
                <div className='nav-block__arrow'></div>
              </div>
              <div className='settings-search__item nav-block'>
                <div className='nav-block__left'>
                  <div className='nav-block__icon'>
                    <img className='image__current' src={require('../images/cran_big_icon.png')} alt=""/>
                  </div>
                  <p className='nav-block__name settings-search__name'>TC 4</p>
                </div>
                <div className='nav-block__arrow'></div>
              </div>
            </div>
          </div>
          <div className='settings-search__footer'>
            <a className='btn btn-blue' href='/'>Add Tower Crane</a>
          </div>
        </div>
      </div>
      <div className='settings__site tabs__section'>
        <div className='settings-sidebar settings-sidebar-small scrollbar-none'>
          <div className='settings-sidebar__top'>
            <div className='settings-about'>
              <div class="settings-about__icon">
                <img src={require("../images/cran_big_blue.png")} alt=""/>
              </div>
              <div class="settings-about__info">
                <p class="settings__title">TC 3</p>
              </div>
            </div>
          </div>
          <div className='settings-details'>
            <div class="header__titles">
              <p class="text__small">Crane Settings</p>
            </div>
            <ul className='settings-details__nav tabs'>
              <li className='nav-block tab_current'>
                <div className='nav-block__left'>
                  <div class="nav-block__icon">
                    <img class="image__current" src={require("../images/cran_big_icon.png")} alt=""/>
                    <img class="image__active" src={require("../images/cran_big_blue.png")} alt=""/>
                  </div>
                  <div class="nav-block__info">
                    <p class="text__middle">Crane Info</p>
                    <p class="text__small">Completed</p>
                  </div>
                </div>
                <div className='nav-block__arrow'>
                  <svg class="svg_arrow_right">
                    <use xlinkHref="../images/sprite/sprite.svg#arrow_right"></use>
                  </svg>
                </div>
              </li>
              <li class="nav-block">
                <div class="nav-block__left">
                  <div class="nav-block__icon">
                    <svg class="svg_location_icon" width="24" height="24">
                      <use xlinkHref="../images/sprite/sprite.svg#location_icon"></use>
                    </svg>
                  </div>
                  <div class="nav-block__info">
                    <p class="text__middle">Location</p>
                    <p class="text__small">Set</p>
                  </div>
                </div>
                <div class="nav-block__arrow">
                  <svg class="svg_arrow_right">
                    <use xlinkHref="../images/sprite/sprite.svg#arrow_right"></use>
                  </svg>
                </div>
              </li>
              <li class="nav-block">
                <div class="nav-block__left">
                  <div class="nav-block__icon">
                    <svg class="svg_grid_icon">
                      <use xlinkHref="../images/sprite/sprite.svg#grid_icon"></use>
                    </svg>
                  </div>
                  <div class="nav-block__info">
                    <p class="text__middle">Capacity Matrix</p>
                    <p class="text__small">Set</p>
                  </div>
                </div>
                <div class="nav-block__arrow">
                  <svg class="svg_arrow_right">
                    <use xlinkHref="../images/sprite/sprite.svg#arrow_right"></use>
                  </svg>
                </div>
              </li>
              <li class="nav-block">
                <div class="nav-block__left">
                  <div class="nav-block__icon">
                    <img class="image__current" src={require("../images/car_big_icon.png")} alt=""/>
                    <img class="image__active" src={require("../images/car_big_blue.png")} alt=""/>
                  </div>
                  <div class="nav-block__info">
                    <p class="text__middle">Delivery Bays</p>
                    <p class="text__small">2 Selected</p>
                  </div>
                </div>
                <div class="nav-block__arrow">
                  <svg class="svg_arrow_right">
                    <use xlinkHref="../images/sprite/sprite.svg#arrow_right"></use>
                  </svg>
                </div>
              </li>
              <li class="nav-block">
                <div class="nav-block__left">
                  <div class="nav-block__icon">
                    <img class="image__current" src={require("../images/platform_icon.png")} alt=""/>
                    <img class="image__active" src={require("../images/platform_blue.png")} alt=""/>
                  </div>
                  <div class="nav-block__info">
                    <p class="text__middle">Loading Platforms</p>
                    <p class="text__small">2 Selected</p>
                  </div>
                </div>
                <div class="nav-block__arrow">
                  <svg class="svg_arrow_right">
                    <use xlinkHref="../images/sprite/sprite.svg#arrow_right"></use>
                  </svg>
                </div>
              </li>
              <li class="nav-block">
                <div class="nav-block__left">
                  <div class="nav-block__icon">
                    <svg class="svg_calendar_icon">
                      <use xlinkHref="../images/sprite/sprite.svg#calendar_icon"></use>
                    </svg>
                  </div>
                  <div class="nav-block__info">
                    <p class="text__middle">Availabilty</p>
                    <p class="text__small">2 Selected</p>
                  </div>
                </div>
                <div class="nav-block__arrow">
                  <svg class="svg_arrow_right">
                    <use xlinkHref="../images/sprite/sprite.svg#arrow_right"></use>
                  </svg>
                </div>
              </li>
              <li class="nav-block">
                <div class="nav-block__left">
                  <div class="nav-block__icon">
                    <svg class="svg_key_icon">
                      <use xlinkHref="../images/sprite/sprite.svg#key_icon"></use>
                    </svg>
                  </div>
                  <div class="nav-block__info">
                    <p class="text__middle">Prestart Checks</p>
                    <p class="text__small">2 Selected</p>
                  </div>
                </div>
                <div class="nav-block__arrow">
                  <svg class="svg_arrow_right">
                    <use xlinkHref="../images/sprite/sprite.svg#arrow_right"></use>
                  </svg>
                </div>
              </li>
              <li class="nav-block">
                <div class="nav-block__left">
                  <div class="nav-block__icon">
                    <svg class="svg_tool_icon">
                      <use xlinkHref="../images/sprite/sprite.svg#tool_icon"></use>
                    </svg>
                  </div>
                  <div class="nav-block__info">
                    <p class="text__middle">Maintenance Cycles</p>
                    <p class="text__small">2 Selected</p>
                  </div>
                </div>
                <div class="nav-block__arrow">
                  <svg class="svg_arrow_right">
                    <use xlinkHref="../images/sprite/sprite.svg#arrow_right"></use>
                  </svg>
                </div>
              </li>
              <li class="nav-block">
                <div class="nav-block__left">
                  <div class="nav-block__icon">
                    <svg class="svg_incidents_icon">
                      <use xlinkHref="../images/sprite/sprite.svg#incidents_icon"></use>
                    </svg>
                  </div>
                  <div class="nav-block__info">
                    <p class="text__middle">Incidents</p>
                    <p class="text__small">2 Selected</p>
                  </div>
                </div>
                <div class="nav-block__arrow">
                  <svg class="svg_arrow_right">
                    <use xlinkHref="../images/sprite/sprite.svg#arrow_right"></use>
                  </svg>
                </div>
              </li>
              <li class="nav-block">
                <div class="nav-block__left">
                  <div class="nav-block__icon">
                    <svg class="svg_cast_icon">
                      <use xlinkHref="../images/sprite/sprite.svg#cast_icon"></use>
                    </svg>
                  </div>
                  <div class="nav-block__info">
                    <p class="text__middle">Attached Devices</p>
                    <p class="text__small">2 Selected</p>
                  </div>
                </div>
                <div class="nav-block__arrow">
                  <svg class="svg_arrow_right">
                    <use xlinkHref="../images/sprite/sprite.svg#arrow_right"></use>
                  </svg>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className='settings__main'>
          <header className='settings__header'>
            <div className='tabs__wrap'>
              <div class="tab__container tab__container_visible">
                <h2 class="settings__title">Crane Info</h2>
              </div>
            </div>
            <div className='header-profile'>
              <div class="header-profile__toggle"></div>
            </div>
          </header>
          <div className='settings__content scrollbar__none'>

          </div>
        </div>
      </div>
    </>
  );
}

export default SettingsTowerCrane; 
