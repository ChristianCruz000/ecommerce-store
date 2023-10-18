import { Billboard as BillboardType } from "@/types";

interface BillboardProps {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      >
        <div className="h-full w-full flex flex-col justify-center items-center  gap-y-8">
          <div className="w-full font-black text-white drop-shadow-md uppercase text-6xl text-center">
            {/* {data.label} */}
            Productos esenciales a la puerta de tu casa.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
