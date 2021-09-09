import React from "react";
import { Form, Checkbox } from "antd";

function SignUp() {
    const approval = "Tôi đồng ý Điều khoản & Chính sách bảo mật của Apollo";
    const contentSignin ="Bạn đã có tài khoản? "
    const titleSignin = "Đăng nhập ngay"

    const onFinish = (values) => {
        console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };


  return (
    <>
      <div className="form-signin-text">
        <p>ĐĂNG KÝ</p>
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
          <input placeholder="Số điện thoại" />
        </div>
        <div className="form-signin-box">
          <input placeholder="Email" />
        </div>
        <div className="form-signin-checkbox">
          <Checkbox>{approval}</Checkbox>
        </div>
        <div className="form-signin-submit">
          <button type="black">Tạo tài khoản</button>
        </div>
        <div className="form-signin-box">
          <span>{contentSignin}<a href="/sign-in">{titleSignin}</a></span>
        </div>
      </Form>
    </>
  );
}

export default SignUp;