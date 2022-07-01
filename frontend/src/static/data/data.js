import argentina from "../assets/argentina.svg"
import eua from "../assets/eua.svg"
import udemy from "../assets/udemy.png"

// MEMOJIS
import call from "../assets/memojis/call.png"
import idea from "../assets/memojis/idea.png"
import love from "../assets/memojis/love.png"
import computer from "../assets/memojis/me-and-computer.png"
import peace from "../assets/memojis/peace.png"

// MEDIAS
import instagram from "../assets/social/instagram.svg"
import linkedin from "../assets/social/linkedin.svg"
import github from "../assets/social/github.svg"
import email from "../assets/social/email.svg"

export {data, status, plataforms, programmingLanguages}

const status = [
    {
        id : 0,
        text : "Not Started",
    },
    {
        id : 1,
        text : "In Progress",
    },
    {
        id : 2,
        text : "Completed",
    },
]

const programmingLanguages = [
    {
        id : 0,
        text : "Swift"
    },
    
    {
        id : 1,
        text : "Python"
    },

    {
        id : 2,
        text : "Java"
    },

    {
        id : 3,
        text : "JavaScript"
    },

    {
        id : 4,
        text : "TypeScript"
    },

    {
        id : 5,
        text : "Others"
    },

    {
        id : 6,
        text : "Dart"
    },

    {
        id : 7,
        text : "C++"
    },

    {
        id : 8,
        text : "SQL"
    },

    {
        id : 9,
        text : "Ethical Hacking"
    }
]

const plataforms = [
    {
        id : 0,
        name : "Udemy",
        image : udemy,
        url : "https://www.udemy.com/"
    }
]

