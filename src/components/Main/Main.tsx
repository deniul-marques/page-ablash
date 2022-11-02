import Nav from "components/Nav/Nav";
import Banner from "components/Banner/Banner";
import Produtos from "components/Produtos/Produtos";
import MenuIcons from "components/MenuIcons/MenuIcons";

export default function Main() {
     return (
          <main className="flex container mx-auto">
               <Nav />
               <div className="w-full space-y-10">
                    <Banner />
                    < MenuIcons />
                    <Produtos />
               </div>
          </main>
     )
}