import { useState } from "react";
import { useEffect } from "react";

function OrderForm() {
  const [phone, setPhone] = useState("");
  const [notification, setNotification] = useState("");

  useEffect(() => {
    let timer;
    if (notification) {
      timer = setTimeout(() => {
        setNotification("");
      }, 3000);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [notification]);

  const validatePhone = (input) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatePhone(phone)) {
      setNotification("Наш менеджер вам перезвонит");
      setPhone("");
    } else {
      setNotification("Введите 10 цифр номера телефона");
    }
  };

  return (
    <div className="max-w-md p-6 mx-auto mt-8 mb-4 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-xl">Оформить заказ</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            {" "}
            Номер телефона (10 цифр):
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
            placeholder="----------"
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
          ></input>
        </div>
        <button
          type="submit"
          className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
        >Заказать</button>
      </form>
      {notification && (
        <div className={`mt-4 p-3 rounded-md text-center ${notification.includes('перезвонит') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {notification}
        </div>
      )}
    </div>
  );
}

export default OrderForm;
