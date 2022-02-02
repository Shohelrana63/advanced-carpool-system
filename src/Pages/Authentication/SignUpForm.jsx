import React from 'react';

const SignUpForm = (props) => {
    const {  errors } = props;

    return (
        <div className="tg-form login signup">
            <div className="container">
                <h3 className="mb-4 pb-2">Create an Account</h3>
                <form action="">
                    <div className="form-group">
                        <input type="text" className="form-control mt-4 pl-0 border-top-0 border-left-0 border-right-0" placeholder="Name" name="name" />
                        {errors.name && <p className="error-msg">{errors.name}</p>}
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control mt-4 pl-0 border-top-0 border-left-0 border-right-0" placeholder="Email" name="email" />
                        {errors.email && errors.email.type === "required"}
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" name="password"/>
					    {errors.password && <p className="error-msg">{errors.password}</p>}
                    </div>
                    <div className="form-group">
                    <input type="password" className="form-control" placeholder="Confirm Password" name="confirmPassword"/>
					    {errors.confirmPassword && <p className="error-msg">{errors.confirmPassword}</p>}
                    </div>
                    <button type="submit" className="btn btn-primary">Create an account</button>
                </form>
            </div>
        </div>
    );
};

export default SignUpForm;