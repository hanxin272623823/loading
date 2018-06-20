import React from 'react'
import { ImportStyle } from 'sp-css-import'


/**  
 * 传入参数
 * wrapWidth,String, spin外层div的宽度
 * wrapHeight,String, spin外层div的高度
 * backgroundColor,String,  spin外层div的背景颜色
 */
@ImportStyle(require('./index.less'))
export default class Spin extends React.Component {
    render() {
        const { className, wrapWidth,wrapHeight,backgroundColor } = this.props

        let propsStyle = {
            width: wrapWidth ? wrapWidth : '100%',
            height: wrapHeight,
            lineHeight: wrapHeight,
            backgroundColor: backgroundColor ? backgroundColor : 'white'
        }
        return (
            <div className={className}>
                <div className="loading-wrap"  style={propsStyle}>
                    <div class="loading"></div>
                </div>  
            </div>
        )
    }
}