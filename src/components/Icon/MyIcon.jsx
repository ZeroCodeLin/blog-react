import React from 'react';
import style from '../../assets/iconfont/iconfont.css'

const BizIcon = (props) => {
    const { type, size } = props;
  
    return <i className={`iconfont icon-${type}`} />;
};
export default BizIcon;