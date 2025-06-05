import FacturasModel from "./DAO/model.js";

class Factory {
    static create(persistence) {
        switch (persistence) {
            case "memory":
                console.log("Usando persistencia en memoria");
                return new FacturasModel();

            default:
                console.log("Persistencia por defecto (memoria)");
                return new FacturasModel();
        }
    }
}

export default Factory;