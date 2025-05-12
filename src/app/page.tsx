'use client'

import Login from "./pages/login/page";
import LoginNav from "./pages/components/login-navigation";
import FooterMain from "./pages/components/footer-main";
import FooterMoreInfo from "./pages/components/footer-more-information";

export default function Home() {

  return (
    <div className="grid">

      <LoginNav></LoginNav>

      <div className="grid grid-cols-2 items-center my-12">

        <Login></Login>

        <div className="w-80 mx-12">
          <h2 className="text-2xl">Title</h2>
          <p>Some info</p>
          <p className="after-arrow-symbol">Прочетете повече</p>
          <hr/>
        </div>

      </div>
        <FooterMoreInfo></FooterMoreInfo>
        <FooterMain></FooterMain>
    </div>
  );
}
