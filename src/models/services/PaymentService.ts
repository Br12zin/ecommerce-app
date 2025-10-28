import { ApiService } from "./ApiService";
import IPayment from "../interfaces/IPayment";
export class PaymentService extends ApiService<IPayment> {
  constructor() {
    super(
      "http://10.63.45.59:8080/pagamentos/",
      "stNOJvYxgbX3bRg3CEGMTNiqnIO3TMMHPi8K3ehLzk3KqcN3tJbDnBdMwWvAj84r2fiKvaAxQC58i1BsR5iqjBzzscwMudNv8xL6"
    );
  }

  async paymentIntent(valor: number): Promise<string> {
    const response = await fetch(this._baseUrl + "create-payment-intent", {
      method: "POST",
        headers: this._headers,
        body: JSON.stringify({ valor }),
    });
    if (!response.ok) {
      throw new Error("Erro ao criar pagamento");
    }
    const data = await response.json();
    return data.client_secret;
  }

  
  async confirmPayment(id_pagamento: string): Promise<string> {
    const response = await fetch(this._baseUrl + "confirm-payment", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ id_pagamento }),
    });
    if (!response.ok) {
      throw new Error("Erro ao confirmar pagamento");
    }
    return await response.json();
}

  //Métodos não utilizados
    getById():Promise<IPayment> {throw new Error("Não implementado"); }
    getAll():Promise<IPayment[]> {throw new Error("Não implementado"); }
    create():Promise<IPayment> {throw new Error("Não implementado"); }
    update():Promise<IPayment> {throw new Error("Não implementado"); }
    delete():Promise<void> {throw new Error("Não implementado"); }
}