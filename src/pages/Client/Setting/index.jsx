
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './main.scss';

import classNames from "classnames/bind";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// const cx = classNames.bind(styles);

const Sidebar = () => {
    return (
        <div className='row'>
             <div className='col-12 d-flex justify-content-end'>
            <div className="sidebar">
                <div className="user-info">
                    <div className="avatar">Avatar</div>
                    <span className="user-name">Tên User Người Dùng</span>
                </div>

                <hr className="divider" />

                <div className="menu-item">
                    <FontAwesomeIcon icon={faCog} className="icon" />
                    <span className='lable'> Cài đặt & Quyền Riêng Tư</span>
                </div>
                <div className="menu-item">
                    <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
                    <span className='lable' > Đăng xuất</span>
                </div>
            </div>
             </div>
            
         </div>
    );
};

export default Sidebar;