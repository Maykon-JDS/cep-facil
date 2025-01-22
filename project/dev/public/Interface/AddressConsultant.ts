import Address from "../Types/Address.js";

export default interface AddressConsultant {

    getAddressByCep(cep:string): Promise<Address>;

}