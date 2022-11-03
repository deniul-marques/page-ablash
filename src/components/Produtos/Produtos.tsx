import produtoSil from "../../assets/img/roupa-b.jpg"
import produtoAil from "../../assets/img/roupa-c.jpg"
import produtoBil from "../../assets/img/roupa-d.jpg"
import produtoCil from "../../assets/img/roupa-e.jpg"
import produtoDil from "../../assets/img/roupa-f.jpg"
import produtoFil from "../../assets/img/roupa-g.jpg"

import mascSil from "../../assets/img/masc-a.webp"
import mascAil from "../../assets/img/masc-b.webp"
import mascBil from "../../assets/img/masc-c.webp"
import mascCil from "../../assets/img/masc-d.webp"
import mascDil from "../../assets/img/masc-e.webp"
import mascEil from "../../assets/img/masc-f.webp"

export default function Produtos() {
     return (
          <section className="space-y-5">
               <div>
                    <h2 className="py-5 font-semibold text-lg">Roupas Femininas</h2>
                    <div className="grid grid-cols-6 gap-5 drop-shadow-xl">
                         <div className="space-y-5">
                              <div className="relative">
                                   <span className="bg-slate-300 px-1 block absolute right-0">Shein</span>
                                   <span className="bg-black text-white  px-1 block absolute left-0">-50%</span>
                                   <img className="w-full h-full rounded" src={produtoSil} alt="" />
                              </div>
                              <div className="space-y-1">
                                   <h3 className="text-sm bg-black px-1 text-white">Camisa Praia</h3>
                                   <p className="text-red-500 text-base">R$ 31,99</p>
                                   <span className="line-through text-xs">R$100,00</span>
                                   <a href="#" className="font-medium text-gray-700 border bg-slate-50 py-1 block text-center rounded hover:bg-black hover:text-white hover:transition duration-300">Comprar</a>
                              </div>
                         </div>
                         <div className="space-y-5">
                              <div className="relative">
                                   <span className="bg-orange-300 px-1 block absolute right-0">Shopee</span>
                                   <span className="bg-black text-white  px-1 block absolute left-0">-50%</span>
                                   <img className="w-full h-full rounded" src={produtoAil} alt="" />
                              </div>
                              <div className="space-y-1">
                                   <h3 className="text-sm bg-black px-1 text-white">Camisa Slog</h3>
                                   <p className="text-red-500 text-base">R$ 99,99</p>
                                   <span className="line-through text-xs">R$100,00</span>
                                   <a href="#" className="font-medium text-gray-700 border bg-slate-50 py-1 block text-center rounded hover:bg-black hover:text-white hover:transition duration-300">Comprar</a>
                              </div>
                         </div>
                         <div className="space-y-5">
                              <div className="relative">
                                   <span className="bg-orange-300 px-1 block absolute right-0">Shopee</span>
                                   <span className="bg-black text-white  px-1 block absolute left-0">-50%</span>
                                   <img className="w-full h-full rounded" src={produtoBil} alt="" />
                              </div>
                              <div className="space-y-1">
                                   <h3 className="text-sm bg-black px-1 text-white">Camisa Praia</h3>
                                   <p className="text-red-500 text-base">R$ 31,99</p>
                                   <span className="line-through text-xs">R$100,00</span>
                                   <a href="#" className="font-medium text-gray-700 border bg-slate-50 py-1 block text-center rounded hover:bg-black hover:text-white hover:transition duration-300">Comprar</a>
                              </div>
                         </div>
                         <div className="space-y-5">
                              <div className="relative">
                                   <span className="bg-slate-300 px-1 block absolute right-0">Shein</span>
                                   <span className="bg-black text-white  px-1 block absolute left-0">-50%</span>
                                   <img className="w-full h-full rounded" src={produtoCil} alt="" />
                              </div>
                              <div className="space-y-1">
                                   <h3 className="text-sm bg-black px-1 text-white">Camisa Praia</h3>
                                   <p className="text-red-500 text-base">R$ 31,99</p>
                                   <span className="line-through text-xs">R$100,00</span>
                                   <a href="#" className="font-medium text-gray-700 border bg-slate-50 py-1 block text-center rounded hover:bg-black hover:text-white hover:transition duration-300">Comprar</a>
                              </div>
                         </div>
                         <div className="space-y-5">
                              <div className="relative">
                                   <span className="bg-slate-300 px-1 block absolute right-0">Shein</span>
                                   <span className="bg-black text-white  px-1 block absolute left-0">-50%</span>
                                   <img className="w-full h-full rounded" src={produtoDil} alt="" />
                              </div>
                              <div className="space-y-1">
                                   <h3 className="text-sm bg-black px-1 text-white">Camisa Praia</h3>
                                   <p className="text-red-500 text-base">R$ 31,99</p>
                                   <span className="line-through text-xs">R$100,00</span>
                                   <a href="#" className="font-medium text-gray-700 border bg-slate-50 py-1 block text-center rounded hover:bg-black hover:text-white hover:transition duration-300">Comprar</a>
                              </div>
                         </div>
                         <div className="space-y-5">
                              <div className="relative">
                                   <span className="bg-slate-300 px-1 block absolute right-0">Shein</span>
                                   <span className="bg-black text-white  px-1 block absolute left-0">-50%</span>
                                   <img className="w-full h-full rounded" src={produtoFil} alt="" />
                              </div>
                              <div className="space-y-1">
                                   <h3 className="text-sm bg-black px-1 text-white">Camisa Praia</h3>
                                   <p className="text-red-500 text-base">R$ 31,99</p>
                                   <span className="line-through text-xs">R$100,00</span>
                                   <a href="#" className="font-medium text-gray-700 border bg-slate-50 py-1 block text-center rounded hover:bg-black hover:text-white hover:transition duration-300">Comprar</a>
                              </div>
                         </div>
                    </div>
               </div>
               <div>
                    <h2 className="py-5 font-semibold text-lg">Roupas Masculinas</h2>
                    <div className="grid grid-cols-6 gap-5 drop-shadow-xl">
                         <div className="space-y-5">
                              <div className="relative">
                                   <span className="bg-slate-300 px-1 block absolute right-0">Shein</span>
                                   <span className="bg-black text-white  px-1 block absolute left-0">-50%</span>
                                   <img className="w-full h-full rounded" src={mascSil} alt="" />
                              </div>
                              <div className="space-y-1">
                                   <h3 className="text-sm bg-black px-1 text-white">Camisa Praia</h3>
                                   <p className="text-red-500 text-base">R$ 31,99</p>
                                   <span className="line-through text-xs">R$100,00</span>
                                   <a href="#" className="font-medium text-gray-700 border bg-slate-50 py-1 block text-center rounded hover:bg-black hover:text-white hover:transition duration-300">Comprar</a>
                              </div>
                         </div>
                         <div className="space-y-5">
                              <div className="relative">
                                   <span className="bg-orange-300 px-1 block absolute right-0">Shopee</span>
                                   <span className="bg-black text-white  px-1 block absolute left-0">-50%</span>
                                   <img className="w-full h-full rounded" src={mascAil} alt="" />
                              </div>
                              <div className="space-y-1">
                                   <h3 className="text-sm bg-black px-1 text-white">Camisa Slog</h3>
                                   <p className="text-red-500 text-base">R$ 99,99</p>
                                   <span className="line-through text-xs">R$100,00</span>
                                   <a href="#" className="font-medium text-gray-700 border bg-slate-50 py-1 block text-center rounded hover:bg-black hover:text-white hover:transition duration-300">Comprar</a>
                              </div>
                         </div>
                         <div className="space-y-5">
                              <div className="relative">
                                   <span className="bg-orange-300 px-1 block absolute right-0">Shopee</span>
                                   <span className="bg-black text-white  px-1 block absolute left-0">-50%</span>
                                   <img className="w-full h-full rounded" src={mascBil} alt="" />
                              </div>
                              <div className="space-y-1">
                                   <h3 className="text-sm bg-black px-1 text-white">Camisa Praia</h3>
                                   <p className="text-red-500 text-base">R$ 31,99</p>
                                   <span className="line-through text-xs">R$100,00</span>
                                   <a href="#" className="font-medium text-gray-700 border bg-slate-50 py-1 block text-center rounded hover:bg-black hover:text-white hover:transition duration-300">Comprar</a>
                              </div>
                         </div>
                         <div className="space-y-5">
                              <div className="relative">
                                   <span className="bg-slate-300 px-1 block absolute right-0">Shein</span>
                                   <span className="bg-black text-white  px-1 block absolute left-0">-50%</span>
                                   <img className="w-full h-full rounded" src={mascCil} alt="" />
                              </div>
                              <div className="space-y-1">
                                   <h3 className="text-sm bg-black px-1 text-white">Camisa Praia</h3>
                                   <p className="text-red-500 text-base">R$ 31,99</p>
                                   <span className="line-through text-xs">R$100,00</span>
                                   <a href="#" className="font-medium text-gray-700 border bg-slate-50 py-1 block text-center rounded hover:bg-black hover:text-white hover:transition duration-300">Comprar</a>
                              </div>
                         </div>
                         <div className="space-y-5">
                              <div className="relative">
                                   <span className="bg-slate-300 px-1 block absolute right-0">Shein</span>
                                   <span className="bg-black text-white  px-1 block absolute left-0">-50%</span>
                                   <img className="w-full h-full rounded" src={mascDil} alt="" />
                              </div>
                              <div className="space-y-1">
                                   <h3 className="text-sm bg-black px-1 text-white">Camisa Praia</h3>
                                   <p className="text-red-500 text-base">R$ 31,99</p>
                                   <span className="line-through text-xs">R$100,00</span>
                                   <a href="#" className="font-medium text-gray-700 border bg-slate-50 py-1 block text-center rounded hover:bg-black hover:text-white hover:transition duration-300">Comprar</a>
                              </div>
                         </div>
                         <div className="space-y-5">
                              <div className="relative">
                                   <span className="bg-slate-300 px-1 block absolute right-0">Shein</span>
                                   <span className="bg-black text-white  px-1 block absolute left-0">-50%</span>
                                   <img className="w-full h-full rounded" src={mascDil} alt="" />
                              </div>
                              <div className="space-y-1">
                                   <h3 className="text-sm bg-black px-1 text-white">Camisa Praia</h3>
                                   <p className="text-red-500 text-base">R$ 31,99</p>
                                   <span className="line-through text-xs">R$100,00</span>
                                   <a href="#" className="font-medium text-gray-700 border bg-slate-50 py-1 block text-center rounded hover:bg-black hover:text-white hover:transition duration-300">Comprar</a>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     )
}