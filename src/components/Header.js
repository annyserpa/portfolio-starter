import React from "react"
import Logo from "../assets/logo-anny.svg"

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <img src={Logo} alt="" />
          </a>
          <a href="mailto:annygserpa@gmail.com?subject=Quero%20te%20contratar">
            <button className="btn btn-sm">Work with me</button>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
