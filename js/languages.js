let rus = {
    menuabout: 'Обо мне',
    menuprojects: 'Портфолио',
    menucontacts: 'Контакты',
    aboutheading: 'Добро пожаловать! Я /TSlash',
    aboutdescription: 'Я занимаюсь FrontEnd разработкой и так же серверной частью на node.js',
    projectheading: 'Вот несколько моих работ',
    code1: '<',
    code2: '/>',
    projecttitle1: '< Сайт предназначен кому то />',
    projecttitle2: '< Сайт с опросом />',
    projecttitle3: '< Сайт лендинг для продаж продуктов />',
    projecttitle4: '< Сайт справка />',
    projecttitle5: '< Oni Discord бот />',
    projecttitle6: '< В ближайшее время здесь будут новые работы... />',
    buttontext: 'Показать ещё',
    contactsheading: 'Нужно связаться со мной?',
    contactsdescription: 'Если возникли какие-то вопросы Вы можете воспользоваться ссылками ниже',
    footertext1: 'Работа над сайтом ещё не закончена!',
    footertext2: '🖤/TSlash',
};

let ukr = {
    menuabout: 'Про мене',
    menuprojects: 'Портфоліо',
    menucontacts: 'Контакти',
    aboutheading: 'Ласкаво просимо! Я / TSlash',
    aboutdescription: 'Я займаюся FrontEnd розробкою і також серверною частиною на node.js',
    projectheading: 'Ось декілька моїх робіт',
    code1: '<',
    code2: '/>',
    projecttitle1: '< Сайт призначений комусь />',
    projecttitle2: '< Сайт з опитуванням />',
    projecttitle3: '< Сайт лендинг для продажу продуктів />',
    projecttitle4: '< Сайт довідка />',
    projecttitle5: '< Oni Discord бот />',
    projecttitle6: '< Найближчим часом тут з`являться нові роботи... />',
    buttontext: 'Показати ще',
    contactsheading: 'Потрібно зв`язатись зі мною?',
    contactsdescription: 'Якщо виникли якісь запитання Ви можете скористатись посиланнями нижче',
    footertext1: 'Робота над сайтом ще не закінчена',
    footertext2: '🖤/TSlash',
};

changeLagnuage();

function changeLagnuage() {
    let language = lang.checked ? ukr : rus;
    document.querySelectorAll('[text]').forEach(el => {
        el.innerHTML = language[el.getAttribute('text')];
    })
}