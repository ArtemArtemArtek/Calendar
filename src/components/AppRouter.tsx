import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";
import { RoutesName } from "../routes";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useSelector } from "react-redux";

const AppRouter = () => {
    //const {isAuth} = useTypedSelector(state=>state)
   //const {isAuth}= useSelector(state=>state.isAuth)
   const {isAuth} = useTypedSelector(state=>state.auth)
    // const auth = false
    return (
        isAuth ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route path={route.path}
                        Component={route.component}
                        key={route.path}
                    />
                )}
                <Route path="*"
                    element={<Navigate to='/' replace />} />

            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route path={route.path}
                        Component={route.component}
                        key={route.path}

                    />
                )}
                <Route path="*"
                    element={<Navigate to='/login' replace />} />
            </Routes>
    )
}

export default AppRouter;