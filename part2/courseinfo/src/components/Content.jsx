import Part from "./Part"

const Total = ({parts}) => {
    return (
        <>
            <p>
                <b>total of {' '}
                {parts.reduce((total,part) => total + part.exercises,0)} 
                {' '} exercises
                </b>
            </p>
        </>
    )
}

const Content = ({parts}) => {
    return (
        <div>
            <Part parts={parts}/>            
            <Total parts={parts} />
        </div>
    )
}

export default Content;