import AddressConsultant from "../Interface/AddressConsultant.js";
import Address from "../Types/Address.js";
declare class ViaCepAddressConsultant implements AddressConsultant {
    #private;
    protected address: Address;
    protected constructor();
    static get instance(): ViaCepAddressConsultant;
    getAddressByCep(cep: string): Promise<Address>;
}
export default ViaCepAddressConsultant;
