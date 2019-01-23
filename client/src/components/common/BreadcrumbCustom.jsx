/**
 * 面包屑导航
 */
import React from 'react';
import { Breadcrumb } from 'antd';
import {Link} from 'react-router-dom';

class BreadcrumbCustom extends React.Component {
    render() {
        const first = <Breadcrumb.Item> <Link to={this.props.href}>{this.props.first}</Link></Breadcrumb.Item> || '';
        const second = <Breadcrumb.Item>{this.props.second}</Breadcrumb.Item> || '';
        return (
            <span>
                <Breadcrumb style={{ margin: '12px 0' }}>
                        {first}
                        {second}
                </Breadcrumb>
            </span>
        )
    }
}

export default BreadcrumbCustom;
