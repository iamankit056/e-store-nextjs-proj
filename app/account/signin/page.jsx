'use client'
import Input from '@/widgets/input/page';
import style from './page.module.scss';
import { useState } from 'react';
import Button from '@/widgets/button/page';
import Link from 'next/link';

export const metadata = {
    title: 'Sign in'
}

function Signin() {
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    return(
        <div className={style.container}>
            <h1>Sign in</h1>
            <form action="" method="post">
                <Input 
                    type='text' 
                    name='username'
                    value={user.username}
                    setValue={setUser}>
                    Username
                </Input>
                <Input 
                    type='text' 
                    name='password'
                    value={user.password}
                    setValue={setUser}>
                    Password
                </Input>

                <Link href="">Forget Password</Link>

                <Button type='submit'>Sign in</Button>
            </form>
            <span>Don't have an account? 
                <Link href="/account/signup"> Sign up</Link>
            </span>
        </div>
    )
}

export default Signin