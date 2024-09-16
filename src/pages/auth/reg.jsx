import React from 'react';
import { useForm } from 'react-hook-form';
import { Authregister } from '../../services/utils/auth/auth';
import { useNavigate } from 'react-router-dom';
function RegisterHookForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = async(data) => {
        try {
            const registerData = await Authregister(data.username, data.password, data.FirstName, data.LastName);
            console.log(registerData);
            navigate("/login");

        } catch (error) {
            console.error("Registration Error:", error.message);
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center">Registration Form</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="needs-validation" noValidate>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input 
                        type="text" 
                        id="username"
                        className="form-control" 
                        {...register("username", { required: "Username is required" })} 
                    />
                    {errors.username && <p className="text-danger">{errors.username.message}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        className="form-control" 
                        {...register("password", { required: "Password is required" })} 
                    />
                    {errors.password && <p className="text-danger">{errors.password.message}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="FirstName" className="form-label">First Name</label>
                    <input 
                        type="text" 
                        id="FirstName" 
                        className="form-control" 
                        {...register("FirstName", { required: "First Name is required" })} 
                    />
                    {errors.FirstName && <p className="text-danger">{errors.FirstName.message}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="LastName" className="form-label">Last Name</label>
                    <input 
                        type="text" 
                        id="LastName" 
                        className="form-control" 
                        {...register("LastName", { required: "Last Name is required" })} 
                    />
                    {errors.LastName && <p className="text-danger">{errors.LastName.message}</p>}
                </div>
                <button type="submit" className="btn btn-primary w-100 mt-3">Register</button>
            </form>
        </div>
    );
}

export default RegisterHookForm;
