'use client'

import Login from "./pages/login/page";
import LoginNav from "./pages/components/login-navigation";
import FooterMain from "./pages/components/footer-main";
import FooterMoreInfo from "./pages/components/footer-more-information";
import { fields } from "./pages/components/fields/login-article-fields";
import LoginArticle from "./pages/components/login-article";

export default function Home() {

  return (
    <div className="grid">

      <LoginNav></LoginNav>

      <div className="grid grid-cols-2 items-center my-12">

        <Login></Login>

        <div className="w-90 mx-12 self-start">
          {
            fields.map(({title, description, moreInfo}) => (
              <LoginArticle key={title} title={title} description={description} moreInfo={moreInfo}></LoginArticle>
            ))
          }
        </div>

      </div>
        <FooterMoreInfo></FooterMoreInfo>
        <FooterMain></FooterMain>
    </div>
  );
}
