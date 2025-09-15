import React from "react";

function getSobrietyDuration(startDate: Date) {
  const now = new Date();
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }
  const totalDays = Math.floor((now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(totalDays / 7);

  return { years, months, weeks, days: totalDays };
}

export const SobrietyCountdown = ({ startDate }: { startDate: Date }) => {
  const { years, months, weeks, days } = getSobrietyDuration(startDate);

  return (
    <div className="sobriety-countdown">
      <h2>Sobriety Countdown</h2>
      <div>
        <span>{years} Years</span> | <span>{months} Months</span> | <span>{weeks} Weeks</span> | <span>{days} Days</span>
      </div>
    </div>
  );
};
