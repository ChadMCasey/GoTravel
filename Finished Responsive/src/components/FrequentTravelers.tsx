export default function FrequentTravelers() {
  return (
    <section className="bg-primary-100 px-24 py-36">
      <div className="max-w-389 py-26 border-y-1 border-y-grey-500/40 m-auto flex justify-between">
        <div className="basis-150 text-center">
          <h3 className="text-[1.75rem]/14 mb-9.5 tracking-6 font-semibold">
            Learn About Our Frequent Traveler Program
          </h3>
          <p className="text-base/14 text-grey-800">
            Interested in saving up to $1000 on your next vacation? How about
            earning travel points that can be converted into rewards like extra
            nights, free meals, and exclusive offers from resorts around globe?
          </p>
        </div>
        <div className="w-0.25 bg-grey-500/40 block self-stretch" />
        <form className="basis-150 flex flex-col">
          <label className="mb-8">
            <p className="tracking-6 text-lg/9.5 mb-3 font-semibold">Name</p>
            <input
              type="text"
              placeholder="Jane Doe"
              name="email"
              className="placeholder:text-grey-400 w-full rounded-lg bg-white py-3.5 pl-4 placeholder:font-light"
            />
          </label>
          <label className="mb-12">
            <p className="tracking-6 text-lg/9.5 mb-3 font-semibold">Email</p>
            <input
              type="email"
              placeholder="janedoe@gmail.com"
              name="email"
              className="placeholder:text-grey-400 w-full rounded-lg bg-white py-3.5 pl-4 placeholder:font-light"
            />
          </label>
          <div className="flex items-center justify-between">
            <label className="text-grey-800 flex cursor-pointer items-center gap-x-1.5 text-sm tracking-[.03rem]">
              <input type="checkbox" />
              <p>Agree to receive promotional email updates</p>
            </label>
            <button className="bg-primary-700 hover:bg-primary-800 cursor-pointer rounded-[.625rem] px-8 py-3.5 font-medium text-white transition-all duration-200">
              Learn More
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
