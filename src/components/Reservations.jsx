import { useState } from "react";
import Alert from "../ui/Alert";
import Input from "../ui/Input";

function formatDate(dateStr) {
  if (!dateStr) return "";
  const [year, month, day] = dateStr.split("-");
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function formatTime(timeStr) {
  if (!timeStr) return "";
  const [hours, minutes] = timeStr.split(":");
  const h = Number(hours);
  const ampm = h >= 12 ? "PM" : "AM";
  const h12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
  return `${h12}:${minutes} ${ampm}`;
}

function Reservations() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submissionKey, setSubmissionKey] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    if (!date || !time || !guests) return;
    setSubmitted(true);
    setSubmissionKey((k) => k + 1);
  }

  const guestWord = guests === "1" ? "guest" : "guests";
  const successMessage = `Table for ${guests} ${guestWord} confirmed for ${formatDate(date)} at ${formatTime(time)} — a confirmation text will be sent to your phone.`;

  return (
    <div className="bg-cream-light">
      <div className="container mx-auto mt-16 md:mt-24 mb-8 md:mb-12 px-4">
        <div
          className="reservations space-y-10 md:space-y-15"
          id="reservations"
        >
          <div className="text-center space-y-3 md:space-y-5">
            <h3 className="text-accent font-semibold">Reservations</h3>
            <h1 className="text-dark text-xl md:text-2xl font-semibold">
              Save your table
            </h1>
            <p className="text-secondary text-base md:text-lg">
              Tables book up fast on weekends — reserve online in under a
              minute.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="bg-cream p-4 sm:p-6 rounded-lg shadow-md w-full max-w-220 mx-auto"
          >
            <div className="flex flex-col sm:flex-row flex-wrap justify-between items-stretch sm:items-center gap-4 mb-7">
              <Input
                type="Date"
                placeholder="Select a date"
                name="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
              <Input
                type="Time"
                placeholder="Select a time"
                name="Time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
              <Input
                type="Number"
                placeholder="Number of guests"
                name="Guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                required
              />
              <div className="flex flex-col">
                <label className="text-secondary text-[13px] opacity-0">
                  _
                </label>
                <button
                  type="submit"
                  className="bg-brand-accent-dark text-cream py-2 px-4 rounded-xl hover:bg-accent-rust-dark transition duration-300"
                >
                  Find a Table
                </button>
              </div>
            </div>
            {submitted && (
              <Alert
                key={submissionKey}
                type="success"
                message={successMessage}
              />
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Reservations;
