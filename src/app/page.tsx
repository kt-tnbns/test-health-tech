export default function Home() {
  return (
    <div className="flex justify-center align-center h-full">
      <div>
        <h1>Welcome to test health tech!</h1>
        <div className="flex space-x-2 py-4 justify-end ">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
            <a href="/pages/coupon">Coupon</a>
          </button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
            <a href="/pages/notification">Notification</a>
          </button>
        </div>
      </div>
    </div>
  );
}
