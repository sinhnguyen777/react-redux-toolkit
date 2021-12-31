import React, { useState } from 'react'
import { Table, Input, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Joe Black',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Jim Green',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '4',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
    },
];

const columns = [
    {
        title: 'Kỳ thứ',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Học kỳ',
        dataIndex: 'age',
        key: 'age',
        sorter: (a, b) => a.age - b.age
    },
    {
        title: 'Môn',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Mã môn',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Mã chuyển đổi',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Số tín chỉ',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Điểm',
        dataIndex: 'diem',
        key: 'diem',
        // sorter: (a, b) => a.diem - b.diem
    },
    {
        title: 'Trạng thái',
        dataIndex: 'address',
        key: 'address',
    },
];

export default function TableData() {
    const [searchText, setsearchText] = useState('')
    const [searchColumn, setsearchColumn] = useState('')

    function onChange(sorter) {
        console.log('params', sorter);
    }

    

    return (
        <div>
            <Table
                columns={columns}
                dataSource={data}
                onChange={onChange}
                bordered
            />
        </div>
    )
}
