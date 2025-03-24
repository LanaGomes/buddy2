import Tituloh2 from "../components/Tituloh2";
import { BorderBasic } from "../components/Borders";
import { GradientButton } from "../components/Buttons";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";

function AddSaida() {
  const [tipo, setTipo] = useState("");
  const [valor, setValor] = useState("");
  const [descrição, setdescrição] = useState("");
  const [categoria, setCategoria] = useState("");
  const [gastoRecorrente, setGastoRecorrente] = useState(false);
  const [parcelamento, setParcelamento] = useState(false);
  const [parcelas, setParcelas] = useState(1);

  const navigate = useNavigate();
  const db = getFirestore();

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

  const addSaidaToFirestore = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "saída"), {
        tipo,
        valor,
        descrição,
        categoria,
        gastoRecorrente,
        parcelamento,
        parcelas,
        timestamp: new Date(),
      });
      alert("Saída adicionada com sucesso!");
      {
        /*fazer componente de alerta*/
      }
      navigate(-1);
    } catch (error) {
      console.error("Erro ao adicionar saída: ", error);
      alert("Erro ao adicionar saída.");
      {
        /*fazer componente de alerta*/
      }
    }
  };

  return (
    <div>
      <header className="tw:my-3">
        <Tituloh2 text="Editar / Adicionar Saída" />
      </header>
      <main className="tw:mx-3 ">
        <BorderBasic>
          <form
            className="tw:px-4 tw:py-3  tw:text-left"
            onSubmit={addSaidaToFirestore}
          >
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
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value)}
                >
                  <option className="tw:bg-white tw:text-darkest-blue">
                    entrada
                  </option>
                  <option className="tw:bg-white tw:text-darkest-blue">
                    saída
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
                <span className="tw:w-full tw:border-lightest-blue tw:border tw:rounded-lg tw:bg-white tw:text-darkest-blue tw:p-3">
                  R$
                  <input
                    className="tw:w-2/3 tw:mt-3 tw:ml-0.5"
                    type="number"
                    id="valorInput"
                    value={valor}
                    onChange={(e) => setValor(Number(e.target.value))}
                  />
                </span>
              </div>
              <div className="tw:mt-6">
                <label
                  className="tw:text-darkest-blue"
                  htmlFor="descriçãoInput"
                >
                  Descrição da entrada ou saída
                </label>
                <input
                  className="tw:w-full tw:border-lightest-blue tw:border tw:rounded-lg tw:bg-white tw:text-darkest-blue tw:p-2"
                  type="text"
                  id="descricaoInput"
                  value={descrição}
                  onChange={(e) => setdescrição(e.target.value)}
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
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
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
              <div
                className={`${
                  parcelamento
                    ? "tw:hidden"
                    : "tw:text-xl tw:text-darkest-blue tw:pb-3 tw:pt-6 tw:border-b tw:border-lightest-blue"
                }`}
              >
                <input
                  className="tw:w-7 tw:h-7 tw:border tw:bg-white tw:align-middle"
                  type="checkbox"
                  id="gastoRecorrente"
                  name="gastoRecorrente"
                  checked={gastoRecorrente}
                  onChange={(e) =>
                    setGastoRecorrente(e.target.checked) &&
                    setParcelamento(false)
                  }
                />
                <label className="tw:ml-3" htmlFor="gastoRecorrente">
                  Gasto Recorrente
                </label>
              </div>
              <div
                className={`${
                  gastoRecorrente ? "tw:hidden" : ""
                } tw:text-xl tw:text-darkest-blue tw:pb-3 tw:pt-6 tw:border-b tw:border-lightest-blue`}
              >
                <input
                  className="tw:w-7 tw:h-7 tw:border tw:bg-white tw:align-middle"
                  type="checkbox"
                  id="parcelamento"
                  name="parcelamento"
                  checked={parcelamento}
                  onChange={(e) =>
                    setParcelamento(e.target.checked) &&
                    setGastoRecorrente(false)
                  }
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
                    value={parcelas}
                    onChange={(e) => setParcelas(Number(e.target.value))}
                  >
                    {generateParcelas()}
                  </select>
                  <label className="tw:ml-3" htmlFor="parcelas">
                    Parcelamento
                  </label>
                </div>
              </div>
            </div>
            <div className="tw:flex tw:justify-center">
              {" "}
              <GradientButton className="tw:py-2 tw:px-7 tw:mt-3  ">
                Salvar
              </GradientButton>
            </div>
          </form>
          <div className="tw:flex tw:justify-center tw:mt-3 tw:mb-4">
            <Link to={"/"} className="tw:text-dark-blue ">
              {/*fazer o retorno a pagina anterior funcionar - pag recarrega e perde-se o historico*/}
              Voltar
            </Link>
          </div>
        </BorderBasic>
      </main>
    </div>
  );
}

export default AddSaida;