const data = {
    name : "Carlos Alberto Barcelos do Amaral",
    about : "Meu nome é Carlos Alberto Barcelos do Amaral, mesmo nome do meu avô paterno, porém adicionou o sobrenome da família da minha mãe, Barcelos. Na grande maioria me chamam de Carlos ou somente Amaral, que gosto muito. Tenho 18 anos, me formei em 2021 no ensino médio com curso tecnólogo em Análise e Desenvolvimento de Sistemas no SESI/SENAI, contudo, estou cursando Análise e Desenvolvimento de Sistemas na Faculdade SENAI. Apresento meu currículo. Vamos lá?",
    socialMedia : [
        {
            name : "Github",
            image : github,
            link : "https://github.com/carlosabdoamaral"
        },

        {
            name : "LinkedIn",
            image : linkedin,
            link : "https://www.linkedin.com/in/carlos-alberto-barcelos-do-amaral-56a6881b3/https://github.com/carlosabdoamaral"
        },

        {
            name : "Instagram",
            image : instagram,
            link : "https://www.instagram.com/carlosamaral._/"
        },

        {
            name : "E-mail",
            image : email,
            link : "malito:carlosabdoamaral@gmail.com"
        },
    ],
    memojis : [
      {
        alt : "Call",
        image : call,
      },

      {
        alt : "Idea",
        image : idea,
      },

      {
        alt : "Love",
        image : love,
      },

      {
        alt : "Computer",
        image : computer,
      },

      {
        alt : "Peace",
        image : peace,
      },
    ],
    
    areas : [
        {
            text : "Universitário",
            subtitle : "Faculdade SENAI"
        },

        {
            text : "Desenvolvedor iOS",
            subtitle : "+Dinheiro"
        },

        {
            text : "Desenvolvedor FullStack",
            subtitle : "Centro de Inovação SESI"
        },

        {
            text : "Researcher",
            subtitle : "Camino Marketing"
        }
    ],

    experiences : [
        {
            job : "FullStack developer",
            company : "Centro de Inovação SESI",
            startDate : "Sep 2021",
            endDate : "",
            didFinished : false,
            showInIndex : true,
            link : "https://www.cists.com.br"
        },

        {
            job : "iOS developer",
            company : "+Dinheiro",
            startDate : "May 2022",
            endDate : "",
            didFinished : false,
            showInIndex : true,
            link : "https://apps.apple.com/br/app/dinheiro/id1607578559?l=en"
        },

        {
            job : "Market Research",
            company : "Camino Marketing",
            startDate : "Jan 2020",
            endDate : "",
            didFinished : false,
            showInIndex : true,
            link : "https://www.caminomarketing.com.br/"
        },

        {
            job : "Support Technician",
            company : "FIESC",
            startDate : "Jun 2021",
            endDate : "Aug 2021",
            didFinished : true,
            showInIndex : false,
            link : "https://www.fiesc.com.br/"
        },

        {
            job : "CEO",
            company : "Dynamic",
            startDate : "Nov 2020",
            endDate : "Jan 2021",
            didFinished : true,
            showInIndex : false,
            link : "https://instagram.com/dynamicoficial___"
        },

        {
            job : "CEO",
            company : "Blue Warriors E-sports",
            startDate : "Feb 2017",
            endDate : "Apr 2021",
            didFinished : true,
            showInIndex : false,
            link : "https://www.instagram.com/bluewarriors.esports/"
        },
    ],

    courses : [
        {
            name : "Dive Into SpriteKit - You Design the Game",
            status : status[0],
            plataform : plataforms[0],
            duration : 13,
            link : "https://www.udemy.com/course/dive-into-spritekit/",
            endDate : null,
            certificateLink : null,
            codingLanguage : programmingLanguages[0],
        },

        {
            name : "The Complete iOS Game Course Using SpriteKit And Swift 3",
            status : status[0],
            plataform : plataforms[0],
            duration : 18,
            link : "https://www.udemy.com/course/the-complete-ios-game-course-using-swift/",
            endDate : null,
            certificateLink : null,
            codingLanguage : programmingLanguages[0],
        },
        
        {
            name : "How to Create iOS 2D Games with SpriteKit and Swift",
            status : status[2],
            plataform : plataforms[0],
            duration : 4,
            link : "https://www.udemy.com/course/2d-games-with-spritekit/",
            endDate : "May 3, 2022",
            certificateLink : "https://www.udemy.com/certificate/UC-00ca9d08-ee8b-45d9-965d-73eba83866bd/",
            codingLanguage : programmingLanguages[0],
        },
        
        {
            name : "Ms Project Básico e Avançado + Cursos KPI e Scrum no Project",
            status : status[0],
            plataform : plataforms[0],
            duration : 24.5,
            link : "https://www.udemy.com/course/dominandoproject/",
            endDate : null,
            certificateLink : null,
            codingLanguage : programmingLanguages[5],
        },

        {
            name : "The Complete 2021 Flutter Development Bootcamp with Dart",
            status : status[2],
            plataform : plataforms[0],
            duration : 29,
            link : "https://www.udemy.com/course/flutter-bootcamp-with-dart/",
            endDate : "May 2, 2022",
            certificateLink : "https://www.udemy.com/certificate/UC-253d090b-4f73-4631-a8c9-7460572a3a24/",
            codingLanguage : programmingLanguages[6],
        },

        {
            name : "Complete iOS Machine Learning Masterclass",
            status : status[2],
            plataform : plataforms[0],
            duration : 7.5,
            link : "https://www.udemy.com/course/complete-ios-machine-learning-masterclass/",
            endDate : "May 2, 2022",
            certificateLink : "https://www.udemy.com/certificate/UC-8648092d-dc82-4366-9dfe-3cf51ef21843/",
            codingLanguage : programmingLanguages[0],
        },

        {
            name : "Machine Learning e Data Science com Python de A a Z",
            status : status[0],
            plataform : plataforms[0],
            duration : 42,
            link : "https://www.udemy.com/course/machine-learning-e-data-science-com-python-y/",
            endDate : null,
            certificateLink : null,
            codingLanguage : programmingLanguages[1],
        },

        {
            name : "Machine Learning and Artificial Intelligence Using Swift",
            status : status[2],
            plataform : plataforms[0],
            duration : 8.5,
            link : "https://www.udemy.com/course/machine-learning-and-artificial-intelligence-using-swift/",
            endDate : "December 27, 2021",
            certificateLink : "https://www.udemy.com/certificate/UC-c4b88cc2-88b6-421d-a3d9-d386e0b15964/",
            codingLanguage : programmingLanguages[0],
        },

        {
            name : "HWS Swift Coding Challenges: Real Problems - Real Solutions",
            status : status[2],
            plataform : plataforms[0],
            duration : 4.5,
            link : "https://www.udemy.com/course/coding-challenges/",
            endDate : "December 30, 2021",
            certificateLink : "https://www.udemy.com/certificate/UC-85916e05-58b0-4a75-b52e-8e065e5deb7a/",
            codingLanguage : programmingLanguages[0],
        },

        {
            name : "Unit Testing Swift Mobile App",
            status : status[1],
            plataform : plataforms[0],
            duration : 8.5,
            link : "https://www.udemy.com/course/unit-testing-ios-mobile-app/",
            endDate : null,
            certificateLink : null,
            codingLanguage : programmingLanguages[0],
        },

        {
            name : "The Swift Arcade Data Structures and Algorithms Bootcamp",
            status : status[2],
            plataform : plataforms[0],
            duration : 7,
            link : "https://www.udemy.com/course/the-swift-arcade-data-structures-and-algorithms-bootcamp/",
            endDate : "November 23, 2021",
            certificateLink : "https://www.udemy.com/certificate/UC-a2f566f6-dd4c-421a-a005-c4ba5c859137/",
            codingLanguage : programmingLanguages[0],
        },

        {
            name : "Core Data and Realm - Master Data Persistence for iOS",
            status : status[2],
            plataform : plataforms[0],
            duration : 7.5,
            link : "https://www.udemy.com/course/core-data-and-realm-database/",
            endDate : "January 17, 2022",
            certificateLink : "https://www.udemy.com/certificate/UC-82f3d04a-ae61-4abf-ba31-f9ee022814ac/",
            codingLanguage : programmingLanguages[0],
        },

        {
            name : "ARKit - Create Augmented Reality Apps for iOS Apps",
            status : status[2],
            plataform : plataforms[0],
            duration : 3,
            link : "https://www.udemy.com/course/learn-ios-arkit/",
            endDate : "November 20, 2021",
            certificateLink : "https://www.udemy.com/certificate/UC-f366bd3b-f85b-4d6b-8427-ad27408532d7/",
            codingLanguage : programmingLanguages[0],
        },

        {
            name : "iOS & Swift - The Complete iOS App Development Bootcamp",
            status : status[1],
            plataform : plataforms[0],
            duration : 60.5,
            link : "https://www.udemy.com/course/ios-13-app-development-bootcamp/",
            endDate : null,
            certificateLink : null,
            codingLanguage : programmingLanguages[0],
        },

        {
            name : "iOS 15 SWIFTUI 3 Loan Tracker MVVM, CoreData & Cloud Kit",
            status : status[2],
            plataform : plataforms[0],
            duration : 4,
            link : "https://www.udemy.com/course/ios-15-swiftui-3-loan-tracker-mvvm-coredata-cloud-kit/",
            endDate : "November 24, 2021",
            certificateLink : "https://www.udemy.com/certificate/UC-9ded7684-e7e4-4b0b-bd88-21bcf36bc6bf/",
            codingLanguage : programmingLanguages[0],
        },

        {
            name : "SwiftUI Masterclass 2022 - iOS App Development & Swift",
            status : status[2],
            plataform : plataforms[0],
            duration : 29,
            link : "https://www.udemy.com/course/swiftui-masterclass-course-ios-development-with-swift/",
            endDate : "November 23, 2021",
            certificateLink : "https://www.udemy.com/certificate/UC-b14c8f4a-7d1b-4ec9-a653-177a3d200b1b/",
            codingLanguage : programmingLanguages[0],
        },

        {
            name : "Angular Front To Back",
            status : status[1],
            plataform : plataforms[0],
            duration : 11.5,
            link : "https://www.udemy.com/course/angular-4-front-to-back/",
            endDate : null,
            certificateLink : null,
            codingLanguage : programmingLanguages[4],
        },

        {
            name : "Modern JavaScript From The Beginning",
            status : status[2],
            plataform : plataforms[0],
            duration : 21.5,
            link : "https://www.udemy.com/course/modern-javascript-from-the-beginning/",
            endDate : "January 17, 2022",
            certificateLink : "https://www.udemy.com/certificate/UC-484022fe-3471-4ae9-8f8e-0aa63821bd57/",
            codingLanguage : programmingLanguages[3],
        },

        {
            name : "Bootstrap 4 From Scratch With 5 Projects",
            status : status[2],
            plataform : plataforms[0],
            duration : 11.5,
            link : "https://www.udemy.com/course/bootstrap-4-from-scratch-with-5-projects/",
            endDate : "November 11, 2021",
            certificateLink : "https://www.udemy.com/certificate/UC-fbd76dbb-1e2a-4ca9-bdda-1d810ca98747/",
            codingLanguage : programmingLanguages[5],
        },

        {
            name : "Angular 9 + Spring Boot 2.2: Fullstack Completo e Atualizado",
            status : status[0],
            plataform : plataforms[0],
            duration : 20,
            link : "https://www.udemy.com/course/full-stack-angular9-spring-boot/",
            endDate : null,
            certificateLink : null,
            codingLanguage : programmingLanguages[2],
        },

        {
            name : "Spring Boot Expert: JPA, RESTFul API, Security, JWT e Mais",
            status : status[1],
            plataform : plataforms[0],
            duration : 15.5,
            link : "https://www.udemy.com/course/spring-boot-expert/",
            endDate : null,
            certificateLink : null,
            codingLanguage : programmingLanguages[2],
        },

        {
            name : "Introdução à Engenharia com Arduino",
            status : status[0],
            plataform : plataforms[0],
            duration : 10,
            link : "https://www.udemy.com/course/introducao-a-engenharia-com-arduino/",
            endDate : null,
            certificateLink : null,
            codingLanguage : programmingLanguages[7],
        },

        {
            name : "Aprenda Arduino: do básico ao avançado",
            status : status[2],
            plataform : plataforms[0],
            duration : 4.5,
            link : "https://www.udemy.com/course/aprenda-arduino/",
            endDate : "August 18, 2021",
            certificateLink : "https://www.udemy.com/certificate/UC-5b887988-be17-4e32-a427-d97122d38528/",
            codingLanguage : programmingLanguages[7],
        },

        {
            name : "Complete Backend Development 2022 Bundle - Python Roadmap",
            status : status[2],
            plataform : plataforms[0],
            duration : 15.5,
            link : "https://www.udemy.com/course/software-developer-masterclass/",
            endDate : "January 17, 2022",
            certificateLink : "https://www.udemy.com/certificate/UC-27a91ec4-30fa-4ecc-bb6a-0a42e84a5a39/",
            codingLanguage : programmingLanguages[1],
        },

        {
            name : "The Complete Oracle SQL Certification Course",
            status : status[1],
            plataform : plataforms[0],
            duration : 16.5,
            link : "https://www.udemy.com/course/the-complete-oracle-sql-certification-course/",
            endDate : null,
            certificateLink : null,
            codingLanguage : programmingLanguages[8],
        },

        {
            name : "Build a Backend REST API with Python & Django - Advanced",
            status : status[2],
            plataform : plataforms[0],
            duration : 23,
            link : "https://www.udemy.com/course/django-python-advanced/",
            endDate : "December 29, 2021",
            certificateLink : "https://www.udemy.com/certificate/UC-3a0cb208-cea7-4ea4-8e0a-cd79d5fa13a9/",
            codingLanguage : programmingLanguages[1],
        },

        {
            name : "API Testing with Python 3 & PyTest, Backend Automation 2022",
            status : status[2],
            plataform : plataforms[0],
            duration : 14,
            link : "https://www.udemy.com/course/backend-api-testing-with-python/",
            endDate : "December 29, 2021",
            certificateLink : "https://www.udemy.com/certificate/UC-34b60634-5240-47a1-bb25-fe9c2051957f/",
            codingLanguage : programmingLanguages[1],
        },

        {
            name : "Django A-Z: Build & Deploy Web Project With Python & Django",
            status : status[2],
            plataform : plataforms[0],
            duration : 5.5,
            link : "https://www.udemy.com/course/complete-django-masterclass/",
            endDate : "August 7, 2021",
            certificateLink : "https://www.udemy.com/certificate/UC-cb380348-b687-4acf-a268-742cfd78ca6e/",
            codingLanguage : programmingLanguages[1],
        },

        {
            name : "Desenvolva uma aplicação com Django 2.0 e deploy no Heroku",
            status : status[2],
            plataform : plataforms[0],
            duration : 7.5,
            link : "https://www.udemy.com/course/django-20-heroku/",
            endDate : "August 6, 2021",
            certificateLink : "https://www.udemy.com/certificate/UC-6686590d-6066-4fad-9d21-0151fe682f31/",
            codingLanguage : programmingLanguages[1],
        },

        {
            name : "Segurança em Aplicações WEB",
            status : status[2],
            plataform : plataforms[0],
            duration : 7.5,
            link : "https://www.udemy.com/course/seguranca-em-aplicacoes-web/",
            endDate : "November 23, 2021",
            certificateLink : "https://www.udemy.com/certificate/UC-51b5a316-36f7-429d-ba48-27efc4909739/",
            codingLanguage : programmingLanguages[5],
        },

        {
            name : "LGPD: Política de Privacidade e Proteção de Dados Pessoais!",
            status : status[2],
            plataform : plataforms[0],
            duration : 4,
            link : "https://www.udemy.com/course/privacidade/",
            endDate : "June 18, 2021",
            certificateLink : "https://www.udemy.com/certificate/UC-f11866e2-a049-41cc-bf6b-cd3836984473/",
            codingLanguage : programmingLanguages[5],
        },

        {
            name : "Certificação Cisco CCNA 200-301 + 4 CURSOS",
            status : status[1],
            plataform : plataforms[0],
            duration : 63.5,
            link : "https://www.udemy.com/course/curso-completo-cisco-ccnav3-200-125/",
            endDate : null,
            certificateLink : null,
            codingLanguage : programmingLanguages[5],
        },

        {
            name : "ISO 27001: Construindo Políticas de Segurança da Informação",
            status : status[2],
            plataform : plataforms[0],
            duration : 5.5,
            link : "https://www.udemy.com/course/politicasegurancainformacao/",
            endDate : "November 20, 2021",
            certificateLink : "https://www.udemy.com/certificate/UC-2bc561e3-b4da-4b5a-8eca-ed9ba4664f34/",
            codingLanguage : programmingLanguages[5],
        },

        {
            name : "Ataques de Negação de Serviço (DoS e DDoS) com Kali Linux",
            status : status[2],
            plataform : plataforms[0],
            duration : 2,
            link : "https://www.udemy.com/course/negacao-de-servico-dos-ddos-kali-linux/",
            endDate : "June 9, 2021",
            certificateLink : "https://www.udemy.com/certificate/UC-6efdaf0f-46fb-41df-ad2a-4645e441c4d7/",
            codingLanguage : programmingLanguages[9],
        },

        {
            name : "Curso Técnicas de Invasão a Redes Sem Fio [Pentest Wireless]",
            status : status[2],
            plataform : plataforms[0],
            duration : 2.5,
            link : "https://www.udemy.com/course/tecnicas-de-invasao-a-redes-sem-fio-pentest-wireless/",
            endDate : "June 12, 2021",
            certificateLink : "https://www.udemy.com/certificate/UC-aaa35a49-6de6-4c13-9d7a-0ca73243adc1/",
            codingLanguage : programmingLanguages[9],
        },

        {
            name : "Google Drive - Curso completo",
            status : status[2],
            plataform : plataforms[0],
            duration : 3,
            link : "https://www.udemy.com/course/google-drive-na-pratica/",
            endDate : "October 8, 2021",
            certificateLink : "https://www.udemy.com/certificate/UC-402289a1-dd2b-4029-b878-faff8d0de9c8/",
            codingLanguage : programmingLanguages[5],
        },

        {
            name : "Wi-Fi Hacking and Wireless Penetration Testing Course",
            status : status[2],
            plataform : plataforms[0],
            duration : 4.5,
            link : "https://www.udemy.com/course/wi-fi-password-penetration-testing-course/",
            endDate : "June 12, 2021",
            certificateLink : "https://www.udemy.com/certificate/UC-4156fd64-33bf-4e08-ac73-05d6b32c3f8f/",
            codingLanguage : programmingLanguages[9],
        },

        {
            name : "Fundamentos de Ethical Hacking: curso prático",
            status : status[2],
            plataform : plataforms[0],
            duration : 25,
            link : "https://www.udemy.com/course/fundamentos-de-ethical-hacking/",
            endDate : "June 2, 2021",
            certificateLink : "https://www.udemy.com/certificate/UC-d8975416-a1d8-43ec-8c12-7ba1cf82ace7/",
            codingLanguage : programmingLanguages[9],
        },

        {
            name : "Python Para Hackers",
            status : status[2],
            plataform : plataforms[0],
            duration : 12,
            link : "https://www.udemy.com/course/python-para-hackers/",
            endDate : "April 21, 2021",
            certificateLink : "https://www.udemy.com/certificate/UC-00969f82-d7e0-48e4-9e32-98a5ecb20a6f/",
            codingLanguage : programmingLanguages[9],
        },

        {
            name : "Curso de Python: Apps para Android, iOS, Linx, Win, e Mac",
            status : status[2],
            plataform : plataforms[0],
            duration : 38,
            link : "https://www.udemy.com/course/curso-de-python-android-ios-windows-linux-mac/",
            endDate : "April 16, 2021",
            certificateLink : "https://www.udemy.com/certificate/UC-9db1bde4-7345-47f0-805f-347a03e37a6c/",
            codingLanguage : programmingLanguages[1],
        },

        {
            name : "Curso de Python 3 do Básico Ao Avançado (com projetos reais)",
            status : status[2],
            plataform : plataforms[0],
            duration : 112.5,
            link : "https://www.udemy.com/course/python-3-do-zero-ao-avancado/",
            endDate : "December 28, 2021",
            certificateLink : "https://www.udemy.com/certificate/UC-4f7bf092-9ffd-48d3-b5b4-4e6d07bb13c6/",
            codingLanguage : programmingLanguages[1],
        },

        {
            name : "Desenvolvimento Android Completo 2022 - Crie 18 Apps",
            status : status[1],
            plataform : plataforms[0],
            duration : 107.5,
            link : "https://www.udemy.com/course/curso-de-desenvolvimento-android-oreo/",
            endDate : null,
            certificateLink : null,
            codingLanguage : programmingLanguages[2],
        },

        {
            name : "Curso Web Moderno Completo com JavaScript 2022 + Projetos",
            status : status[2],
            plataform : plataforms[0],
            duration : 97,
            link : "https://www.udemy.com/course/curso-web/",
            endDate : "January 17, 2022",
            certificateLink : "https://www.udemy.com/certificate/UC-4dd810ec-4d52-4534-94a2-9e52b4aca061/",
            codingLanguage : programmingLanguages[3],
        },
    ],
    
    languages : [
        {
            name : "English",
            note : 80,
            image : eua
        },
        {
            name : "Spanish",
            note : 60,
            image : argentina
        },
    ]
}
