'use client'

import FooterMain from "app/components/common/footer-main";
import RegisterForm from "app/components/forms/register-form";
import RegisterNav from "app/[locale]/register/register-navigation";



export default function Register() {

  return (
    <div className="grid">

      <RegisterNav></RegisterNav>

      <div className="grid grid-cols-1 w-3/6 items-center my-12 m-auto">

        <RegisterForm></RegisterForm>

      </div>

        <FooterMain></FooterMain>

    </div>
  );
}
