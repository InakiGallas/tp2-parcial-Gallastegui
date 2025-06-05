class FacturasModel {
    constructor() {
        this.facturas = [
            { id: 1, numero: 10, tipo: 'A', monto: 1000, estado: 'pendiente de pago' },
            { id: 2, numero: 11, tipo: 'B', monto: 1500, estado: 'pagado' },
            { id: 3, numero: 12, tipo: 'A', monto: 2000, estado: 'próximo a vencer' }
        ];
    }

    getFacturas = async () => {
        return this.facturas;
    };

    crearFactura = async (nuevaFactura) => {
        nuevaFactura.id = this.facturas.length ? this.facturas[this.facturas.length - 1].id + 1 : 1;
        this.facturas.push(nuevaFactura);
        return nuevaFactura;
    };

    getFacturasPorTipo = async (tipo) => {
        return this.facturas.filter(f => f.tipo === tipo);
    };

    getFacturasPorEstado = async (estado) => {
        return this.facturas.filter(f => f.estado === estado);
    };
}

export default FacturasModel;