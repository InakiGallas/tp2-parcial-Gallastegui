import FacturasService from "../services/service.js";
import facturaSchema from "../validations/factura.js";

class FacturasController {
    constructor() {
        this.facturasService = new FacturasService();
    }

    getFacturas = async (req, res) => {
        try {
            const facturas = await this.facturasService.getFacturas();
            res.status(200).json(facturas);
        } catch (error) {
            res.status(500).json({ error: "Error fetching facturas" });
        }
    };

    crearFactura = async (req, res) => {
        try {
            const nuevaFactura = req.body;

            const { error } = facturaSchema.validate(nuevaFactura);
            if (error) {
                return res.status(400).json({ error: error.details[0].message });
            }

            const facturaCreada = await this.facturasService.crearFactura(nuevaFactura);
            res.status(201).json(facturaCreada);
            
        } catch (error) {
            res.status(500).json({ error: "Error creando factura" });
        }
    };


    getPorTipo = async (req, res) => {
        try {
            const { tipo } = req.params;
            const facturas = await this.facturasService.getFacturasPorTipo(tipo);
            res.status(200).json(facturas);
        } catch (error) {
            res.status(500).json({ error: "Error filtrando por tipo" });
        }
    };

    getPorEstado = async (req, res) => {
        try {
            const { estado } = req.params;
            const facturas = await this.facturasService.getFacturasPorEstado(estado);
            res.status(200).json(facturas);
        } catch (error) {
            res.status(500).json({ error: "Error filtrando por estado" });
        }
    };
}

export default FacturasController;
