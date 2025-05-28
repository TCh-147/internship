'use client'

import FooterMain from "app/components/common/footer-main"
import FooterMoreInfo from "app/components/common/footer-more-information"
import LoginForm from "app/components/forms/logn-form"
import LoginArticle from "./login-article"
import { loginArticleFields } from "./login-article-fields"
import LoginNav from "./login-navigation"

export default function Login(){
    
    return(
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
    )
}