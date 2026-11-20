type PlayerCard = {
    jersey: number;
    name: string;
    imgurl: string;
    position: string;
    country: string;
};

function PlayerCard({ jersey, name, imgurl, position, country }: PlayerCard) {
    return (
        <div className="w-64 bg-white rounded-xl shadow-lg overflow-hidden">
            <img
                src={imgurl}
                alt={name}
                className="w-full h-100 object-cover"
            />
            <div className="p-4">

                <h2 className="text-xl font-bold text-gray-800">
                    {name}
                </h2>

                <p className="text-sm text-gray-500 mb-3">
                    {position}
                </p>

                <div className="flex justify-between items-center border-t pt-3">
                    <span className="text-gray-600">
                        {country}
                    </span>

                    <span className="bg-blue-500 text-white px-3 py-1 rounded-lg font-bold">
                        #{jersey}
                    </span>
                </div>

            </div>
        </div>
    );
}

export default PlayerCard;