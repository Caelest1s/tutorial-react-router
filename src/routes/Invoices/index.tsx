import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getInvoices } from "../../data";
import './style.css';

export default function Invoices() {

    let invoices = getInvoices();

    let [searchParams, setSearchParams] = useSearchParams();

    return (
        <div style={{ display: "flex" }}>
            <nav
                style={{
                    borderRight: "solid 1px",
                    padding: "1rem",
                }}
            >
                {/* esse input altera a url conforme digito no input*/}
                <input
                    value={searchParams.get("name") || ""}
                    onChange={(event) => {
                        let name = event.target.value;
                        if (name) {
                            setSearchParams({ name });
                        } else {
                            setSearchParams({});
                        }
                    }}
                />

                {/* esse filtro traz os invoice de acordo com o que é digitado no input, sendo a pesquisa feita pelas iniciais do nome */}
                {invoices
                    .filter((invoice) => {
                        let name = searchParams.get("name");
                        if (!name) {
                            return true;
                        }
                        let invoiceName = invoice.name.toLowerCase();
                        return invoiceName.startsWith(name.toLowerCase());
                    })

                    .map((invoice) => (
                        /* NavLink posso customizar os elementos quando a propriedade 'to' está ativa */
                        <NavLink
                            className={({ isActive }) => isActive ? "dblock nav-red" : "dblock nav-blue"}
                            to={`/invoices/${invoice.number}`}
                            key={invoice.number}
                        >
                            {invoice.name}
                        </NavLink>
                    ))}
            </nav>
            <Outlet />
        </div>
    );
}