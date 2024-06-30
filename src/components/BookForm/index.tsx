import React, { useState } from 'react';
import {
    Button,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Select,
    Image
} from 'antd';



const { RangePicker } = DatePicker;
const { TextArea } = Input;


export default function BookForm() {
    const [componentDisabled, setComponentDisabled] = useState<boolean>(true);
    const [preview, setPreview] = useState('')
    const [form] = Form.useForm()

    const handleFinish= (values) =>  {
        console.log(values);
        
    }

    return <>
        <Form
            form={form}
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            style={{ maxWidth: 600 }}
            onFinish={handleFinish}
        >
            <Form.Item label="名称" name="name"
                rules={[
                    {
                        required: true,
                        message: '请输入名称'
                    }
                ]}>
                <Input placeholder='请输入' />
            </Form.Item>
            <Form.Item label="作者" name='author' rules={[
                {
                    required: true,
                    message: '请输入作者'
                }
            ]}>
                <Input placeholder='请输入' />
            </Form.Item>
            <Form.Item label="分类" name='category' rules={[
                {
                    required: true,
                    message: '请选择分类'
                }
            ]}>
                <Select placeholder='请选择'>
                    <Select.Option value="demo">Demo</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item label="封面" name='cover'>
                <Input.Group compact>
                    {/* 此处需要手写onChange事件更新表单值。
                    因为Form.Item 嵌套子组件后，Input不再自动更新表单值了*/}
                    <Input placeholder='请输入' style={{ width: "calc(100% - 100px)" }}
                        onChange={(e) => {
                            form.setFieldValue('cover', e.target.value)
                        }} />
                    <Button type='primary'
                        onClick={() => {
                            setPreview(form.getFieldValue('cover'))
                        }}>预览</Button>
                </Input.Group>
            </Form.Item>
            {preview && <Form.Item label=' ' colon={false}>
                <Image src={preview} width={100} height={100} alt=''/>
            </Form.Item>}
            <Form.Item label="出版日期" name='publishAt'>
                <DatePicker placeholder='请选择' />
            </Form.Item>
            <Form.Item label="库存" name='stock'>
                <InputNumber placeholder='请输入' />
            </Form.Item>
            <Form.Item label="描述" name='description'>
                <TextArea rows={4} placeholder='请输入' />
            </Form.Item>
            <Form.Item label="Button">
                <Button htmlType='submit'>创建</Button>
            </Form.Item>
        </Form>
    </>
}

