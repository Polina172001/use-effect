import PropTypes from 'prop-types'

const ListItem = ({ user, setUser }) => {

    function handleClick() {
        setUser(user.id)
    }

    return (
        <li onClick={() => handleClick(user.id)}>
            {user.name}
        </li>
    )
}

ListItem.propTypes ={
    name: PropTypes.string.isRequired,
}

export default ListItem