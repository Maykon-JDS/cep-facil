import Address from "./Class/Address.js";
import ViaCepAddressConsultant from "./Class/ViaCepAddressConsultant.js";

async function viacep() {

    let inputCep: HTMLInputElement | null = document.querySelector("#cep");
    let inputBairro: HTMLInputElement | null = document.querySelector("#bairro");
    let inputLocalidade: HTMLInputElement | null = document.querySelector("#localidade");
    let inputUf: HTMLInputElement | null = document.querySelector("#uf");

    try {

        let address = new Address(ViaCepAddressConsultant.instance);

        if (inputCep?.value) {
            await address.getAddressByCep(inputCep?.value);
        }

        if (!inputCep?.value) {
            if (inputCep) {
                inputCep.value = "";
            }

            if (inputLocalidade) {
                inputLocalidade.value = "Não Encontrado";
            }

            if (inputBairro) {
                inputBairro.value = "Não Encontrado";
            }

            if (inputUf) {
                inputUf.value = "Não Encontrado";
            }

            return;
        }


        if (inputLocalidade) {
            inputLocalidade.value = address.localidade;
        }

        if (inputBairro) {
            inputBairro.value = address.bairro;
        }

        if (inputUf) {
            inputUf.value = address.uf;
        }

    } catch (error) {

        if (inputCep) {
            inputCep.value = "";
        }

        if (inputLocalidade) {
            inputLocalidade.value = "Não Encontrado";
        }

        if (inputBairro) {
            inputBairro.value = "Não Encontrado";
        }

        if (inputUf) {
            inputUf.value = "Não Encontrado";
        }

    }

}

export default viacep;