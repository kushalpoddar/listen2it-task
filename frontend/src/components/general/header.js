import Logo from "../../assets/img/logo.png"
import Avatar from "../../assets/img/avataaar.png"
const Header = () => {
    const logout = function(){
        localStorage.removeItem("name")
        localStorage.removeItem("email")
        localStorage.removeItem("token")
        window.location="/login"
    }
    return (
        <div className="header">
            <div className="row py-4">
                <div className="col">
                    <img src={Logo} />
                </div>
                <div className="col">
                    <img src={Avatar} />
                    <div style={{'fontSize' : "12px"}} onClick={() => logout()}>Logout</div>
                </div>
            </div>
        </div>
    )
}

export default Header