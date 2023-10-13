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
                    socials: "Socials",
                    aboutMeParagraph: "Hi I'm Marius Edel and I am an german student with extensive experience in data analysis, automation, and visualization.I can help you streamline your workflow and improve productivity with customized Excel spreadsheets and VBA macros.I am dedicated to providing high- quality solutions, timely delivery and great customer service. Contact me to see how I can help you with your data needs.", 
                    development: "Idea Development", 
                    execution: "Idea Execution",
                    developmentParagraph: "You have an idea but don't know how to realize it? I will help you realize your dream.",
                    executionParagraph: "The best idea are worthless without execution. I will build your custom Excel sheet.",
                    viewMore: "View",
                    back: "Back",
                    legalnotice: "Legal Notice",
                    poweredBy: "@PoweredByLithi"
                }
            },
            gmc: {
                translation: {
                    intro: "Mein Name ist",
                    profile: "Profil",
                    aboutMe: "Über mich",
                    portfolio: "Portfolio",
                    services: "Dienste",
                    socials: "Soziales",
                    aboutMeParagraph: "Hallo, ich bin Marius Edel und ich bin ein deutscher Student mit umfangreicher Erfahrung in der Datenanalyse, Automatisierung und Visualisierung. Ich kann Ihnen helfen, Ihre Arbeitsabläufe zu rationalisieren und Ihre Produktivität mit maßgeschneiderten Excel-Tabellen und VBA-Makros zu verbessern. Ich bin bestrebt, qualitativ hochwertige Lösungen, pünktliche Lieferung und einen großartigen Kundenservice zu bieten. Kontaktieren Sie mich, um zu erfahren, wie ich Ihnen bei Ihren Datenanforderungen helfen kann.",
                    development: "Entwicklung von Ideen",
                    execution: "Ausführung der Idee",
                    developmentParagraph: "Sie haben eine Idee, wissen aber nicht, wie Sie sie umsetzen können? Ich kann Ihnen helfen.",
                    executionParagraph: "Die beste Idee ist ohne Ausführung wertlos. Ich erstelle Ihre individuelle Excel-Tabelle.",
                    viewMore: "Mehr",
                    back: "Zurück",
                    legalnotice: "Rechtshinweis",
                    poweredBy: "@AngetriebenVonLithi"
                }
            }
        },
});

export default i18n;