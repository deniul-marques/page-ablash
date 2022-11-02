export default function Banner() {
     return (
          <section>
               <div className="grid grid-cols-4 gap-2 grid-rows-2 drop-shadow-lg">
                    <div className="col-span-3 row-span-2">
                         <img className="w-full h-full" src="/assets/imgs/banner-2.png" alt="banner-promocao"/>
                    </div>
                    <div className="col-span-1 row-span-1">
                         <img className="w-full h-full" src="/assets/imgs/promocao.png" alt="promocao-indepencia"/>
                    </div>
                    <div className="col-span-1 row-span-1 ">
                         <img className="w-full h-full" src="/assets/imgs/relogio.png" alt="promocao-relogio"/>
                    </div>
               </div>
          </section>
     )
}