import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Id = () => {
    const router = useRouter();
    const { id } = router.query;
    const nextid = parseInt(id, 10) + 1;

    return (
        <div>
            <p>looking at dynamic router id {id}</p>
            <Link href={`/subdir/${id}/${nextid}`} as={`/subdir/${id}/such_a_nice_link_to_nextid=${nextid}`}>
                <a href="">another nested link to {nextid}</a>
            </Link>
        </div>
    )
};

export default Id;
