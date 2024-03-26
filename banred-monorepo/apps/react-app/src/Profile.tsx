import { useAuth0 } from "@auth0/auth0-react"

export const Profile = ()=> {

    const {user, isAuthenticated} = useAuth0 ();
    return(
        <>
        {isAuthenticated && (
<>
            <img src={user?.picture} alt="image" />
            <p>Nombre: {user?.name}</p>
</>

        )}
        </>
    )
}