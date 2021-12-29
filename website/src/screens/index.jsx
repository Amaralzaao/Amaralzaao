import Footer from "../components/footer";
import Navbar from "../components/navbar";
import './index.css';

//MEMOJIS
import computer from '../static/memojis/me-and-computer.png'
import call from '../static/memojis/call.png'
import love from '../static/memojis/love.png'
import peace from '../static/memojis/peace.png'
import idea from '../static/memojis/idea.png'

//PROJECTS


export default function IndexScreen() {
    return (
        <main className="index bg-light">
            <Navbar/>
            <Banner/>
            <About/>
            <Project/>
            <Timeline/>
            <Footer/>
        </main>
    )
}

function Banner() {
    let messageList = ["Desenvolvedor FullStack no CIS", "Universitário", "Cursando Análise e Desenvolvimento de Sistemas", "Desenvolvedor mobile usando Swift"]
    var currentMessage = messageList[Math.floor(Math.random() * messageList.length)]

    let images = [computer, call, love, peace, idea]
    let first = images[Math.floor(Math.random() * images.length)]
    let second = images[Math.floor(Math.random() * images.length)]
    let third = images[Math.floor(Math.random() * images.length)]

    while (first == second || first == third || second == third) {
        first = images[Math.floor(Math.random() * images.length)]
        second = images[Math.floor(Math.random() * images.length)]
        third = images[Math.floor(Math.random() * images.length)]
    }

    return (
        <section className="banner-index">
            <h1>Carlos Alberto Barcelos do Amaral</h1>
            <p>{currentMessage}</p>

            <div className="memojis">
                <img src={first}  alt="" srcSet="" className="first-memoji"  />
                <img src={second} alt="" srcSet="" className="second-memoji" />
                <img src={third}  alt="" srcSet="" className="third-memoji"  />
            </div>
        </section>
    )
}

function About() {
    return (
        <section className="about-index">
            <h3>Sobre</h3>
            <p>
            Meu nome é Carlos Alberto Barcelos do Amaral, mesmo nome do meu avô paterno, porém adicionou o sobrenome da família da minha mãe, Barcelos.
            Na grande maioria me chamam de Carlos ou somente Amaral, que gosto muito. 
            Tenho 17 anos, me formei em 2021 no ensino médio com curso tecnólogo em Análise e Desenvolvimento de Sistemas no SESI/SENAI, contudo, 
            já estou matriculado na Faculdade SENAI, também com graduação em Análise e Desenvolvimento de Sistemas.
            </p>
            <a href="https://www.linkedin.com/in/carlos-amaral-56a6881b3/" target={"_blank"} className="saiba-mais-link">Saiba mais<i className="fas fa-chevron-right"></i></a>
        </section>
    )
}

function Project() {
    return (
        <section className="projects">
            <div>
                <h3>Financial Helper</h3>
                <p>Manage your money in a practice way. </p>
                {/* <a href="/projects" className="saiba-mais-link">Saiba mais<i className="fas fa-chevron-right"></i></a> */}
            </div>


            <div>
                <h3>Natal Dynamic</h3>
                <p>Entrega de presentes para 140 pessoas na grande Florianópolis. </p>
                {/* <a href="/projects" className="saiba-mais-link">Saiba mais<i className="fas fa-chevron-right"></i></a> */}
            </div>

            <div>
                <h3>Speak Girl</h3>
                <p>You're not alone, feel free to tell what's happening. </p>
                {/* <a href="/projects" className="saiba-mais-link">Saiba mais<i className="fas fa-chevron-right"></i></a> */}
            </div>

            <div>
                <h3>Respire</h3>
                <p>Tire um momento para você e respire. </p>
                {/* <a href="/projects" className="saiba-mais-link">Saiba mais<i className="fas fa-chevron-right"></i></a> */}
            </div>

            <div>
                <h3>SayNo</h3>
                <p>SayNo to any kind of racism, and help other people. </p>
                {/* <a href="/projects" className="saiba-mais-link">Saiba mais<i className="fas fa-chevron-right"></i></a> */}
            </div>

            <div>
                <h3>SmartImage</h3>
                <p>Make a new type of qrcode</p>
                {/* <a href="/projects" className="saiba-mais-link">Saiba mais<i className="fas fa-chevron-right"></i></a> */}
            </div>

            
        </section>
    )
}

function Timeline() {
    return (
        <section className="timeline">
            <div className="timeline-year">
                <p>20<br/>17</p>
                <div className="timeline-line"></div>
                <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, aspernatur impedit distinctio dicta, doloremque sed earum nam quas modi sapiente ullam quos consequatur. Quasi quidem animi voluptate, commodi eaque distinctio?</small>
            </div>

            <div className="timeline-year">
                <p>20<br/>18</p>
                <div className="timeline-line"></div>
                <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, aspernatur impedit distinctio dicta, doloremque sed earum nam quas modi sapiente ullam quos consequatur. Quasi quidem animi voluptate, commodi eaque distinctio?</small>
            </div>

            <div className="timeline-year">
                <p>20<br/>19</p>
                <div className="timeline-line"></div>
                <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, aspernatur impedit distinctio dicta, doloremque sed earum nam quas modi sapiente ullam quos consequatur. Quasi quidem animi voluptate, commodi eaque distinctio?</small>
            </div>

            <div className="timeline-year">
                <p>20<br/>20</p>
                <div className="timeline-line"></div>
                <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, aspernatur impedit distinctio dicta, doloremque sed earum nam quas modi sapiente ullam quos consequatur. Quasi quidem animi voluptate, commodi eaque distinctio?</small>
            </div>

            <div className="timeline-year">
                <p>20<br/>21</p>
                <div className="timeline-line"></div>
                <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, aspernatur impedit distinctio dicta, doloremque sed earum nam quas modi sapiente ullam quos consequatur. Quasi quidem animi voluptate, commodi eaque distinctio?</small>
            </div>
        </section>
    )
}