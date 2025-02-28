import {ReactElement} from "react";
import Header from "@/app/Header";
import Intro from "@/app/Intro";

export default function HomePage (): ReactElement {
  return (
    <>
        <Header/>
        <Intro/>

        <div className="container my-4">
            Coming soon ...
        </div>
    </>
  );
}