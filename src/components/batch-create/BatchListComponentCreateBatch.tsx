type Props = {
  itens: {
    sku: string;
    raw_material_description: string;
    quantity: number;
  }[];
  editable?: boolean;
  onRemove?: (index: number) => void;
  header?: boolean;
  extraStyle?: string;
  scrollable?: boolean;
};

export default function BatchListComponent({
  itens,
  editable = false,
  onRemove,
  header = false,
  extraStyle = '',
  scrollable = false
}: Props) {
  return (
    <div>
      {header && editable && (
        <div className={'grid grid-cols-9 my-4 gap-4'}>
          <span className="text-black font-bold col-span-3 text-center truncate">
            Lote
          </span>
          <span className="text-black font-bold col-span-3 truncate">
            Matéria Prima
          </span>
          <span className="text-black font-bold col-span-3 truncate">
            Quantidade
          </span>
        </div>
      )}

      {header && !editable && (
        <div className={'grid grid-cols-9 my-4 gap-4'}>
          <span className="font-bold col-span-3 text-center truncate">
            Lote
          </span>
          <span className="font-bold col-span-3 text-center truncate">
            Matéria Prima
          </span>
          <span className="font-bold col-span-3 text-center truncate">
            Quantidade
          </span>
        </div>
      )}

      {editable && onRemove && (
        <div
          className={`h-auto max-h-64 ${extraStyle} ${scrollable ? 'overflow-auto' : 'overflow-hidden'}`}
        >
          {itens.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-10 items-center mb-4 border-b pb-2 w-full"
            >
              <div className="col-span-9">
                <div className="text-black font-semibold w-full grid grid-cols-9">
                  <div
                    className="col-span-3 text-center truncate"
                    title={item.sku}
                  >
                    {item.sku}
                  </div>
                  <div
                    className="col-span-4 text-center truncate"
                    title={item.raw_material_description}
                  >
                    {item.raw_material_description}
                  </div>
                  <div className="col-span-2 text-center mr-3">
                    {item.quantity}
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  className="text-red-600 font-semibold border border-red-600 rounded-full py-0.4 px-1.5 hover:bg-red-600 hover:text-white transition-colors"
                  onClick={() => onRemove(index)}
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {!editable && (
        <div
          className={`h-auto max-h-64 ${extraStyle} ${scrollable ? 'overflow-auto' : 'overflow-hidden'}`}
        >
          {itens.map((item, index) => (
            <div key={index} className="mb-4 border-b pb-2 w-full">
              <div className="flex justify-between items-center text-black font-semibold w-full">
                <div className="truncate w-1/3 text-center" title={item.sku}>
                  {item.sku}
                </div>
                <div
                  className="truncate w-1/3"
                  title={item.raw_material_description}
                >
                  {item.raw_material_description}
                </div>
                <div className="w-1/6 text-right mr-3">{item.quantity}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
