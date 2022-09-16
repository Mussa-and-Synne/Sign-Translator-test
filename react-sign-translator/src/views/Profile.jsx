import withAuth from "../hoc/WithAuth"
const Profile = () =>{
    return(
        <h1>Profile</h1>
    )
}
export default withAuth(Profile)