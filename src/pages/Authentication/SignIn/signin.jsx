  
import { Link } from "react-router-dom";
import React, {useState} from "react";
import { Form, Checkbox } from "antd";
import { Alert } from "antd";
import auth from "../../../utils/helpers/auth";
import authApi from "../../../core/api/static/auth";
import { set_user_info } from "../../../store/actions/user.action";

function SignIn() {
  const contentSignup ="Bạn đã có tài khoản? "
  const titleSignup = "Đăng ký ngay"
  const useFormInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
  
    const handleChange = (e) => {
      setValue(e.target.value);
    };
    return {
      value,
      onChange: handleChange,
    };
  };
  
  const [error, setError] = useState("");
  const username = useFormInput("");
  const password = useFormInput("");


  const onFinish = () => {
    const data = {
      email: username.value,
      password: password.value,
    };
    authApi
      .clientLogin(data)
      .then(({ info, access_token }) => {
        set_user_info(info, access_token);
        auth.setAuthInfo(info, access_token);
        console.log(info, access_token)
      })
      .catch((e) => {
        if (e.response && e.response.data) {
          setError(e.response.data.message);
        }
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onClose = () => {
    setError("");
  };

  return (
    <>
    {error && (
          <div className="login__validation">
            <Alert
              message={error}
              type="error"
              showIcon={true}
              closable={true}
              onClose={onClose}
            />
          </div>
        )}
      <div className="form-signin-text">
        <p>ĐĂNG NHẬP</p>
      </div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <div className="form-signin-box">
          <input {...username} placeholder="User Name" />
        </div>
        <div className="form-signin-box">
          <input {...password} type="password" placeholder="Password" />
        </div>
        <div className="form-signin-checkbox">
          <Checkbox>Remember me</Checkbox>
        </div>
        <div className="form-signin-submit">
          <button type="submit" onSubmit={onFinish}>
            Submit
          </button>
        </div>
        <div className="form-signin-box">
          <span>{contentSignup}<a href="/sign-up">{titleSignup}</a></span>
        </div>
      </Form>
    </>
  );
}

export default SignIn;