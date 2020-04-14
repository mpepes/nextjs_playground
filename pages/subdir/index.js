import React from 'react';
import Link from 'next/link';

const Index = () => {
    const array = Array.from({length: 10}, () => Math.floor(Math.random() * 55));

    return (
        <div>
            <h3>
                <Link href='/subdir/custom-route'>
                    <a>
                        custom route in subdir
                    </a>
                </Link>
            </h3>
            {array.map((item, i) => (
                <h3 key={i}>
                    <Link href={`/subdir/${item}`}>
                        <a>
                            {item}
                        </a>
                    </Link>
                </h3>
            ))}
        </div>
    )
};

export default Index;
