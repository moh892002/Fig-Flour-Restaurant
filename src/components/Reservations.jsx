import Input from "../ui/Input";

function Reservations() {
  return (
    <div className="bg-[#FBF2E4]">
      <div className="container mx-auto mt-24 mb-12 px-4">
        <div className="reservations space-y-15" id="reservation">
          <div className="text-center space-y-5">
            <h3 className="text-[#9C4A2B] font-semibold">Reservations</h3>
            <h1 className="text-[#3A2A1E] text-2xl font-semibold">
              Save your table
            </h1>
            <p className="text-[#5B4433] text-lg">
              Tables book up fast on weekends — reserve online in under a
              minute.
            </p>
          </div>
          <form className="bg-[#F3E6D2] p-6 rounded-lg shadow-md w-220 mx-auto">
            <div className="flex justify-between items-center mb-7">
              <Input type="Date" placeholder="Date" name="Date" />
              <Input type="Time" placeholder="Time" name="Time" />
              <Input type="Number" placeholder="Guests" name="Guests" />
              <div className="flex flex-col">
                <label className="text-[#5B4433] text-[13px] opacity-0">
                  _
                </label>
                <button
                  type="submit"
                  className="bg-[#9C4A2B] text-[#F3E6D2] py-2 px-4 rounded-xl hover:bg-[#7A3A1E] transition duration-300"
                >
                  Find a Table
                </button>
              </div>
            </div>
            <div className="confirm py-4 px-6 bg-[#6B7A4F] rounded-lg text-[#FBF2E4] text-[15px]">
              ✓ Table for 2 confirmed for Sat, Jul 12 at 6:30 PM — a
              confirmation text will be sent to your phone.
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Reservations;
