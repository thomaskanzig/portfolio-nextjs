import {ReactElement} from "react";
import Header from "@/src/components/Header";
import Intro from "@/src/components/Intro";
import Services from "@/src/components/Services";
import Contact from "@/src/components/Contact";

export default function HomePage (): ReactElement {
  return (
    <>
        <Header/>
        <Intro/>
        <Services/>
        <Contact/>
    </>
  );
}