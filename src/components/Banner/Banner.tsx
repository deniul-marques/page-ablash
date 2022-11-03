import bannerPrincipal from  "../../assets/img/banner-1.png";
import bannerSecundario from  "../../assets/img/banner-2.png";
import bannerTernario from  "../../assets/img/banner-1.png";

export default function Banner() {
     return (
          <section>
               <div className="block md:grid grid-cols-4 gap-2 grid-rows-2 drop-shadow-lg">
                    <div className="col-span-3 row-span-2">
                         <img className="w-full h-full" src={bannerPrincipal} alt="banner-promocao"/>
                    </div>
                    <div className="col-span-1 row-span-1">
                         <img className="w-full h-full" src={bannerSecundario} alt="promocao-indepencia"/>
                    </div>
                    <div className="col-span-1 row-span-1 ">
                         <img className="w-full h-full" src={bannerTernario} alt="promocao-relogio"/>
                    </div>
               </div>
          </section>
     )
}