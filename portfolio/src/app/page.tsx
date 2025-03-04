import {ReactElement} from "react";
import Header from "@/src/components/Header";
import Intro from "@/src/components/Intro";
import Services from "@/src/components/Services";

export default function HomePage (): ReactElement {
  return (
    <>
        <Header/>
        <Intro/>
        <Services/>
    </>
  );
}