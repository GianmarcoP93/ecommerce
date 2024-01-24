export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="  bg-gray-800 flex flex-col ">
        <div
          onClick={scrollToTop}
          className="  bg-gray-700 flex justify-center text-white py-2 hover:bg-gray-600 cursor-pointer hover:underline"
        >
          <p>Torna su</p>
        </div>

        <div className="flex text-white justify-center gap-12 py-11  leading-8 ">
          <div>
            <h3 className=" text-xl font-bold pb-3">Per conoscerci meglio</h3>
            <p className="hover:underline cursor-pointer">
              Opportunità di lavoro
            </p>
            <p className="hover:underline cursor-pointer">
              Informazioni su Dream Buy
            </p>
            <p className="hover:underline cursor-pointer">Sostenibilità</p>
          </div>

          <div>
            <h3 className=" text-xl font-bold pb-3">Guadagna con Dream Buy</h3>
            <p className="hover:underline cursor-pointer">Vendi su Dram Buy</p>
            <p className="hover:underline cursor-pointer">
              Costruisci il tuo marchio
            </p>
            <p className="hover:underline cursor-pointer">Diventa affiliato</p>
            <p className="hover:underline cursor-pointer">
              Logistica di Dream Buy
            </p>
            <p className="hover:underline cursor-pointer">
              Promuovi i tuoi prodotti
            </p>
          </div>

          <div>
            <h3 className=" text-xl font-bold pb-3">
              Metodi di pagamento Dream Buy
            </h3>
            <p className="hover:underline cursor-pointer">
              Metodi di pagamento
            </p>
            <p className="hover:underline cursor-pointer">
              Convertitore di valuta Dream Buy
            </p>
            <p className="hover:underline cursor-pointer">Buoni Regalo</p>
            <p className="hover:underline cursor-pointer">
              Logistica di Dream Buy
            </p>
            <p className="hover:underline cursor-pointer">Ricarica online</p>
          </div>

          <div>
            <h3 className=" text-xl font-bold pb-3">Bisogno di aiuto?</h3>
            <p className="hover:underline cursor-pointer">
              Costi e modalità di spedizione
            </p>
            <p className="hover:underline cursor-pointer">
              Restituisci o sostituisci articoli
            </p>
            <p className="hover:underline cursor-pointer">
              I miei contenuti e dispositivi
            </p>
            <p className="hover:underline cursor-pointer">Servizio Clienti</p>
            <p className="hover:underline cursor-pointer">Accessibilità</p>
          </div>
        </div>
        <div className=" border-t-2 border-gray-600 flex flex-col justify-center items-center py-5">
          <img src="/logo.png" alt="logo" className=" max-w-32 h-auto mb-2" />
          <div className="flex text-white gap-3 max-w-[50%] mx-auto flex-wrap justify-center font-light text-sm">
            <p className="cursor-pointer hover:underline">Australia</p>
            <p className="cursor-pointer hover:underline">Brasile</p>
            <p className="cursor-pointer hover:underline">Canada</p>
            <p className="cursor-pointer hover:underline">Cina</p>
            <p className="cursor-pointer hover:underline">Francia</p>
            <p className="cursor-pointer hover:underline">Germania</p>
            <p className="cursor-pointer hover:underline">Giappone</p>
            <p className="cursor-pointer hover:underline">India</p>
            <p className="cursor-pointer hover:underline">Messica</p>
            <p className="cursor-pointer hover:underline">Paesi Bassi</p>
            <p className="cursor-pointer hover:underline">Polonia</p>
            <p className="cursor-pointer hover:underline">
              Emirati Arabi Uniti
            </p>
            <p className="cursor-pointer hover:underline">Regno Unito</p>
            <p className="cursor-pointer hover:underline">Spagna</p>
            <p className="cursor-pointer hover:underline">Singapore</p>
            <p className="cursor-pointer hover:underline">Stati Uniti</p>
            <p className="cursor-pointer hover:underline">Turchia</p>
          </div>
        </div>
        <div className="bg-black text-white flex flex-col items-center p-4 ">
          <h3 className=" font-bold">Disclaimer</h3>
          <div className="flex flex-col flex-wrap justify-center items-center py-4  font-extralight text-sm ">
            <p className="pb-2 text-center">
              Questo sito web è un progetto fittizio creato esclusivamente a
              scopo di esercitazione e apprendimento. Tutti i contenuti, inclusi
              i nomi dei prodotti, le immagini, i marchi e ogni altro
              riferimento presente sul sito, sono puramente inventati o
              utilizzati in modo esemplificativo.
            </p>
            <p className="pb-2 text-center">
              Questo sito non rappresenta un'entità commerciale reale, non è
              operativo a scopi commerciali e non è inteso per transazioni
              finanziarie o commerciali. Le informazioni presenti sul sito non
              devono essere considerate accurate o affidabili per scopi reali.
            </p>
            <p className="pb-2 text-center">
              Lo scopo di questo sito è esclusivamente educativo, volto a
              dimostrare le competenze di programmazione, design web e sviluppo
              di contenuti dell'autore. Per qualsiasi domanda o chiarimento, si
              prega di contattare il creatore del sito.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
