import { Product } from "../types/Product";
import { ApiService } from "./ApiService";

export default class ProductService extends ApiService<Product> {
    //Construtor
    constructor() {
        super("http://10.63.45.25:8080/produtos/",
            "DAenvhY03Rm2xspRZUmmKrj4PyzUNT4QjjVgK9XChTOe2yntmo9Rqbna7NcAVn2oPrZXoK8oRox6btrCuq59bdoXYaYBX8QVFcJj"
        );
    }

    //Imlementação dos métodos abstratos
    async getById(id: number): Promise<Product> {
        const response = await fetch(`${this._baseUrl}${id}`, {
            method: 'GET',
            headers: this._headers,
        });
        return response.json();
    }

      async getAll(): Promise<Product[]> {
    const response = await fetch(this._baseUrl, {
      method: "GET",
      headers: this._headers,
    });
    return response.json();
  }
  async create(data: Product): Promise<Product>{
    const response = await fetch(this._baseUrl,{
        method: "POST",
        headers: this._headers,
        body: JSON.stringify(data),
    });
    return response.json()
  }
  async update(id: number, data: Partial<Product>): Promise<Product>{
    const response = await fetch(`${this._baseUrl}${id}`,{
        method: "PUT",
        headers: this._headers,
        body: JSON.stringify(data),
    });
    return response.json()
  }
  async delete(id: number): Promise<void>{
    await fetch(`${this._baseUrl}${id}`,{
        method: "DELETE",
        headers: this._headers,
    });
  }
}