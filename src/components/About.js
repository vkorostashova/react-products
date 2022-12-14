import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

function About() {
    const [user, setUser] = useState({});

    useEffect(() => {
        let savedUser = localStorage.getItem('user');
        if(savedUser){
            savedUser = JSON.parse(savedUser);
            setUser(savedUser);
        }
    },[])

    const loginRef = useRef(null);
    const emailRef = useRef(null);
    const ageRef = useRef(null);


    function submitUser() {
        let newUser = {login: loginRef.current.value, email: emailRef.current.value, age: +ageRef.current.value }
       
        localStorage.setItem('user', JSON.stringify(newUser) )
        setUser(newUser);
    }

    return <>
        <h1 className={'m-3'}>About</h1>
        <input ref={loginRef} defaultValue={user.login} className={"form-control m-2"} type={'text'} placeholder={'Enter login'} />
        <input ref={emailRef} defaultValue={user.email} className={"form-control m-2"} type={'email'} placeholder={'Enter email'} />
        <input ref={ageRef} defaultValue={user.age} className={"form-control m-2"} type={'number'} min={0} max={100} placeholder={'Enter age'} />
        <Button className={'m-2'} variant='success' onClick={() => submitUser()}>Submit</Button>
    </>
}

export default About;