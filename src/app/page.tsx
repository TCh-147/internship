'use client'

import FooterMain from "./components/common/footer-main";
import FooterMoreInfo from "./components/common/footer-more-information";
import { loginArticleFields } from "./components/login/login-article-fields";
import LoginForm from "./components/forms/logn-form";
import LoginArticle from "./components/login/login-article";
import LoginNav from "./components/login/login-navigation";

export default function Home() {

  return (
    <div className="grid">

      <LoginNav></LoginNav>

      <div className="grid grid-cols-2 items-center my-12">

        <LoginForm></LoginForm>

        <div className="w-90 mx-12 self-start">
          {
            loginArticleFields.map(({title, description, moreInfo}) => (
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
