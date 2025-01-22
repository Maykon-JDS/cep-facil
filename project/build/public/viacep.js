var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Address from "./Class/Address.js";
import ViaCepAddressConsultant from "./Class/ViaCepAddressConsultant.js";
function viacep() {
    return __awaiter(this, void 0, void 0, function* () {
        let inputCep = document.querySelector("#cep");
        let inputBairro = document.querySelector("#bairro");
        let inputLocalidade = document.querySelector("#localidade");
        let inputUf = document.querySelector("#uf");
        try {
            let address = new Address(ViaCepAddressConsultant.instance);
            if (inputCep === null || inputCep === void 0 ? void 0 : inputCep.value) {
                yield address.getAddressByCep(inputCep === null || inputCep === void 0 ? void 0 : inputCep.value);
            }
            if (!(inputCep === null || inputCep === void 0 ? void 0 : inputCep.value)) {
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
        }
        catch (error) {
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
    });
}
export default viacep;
