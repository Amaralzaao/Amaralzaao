import '../static/css/graduation.css'
import Navbar from '../components/navbar'

import faculdadeSenai from '../static/assets/faculdade-senai.jpg'
import escolaS from '../static/assets/escola-s.png'
import udemy from '../static/assets/udemy.png'

export default function Graduation() {
    return (
        <main>
            <Navbar/>
            <GraduationBanner/>
            <AcademyGraduation/>
            <div className="line"></div>
            <UdemyCourses/>
        </main>
    )
}

function GraduationBanner() {
    return (
        <section className="graduation-banner">
            <h1>Graduação e Cursos</h1>
        </section>
    )
}

function AcademyGraduation() {
    return (
        <section className="graduation-academy">
            <h2>Formação Acadêmica</h2>
            <div>
                <img src={faculdadeSenai} alt="" />

                <div>
                    <h3>Ensino Superior Tecnólogo</h3>
                    <small>Em andamento - Análise e Desenvolvimento de Sistemas</small>
                </div>
            </div>

            <div>
                <img src={escolaS} alt="" />

                <div>
                    <h3>Ensino Médio Técnico</h3>
                    <small>Concluído - Técnico em Análise e Desenvolvimento de Sistemas</small>
                </div>
            </div>
        </section>
    )
}

function UdemyCourses() {
    return (
        <section>           
            <CursosConcluidos/>
            <div className="line"></div>
            <CursosEmAndamento/>
        </section>
    )
}

function CursosConcluidos() {

    return (
        <section className="graduation-academy">
            <h2>Cursos de aperfeiçoamento</h2>
            <small>Concluídos</small>

            <div>
                <img src={udemy} alt="" />
                <div>
                    <h3>The Swift Arcade Data Structures and Algorithms Bootcamp</h3>
                    <small>Concluído - 11/2021</small>
                </div>
            </div>

            <div>
                <img src={udemy} alt="" />
                <div>
                    <h3>SwiftUI MasterclassName 2022 - iOS 15 App Development & Swift 5</h3>
                    <small>Concluído - 11/2021</small>
                </div>
            </div>

            <div>
                <img src={udemy} alt="" />
                <div>
                    <h3>ARKit - Create Augmented Reality Apps for iOS Apps</h3>
                    <small>Concluído - 11/2021</small>
                </div>
            </div>

            <div>
                <img src={udemy} alt="" />
                <div>
                    <h3>iOS 15 SWIFTUI 3 Loan Tracker MVVM, Core Data and More</h3>
                    <small>Concluído - 11/2021</small>
                </div>
            </div>

            <div>
                <img src={udemy} alt="" />
                <div>
                    <h3>Bootstrap 4 from Scratch With 5 Projects</h3>
                    <small>Concluído - 11/2021</small>
                </div>
            </div>

            <div>
                <img src={udemy} alt="" />
                <div>
                    <h3>Aprenda Arduíno: do básico ao avançado </h3>
                    <small>Concluído - 08/2021</small>
                </div>
            </div>

            <div>
                <img src={udemy} alt="" />
                <div>
                    <h3>Django A-Z: Build & Deploy Web project With Python & Django</h3>
                    <small>Concluído - 08/2021</small>
                </div>
            </div>

            <div>
                <img src={udemy} alt="" />
                <div>
                    <h3>Desenvolva uma aplicação com Django 2.0 e deploy no Heroku</h3>
                    <small>Concluído - 08/2021</small>
                </div>
            </div>

            <div>
                <img src={udemy} alt="" />
                <div>
                    <h3>Segurança em aplicações WEB</h3>
                    <small>Concluído - 11/2021</small>
                </div>
            </div>

            <div>
                <img src={udemy} alt="" />
                <div>
                    <h3>ISO 27001: Construindo uma política de Segurança da informação</h3>
                    <small>Concluído - 11/2021</small>
                </div>
            </div>

            <div>
                <img src={udemy} alt="" />
                <div>
                    <h3>Técnicas de invasão a redes sem fio [Pentest Wireless]</h3>
                    <small>Concluído - 06/2021</small>
                </div>
            </div>

            <div>
                <img src={udemy} alt="" />
                <div>
                    <h3>Complete Google Hacking Practical Course C|GHPC</h3>
                    <small>Concluído - 06/2021</small>
                </div>
            </div>


            <div>
                <img src={udemy} alt="" />
                <div>
                    <h3>Google Drive - Curso Completo</h3>
                    <small>Concluído - 10/2021</small>
                </div>
            </div>
            
            <div>
                <img src={udemy} alt="" />
                <div>
                    <h3>Wi-Fi Hacking and Wireless Penetration Testing</h3>
                    <small>Concluído - 06/2021</small>
                </div>
            </div>

            <div>
                <img src={udemy} alt="" />
                <div>
                    <h3>Fundamentos de Ethical Hacking: Curso Prático</h3>
                    <small>Concluído - 06/2021</small>
                </div>
            </div>

            <div>
                <img src={udemy} alt="" />
                <div>
                    <h3>Python para Hackers</h3>
                    <small>Concluído - 04/2021</small>
                </div>
            </div>

            <div>
                <img src={udemy} alt="" />
                <div>
                    <h3>Python para Multiplataforma (Kivy)</h3>
                    <small>Concluído - 04/2021</small>
                </div>
            </div>
        </section>
    )
}

function CursosEmAndamento() {
    return (
        <section className="graduation-academy">
            <h2>Cursos de aperfeiçoamento</h2>
            <small>Em andamento</small>

            <div>
                <img src={udemy} alt="" />
                <div>
                    <h3>Machine Learning and Artificial Intelligence Using Swift</h3>
                    <small>Andamento</small>
                </div>
            </div>

            <div>
                <img src={udemy} alt="" />
                <div>
                    <h3>Angular front to back</h3>
                    <small>Andamento</small>
                </div>
            </div>

            <div>
                <img src={udemy} alt="" />
                <div>
                    <h3>Spring Boot Expert: JPA, RESTFul API, Security, JWT e Mais</h3>
                    <small>Andamento</small>
                </div>
            </div>

            <div>
                <img src={udemy} alt="" />
                <div>
                    <h3>Spring Boot Expert: JPA, RESTFul API, Security, JWT e Mais</h3>
                    <small>Andamento</small>
                </div>
            </div>

            <div>
                <img src={udemy} alt="" />
                <div>
                    <h3>API Testing with Python 3 & PyTest, Backend Automation 2021</h3>
                    <small>Andamento</small>
                </div>
            </div>

            <div>
                <img src={udemy} alt="" />
                <div>
                    <h3>Certificação Cisco CCNA 200-301 + 4 CURSOS</h3>
                    <small>Andamento</small>
                </div>
            </div>

            <div>
                <img src={udemy} alt="" />
                <div>
                    <h3>Curso de Python 3 do Básico Ao Avançado (com projetos reais)</h3>
                    <small>Andamento</small>
                </div>
            </div>
            
            <div>
                <img src={udemy} alt="" />
                <div>
                    <h3>Desenvolvimento Android Completo 2021 - Crie 18 Apps</h3>
                    <small>Andamento</small>
                </div>
            </div>

            <div>
                <img src={udemy} alt="" />
                <div>
                    <h3>Curso Web Moderno Completo com JavaScript 2021 + Projetos</h3>
                    <small>Andamento</small>
                </div>
            </div>
            

        </section>
    )
}