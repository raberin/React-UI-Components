import React from 'react';
import './Header.css';

import HeaderContent from "./HeaderContent";

const HeaderTitle = () => {
    return (
        <div className="header-content">
            <div className="header-title">
                <h1>Lambda School</h1>
                <p className="gray-text at-lambda">@Lambda School - 26 Jan</p>
            </div>
            <HeaderContent />
        </div>
    );
}

export default HeaderTitle;