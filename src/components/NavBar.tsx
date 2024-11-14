import React, { FC } from "react";
import { Header } from "antd/es/layout/layout";
import { Row, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { RoutesName } from "../routes";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { AuthActionCreators } from "../store/reducers/auth/action-creators";
import { useDispatch } from "react-redux";

const NavBar: FC = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
 
    const {isAuth, user} = useTypedSelector(state=>state.auth)

    return (
        
        <Header>
            <Row justify="end">
                {isAuth ?
                    <>
                        <div style={{ color: 'white' }}>{user.username}</div>
                        <Menu theme="dark" mode="horizontal" selectable={false}>
                            <Menu.Item key={1} onClick={() => dispatch(AuthActionCreators.logout())}>Выйти</Menu.Item>
                        </Menu>
                    </>
                    :

                    <Menu theme="dark" mode="horizontal" selectable={false}>
                        <Menu.Item style={{ width: 1 }} key={1} onClick={() => navigate(RoutesName.LOGIN)}>Войти</Menu.Item>
                    </Menu>

                }
            </Row>
        </Header>
    )
}

export default NavBar;