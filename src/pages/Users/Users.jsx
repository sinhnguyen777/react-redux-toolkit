import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Popconfirm, Table, Button, Space, message, Image, Divider } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import { fetchAsyncUsers, deleteUserById } from '../../redux/actions/userAction';
import CreateUser from './CreateUser';


const Users = () => {
    const [dataMap, setdataMap] = useState({})
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.users)

    useEffect(() => {
        dispatch(fetchAsyncUsers())
    }, [dispatch])

    useEffect(() => {
        setdataMap({ dataSource: users })
    }, [users])

    const confirm = (id) => {
        dispatch(deleteUserById(id))
        message.success('Delete successflly');
        const dataSource = [...dataMap.dataSource]

        setdataMap({
            dataSource: dataSource.filter((item) => item.id !== id)
        })
    }

    const cancel = (e) => {
        console.log(e);
        message.error('Click on No');
    }
    const { dataSource } = dataMap;
    const columns = [
        {
            title: 'Avatar',
            dataIndex: 'avatar',
            key: 'avatar',
            render: (text, record) => (
                <Image
                    width={100}
                    src={record.avatar}
                />
            ),
        },
        {
            title: 'Name',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone',
            key: 'phone',
            dataIndex: 'phone'
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => {
                return (
                    <Space size="middle" >
                        <p>Invite {record.name}</p>
                        <Popconfirm
                            title="Are you sure to delete this task?"
                            onConfirm={() => confirm(record.id)}
                            onCancel={cancel}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button
                                type="primary"
                                danger
                            >
                                <DeleteOutlined />
                            </Button>
                        </Popconfirm>
                    </Space>
                )
            },
        },
    ];

    return (
        <>
            <CreateUser />
            <Divider />
            <Table columns={columns} dataSource={dataSource} rowKey='id' />
        </>
    )
}

export default Users

