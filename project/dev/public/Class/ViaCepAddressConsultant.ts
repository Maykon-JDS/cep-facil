import AddressConsultant from "../Interface/AddressConsultant.js"
import Address from "../Types/Address.js"

class ViaCepAddressConsultant implements AddressConsultant{

    static #instance: ViaCepAddressConsultant;

    protected address: Address = {
        cep: "",
        bairro: "",
        localidade: "",
        uf: ""
    };

    protected constructor() {}

    public static get instance(): ViaCepAddressConsultant {
        if (!ViaCepAddressConsultant.#instance) {
            ViaCepAddressConsultant.#instance = new ViaCepAddressConsultant();
        }

        return ViaCepAddressConsultant.#instance;
    }

    public async getAddressByCep(cep:string) : Promise<Address>{

        let responseJson = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        let response = await responseJson.json();
        this.address.cep = cep;
        this.address.bairro = response.bairro;
        this.address.localidade = response.localidade;
        this.address.uf = response.uf;

        return this.address;

    }

}

export default ViaCepAddressConsultant;