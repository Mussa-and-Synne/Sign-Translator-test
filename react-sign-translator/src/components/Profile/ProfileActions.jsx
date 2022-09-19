import { Link } from "react-router-dom";
import { UseUser } from "../../context/UserContext";
import { storageDelete } from "../../utils/storage";
import { STORAGE_KEY_USER } from "../../const/storageKeys";
import { clearTranslation } from "../../api/translate";
import { storageSave } from "../../utils/storage";

const ProfileActions = () => {

    const {user, setUser} = UseUser()

    const handleLogoutClick = () =>{
        if (window.confirm("Are you sure?")){
            storageDelete(STORAGE_KEY_USER)
            setUser(null)
        }
    }


    return(
        <ul>
            <li><Link to="/translation">Translate</Link></li>
            <li><button>Clear history</button></li>
            <li><button onClick={handleLogoutClick}>Logout</button></li>
        </ul>
    )
}
export default ProfileActions
