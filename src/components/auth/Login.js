import React,{useEffect,useState} from 'react'
import './Login.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {useNavigate} from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert'
import axios from 'axios';




export const Login = () => { 
    
    const navigate = useNavigate();
    
    const [alert,setAlert] = React.useState(null);
    const hideAlert = () => {
      setAlert(null);
    }
    return (
        <>
 
        {alert?<SweetAlert danger title="نام کاربری یا رمز عبور اشتباه است!" 
             onConfirm={()=>hideAlert()} onCancel={()=>hideAlert()} >username:ali  password:1234</SweetAlert>:null}
                                                           
            <div className="login-wrap">
                <div className="login-html">
                    <input id="tab-1" type="radio" name="tab" className="sign-in" checked /><label htmlFor="tab-1" className="tab">ورود به پنل</label>
                    {/* <input id="tab-2" type="radio" name="tab" className="for-pwd" /><label htmlFor="tab-2" className="tab"></label> */}
                    <div className="login-form">
                        <div className="sign-in-htm">
                        
                            <Formik
                                initialValues={{ username: '', password: '' }}
                                validate={values => {
                                    const errors = {};
                                    if (!values.username) {
                                        errors.username = 'الزامی است';
                                    }
                                    if(!values.password){
                                            errors.password ='الزامی است'
                                    }
                                    return errors;
                                }}
                                
                                onSubmit={(values,{setSubmitting } ) => {
                                    const apiurl =`https://apitester.ir/api/Users/authenticate?userName=${values.username}&password=${values.password}`
                                     
                                    axios.post(apiurl)
                                    .then(response=>{
                                    
                                      
                                        if(response.status==200){
                                            localStorage.setItem('user',JSON.stringify(response.data))
                                            localStorage.setItem('islogin',JSON.stringify({login:true}))
                                            localStorage.setItem('token',response.data.token)
                                            navigate('/')
                                        }   
                                        }).catch((err)=>{setAlert(true)
                                            console.log(err)})
                                    
                                                
                                                                   
                                 setSubmitting(false)
                                   
                                }}
                            >
                              
                                    <Form>
                                        <div className="group">
                                            <label htmlFor="usernme" className="label">نام کاربری </label>
                                            <Field type="text" placeholder='ali' name="username" className="input" />
                                            <ErrorMessage name="username" className='errormessage' component="div" />
                                        </div>
                                        <div className="group">
                                            <label htmlFor="pass" className="label">رمز عبور</label>
                                            <Field type="password" placeholder='1234' name="password" className="input" />
                                            <ErrorMessage name="password" className='errormessage' component="div" />
                                        </div>
                                        <div className="group">
                                            <button type="submit" className="button text-center" >
                                                ورود
                                            </button>
                                        </div>
                                    </Form>
                                    
                            
                            </Formik>
                                    
                            {/* <div className="hr"></div> */}
                        </div>
                        {/* <div className="for-pwd-htm">
                            <div className="group">
                                <label htmlFor="user" className="label">نام کاربری یا ایمیل</label>
                                <input id="user" type="text" className="input" />
                            </div>
                            <div className="group">
                                <input type="submit" className="button text-center" value="بازیابی رمز" />
                            </div>
                            <div className="hr"></div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}
