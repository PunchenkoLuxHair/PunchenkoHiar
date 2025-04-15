document.getElementById("contact-form").addEventListener("submit", function(event) {
 event.preventDefault(); // Запобігаємо стандартному відправленню, що перезавантажує сторінку

 const form = this;
 const formData = new FormData(form);

 // Відправка даних через fetch до Formspree
 fetch(form.action, {
   method: form.method, // POST
   body: formData,
   headers: { 'Accept': 'application/json' }
 })
 .then(response => {
   if (response.ok) {
     // Якщо запит успішний, через 1 секунду очищуємо форму
     setTimeout(() => {
       form.reset(); // Очищує всі поля форми
     }, 1000);
     return response.json();
   } else {
     throw new Error("Помилка при відправленні форми");
   }
 })
 .then(data => {
   console.log("Форма відправлена успішно!", data);
   // Можна додати додатковий код для відображення повідомлення користувачу
 })
 .catch(error => {
   console.error("Сталася помилка:", error);
   // Обробка помилки, наприклад, показ повідомлення користувачу
 });
});
