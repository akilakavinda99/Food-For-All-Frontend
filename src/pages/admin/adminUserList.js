import React from "react";
import SideNav from "../../components/admin/user/sideNav";
import NavButton from "../../components/admin/orgrequestlist/NavButton";
import GetUserList from "../../components/admin/user/userlist";

export default function GetAllUserList (){

    return(
        <>
            <NavButton/>
            <SideNav/>
            <GetUserList/>
        </>
    )
}