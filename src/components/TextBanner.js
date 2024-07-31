// src/components/TextBanner.js
import React from 'react';
import textBannerStyles from '../styles/textBanner.module.scss';

const TextBanner = () => {
    return (
        <div className={textBannerStyles.textBanner}>
            <span>Meat</span>
            <span className={textBannerStyles.dots}>••••••</span>
            <span>Dairy</span>
            <span className={textBannerStyles.dots}>••••••</span>
            <span>Groceries</span>
        </div>
    );
};

export default TextBanner;
