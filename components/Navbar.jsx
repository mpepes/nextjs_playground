import React from 'react';
import Link from "next/link";

const Navbar = ({ children }) => {
    return (
        <div>
            <h3>
                <Link href='/about'>
                    <a title='test title'>About</a>
                </Link>
            </h3>
            <h3>
                <Link href='/subdir'>
                    <a>
                        subdir
                    </a>
                </Link>
            </h3>
            {children}
        </div>
    )
};

export default Navbar;
