import * as React from "react";
import { Layout } from "../layout/layout";

export const About = () => {
    return (
        <Layout active={"about"}>
            <div className="container">
                <h1 className="py-4 fnt-lg-42">About</h1>
            </div>
        </Layout>
    )
}
