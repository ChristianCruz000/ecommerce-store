import { Product } from "@/types";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";

interface InfoProps {
  data: Product;
}

const info: React.FC<InfoProps> = ({ data }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex items-center gap-x-4">
        <h3 className="font-semibold">
          Cada canasta viene configurada con los siguiente ingredientes:
        </h3>
      </div>
      <br />
      <ul>
        <li>Arroz - 5lbs</li>
        <li>Pasta</li>
        <li>Hanichuelas - 1 lata</li>
        <li> Maiz - 1 lata</li>
        <li> Gandules - 1 lata</li>
        <li> Sardina - 2 latas</li>
        <li> atun - 2 latas</li>
        <li> Sal</li>
        <li> Vinagre</li>
        <li> Aceite</li>
        <li> Papel de baño - 2 rollos</li>
        <li> Jabon de baño - 3 unidades</li>
        <li> Afeitadoras</li>
        <li> Litro de soda</li>
        <li> Leche en carton</li>
        <li> Jabon cuava liquido</li>
        <li> Mistolin</li>
        <li>cloro</li>
      </ul>
      <br />
      <p>Si desea reemplazar un producto puede hacerlo presionando el botón</p>
      <button className="mb-5 bg-transparent text-xs hover:bg-black text-black font-semibold hover:text-white mt-3 py-1 px-3 border border-black hover:border-transparent rounded">
        Modificar Contenido
      </button>
      <br />
      <Button className="flex items-center gap-x-2">Agregar canasta</Button>
    </div>
  );
};
export default info;
