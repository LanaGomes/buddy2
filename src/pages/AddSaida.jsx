import Tituloh2 from "../components/Tituloh2";
import { BorderBasic } from "../components/Borders";
import { GradientButton } from "../components/Buttons";

function AddSaida() {
  const generateParcelas = () => {
    const options = [];
    for (let i = 1; i <= 100; i++) {
      options.push(
        <option key={i} value={i} className="tw:bg-white tw:text-darkest-blue">
          {i}
        </option>
      );
    }
    return options;
  };

  return (
    <div>
      <header className="tw:my-3">
        <Tituloh2 text="Editar / Adicionar Saída" />
      </header>
      <main className="tw:mx-3 ">
        <BorderBasic>
          <form className="tw:px-4 tw:py-3  tw:text-left">
            <div>
              <label className="tw:text-darkest-blue" htmlFor="tipoInput">
                Categoria do valor a ser inserido
              </label>
              <div>
                <select
                  id="tipoInput"
                  name="tipoInput"
                  autoComplete="tipoInput-name"
                  className="tw:my-3 tw:bg-darkest-blue tw:text-white tw:p-2 tw:text-xl tw:w-full"
                >
                  <option className="tw:bg-white tw:text-darkest-blue">
                    Entrada
                  </option>
                  <option className="tw:bg-white tw:text-darkest-blue">
                    Saída
                  </option>
                </select>
              </div>
              <div className="tw:mt-6">
                <label className="tw:text-darkest-blue" htmlFor="valorInput">
                  <p>Valor de entrada ou saída</p>
                  <p className="tw:text-sm">
                    (Em caso de parcelamento, informar valor da parcela)
                  </p>
                </label>
                <input
                  className="tw:w-full tw:border-lightest-blue tw:border tw:rounded-lg tw:bg-white tw:text-darkest-blue tw:p-2"
                  type="text"
                  id="valorInput"
                />
              </div>
              <div className="tw:mt-6">
                <label
                  className="tw:text-darkest-blue"
                  htmlFor="descricaoInput"
                >
                  Descrição da entrada ou saída
                </label>
                <input
                  className="tw:w-full tw:border-lightest-blue tw:border tw:rounded-lg tw:bg-white tw:text-darkest-blue tw:p-2"
                  type="text"
                  id="descricaoInput"
                />
              </div>
            </div>
            <div className="tw:mt-6">
              <label className="tw:text-darkest-blue" htmlFor="categoriaSaida">
                Categoria do gasto
              </label>
              <select
                id="categoriaSaida"
                name="categoriaSaida"
                autoComplete="categoriaSaida-name"
                className="tw:my-3 tw:bg-white tw:text-darkest-blue tw:border tw:border-lightest-blue tw:p-2 tw:text-xl tw:w-full"
              >
                <option className="tw:bg-white tw:text-darkest-blue">
                  Casa
                </option>
                <option className="tw:bg-white tw:text-darkest-blue">
                  Alimentação
                </option>
                <option className="tw:bg-white tw:text-darkest-blue">
                  Parcelamento cartão de crédito
                </option>
                <option className="tw:bg-lightest-blue tw:text-white">
                  Adicionar ou editar categoria(s)
                </option>
              </select>
              <div className="tw:text-xl tw:text-darkest-blue tw:pb-3 tw:pt-6 tw:border-b tw:border-lightest-blue">
                <input
                  className="tw:w-7 tw:h-7 tw:border tw:bg-white tw:align-middle"
                  type="checkbox"
                  id="gastoRecorrente"
                  name="gastoRecorrente"
                />
                <label className="tw:ml-3" htmlFor="gastoRecorrente">
                  Gasto Recorrente
                </label>
              </div>
              <div className="tw:text-xl tw:text-darkest-blue tw:pb-3 tw:pt-6 tw:border-b tw:border-lightest-blue">
                <input
                  className="tw:w-7 tw:h-7 tw:border tw:bg-white tw:align-middle"
                  type="checkbox"
                  id="parcelamento"
                  name="parcelamento"
                />
                <label className="tw:ml-3" htmlFor="parcelamento">
                  Parcelamento
                </label>
                <div className="parcelas">
                  <select
                    id="parcelas"
                    name="parcelas"
                    autoComplete="parcelas-name"
                    className="tw:my-3 tw:bg-white tw:text-darkest-blue tw:border tw:border-lightest-blue tw:p-2 tw:text-xl tw:w-20"
                  >
                    {generateParcelas()}
                  </select>
                  <label className="tw:ml-3" htmlFor="parcelas">
                    Parcelamento
                  </label>
                </div>
              </div>
              <div className="tw:mt-6 tw:flex tw:justify-around">
                <GradientButton className="tw:py-2 tw:px-7 ">
                  Salvar
                </GradientButton>
                <GradientButton className="tw:py-2 tw:px-7 ">
                  Voltar
                </GradientButton>
              </div>
            </div>
          </form>
        </BorderBasic>
      </main>
    </div>
  );
}

export default AddSaida;
