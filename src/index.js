var express = require('express')
var bodyParser = require('body-parser')
const fs = require('fs');
const path = require('path');
//const tf = require('@tensorflow/tfjs-node');

var app = express()

var urlencodedParser = bodyParser.urlencoded({ extended: false })



app.use(express.static('public'));

app.set('views', './public/templates')
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('index')
})

app.get('/acro', (req, res) => { 
    res.render('acro')
})
app.get('/blog', (req, res) => { 
    res.render('blog')
})
app.get('/cheerleading', (req, res) => { 
    res.render('cheerleading')
})
app.get('/contacts', (req, res) => { 
    res.render('contacts')
})

app.get('/freestyle', (req, res) => { 
    res.render('freestyle')
})
app.get('/info', (req, res) => { 
    res.render('info')
})
app.get('/philosophy', (req, res) => { 
    res.render('philosophy')
})
app.get('/results', (req, res) => { 
    res.render('results')
})
app.get('/reviews', (req, res) => { 
    res.render('reviews')
})
app.get('/shedule', (req, res) => { 
    res.render('shedule')
})
app.get('/plan', (req, res) => { 
    let result;
    res.render('plan', { results: result });
})

const nodemailer = require('nodemailer');

// Настройка body-parser для парсинга данных формы
app.use(bodyParser.urlencoded({ extended: false }));

