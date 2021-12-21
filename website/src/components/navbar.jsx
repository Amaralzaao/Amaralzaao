import '../static/css/navbar.css'

export default function Navbar() {

    return (
        <nav>
            <div className="nav-content">
                <i className="fas fa-home item-active" id='home' onClick={() => {window.location.href = "/"}}></i>
                <i className="fas fa-user item-not-active" id='about'></i>
                <i className="fas fa-graduation-cap item-not-active" id='graduation' onClick={() => {window.location.href = "/graduation"}}></i>
                <i className="fas fa-hard-hat item-not-active" id='projects'></i>
            </div>
        </nav>
    )
}