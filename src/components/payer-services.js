import * as React from "react";
import { Layout } from "../layout/layout";

export const PayerServices = () => {
    return (
        <Layout active={"service"}>
            <div className="vh-100 bg-dark text-white" id="vendor">Payer Services</div>
            <div className="vh-100 bg-danger text-white" id="services">Payer Services</div>
        </Layout>
    )
}
