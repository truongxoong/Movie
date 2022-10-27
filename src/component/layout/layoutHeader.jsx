import { Input, Popover } from "antd"
import { Fragment } from "react"
import { useNavigate } from "react-router-dom";
import { querySearch } from "../../redux/features";
import {
    BellOutlined,
    MessageOutlined,
  } from '@ant-design/icons';
import { useDispatch } from "react-redux";

const {Search} = Input

function HeaderLayout() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const onSearch = (value) => {
        dispatch(querySearch(value)) 
    }
    const logout = () => {
        localStorage.removeItem('informationUser')
        navigate('/')
    }
    const content = (
        <div>
          <p>Edit Profile</p>
          <p>Setting</p>
          <p className="cursor-pointer" onClick={logout}>Đăng Xuất</p>
        </div>
    )
    const user = JSON.parse(localStorage.getItem('informationUser'))


    return <div className="flex items-center justify-between mt-5 border-none">
        <div className='w-[30%] flex justify-center'>
            <Search placeholder="input search text" onSearch={onSearch} enterButton allowClear />
        </div>
        <div className='text-2xl flex w-[250px] '>
            {
                user ? 
                <Fragment>
                    <div ><BellOutlined /></div>
                    <div className='pl-5'><MessageOutlined /></div>
                    <div className='flex pl-5 items-center'>
                        <div className='w-[40px] h-[40px] rounded-full overflow-hidden'>
                        <img className='w-full h-full object-cover' src='https://www.tagar.id/Asset/uploads2019/1645876571394-zodiak-leo.jpg' />
                        </div>
                        <Popover trigger='click' content={content}>
                            <span className='pl-2 text-xl font-bold cursor-pointer'>{user.userName}</span>
                        </Popover>
                    </div>
                </Fragment> :
                <div className='font-bold cursor-pointer' onClick={()=> navigate('/login')}>Login</div>
            }   
        </div>
    </div>
}
export default HeaderLayout