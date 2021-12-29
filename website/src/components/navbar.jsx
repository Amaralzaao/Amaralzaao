import '../static/css/navbar.css'

export default function Navbar() {

    function goToGraduation() {
        document.querySelector(`#graduation`).classList.add = 'item-active'
        document.querySelector(`#home`).classList.remove = 'item-active'
        window.location.href = '/graduation'
    }

    return (
        <nav>
            <div className="nav-content">
                <i className="fas fa-home item-active" id='home' onClick={() => {window.location.href = "/"}}></i>
                <i className="fas fa-graduation-cap item-not-active" id='graduation' onClick={goToGraduation}></i>
            </div>
        </nav>
    )
}