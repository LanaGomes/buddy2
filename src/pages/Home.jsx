import { ChevronLeft, ChevronRight } from "lucide-react";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { useState, useEffect } from "react";
import Tituloh2 from "../components/Tituloh2";
import { GradientButton } from "../components/Buttons";
import plusButton from "../images/+Button.png";
import { Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

dayjs.locale("pt-br");

//verificar se o valor apresentado nos meses estão corretos

const firebaseConfig = {
  apiKey: "AIzaSyCGK2Xq10StMJ_TOVhJqBqaLn5MlIWnRM0",
  authDomain: "buddy-300c1.firebaseapp.com",
  projectId: "buddy-300c1",
  storageBucket: "buddy-300c1.firebasestorage.app",
  messagingSenderId: "162654662766",
  appId: "1:162654662766:web:4a53ac2b78b735598b367f",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function Home() {
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [saidas, setSaidas] = useState(0);
  const [entradas, setEntradas] = useState(0);
  const [saldoTotal, setSaldoTotal] = useState(0);

  const prevMonth = () => {
    const previousMonth = currentMonth.subtract(1, "month");
    setCurrentMonth(previousMonth);
  };

  const nexMonth = () => {
    const nextMonth = currentMonth.add(1, "month");
    setCurrentMonth(nextMonth);
  };

  const fetchSaldoCumulativoHome = async () => {
    try {
      const dataInicio = currentMonth.startOf("month").toDate();
      const dataFim = currentMonth.endOf("month").toDate();

      // Filtrando saídas
      const saidasQuery = query(
        collection(db, "saída"),
        where("dataCriação", ">=", dataInicio),
        where("dataCriação", "<=", dataFim)
      );
      const saidasSnapshot = await getDocs(saidasQuery);
      const saidas = saidasSnapshot.docs.map((doc) => doc.data().valor || 0);
      const saidasTotal = saidas.reduce((acc, valor) => acc + valor, 0);

      // Filtrando entradas
      const entradasQuery = query(
        collection(db, "entrada"),
        where("dataCriação", ">=", dataInicio),
        where("dataCriação", "<=", dataFim)
      );
      const entradasSnapshot = await getDocs(entradasQuery);
      const entradas = entradasSnapshot.docs.map(
        (doc) => doc.data().valor || 0
      );
      const entradasTotal = entradas.reduce((acc, valor) => acc + valor, 0);

      setSaidas(saidasTotal);
      setEntradas(entradasTotal);

      setSaldoTotal(entradasTotal - saidasTotal);
    } catch (e) {
      console.error("Erro ao buscar documentos:", e);
    }
  };

  useEffect(() => {
    fetchSaldoCumulativoHome();
  }, [prevMonth, nexMonth]);

  return (
    <div>
      <nav className="tw:flex tw:justify-between tw:items-center tw:py-10 tw:m-5">
        <ChevronLeft
          onClick={prevMonth}
          size={48}
          className="tw:text-purple-blue tw:hover:text-saturated-blue transition-colors tw:hover:scale-150"
        />
        <h1 className="tw:text-dark-blue tw:text-3xl tw:font-semibold tw:text-nowrap">
          {currentMonth.format("MMMM - YYYY").toUpperCase()}
        </h1>
        <ChevronRight
          onClick={nexMonth}
          size={48}
          className="tw:text-purple-blue tw:hover:text-saturated-blue transition-colors tw:hover:scale-150"
        />
      </nav>
      <section className="saldoContainer tw:mx-6">
        <div className="tw:pt-4 tw:pb-2 tw:px-5 tw:border tw:border-lightest-blue tw:rounded-lg">
          <div className="tw:flex tw:justify-center tw:mb-5 tw:mt-3">
            <Tituloh2 text="Saldo" />
            <p className="tw:text-darkest-blue tw:text-3xl">: R${saldoTotal}</p>
          </div>
          <div className="tw:text-light-blue tw:text-xs tw:text-center tw:mt-2">
            {`Cumulativo do dia 1° de ${currentMonth
              .format("MMMM [de] YYYY")
              .toUpperCase()} ao último dia do mês disponível ou ao dia mais recente `}
          </div>
        </div>
      </section>
      <div className="tw:mt-12">
        <Link to={"/extract"}>
          <GradientButton className="tw:px-15 tw:py-3 tw:text-3xl">
            Extrato
          </GradientButton>
        </Link>
      </div>
      <nav className="tw:mt-20">
        <p className="tw:text-dark-blue tw:text-2xl">Adicionar Saída</p>
        <Link to={"/addSaida"} className="tw:flex tw:justify-center tw:mt-4">
          <img src={plusButton} alt="Adicionar saída" />
        </Link>
      </nav>
    </div>
  );
}

export default Home;
