import React from 'react';
import { useRouter } from 'next/router';

const NextId = () => {
    const router = useRouter();
    const { nextid } = router.query;

    return (
        <div>
            Router query nextid = {nextid}
        </div>
    )
};

export default NextId;
