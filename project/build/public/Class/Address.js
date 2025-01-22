var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Address {
    constructor(addressConsultant) {
        this.address = {
            cep: "",
            bairro: "",
            localidade: "",
            uf: ""
        };
        this.addressConsultant = addressConsultant;
    }
    getAddressByCep(cep) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.address = yield this.addressConsultant.getAddressByCep(cep);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    getAddress() {
        return this.address;
    }
    get cep() {
        return this.address.cep;
    }
    get uf() {
        return this.address.uf;
    }
    get bairro() {
        return this.address.bairro;
    }
    get localidade() {
        return this.address.localidade;
    }
}
export default Address;
