"use client";
import { useState, useEffect } from "react";

const CountDownTimer = ({ Duration }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    let endTime = new Date();
    let difference;
    let timeLeft = {};
    let daysLeft = 0;

    switch (Duration) {
      case "Daily":
        endTime.setHours(24, 0, 0, 0); // Set endTime to midnight of the next day
        difference = endTime - now;
        break;

      case "Weekly":
        const currentDay = now.getDay(); // 0 is Sunday, 1 is Monday, ..., 6 is Saturday
        const daysUntilEndOfWeek = 7 - currentDay;
        endTime.setDate(now.getDate() + daysUntilEndOfWeek);
        endTime.setHours(24, 0, 0, 0); // Set endTime to midnight of the end of the week
        difference = endTime - now;
        daysLeft = daysUntilEndOfWeek;
        break;

      case "Monthly":
        const currentMonth = now.getMonth();
        const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
        const endOfMonth = new Date(now.getFullYear(), nextMonth, 0);
        endTime = new Date(
          endOfMonth.getFullYear(),
          endOfMonth.getMonth(),
          endOfMonth.getDate() + 1
        );
        endTime.setHours(24, 0, 0, 0); // Set endTime to midnight of the end of the month
        difference = endTime - now;
        daysLeft = endOfMonth.getDate() - now.getDate();
        break;

      case "HappyHourStart":
        endTime.setHours(20, 0, 0, 0); // Set endTime to 8 PM today
        if (endTime <= now) {
          endTime.setDate(endTime.getDate() + 1); // If 8 PM has passed, set it to 8 PM tomorrow
        }
        difference = endTime - now;
        break;

      default:
        difference = 0;
    }

    if (difference > 0) {
      timeLeft = {
        days:
          Duration !== "Daily" && Duration !== "HappyHourStart"
            ? daysLeft
            : undefined,
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      };
    } else {
      timeLeft = {
        hours: 0,
        minutes: 0,
      };
    }

    return timeLeft;
  };

  const getTimeLabels = () => {
    switch (Duration) {
      case "Daily":
        return { hoursLabel: "hr", minutesLabel: "min" };
      case "Weekly":
        return { hoursLabel: "day", minutesLabel: "hr" };
      case "Monthly":
        return { hoursLabel: "mon", minutesLabel: "day" };
      default:
        return { hoursLabel: "hr", minutesLabel: "min" };
    }
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  if (!isClient) {
    return null; // Render nothing on the server
  }
  const { hoursLabel, minutesLabel } = getTimeLabels();
  return (
    <div className="flex items-center  text-red-600 text-[10px] whitespace-nowrap">
      {timeLeft.hours !== undefined && (
        <span>
          {timeLeft.hours}
          {hoursLabel} : {timeLeft.minutes}
          {minutesLabel}
        </span>
      )}
    </div>
  );
};

export default CountDownTimer;
