import AddressConsultant from "../Interface/AddressConsultant.js"
import AddressType from "../Types/Address.js"

class Address {

    private address: AddressType = {
        cep: "",
        bairro: "",
        localidade: "",
        uf: ""
    };

    private addressConsultant: AddressConsultant;

    public constructor(addressConsultant: AddressConsultant) {

        this.addressConsultant = addressConsultant;

    }

    public async getAddressByCep(cep: string): Promise<void> {

        try {

            this.address = await this.addressConsultant.getAddressByCep(cep);

        } catch (error) {

            console.error(error);

        }

    }

    public getAddress() : AddressType {

        return this.address;

    }

    public get cep() : string {
        return this.address.cep;
    }

    public get uf() : string {
        return this.address.uf;
    }

    public get bairro() : string {
        return this.address.bairro;
    }

    public get localidade() : string {
        return this.address.localidade;
    }

}

export default Address;