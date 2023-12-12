import { useState } from 'react';
import './App.css';

function App() {
    const [userType, setUserType] = useState('student'); // 用户类型：'student' 或 'admin'

    // 处理登录表单提交
    const handleLogin = (event) => {
        event.preventDefault();
        // 在这里处理登录逻辑
        alert(`登录为：${userType}`);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">学生宿舍管理系统</h1>

            {/* 用户类型选择 */}
            <div className="text-center mb-8">
                <button
                    className={`mr-4 py-2 px-6 ${userType === 'student' ? 'bg-blue-500 text-white font-bold rounded' : 'bg-gray-200 text-gray-700'}`}
                    onClick={() => setUserType('student')}
                >
                    学生登录
                </button>
                <button
                    className={`py-2 px-6 ${userType === 'admin' ? 'bg-blue-500 text-white font-bold rounded' : 'bg-gray-200 text-gray-700'}`}
                    onClick={() => setUserType('admin')}
                >
                    管理员登录
                </button>
            </div>

            {/* 登录表单 */}
            <form onSubmit={handleLogin} className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">{userType === 'student' ? '学生登录' : '管理员登录'}</h2>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-bold mb-2 text-gray-700">用户名:</label>
                    <input type="text" id="username" className="border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-bold mb-2 text-gray-700">密码:</label>
                    <input type="password" id="password" className="border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
                <div className="flex items-center justify-between">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        登录
                    </button>
                </div>
            </form>
        </div>
    );
}

export default App;
