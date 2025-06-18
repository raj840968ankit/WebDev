import { useMemo, useState } from "react";
import { Counts } from "./MemoCount";

export const ReactMemo = () => {
    const [count, setCount] = useState(0);

    //! here we are passing this as props so that React memo should work perfectly with reference type props
    //! reference type props always change reference even if value remain unchanged that can cause React Memo work incorrectly
    //! so we can prevent this using useMemo hook caching method
    const myBioData = useMemo(() => {
        return {
            name: "thapa",
            age: 30,
        };
    }, []);

    return (
        <>
            <div>
                <h1>{count}</h1>
                <button
                    onClick={() => setCount((prev) => prev + 1)}
                >
                    Increment
                </button>
            </div>
            <Counts bioData={myBioData} />
        </>
    );
};