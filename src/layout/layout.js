import React from 'react'
import { Header } from './header'
import { Footer } from './footer'

export const Layout = ({ children, active }) => {
    return (
        <>
            <Header active={active} />
            {
                active !== "home" && active !== "contact" && <div className="bg-clrf9">
                    <div className="container">
                        <h1 className="fnt-fly py-4 text-white fnt-36 fnt-md-56 text-capitalize">{active}</h1>
                    </div>
                </div>
            }
            {children}
            <Footer />
        </>
    )
}
