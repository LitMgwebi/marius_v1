import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        lng: "en",
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    intro: "My Name Is",
                    profile: "Profile",
                    aboutMe: "About Me",
                    portfolio: "Portfolio",
                    services: "Services",
                    findMe: "Find Me",
                    aboutMeParagraph: "Hi I'm Marius Edel and I am an german student with extensive experience in data analysis, automation, and visualization.I can help you streamline your workflow and improve productivity with customized Excel spreadsheets and VBA macros.I am dedicated to providing high- quality solutions, timely delivery and great customer service.Contact me to see how I can help you with your data needs.", 
                    development: "Idea Development", 
                    execution: "Idea Execution",
                    developmentParagraph: "You have an idea but don't know how to realize it? I will help you realize your dream.",
                    executionParagraph: "The best idea are worthless without execution. I will build your custom Excel sheet.",
                    viewMore: "View More",
                    back: "Back",
                }
            },
            gmc: {
                translation: {
                    intro: "Mein Name ist",
                    profile: "Profil",
                    aboutMe: "Uber Mich",
                    portfolio: "Portfolio",
                    services: "Dienstleistungen",
                    findMe: "Finde mich",
                    aboutMeParagraph: "Hallo, ich bin Marius Edel und ein deutscher Student umfangreiche Erfahrung in der Datenanalyse, Automatisierung und Visualisierung.Ich kann Ihnen helfen Optimieren Sie Ihren Arbeitsablauf und verbessern Sie ihn Produktivit�t mit ma�geschneiderten Excel- Tabellen und VBA- Makros.Ich setze mich f�r die Bereitstellung ein Hochwertige L�sungen, p�nktliche Lieferung und gro�artig Kundendienst.Kontaktieren Sie mich, um zu sehen, wie ich es kann helfen Ihnen bei Ihren Datenanforderungen.",
                    development: "Ideenentwicklung",
                    execution: "Ideenausf�hrung",
                    developmentParagraph: "Sie haben eine Idee, wissen aber nicht, wie Sie diese umsetzen k�nnen? ich werde dir helfe",
                    executionParagraph: "Die beste Idee ist ohne Umsetzung wertlos. Ich erstelle Ihre individuelle Excel-Tabelle.",
                    viewMore: "Mehr sehen",
                    back: "Zur�ck"
                }
            }
        },
});

export default i18n;