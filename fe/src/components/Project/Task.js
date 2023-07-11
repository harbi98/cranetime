import React from 'react';
import '../../Style.css';
import SearchIcon from '@mui/icons-material/Search';
import ChevronRight from '@mui/icons-material/ChevronRight';

export default function Settings() {
    return (
        <div className='settings__wrap'>
            <div className='settings-search'>
                <div className='settings-search__header'>
                    <div class="settings-search__toggle" onClick={() => alert('jkfdhsjkfh')}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="settings-search__form">
                        <input type="text" class="settings-search__field" placeholder="Search Tasks..."/>
                        <div class="settings-search__icon">
                            <SearchIcon sx={{color: '#8796aa'}}/>
                        </div>
                    </div>
                </div>
                <div className='settings-search__body settings-search__body_pb scrollbar__none'>
                    <div className='settings-search__content'>
                        <div className='settings-search__block'>
                            <div class="header__titles">
                                <p class="text__small">No Group</p>
                            </div>
                            <div class="settings-search__item settings-search__elem settings-search__task" data-task-id="4915">
                                <div class="settings-search__left">
                                    <p class="settings-search__name text__middle">Formwork - Column Box Install</p>
                                </div>
                                <div class="settings-search__arrow">
                                    <ChevronRight sx={{color: '#8796aa'}}/>
                                </div>
                            </div>
                            <div class="settings-search__item settings-search__elem settings-search__task" data-task-id="4915">
                                <div class="settings-search__left">
                                    <p class="settings-search__name text__middle">Formwork Screens</p>
                                </div>
                                <div class="settings-search__arrow">
                                    <ChevronRight sx={{color: '#8796aa'}}/>
                                </div>
                            </div>
                            {/* ------------------- */}
                        </div>
                        <div className='settings-search__block'>
                            <div class="header__titles">
                                <p class="text__small">Fit Out</p>
                            </div>
                            <div class="settings-search__item settings-search__elem settings-search__task" data-task-id="4915">
                                <div class="settings-search__left">
                                    <p class="settings-search__name text__middle">4Ps</p>
                                </div>
                                <div class="settings-search__arrow">
                                    <ChevronRight sx={{color: '#8796aa'}}/>
                                </div>
                            </div>
                            {/* ------------------- */}
                        </div>
                        <div className='settings-search__block'>
                            <div class="header__titles">
                                <p class="text__small">Groundworks</p>
                            </div>
                            <div class="settings-search__item settings-search__elem settings-search__task" data-task-id="4915">
                                <div class="settings-search__left">
                                    <p class="settings-search__name text__middle">Alimak</p>
                                </div>
                                <div class="settings-search__arrow">
                                    <ChevronRight sx={{color: '#8796aa'}}/>
                                </div>
                            </div>
                            <div class="settings-search__item settings-search__elem settings-search__task" data-task-id="4915">
                                <div class="settings-search__left">
                                    <p class="settings-search__name text__middle">Concrete Placement</p>
                                </div>
                                <div class="settings-search__arrow">
                                    <ChevronRight sx={{color: '#8796aa'}}/>
                                </div>
                            </div>
                            {/* ------------------- */}
                        </div>
                    </div>
                    <div className='settings-search__footer'>
                        <button class="btn btn_blue settings-popup__show" onClick={() => alert('pressed')}>Add Task</button>
                    </div>
                </div>
            </div>
            <div className='settings__site tabs__section'>
                <div className='settings-sidebar settings-sidebar_small scrollbar_none'>
                    <div className='settings-sidebar__top'>
                        <div className='settings-about'>
                            <div className="settings-about__logo">
                                <img src={require("../../images/tasks_img.jpg")} alt="Task"/>
                            </div>
                            <div className="settings-about__info">
                                <p className="settings__title">Formwork Screens</p>
                                <p className="text__small">No Group</p>
                            </div>
                        </div>
                    </div>
                    <div className='settings-sidebar__buttons'>
                        <a className="settings-sidebar__btn" href="#settings-sidebar__btn">
                            
                        </a>
                        <a className="settings-sidebar__btn" href="#settings-sidebar__btn">
                            
                        </a>
                    </div>
                    <div className='settings-details'>
                        <div class="header__titles">
                            <p class="text__small">Task Options</p>
                        </div>
                        <ul class="settings-details__nav tabs">
                            <li class="nav-block tab_current"  onClick={() => alert('pressed1')}>
                                <div class="nav-block__left">
                                    <div class="nav-block__icon">
                                        
                                    </div>
                                    <div class="nav-block__info">
                                        <p class="text__middle">Task Info</p>
                                        <p class="text__small">Completed</p>
                                    </div>
                                </div>
                                <div class="nav-block__arrow">
                                    
                                </div>
                            </li>
                            <li class="nav-block" onClick={() => alert('pressed2')}>
                                <div class="nav-block__left">
                                    <div class="nav-block__icon">
                                        
                                    </div>
                                    <div class="nav-block__info">
                                        <p class="text__middle">Companies</p>
                                        <p class="text__small">All Available</p>
                                    </div>
                                </div>
                                <div class="nav-block__arrow">
                                    
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='settings__main'>
                    <header class="settings__header">
                        <div class="tabs__wrap">
                            <div class="tab__container tab__container_visible">
                                <h2 class="settings__title">Task Info</h2>
                            </div>
                            <div class="tab__container">
                                <h2 class="settings__title">Companies</h2>
                            </div>
                        </div>
                        <div class="header-profile">
                            <div class="header-profile__toggle"></div>
                        </div>
                    </header>
                    <div class="settings-row">
                        <div class="settings-row__left">
                            <div class="settings-row__text">
                                <p class="text__small">Name</p>
                                <p class="text__middle">Formwork Screens</p>
                            </div>
                        </div>
                        <a class="btn__edit settings-popup__show" href="#settings-popup__task_name">
                            
                        </a>
                    </div>
                    <div class="settings-row">
                        <div class="settings-row__left">
                            <div class="settings-row__text">
                                <p class="text__small">Category</p>
                                <p class="text__middle">No Group</p>
                            </div>
                        </div>
                        <a class="btn__edit settings-popup__show" href="#settings-popup__task_name">
                            
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}