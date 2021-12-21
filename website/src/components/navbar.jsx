import '../static/css/navbar.css'

export default function Navbar() {
    return (
        <nav>
            <div className="nav-content">
                <i class="fas fa-home item-active"></i>
                <i class="fas fa-user item-not-active"></i>
                <i class="fas fa-graduation-cap item-not-active"></i>
                <i class="fas fa-hard-hat item-not-active"></i>
            </div>
        </nav>
    )
}