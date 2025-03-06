import { ChevronLeft, ChevronRight } from "lucide-react";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { useState } from "react";
import Tituloh2 from "../components/Tituloh2";
import { GradientButton } from "../components/Buttons";
import plusButton from "../images/+Button.png";

dayjs.locale("pt-br");

function Home() {
  const [currentMonth, setCurrentMonth] = useState(dayjs());

  const prevMonth = () => {
    const previousMonth = currentMonth.subtract(1, "month");
    setCurrentMonth(previousMonth);
  };

  const nexMonth = () => {
    const nextMonth = currentMonth.add(1, "month");
    setCurrentMonth(nextMonth);
  };

  return (
    <div>
      <nav className="tw:flex tw:justify-between tw:items-center tw:py-10 tw:m-5">
        <ChevronLeft
          onClick={prevMonth}
          size={48}
          className=" tw:text-purple-blue tw:hover:text-saturated-blue transition-colors tw:hover:scale-150"
        />
        <h1 className="tw:text-dark-blue tw:text-3xl tw:font-semibold tw:text-nowrap ">
          {currentMonth.format("MMMM - YYYY").toUpperCase()}
        </h1>

        <ChevronRight
          onClick={nexMonth}
          size={48}
          className=" tw:text-purple-blue tw:hover:text-saturated-blue transition-colors tw:hover:scale-150"
        />
      </nav>
      <section className="saldoContainer tw:mx-6">
        <div className="tw:pt-4 tw:pb-2 tw:px-5 tw:border tw:border-lightest-blue tw:rounded-lg">
          <div className="tw:flex tw:justify-center tw:mb-5 tw:mt-3">
            <Tituloh2 text="Saldo" />
            <p className="tw:text-darkest-blue tw:text-3xl  ">: -R$30,00 </p>
          </div>
          <div className="tw:text-light-blue tw:text-xs tw:text-left tw:mt-2">
            {`Cumulativo do dia 1° de ${currentMonth
              .format("MMMM [de] YYYY")
              .toUpperCase()} ao dia de hoje (${dayjs().format("DD/MM/YYYY")})`}
          </div>
        </div>
      </section>
      <div className="tw:mt-12">
        <GradientButton className="tw:px-15 tw:py-3 tw:text-3xl ">
          Extrato
        </GradientButton>
      </div>
      <nav className="tw:mt-20 ">
        <p className="tw:text-dark-blue">Adicionar Saída</p>
        <a className="tw:flex tw:justify-center tw:mt-4">
          <img src={plusButton}></img>
        </a>
      </nav>
    </div>
  );
}
export default Home;
