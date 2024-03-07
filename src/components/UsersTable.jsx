
const UsersTable = ({ usersData, handlePrev, handleNext }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                usersData ? (
                                    usersData.map((user, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{user.id}</td>
                                                <td>{user.name}</td>
                                                <td>{user.username}</td>
                                                <td>{user.email}</td>
                                            </tr>
                                        )
                                    })
                                ) : (
                                    <tr>
                                        <td colSpan="4">Loading😏😏😏😏...</td>
                                    </tr>)

                            }

                        </tbody>
                    </table>
                    <button onClick={handlePrev} style={{ marginRight: "20px" }}>Limit by - 1</button>
                    <button onClick={handleNext}>Limit by + 1</button>
                </div>
            </div>
        </div >
    )
}

export default UsersTable