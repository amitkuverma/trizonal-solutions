import React from 'react'
import { Header } from './header'
import { Footer } from './footer'

export const Layout = ({ children, active }) => {
    return (
        <>
            <Header active={active}  />
            {children}
            <Footer />
        </>
    )
}
