export default function Header() {
     return (
          <header className="container mx-auto py-3">
               <div className="">
                    <ul className="flex gap-5 justify-center">
                         <li className="hover:underline underline-offset-8 decoration-2" ><a href="www.google.com.br"> Central do Vendedor</a></li>|
                         <li className="hover:underline underline-offset-8 decoration-2" ><a href="www.google.com.br">Venda na Shopee</a></li>|
                         <li className="flex gap-5">
                              Siga-nos no
                              <ul className="flex gap-2">
                                   <li><a href="https://www.instagram.com/as_achadinhos_/" target="_blank"><span><img src="https://img.icons8.com/ios/20/000000/instagram-new.png" alt="icon-instagram" /></span></a></li>
                                   <li><a href="www.google.com.br"><span><img src="https://img.icons8.com/ios/20/000000/facebook-new.png" alt="icon-facebook" /></span></a></li>
                              </ul>
                         </li>
                    </ul>
               </div>
               <div className="flex items-center gap-x-9 py-5">
                    <img alt="logomarca" src="/assets/imgs/achadinhos.svg" />

                    <div className="flex justify-between w-full">
                         <form className="relative w-3/6">
                              <input className="rounded-full border border-gray-200 w-full px-10 py-2 outline outline-none placeholder:text-sm" id="" type="text" name="" placeholder="Procure na loja" />
                              <button className="absolute top-2 left-3">
                                   <span><svg className="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="11" cy="11" r="8" />  <line x1="21" y1="21" x2="16.65" y2="16.65" /></svg></span>
                              </button>
                         </form>
                         <div className="flex gap-20 items-center">
                              <ul className="flex gap-5 font-medium">
                                   <li><a className="px-2 p-1 hover:underline underline-offset-8 decoration-2" href="www.google.com.br">Home</a></li>
                                   <li><a className="px-2 p-1 hover:underline underline-offset-8 decoration-2" href="www.google.com.br">Sobre</a></li>
                                   <li><a className="px-2 p-1 hover:underline underline-offset-8 decoration-2" href="www.google.com.br">Loja</a></li>
                                   <li><a className="px-2 p-1 hover:underline underline-offset-8 decoration-2" href="www.google.com.br">Contato</a></li>
                              </ul>
                         </div>
                    </div>
               </div>
          </header>
     )
}