import ListItem from './ListItem'

const Lists = (props) => {

    return (
        <ul className='users-list'>
            {props.users.map((user) => (<ListItem key={user.id} user={user} setUser={props.setUser} />))}
        </ul>
    )
}


export default Lists