'use client';
import Input from '@/widgets/input/page';
import style from './page.module.scss';
import { useState } from 'react';
import Button from '@/widgets/button/page';
import Link from 'next/link';

export const metadata = {
    title: 'Sign up'
}

function Signup() {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        conformPassword: ''
    })

    return (
        <div className={style.container}>
            <h1>Join now</h1>
            <form action="" method="post">
                <div className={style.grid2}>
                    <Input 
                        type='text'
                        name='firstName'
                        value={user.firstName}
                        setValue={setUser}>
                        First name
                    </Input>
                    <Input 
                        type='text'
                        name='lastName'
                        value={user.lastName}
                        setValue={setUser}>
                        Last name
                    </Input>
                </div>
                <Input 
                    type='text'
                    name='username'
                    value={user.username}
                    setValue={setUser}>
                    Username
                </Input>
                <Input 
                    type='email'
                    name='lastName'
                    value={user.lastName}
                    setValue={setUser}
                    placeholder='example@mail.com'>
                    Email
                </Input>
                <Input 
                    type='text'
                    name='password'
                    value={user.password}
                    setValue={setUser}>
                    Password
                </Input>
                <Input 
                    type='text'
                    name='conformPassword'
                    value={user.conformPassword}
                    setValue={setUser}>
                    Conform Password
                </Input>
                <Button type='submit'>submit</Button>
            </form>
            <span>Already have an account?  
                <Link href="/account/signin"> Sign in</Link>
            </span>
        </div>
    )
}

export default Signup