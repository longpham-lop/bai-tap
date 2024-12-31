import React, { useState } from 'react';

function Login() {
  const [phone, setPhone] = useState('');

  const handleChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the login logic here
    console.log('Phone number:', phone);
  };

  return (
    <div className="login">
      <h2>Đăng nhập</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nhập số điện thoại:
          <input type="tel" value={phone} onChange={handleChange} />
        </label>
        <button type="submit">Tiếp tục</button>
      </form>
    </div>
  );
}

export default Login;
