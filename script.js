
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
        paragr: "hello world",
        changeLang: "change luange",
        btn2: "Send",
        container: "I accept"
      }
    },
    ru: {
      translation: {
        paragr: "привет мир",
        changeLang: "сменить язык",
        btn2: "Отправить",
        container: "Я принимаю условия"
      }
    }
  }
  },
function (err, t) {
document.getElementById("paragr").innerHTML = i18next.t("paragr");
document.getElementById("btn").innerHTML = i18next.t("changeLang");
document.getElementById("btn2").innerHTML = i18next.t("btn2");
document.getElementsByClassName("container").innerHTML = i18next.t("container");
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

document.getElementById('paragr').innerHTML = t('paragr');
document.getElementById('btn').innerHTML = t('changeLang');
document.getElementById('btn2').innerHTML = t('btn2');
document.getElementsByClassName('container').innerHTML = t('container');
});
}