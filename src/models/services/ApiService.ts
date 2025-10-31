//Genérico <T> representa o tipo de dado que o serviço irá manipular

export abstract class ApiService<T> {
    protected _baseUrl: string;
    protected _headers: HeadersInit;

    constructor(baseUrl: string, token: string) {
        this._baseUrl = baseUrl;
        this._headers = {
            'Content-Type': 'application/json',
            Authorization: token,
        };
    }

    //Método abstratos
    abstract getAll(): Promise<T[]>;
    abstract getById(id: number): Promise<T | null>;
    abstract create(data: Partial<T>): Promise<T>;
    abstract update(id: number, data: T): Promise<T>;
    abstract delete(id: number): Promise<void>;

}