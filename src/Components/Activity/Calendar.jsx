import React, { useState } from 'react'; // Importing React and useState hook
import { Container, Row, Col, Button } from 'react-bootstrap'; // Importing required components from react-bootstrap
import './Calendar.css'; // Importing the CSS file for styling
import leftb from "../../assets/leftb.png"; // Importing the image for the "previous month" button
import rightb from "../../assets/rightb.png"; // Importing the image for the "next month" button

const Calendar = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']; // Array of day names for the calendar

  // State for storing the current date and the selected date
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  // Function to get the dates for the calendar
  const getCalendarDates = (date) => {
    // Get the first day of the month and the total number of days in the month
    const startDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    const weeks = []; // Array to hold weeks of the calendar
    let week = new Array(7).fill(''); // Initial empty week to start filling with dates
    let dayCount = 1;

    // Fill the first week with the correct starting day
    for (let i = (startDay + 6) % 7; i < 7; i++) {
      week[i] = dayCount++; // Increment dayCount for each day in the week
    }
    weeks.push(week); // Push the first week into the weeks array

    // Fill the remaining weeks with the remaining days of the month
    while (dayCount <= daysInMonth) {
      week = new Array(7).fill(''); // New empty week for each subsequent week
      for (let i = 0; i < 7 && dayCount <= daysInMonth; i++) {
        week[i] = dayCount++; // Fill each day of the week
      }
      weeks.push(week); // Push the filled week into the weeks array
    }

    return weeks; // Return the weeks with dates
  };

  // Function to change the month by offset (1 for next month, -1 for previous month)
  const changeMonth = (offset) => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + offset))); // Adjust the current date's month
    setSelectedDate(null); // Reset the selected date when the month changes
  };

  const dates = getCalendarDates(currentDate); // Get the dates for the current month

  return (
    <Container className="calendar mt-4"> {/* Calendar container */}
      <Row className="justify-content-between align-items-center">
        <Col xs="auto">
          {/* Display current month and year */}
          <h3>
            {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
          </h3>
        </Col>
        <Col xs="auto">
          {/* Buttons for changing month */}
          <div>
            <Button variant="link" className="p-0 mx-3 sprint-buttons round-border" onClick={() => changeMonth(-1)}>
              <img src={leftb} alt="Previous Month" /> {/* Previous month button */}
            </Button>
            <Button variant="link" className="p-0 sprint-buttons round-border" onClick={() => changeMonth(1)}>
              <img src={rightb} alt="Next Month" /> {/* Next month button */}
            </Button>
          </div>
        </Col>
      </Row>
      {/* Render day names (Mon, Tue, etc.) */}
      <Row className="mt-3 day-names">
        {days.map((day, index) => (
          <Col key={index} className="text-center">
            <strong>{day}</strong> {/* Display the day name */}
          </Col>
        ))}
      </Row>
      {/* Render weeks of the calendar */}
      {dates.map((week, weekIndex) => (
        <Row key={weekIndex} className="mt-2">
          {week.map((date, dateIndex) => (
            <Col key={dateIndex} className="text-center">
              {/* Render each date in the calendar */}
              <span
                className={`date ${selectedDate === date ? 'active' : ''}`} // Add 'active' class if selected date matches
                onClick={() => date && setSelectedDate(date)} // Set the selected date when a date is clicked
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

export default Calendar; // Export the Calendar component for use in other parts of the app
