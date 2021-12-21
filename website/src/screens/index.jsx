import Footer from "../components/footer";
import Navbar from "../components/navbar";
import './index.css';

//MEMOJIS
import computer from '../static/memojis/me-and-computer.png'
import call from '../static/memojis/call.png'
import love from '../static/memojis/love.png'
import peace from '../static/memojis/peace.png'
import idea from '../static/memojis/idea.png'
import { useState } from "react";

//PROJECTS


export default function IndexScreen() {
    return (
        <main class="index bg-light">
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

    while (first == second) {
        first = images[Math.floor(Math.random() * images.length)]
    }
    while (second == third) {
        second = images[Math.floor(Math.random() * images.length)]
    }
    while (third == first) {
        third = images[Math.floor(Math.random() * images.length)]
    }

    return (
        <section class="banner-index">
            <h1>Carlos Alberto Barcelos do Amaral</h1>
            <p>{currentMessage}</p>

            <div class="memojis">
                <img src={first}  alt="" srcset="" class="first-memoji"  />
                <img src={second} alt="" srcset="" class="second-memoji" />
                <img src={third}  alt="" srcset="" class="third-memoji"  />
            </div>
        </section>
    )
}

function Phrases() {

    let frases = ["Frase sajdasjkbdjkasb djbaj  kdbjsabdasbjdasbdakjdbjsakjda", "Frase 2", "Frase 3"]
    const [fraseAtual, setFraseAtual] = useState(frases[0])


    return (
        <div className="frase">
            <i class="fas fa-quote-left"></i>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repudiandae culpa pariatur, vel deserunt iste ex provident quam fugit. </p>
        </div>
    )
}

function About() {
    return (
        <section class="about-index">
            <h3>Sobre</h3>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, molestias beatae. Voluptate, tenetur sequi autem magni necessitatibus recusandae illum fugiat assumenda amet explicabo error fuga eum quod optio ipsum praesentium.
                Placeat, cum aperiam. Laudantium, maiores assumenda animi debitis rerum magnam atque quidem reprehenderit at earum dolore, architecto unde! Debitis inventore atque, quod delectus quasi labore at magni aperiam minima nesciunt.
            </p>
            <a href="#" class="saiba-mais-link">Saiba mais<i class="fas fa-chevron-right"></i></a>
        </section>
    )
}

function SocialNetwork() {

}

function Project() {
    return (
        <section class="projects">
            <div class="project-respire-square">
                <h3>Respire</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <a href="#" class="saiba-mais-link">Saiba mais<i class="fas fa-chevron-right"></i></a>
            </div>

            <div className="project-speak-girl-square">
                <h3>Speak Girl</h3>
                <a href="#" class="saiba-mais-link">Saiba mais<i class="fas fa-chevron-right"></i></a>
            </div>
        </section>
    )
}

function Timeline() {
    return (
        <section class="timeline">
            <div className="timeline-year">
                <p>20<br/>17</p>
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