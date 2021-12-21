import '../static/css/footer.css'

export default function Footer() {

    let currentYear = new Date().getFullYear()

    return (
        <footer>
            <p>© {currentYear} - {currentYear + 1}</p>
        </footer>
    )
}