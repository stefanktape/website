// Upcoming and past exhibitions.
// Add field notes, contacts, and observations after each event.

export interface Exhibition {
  id: string;
  name: string;
  dateStart: string; // ISO YYYY-MM-DD
  dateEnd: string;
  location: string;
  city: string;
  country: string;
  note: string;
  status: "upcoming" | "attending" | "past";
  href?: string;
  fieldNotes?: string; // Fill in after the event
}

export const exhibitions: Exhibition[] = [
  {
    id: "china-coatings-expo-2026",
    name: "China International Coatings Expo 2026",
    dateStart: "2026-07-15",
    dateEnd: "2026-07-17",
    location: "Shanghai New International Expo Centre",
    city: "Shanghai",
    country: "China",
    note:
      "Research visit focused on thermal spray equipment, feedstock powder suppliers, TBC coating materials, and spraying solutions. Exhibition notes will be published here after the event.",
    status: "upcoming"
  }
];

export const upcomingExhibitions = exhibitions.filter(
  (e) => e.status === "upcoming" || e.status === "attending"
);
