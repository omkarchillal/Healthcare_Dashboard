export const calendarData = {
  month: "October 2021",
  days: [
    { date: 25, day: "Mon", appointments: ["10:00", "11:00", "12:00"] },
    { date: 26, day: "Tues", appointments: ["08:00", "09:00", "10:00"] },
    { date: 27, day: "Wed", appointments: ["12:00", "13:00"] },
    { date: 28, day: "Thurs", appointments: ["10:00", "11:00"] },
    { date: 29, day: "Fri", appointments: ["15:00", "16:00"] },
    { date: 30, day: "Sat", appointments: ["12:00", "14:00", "15:00"] },
    { date: 31, day: "Sun", appointments: ["09:00", "10:00", "11:00"] },
  ],
};

export const featuredAppointments = [
  {
    id: "dentist",
    title: "Dentist",
    time: "09:00-11:00",
    doctor: "Dr. Cameron Williamson",
    type: "dentist",
    icon: "🦷",
    color: "#3735A8",
    textColor: "#ffffff",
  },
  {
    id: "physiotherapy",
    title: "Physiotherapy Appointment",
    time: "11:00-12:00",
    doctor: "Dr. Kevin Djones",
    type: "physiotherapy",
    icon: "💪🏻",
    color: "#DEDEFF",
    textColor: "#090849",
  },
];

export const upcomingSchedule = [
  {
    day: "On Thursday",
    appointments: [
      {
        id: "checkup",
        title: "Health checkup complete",
        time: "11:00 AM",
        icon: "💉",
        color: "#dde3f8",
      },
      {
        id: "ophthalmologist",
        title: "Ophthalmologist",
        time: "14:00 PM",
        icon: "👁️",
        color: "#dde3f8",
      },
    ],
  },
  {
    day: "On Saturday",
    appointments: [
      {
        id: "cardiologist",
        title: "Cardiologist",
        time: "12:00 AM",
        icon: "❤️",
        color: "#dde3f8",
      },
      {
        id: "neurologist",
        title: "Neurologist",
        time: "16:00 PM",
        icon: "🧠",
        color: "#8b5cf6",
      },
    ],
  },
];

export const activityData = {
  weeklyAppointments: 3,
  chartData: [
    { day: "Mon", value: 20 },
    { day: "Tues", value: 45 },
    { day: "Wed", value: 30 },
    { day: "Thurs", value: 60 },
    { day: "Fri", value: 25 },
    { day: "Sat", value: 40 },
    { day: "Sun", value: 35 },
  ],
};
