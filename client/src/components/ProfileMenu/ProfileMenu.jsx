import React from 'react'
import {Avatar, Menu} from '@mantine/core'

const ProfileMenu = ({ user, logout }) => {
  return (
    <Menu>
        <Menu.Target>
            <Avatar src={user?.picture} alt='Ảnh người dùng' radius={"xl"} />
        </Menu.Target>
        <Menu.Dropdown>
            <Menu.Item>
                Yêu Thích
            </Menu.Item>

            <Menu.Item>
                Đặt Lịch
            </Menu.Item>

            <Menu.Item onClick={()=> {
                localStorage.clear();
                logout();
            }}>
                Đăng Xuất
            </Menu.Item>
        </Menu.Dropdown>
    </Menu>
  )
}

export default ProfileMenu
