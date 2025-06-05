import FacturasController from "../controllers/controller.js";
import express from "express";

class Router {
    constructor() {
        this.router = express.Router();
        this.facturasController = new FacturasController();
    }

    startRoutes() {
        this.router.get("/facturas", this.facturasController.getFacturas);
        this.router.post("/facturas", this.facturasController.crearFactura);
        this.router.get("/facturas/tipo/:tipo", this.facturasController.getPorTipo);
        this.router.get("/facturas/estado/:estado", this.facturasController.getPorEstado);
        return this.router;
    }
}

export default Router;