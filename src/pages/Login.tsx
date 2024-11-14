import React, { FC } from "react";
import { Layout, Row, Card } from "antd";
import LoginPage from "../components/LoginPage";

const Login: FC = () => {
    return (
        <Layout>
            <Row justify="center" align="middle" className="h100">
                <Card>
                    <LoginPage />
                </Card>
            </Row>
        </Layout>
    )
}

export default Login;