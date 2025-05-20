'use client'

import Login from "./components/logn-form";
import LoginNav from "./components/login-navigation";
import FooterMain from "./components/footer-main";
import FooterMoreInfo from "./components/footer-more-information";
import { fields } from "./components/fields/login-article-fields";
import LoginArticle from "./components/login-article";

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
