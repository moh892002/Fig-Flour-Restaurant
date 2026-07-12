import Alert from "../ui/Alert";
import Input from "../ui/Input";

function Reservations() {
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
          <form className="bg-cream p-4 sm:p-6 rounded-lg shadow-md w-full max-w-220 mx-auto">
            <div className="flex flex-col sm:flex-row flex-wrap justify-between items-stretch sm:items-center gap-4 mb-7">
              <Input type="Date" placeholder="Date" name="Date" />
              <Input type="Time" placeholder="Time" name="Time" />
              <Input type="Number" placeholder="Guests" name="Guests" />
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
            <Alert
              type="success"
              message="Table for 2 confirmed for Sat, Jul 12 at 6:30 PM — a confirmation text will be sent to your phone."
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Reservations;
