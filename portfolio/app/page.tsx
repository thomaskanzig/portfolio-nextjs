import {ReactElement} from "react";
import Header from "@/app/Header";
import Intro from "@/app/Intro";
import Services from "@/app/Services";

export default function HomePage (): ReactElement {
  return (
    <>
        <Header/>
        <Intro/>
        <Services/>
    </>
  );
}