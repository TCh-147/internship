'use client'

import FooterMain from "../components/footer-main.tsx";
import RegisterNav from "../components/register-navigation.tsx";
import RegisterForm from "../components/register-form.tsx";

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
