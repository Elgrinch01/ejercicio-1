import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import CardSection from "../components/CardSection";

const Inicio = () => {
  return (
    <div className="layout">
      <Sidebar />

      <main className="main">
        <Header />
        <CardSection />
      </main>
    </div>
  );
};

export default Inicio;