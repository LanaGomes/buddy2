import { ChevronLeft, ChevronRight } from "lucide-react";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { useState } from "react";
import Tituloh2 from "../components/Tituloh2";

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
        <div className="tw:py-4 tw:px-2 tw:border tw:border-lightest-blue tw:rounded-lg">
          <div className="tw:flex tw:justify-center tw:mb-5 tw:mt-3">
            <Tituloh2 text="Saldo" />
            <p className="tw:text-darkest-blue tw:text-3xl  ">: -R$30,00 </p>
          </div>
        </div>
        <div className="tw:text-light-blue tw:text-xs tw:text-left tw:mt-2">
          {`Cumulativo do dia 1° de ${currentMonth.format(
            "MMMM [de] YYYY"
          )} ao dia de hoje (${dayjs().format("DD/MM/YYYY")})`}
        </div>
      </section>
    </div>
  );
}
export default Home;
