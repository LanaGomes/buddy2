import { ChevronLeft, ChevronRight } from "lucide-react";
import dayjs from "dayjs";
import { useState } from "react";

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
        <h1 className="tw:text-dark-blue tw:text-3xl tw:font-semibold">
          {currentMonth.format("MMMM - YYYY")}
        </h1>

        <ChevronRight
          onClick={nexMonth}
          size={48}
          className=" tw:text-purple-blue tw:hover:text-saturated-blue transition-colors tw:hover:scale-150"
        />
      </nav>
    </div>
  );
}
export default Home;
