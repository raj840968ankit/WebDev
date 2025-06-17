//! This is not a suitable way to pass the props in hierarchy where intermediate level don't want the props
//? so we use context API instead prop drilling
export const ParentComponent = () => {
    return(
        <>'
            <h1>Component A</h1>
            <ChildComponent data={"React JS"}/>
        </>
    )
}

const ChildComponent = ({data}) => {
    return (
        <>'
            <h1>Component B</h1>
            <GrandChildComponent data={data}/>
        </>
    )
}

const GrandChildComponent = ({data}) => {
    return (
        <>'
            <h1>Component C</h1>
            <GrandGrandChildComponent data={data}/>
        </>
    )
}

const GrandGrandChildComponent = ({data}) => {
    return (
        <>'
            <h1>Component D, I love {data}</h1>
        </>
    )
}