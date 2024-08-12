

import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Calendar.css';
import leftb from "../../assets/leftb.png";
import rightb from "../../assets/rightb.png";

const Calendar = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const getCalendarDates = (date) => {
    const startDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    const weeks = [];
    let week = new Array(7).fill('');
    let dayCount = 1;

    // Fill the first week
    for (let i = (startDay + 6) % 7; i < 7; i++) {
      week[i] = dayCount++;
    }
    weeks.push(week);

    // Fill the remaining weeks
    while (dayCount <= daysInMonth) {
      week = new Array(7).fill('');
      for (let i = 0; i < 7 && dayCount <= daysInMonth; i++) {
        week[i] = dayCount++;
      }
      weeks.push(week);
    }

    return weeks;
  };

  const changeMonth = (offset) => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + offset)));
    setSelectedDate(null); // Reset the selected date when the month changes
  };

  const dates = getCalendarDates(currentDate);

  return (
    <Container className="calendar mt-4">
      <Row className="justify-content-between align-items-center">
        <Col xs="auto">
          <h3>
            {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
          </h3>
        </Col>
        <Col xs="auto">
          <div>
            <Button variant="link" className="p-0 mx-3 sprint-buttons round-border" onClick={() => changeMonth(-1)}>
              <img src={leftb} alt="Previous Month" />
            </Button>
            <Button variant="link" className="p-0 sprint-buttons round-border" onClick={() => changeMonth(1)}>
              <img src={rightb} alt="Next Month" />
            </Button>
          </div>
        </Col>
      </Row>
      <Row className="mt-3 day-names">
        {days.map((day, index) => (
          <Col key={index} className="text-center">
            <strong>{day}</strong>
          </Col>
        ))}
      </Row>
      {dates.map((week, weekIndex) => (
        <Row key={weekIndex} className="mt-2">
          {week.map((date, dateIndex) => (
            <Col key={dateIndex} className="text-center">
              <span
                className={`date ${selectedDate === date ? 'active' : ''}`}
                onClick={() => date && setSelectedDate(date)}
              >
                {date}
              </span>
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default Calendar;
