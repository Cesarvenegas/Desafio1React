import { MyCard } from "./MyCard";

const Grilla = () => {

    const datos = [
        {
            image: "https://placedog.net/980",
            nombre: "Boby",
            descripcion: "Un jack russel terrier es una raza de pelo corto y duro, compacto físicamente y con patas cortas",
            color: "success",
            propietario: "Benjamín",
        },
        {
            image: "https://placedog.net/950",
            nombre: "Mulan",
            descripcion: "El bulldog francés tiene como característica principal sus orejas de estilo murciélago.",
            color: "success",
            propietario: "Dante",
        },
        {
            image: "https://placedog.net/930",
            nombre: "Naruto",
            descripcion: "El terrier chileno es la primera raza canina proveniente de Chile",
            color: "danger",
            propietario: "Cesar",
        },
       
    ];

    return (
        <div className="container">
            <div className="row">
                {datos.map((dato, index) => (
                    <div className="col-md-3 mx-2" key={index}>
                        <MyCard
                            image={dato.image}
                            nombre={dato.nombre}
                            descripcion={dato.descripcion}
                            color={dato.color}
                            propietario={dato.propietario}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Grilla;
