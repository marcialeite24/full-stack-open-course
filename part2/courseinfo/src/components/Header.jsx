
const Header = ({id, name}) => {
    return (
        <>
            <h1 key={id}>{name}</h1>
        </>
    )
}

export default Header;