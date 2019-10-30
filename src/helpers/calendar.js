const formatDate = (date) => (
  // Valid ICS date format: 20191017T210000Z
  date.toISOString().replace(/000|\W+/g, '')
);

const createEventURL = (event) => {
  const icsTemplate = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${formatDate(event.start)}
DTEND:${formatDate(event.end)}
SUMMARY:${event.title}
END:VEVENT
END:VCALENDAR`;

  return `data:text/calendar;charset=utf8,${encodeURI(icsTemplate)}`;
};

export default createEventURL;
