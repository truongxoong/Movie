import { Button, Checkbox, Form, Input } from "antd"
import { LockOutlined, UserOutlined, FacebookFilled, TwitterCircleFilled, GoogleCircleFilled} from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate()
    const onFinish = (values) => {
        console.log('Success:', values);
        localStorage.setItem('informationUser', 
            JSON.stringify({userName: values.useName, password: values.password})
        )
        navigate('/')
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return <div className="w-[400px] h-[550px] border rounded-lg bg-slate-600 mx-auto">
        <div className="text-center text-3xl font-bold mt-12 text-white">Movie 2022</div>
        <div className="mx-6 mt-16">
            <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    name='useName'
                    rules={[
                        {
                            required: true,
                            message: 'Truong bat buoc'
                        },
                        {
                            min: 6,
                            message: 'Usename phai lon hon 6 ky tu'
                        }
                    ]}
                >
                    <Input prefix ={<LockOutlined />} placeholder='Username'/>
                </Form.Item>
                <Form.Item 
                    name= 'password'
                    rules={[
                        {
                            required: true,
                            message: 'Khong duoc bo trong'
                        },
                        {
                            min: 6,
                            message:'password pha lon hon 6 ky tu'   
                        }
                    ]}
                >
                    <Input.Password prefix = {<UserOutlined />} placeholder='Password' />
                </Form.Item>
                <Form.Item name='remember' valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Form.Item>
                    <Button className="w-full mt-16" type="primary" htmlType="submit">Login</Button>
                </Form.Item>
            </Form>
        </div>
        <div className="text-3xl flex justify-center">
            <div className="text-blue-600"><FacebookFilled /></div>
            <div className="text-cyan-600 mx-3"><TwitterCircleFilled /></div>
            <div className="text-rose-500"><GoogleCircleFilled /></div>
        </div>
    </div>
}
export default Login