import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button, Upload } from 'antd';
import { UserOutlined, MailOutlined, UploadOutlined, PhoneOutlined } from '@ant-design/icons';
import { createAsyncUser } from '../../redux/actions/userAction';


const CreateUser = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch()
    const [fileupload, setFileupload] = useState("")

    const onFinish = (values) => {
        const data = {
            username: values.username,
            avatar: fileupload,
            email: values.email,
            phone: values.phone
        }
        dispatch(createAsyncUser(data))
    };


    const normFile = (e) => {
        setFileupload(e.file.name)
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };


    return (
        <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your email!',
                    },
                ]}
            >
                <Input
                    prefix={<MailOutlined className="site-form-item-icon" />}
                    type="email"
                    placeholder="Email"
                />
            </Form.Item>
            <Form.Item
                name="upload"
                label="Upload"
                valuePropName="fileList"
                getValueFromEvent={normFile}
            >
                <Upload
                    multiple
                    action="http://localhost:3000/"
                    accept=".png,.jpg"
                    beforeUpload={(file) => {
                        // console.log(file);
                        return false
                    }}

                >
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
            </Form.Item>
            <Form.Item
                name="phone"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Phone number!',
                    },
                ]}
            >
                <Input
                    prefix={<PhoneOutlined className="site-form-item-icon" />}
                    type="number"
                    placeholder="Phone"
                />
            </Form.Item>
            <Form.Item shouldUpdate>
                {() => (
                    <Button
                        type="primary"
                        htmlType="submit"
                        disabled={
                            !form.isFieldsTouched(true) ||
                            !!form.getFieldsError().filter(({ errors }) => errors.length).length
                        }
                    >
                        Add User
                    </Button>
                )}
            </Form.Item>
        </Form>
    );
};

export default CreateUser;