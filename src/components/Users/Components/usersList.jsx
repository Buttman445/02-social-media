import u from '../static/users.module.css';

let defaultImageURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvts5aHBstDkR8PigS4RmZkbZy78zpZoSuOw&usqp=CAU";


let UsersList = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div className="container">
        <h3 className="text-center mb-4">Users</h3>
        <div className="container text-center mb-4">
            {pages.map(pages => {
                return <button onClick={(e) => { props.onPageChanged(pages) }} className={`btn btn-success ${props.currentPage === pages && u.selected}`}>{pages} </button>
            })}
        </div>
        {
            props.users.map(users => <div key={users.id}>
                <div className="container">
                    <ul className="usersList">
                        <li className={u.usersList}>
                            <img
                                src={users.photos.large != null ? u.photos.small : defaultImageURL}
                                alt="icon" />
                            <h4 className={u.userName}>{users.name}</h4>
                            <p className={u.userText}>{users.status}</p>
                            <div>
                                {users.followed
                                    ? <button className="btn btn-primary mt-4" onClick={() => {
                                        props.unFollow(users.id)
                                    }}>Unfollow</button>
                                    : <button className="btn btn-primary mt-4" onClick={() => {
                                        props.follow(users.id)
                                    }}>Follow</button>}
                            </div>
                            {/* <div className={u.location}>
                    <ul>
                        <li>
                            {users.location.city}
                        </li>
                        <li>
                            {users.location.country}
                        </li>
                    </ul>
                </div> */}
                        </li>
                    </ul>
                </div>
            </div>)
        }
    </div>
}


export default UsersList;