import React from 'react';

const PrivateRouter = ({element:Element,role}) => {
    //element: StorePage, role = 1
    const user = JSON.parse(localStorage.getItem('user'));
    if(user.role !== role){
        return <h1>Khong co quyen truy cap</h1>
    }
    return <Element/>;
};

export default PrivateRouter;