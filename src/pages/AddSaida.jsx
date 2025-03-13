import Tituloh2 from "../components/Tituloh2";
import { BorderBasic } from "../components/Borders";

function AddSaida() {
  return (
    <div>
      <header className="tw:my-3">
        <Tituloh2 text="Editar / Adicionar Saída"></Tituloh2>
      </header>
      <main className="tw:mx-3 ">
        <BorderBasic>
          <form className="tw:px-4 tw:py-3  tw:text-left">
            <div>
              <label className=" tw:text-darkest-blue " htmlFor="tipoInput">
                Categoria do valor a ser inserido
              </label>
              <div>
                <select
                  id="tipoInput"
                  name="tipoInput"
                  autoComplete="tipoInput-name"
                  className=" tw:my-3 tw:bg-darkest-blue tw:text-white tw:p-2 tw:text-xl tw:w-full"
                >
                  <option className="tw:bg-white tw:text-darkest-blue">
                    Entrada
                  </option>
                  <option className="tw:bg-white tw:text-darkest-blue">
                    Saída
                  </option>
                </select>
              </div>
              <div className=" tw:mt-6">
                <label className=" tw:text-darkest-blue " htmlFor="tipoInput">
                  Valor de entrada ou saída <br /> (Em caso de parcelamento,
                  informar valor da parcela)
                </label>
                <BorderBasic>
                  <input className="tw:p-2" type="text"></input>
                </BorderBasic>
              </div>
              <div className=" tw:mt-6">
                <label className=" tw:text-darkest-blue " htmlFor="tipoInput">
                  Descrição da entrada ou saída
                </label>
                <BorderBasic>
                  <input className="tw:p-2" type="text"></input>
                </BorderBasic>
              </div>
            </div>
            <div>
              <select
                id="tipoInput"
                name="tipoInput"
                autoComplete="tipoInput-name"
                className=" tw:my-3 tw:bg-darkest-blue tw:text-white tw:p-2 tw:text-xl tw:w-full"
              >
                <option className="tw:bg-white tw:text-darkest-blue">
                  Entrada
                </option>
                <option className="tw:bg-white tw:text-darkest-blue">
                  Saída
                </option>
              </select>
            </div>
          </form>
        </BorderBasic>
      </main>
    </div>
  );
}
export default AddSaida;