// Обработка POST-запроса от формы
app.post('/submit', (req, res) => {
  const name = req.body.name;
  const year = req.body.year;
  const phone = req.body.phone;
  const discipline = req.body.discipline;

  // Настройка nodemailer
  const transporter = nodemailer.createTransport({
    service: 'mail.ru', 
    auth: {
      user: 'ritmiks_anna@mail.ru',
      pass: 'thYe6SrWegpQASthgcdq', 
    },
  });

  // Создание опций письма
  const mailOptions = {
    from: 'ritmiks_anna@mail.ru', 
    to: 'ritmiks_anna@mail.ru', 
    subject: 'Новая заявка с формы записи на пробное занятие',
    text: `Имя: ${name}\nГод рождения: ${year}\nТелефон: ${phone}\nДисциплина: ${discipline}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } 
  });
  res.render('index')
});

// Обработка POST-запроса от формы
app.post('/submit_cheer', (req, res) => {
    const name = req.body.name;
    const year = req.body.year;
    const phone = req.body.phone;
    const discipline = req.body.discipline;
  
    // Настройка nodemailer
    const transporter = nodemailer.createTransport({
      service: 'mail.ru',
      auth: {
        user: 'ritmiks_anna@mail.ru',
        pass: 'thYe6SrWegpQASthgcdq', 
      },
    });
  
    // Создание опций письма
    const mailOptions = {
      from: 'ritmiks_anna@mail.ru', 
      to: 'ritmiks_anna@mail.ru', 
      subject: 'Новая заявка с формы записи на пробное занятие',
      text: `Имя: ${name}\nГод рождения: ${year}\nТелефон: ${phone}\nДисциплина: ${discipline}`,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } 
    });
    res.render('cheerleading')
  });

  // Обработка POST-запроса от формы
app.post('/submit_freest', (req, res) => {
    const name = req.body.name;
    const year = req.body.year;
    const phone = req.body.phone;
    const discipline = req.body.discipline;
  
    // Настройка nodemailer
    const transporter = nodemailer.createTransport({
      service: 'mail.ru',
      auth: {
        user: 'ritmiks_anna@mail.ru',
        pass: 'thYe6SrWegpQASthgcdq', 
      },
    });
  
    // Создание опций письма
    const mailOptions = {
      from: 'ritmiks_anna@mail.ru', 
      to: 'ritmiks_anna@mail.ru', 
      subject: 'Новая заявка с формы записи на пробное занятие',
      text: `Имя: ${name}\nГод рождения: ${year}\nТелефон: ${phone}\nДисциплина: ${discipline}`,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } 
    });
    res.render('freestyle')
  });

  // Обработка POST-запроса от формы
  app.post('/submit_acro', (req, res) => {
    const name = req.body.name;
    const year = req.body.year;
    const phone = req.body.phone;
    const discipline = req.body.discipline;
  
    // Настройка nodemailer
    const transporter = nodemailer.createTransport({
      service: 'mail.ru',
      auth: {
        user: 'ritmiks_anna@mail.ru',
        pass: 'thYe6SrWegpQASthgcdq', 
      },
    });
  
    // Создание опций письма
    const mailOptions = {
      from: 'ritmiks_anna@mail.ru', 
      to: 'ritmiks_anna@mail.ru', 
      subject: 'Новая заявка с формы записи на пробное занятие',
      text: `Имя: ${name}\nГод рождения: ${year}\nТелефон: ${phone}\nДисциплина: ${discipline}`,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } 
    });
    res.render('acro')
  });


  // app.use(bodyParser.urlencoded({ extended: true }));
  // app.use(bodyParser.json());
  
  // const modelPathS = 'public/ritmiks_plan_model/model.json';
  // let model;
  
  // async function loadModel() {
  //   if (!model) {
  //       model = await tf.loadLayersModel(`file://${modelPathS}`);
  //   }
  // }

  // app.post('/process_form', async (req, res) => {
  //   const direction = req.body.direction;
  //   const pushups = parseInt(req.body.pushups);
  //   const squats = parseInt(req.body.squats);
  //   const abs = parseInt(req.body.abs);
  //   const flexibility = parseInt(req.body.flexibility);


  //   // Загрузка модели
  //   await loadModel();

  //   // Подготовка данных для модели
  //   const inputData = tf.tensor2d([[squats, pushups, abs, flexibility]]);

  //   // Получение предсказаний от модели
  //   const outputData = model.predict(inputData);

  //   // Округление предсказанных значений до целого
  //   const predictions = outputData.arraySync()[0].map(value => Math.round(value));

    // Определение упражнений и их предсказанных значений
//     const exercises = [
//         'Отжимания с колен',
//         'Отжимания',
//         'Отжимания узкие',
//         'Стульчик',
//         'Приседания',
//         'Приседания с прыжком',
//         'Планка',
//         'Скручивания',
//         'Складки',
//         'Растяжка в складочке',
//         'Растяжка в стредле',
//         'Шпагаты'
//     ];

//     const exercisesWithPredictions = exercises.map((exercise, index) => {
//       let time;
//       switch (exercise) {
//           case 'Отжимания с колен':
//               time = `${predictions[index]} раз`;
//               break;
//           case 'Отжимания':
//               time = `${predictions[index]} раз`;
//               break;
//           case 'Отжимания узкие':
//               time = `${predictions[index]} раз`;
//               break;
//           case 'Стульчик':
//               time = `${predictions[index]} минуты`;
//               break;
//           case 'Приседания':
//               time = `${predictions[index]} раз`;
//               break;
//           case 'Приседания с прыжком':
//               time = `${predictions[index]} раз`;
//               break;
//           case 'Планка':
//               time = `${predictions[index]} минута`;
//               break;
//           case 'Скручивания':
//               time = `${predictions[index]} раз`;
//               break;
//           case 'Складки':
//               time = `${predictions[index]} раз`;
//               break;
//           case 'Растяжка в складочке':
//               time = `${predictions[index]} секунд`;
//               break;
//           case 'Растяжка в стредле':
//               time = `${predictions[index]} минуты`;
//               break;
//           case 'Шпагаты':
//               time = `${predictions[index]} минуты`;
//               break;
//           default:
//               time = 0;
//       }
//       return `${exercise}: ${time}`;
//   });
  

//     let result;
//     if (direction === 'чирлидинг флаер') {
//         result = [exercisesWithPredictions[0], exercisesWithPredictions[1], exercisesWithPredictions[3], exercisesWithPredictions[4], exercisesWithPredictions[5], exercisesWithPredictions[6], exercisesWithPredictions[7], exercisesWithPredictions[8], exercisesWithPredictions[9], exercisesWithPredictions[10], exercisesWithPredictions[11]]; 
//     } else if (direction === 'чирлидинг база') {
//         result = [exercisesWithPredictions[0], exercisesWithPredictions[1], exercisesWithPredictions[2], exercisesWithPredictions[3], exercisesWithPredictions[4], exercisesWithPredictions[5], exercisesWithPredictions[6], exercisesWithPredictions[7], exercisesWithPredictions[8], exercisesWithPredictions[9], exercisesWithPredictions[10]]; 
//     } else if (direction === 'фристайл') {
//         result = [exercisesWithPredictions[0], exercisesWithPredictions[1], exercisesWithPredictions[4], exercisesWithPredictions[5], exercisesWithPredictions[6], exercisesWithPredictions[8], exercisesWithPredictions[9], exercisesWithPredictions[10], exercisesWithPredictions[11]];
//     } else if (direction === 'акробатика') {
//         result = [exercisesWithPredictions[0], exercisesWithPredictions[1], exercisesWithPredictions[2], exercisesWithPredictions[3], exercisesWithPredictions[4], exercisesWithPredictions[5], exercisesWithPredictions[6], exercisesWithPredictions[7], exercisesWithPredictions[8], exercisesWithPredictions[9], exercisesWithPredictions[10], exercisesWithPredictions[11]]; 
//     }

//     // Фильтрация упражнений с предсказанным количеством равным 0
//     result = result.filter(exercise => {
//         const quantity = parseInt(exercise.split(': ')[1]);
//         return quantity !== 0;
//     });

//     // Отправка результата на страницу
//     res.render('plan', { results: result });
// });

let port = 3001 
app.listen(port, () => {
console.log (`Сервер запущен: http://localhost:${port}`) 
})