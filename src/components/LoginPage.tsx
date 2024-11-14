import { Button, Form, Input } from "antd";
import React, { FC, useState } from "react";
import { AuthActionCreators } from "../store/reducers/auth/action-creators";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";

const LoginPage: FC = () => {

  const [login, setLogin]=useState('')
  const [password, setPassword]=useState('')

  
  const {error, isLoading} = useTypedSelector((state)=>state.auth) 
  
  const dispatch = useDispatch()
  const submit=()=>{
    dispatch(AuthActionCreators.login(login, password))
  }

  return (
        <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        onFinish={submit}
        
      >

          <h1 style={{marginLeft:60, width:200}}>Форма входа</h1>
          {error?
          <p style={{color:'red'}}>{error}</p>:
          null
        }
          
          
        <Form.Item
          label="Логин"
          name="login"
          // style={{marginRight:100}}
          rules={[{ required: true, message: 'Пожалуйста введите логин!' }]}
          
          >
          <Input  onChange={e=>setLogin(e.target.value)}/>
        </Form.Item>
    
        <Form.Item
          label="Пароль"
          name="password"
          // style={{marginRight:100}}
          rules={[{ required: true, message: 'Пожалуйста введите пароль!' }]}
        >
          <Input.Password onChange={e=>setPassword(e.target.value)}/> 
        </Form.Item>
    
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button style={{marginLeft:110}} type="primary" htmlType="submit" loading={isLoading}>
            Войти
          </Button>
        </Form.Item>
      </Form>
    )
}

export default LoginPage;