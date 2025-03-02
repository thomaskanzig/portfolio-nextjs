import {Service} from "@/types/Service";
import {faDesktop, faMobileScreenButton, faScrewdriverWrench} from '@fortawesome/free-solid-svg-icons'

export const services: Service[] = [
    {
        icon: faDesktop,
        title: "Web Development",
        description: "I have been working as a web developer for 10 years. I have experience in developing web applications using modern technologies like React, Next.js and Symfony."
    },
    {
        icon: faMobileScreenButton,
        title: "Mobile Development",
        description: "I have been working as a mobile developer for 2 years using React Native and Expo. I have experience in developing mobile applications for both Android and iOS."
    },
    {
        icon: faScrewdriverWrench,
        title: "Automation Testing",
        description: "I have been working as an automation tester for 3 years using PHPUnit, Codeception, and Playwright as E2E tests."
    }
];