import Links from "../Links/Links";

function Header() {
    return (
        <header className="w-screen flex justify-around gap-20 items-center  top-[0%] h-[12vh] " >
            <div>
                <h1 className="text-4xl font-medium">
                    Dra. Aline
                </h1>
            </div>
            <div>
                <nav className="flex items-center gap-8">
                    <Links url={'appointments'} Title={"Appointments"} />
                    <Links url={'Services'} Title={"Services"} />
                    <Links url={'login'} Title={"Login"} />
                </nav>
            </div>
        </header>
    );
}

export default Header;