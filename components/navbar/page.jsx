'use client';
import { useState } from 'react';
import style from './page.module.scss';
import { BsFillCartFill, BsFillPersonFill } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import Link from 'next/link';

function Navbar() {
    const [profileClicked, setProfileClicked] = useState(false);
    const [searchClicked, setSearchClicked] = useState(false);

    const handleClick = (setValue) => {
        setValue(value => {
            return !value;
        })
    }

    return (
        <div className={style.navbar}>
            <Link href={'/'} className={style.logo}>
                E Store
            </Link>

            {searchClicked&&<form method="post">
                <input placeholder='Search for product' />
            </form>}

            <div className={style.links}>
                <BiSearch type='button' onClick={() => handleClick(setSearchClicked) } className={style.icon} />
                <div className={style.cart}>
                    <BsFillCartFill className={style.icon} />
                    <span>5</span>
                </div>
                <div className={style.menu} onClick={() => handleClick(setProfileClicked)}>
                    <BsFillPersonFill 
                        className={style.icon}/>
                    {profileClicked && <nav>
                        <Link href={'/account/signin'}>Sign in</Link>
                        <Link href={'/account/signup'}>Sign up</Link>
                    </nav>}
                </div>
            </div>
        </div>
    )
}

export default Navbar