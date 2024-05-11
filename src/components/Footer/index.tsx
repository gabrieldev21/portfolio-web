import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-800 to-green-500 text-white  w-full py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div>
            <h4 className="font-bold text-lg mb-4">CONTATOS</h4>
            {/* Inserir informações de contato aqui */}
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Políticas e Segurança</h4>
            {/* Inserir informações de políticas e segurança aqui */}
          </div>
        </div>
        <hr className="my-8 border-white" />
        <div className="flex items-center justify-between">
          <div className="flex gap-4 justify-between w-[100%]">
            <Image
              src="/homeLogo.svg"
              alt="foto da logo portfolioManager"
              width={48}
              height={48}
            />
            <span>2023 - Portfoda, Todos os Direitos Reservados©</span>
            <div />
          </div>
        </div>
      </div>
    </footer>
  );
};
