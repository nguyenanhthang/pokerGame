import React, { useState } from 'react';
import {
    Form,
    Input
} from 'antd';
import { useAppDispatch } from '../../app/hooks';
import { setInputAddTitle,setInputAddProgress } from '../../features/list/ListSlice';
const FormDisabledDemo = () => {
    const dispatch = useAppDispatch()
    const [componentDisabled, setComponentDisabled] = useState<boolean>(false);
    const onFormLayoutChange = ({ disabled }: { disabled: boolean }) => {
        setComponentDisabled(disabled);
    };
    const inputTitle =(e:any):void=>{
        dispatch(setInputAddTitle(e.target.value))
    }
    const inputProgress =(e:any):void=>{
        dispatch(setInputAddProgress(e.target.value))
    }
    return (
        <>
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                onValuesChange={onFormLayoutChange}
                disabled={componentDisabled}
            >
                <Form.Item label="Add List">
                    <Input onChange={inputTitle}/>
                </Form.Item>
                <Form.Item label="Progress">
                    <Input onChange={inputProgress}/>
                </Form.Item>
            </Form>
        </>
    );
};

export default () => <FormDisabledDemo />;