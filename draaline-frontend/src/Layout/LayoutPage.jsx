import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

function LayoutPage() {
    return (
        <>
            <div className="w-screen min-h-screen overflow-y-auto overflow-x-hidden">
                <Header />

                <Footer />
            </div>
        </>
    );
}

export default LayoutPage;