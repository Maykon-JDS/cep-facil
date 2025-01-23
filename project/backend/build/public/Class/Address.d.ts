import AddressConsultant from "../Interface/AddressConsultant.js";
import AddressType from "../Types/Address.js";
declare class Address {
    private address;
    private addressConsultant;
    constructor(addressConsultant: AddressConsultant);
    getAddressByCep(cep: string): Promise<void>;
    getAddress(): AddressType;
    get cep(): string;
    get uf(): string;
    get bairro(): string;
    get localidade(): string;
}
export default Address;
