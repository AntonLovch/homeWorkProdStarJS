
function exitResult () {
  const input = document.getElementById("input");
const val = input.value;
  let p;
  p = document.getElementById("paragr");
  p.innerHTML = val;
  input.value = "";
}

i18next.init(
  {
  lng: 'en',
  debug: true,
  resources: {
    en: {
      translation: {
        changeLang: "change language",
        btn2: "Send",
        accept: "I accept"
      }
    },
    ru: {
      translation: {
        changeLang: "сменить язык",
        btn2: "Отправить",
        accept: "Я принимаю условия"
      }
    }
  }
  },
function (err, t) {
document.getElementById("btn").innerHTML = i18next.t("changeLang");
document.getElementById("btn2").innerHTML = i18next.t("btn2");
document.getElementById("accept").innerHTML = i18next.t("accept");
}
);
const btn = document.getElementById('btn');
btn.onclick = () => {
  console.log(i18next.language);
  const lang = i18next.language === "en" ? "ru" : "en"; 
i18next.changeLanguage(lang, (err, t) => {
  if (err) {
  return console.log('something went wrong loading', err);
  }
document.getElementById('btn').innerHTML = t('changeLang');
document.getElementById('btn2').innerHTML = t('btn2');
document.getElementById('accept').innerHTML = t('accept');
});
}

const input = document.getElementById('mail');
input.addEventListener('input', onInput);

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;



function onInput() {
  if (isEmailValid(input.value)) {
    input.style.borderColor = 'green';
    input.style.color = 'green';
  } else {
    input.style.borderColor = 'red';
    input.style.color = 'red';
  }
}

function isEmailValid(value) {
return EMAIL_REGEXP.test(value)};



const input2 = document.getElementById('names');
input2.addEventListener('input', onInput2);

const NAME_REGEXP = /^([А-Я]{1}[а-яё]{1,20}[ ][А-Я]{1}[а-яё]{1,20})([-][А-Я]{1}[а-яё]{2,22})?/iu;


function onInput2() {
  if (isNameslValid(input2.value)) {
    input2.style.borderColor = 'green';
    input2.style.color = 'green';
  } else {
    input2.style.borderColor = 'red';
    input2.style.color = 'red';
  }
}

function isNameslValid(value) {
return NAME_REGEXP.test(value)};