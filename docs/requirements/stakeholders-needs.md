# Запити зацікавлених осіб

## Вступ

Цей документ описує запити зацікавлених осіб до інформаційної системи організації та управління опитуваннями експертів. Він містить вимоги та очікування ключових користувачів і визначає основні аспекти функціональності, продуктивності, надійності та інших характеристик системи.

Запити зацікавлених осіб формують основу для визначення функціональних та нефункціональних вимог до системи. Вони охоплюють потреби користувачів, бізнес-правила, обмеження та очікувані результати від впровадження системи.

### Мета

Метою цього документа є формування сукупності вимог до системи організації та управління опитуваннями експертів. Вимоги спрямовані на створення ефективної, зручної та надійної системи, яка відповідатиме потребам зацікавлених сторін, зокрема адміністратора, експертів, користувачів опитувань і замовника.

### Контекст

Ця система є частиною більш широкого процесу прийняття рішень на основі експертних оцінок. Вона повинна інтегруватися з існуючими інформаційними інструментами та підтримувати стандарти взаємодії з іншими системами збору й аналізу даних. Очікується, що її впровадження підвищить якість та оперативність прийняття рішень.


### Основні визначення та скорочення

- **Інформаційна система (ІС)** – програмно-апаратний комплекс, що забезпечує автоматизоване управління процесами опитування експертів.
- **Опитування** – процес збору оцінок та думок експертів щодо визначеної тематики.
- **Адміністратор** – користувач, який налаштовує систему, створює опитування та керує їхнім проведенням.
- **Експерт** – особа, яка бере участь в опитуванні та надає оцінки відповідно до своєї компетенції.
- **Замовник** – організація або особа, що ініціює розробку системи, визначає її бізнес-цілі та забезпечує фінансування проєкту.
- **Користувач** – особа, яка взаємодіє з комп'ютером або мережею. Зазвичай користувачі працюють із системою чи програмним забезпеченням без глибоких технічних знань, необхідних для їх повного розуміння.
- **Аналітик** – користувач, який аналізує отримані результати опитувань для подальшого використання в прийнятті рішень.
- **FURPS** – класифікація вимог до програмного забезпечення, що включає Functionality (функціональність), Usability (зручність), Reliability (надійність), Performance (продуктивність) і Supportability (експлуатаційну придатність).



### Посилання

[Інформаційна система](https://uk.wikipedia.org/wiki/%D0%86%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D1%96%D0%B9%D0%BD%D0%B0_%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0)

[Опитування](https://uk.wikipedia.org/wiki/%D0%9E%D0%BF%D0%B8%D1%82%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F)

[Адміністратор](https://uk.wikipedia.org/wiki/%D0%90%D0%B4%D0%BC%D1%96%D0%BD%D1%96%D1%81%D1%82%D1%80%D0%B0%D1%82%D0%BE%D1%80)

[Експерт](https://uk.wikipedia.org/wiki/%D0%95%D0%BA%D1%81%D0%BF%D0%B5%D1%80%D1%82)

[Замовник](https://uk.wikipedia.org/wiki/%D0%97%D0%B0%D0%BC%D0%BE%D0%B2%D0%BD%D0%B8%D0%BA)

[Користувач](https://uk.wikipedia.org/wiki/%D0%9A%D0%BE%D1%80%D0%B8%D1%81%D1%82%D1%83%D0%B2%D0%B0%D1%87)

[Аналітик](https://uk.wikipedia.org/wiki/%D0%90%D0%BD%D0%B0%D0%BB%D1%96%D1%82%D0%B8%D0%BA)

[FURPS](https://uk.wikipedia.org/wiki/FURPS)


## Короткий зміст

- [Характеристика ділових процесів](#характеристика-ділових-процесів)
- [Короткий огляд продукту](#короткий-огляд-продукту)
- [Функціональність](#функціональність)
- [Практичність](#практичність)
- [Надійність](#надійність)
- [Продуктивність](#продуктивність)
- [Експлуатаційна придатність](#експлуатаційна-придатність)

## Характеристика ділових процесів

| ID                      | Назва                                   | Учасники          | Передумови                                 | Результат                                     | Виключні ситуації                          | Основний сценарій |
|-------------------------|-----------------------------------------|-------------------|--------------------------------------------|----------------------------------------------|--------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| UserRegistration       | Реєстрація нового користувача          | Користувач, система | Користувач не має облікового запису в системі | Система створює новий обліковий запис і зберігає реєстраційні дані користувача | Некоректні дані – InvalidDataException<br>Користувач уже зареєстрований – AlreadyRegisteredException | 1. Користувач відкриває сторінку реєстрації. 2. Вносить необхідні дані. 3. Система перевіряє введену інформацію. 4. Система створює обліковий запис. 5. Користувач отримує повідомлення. |
| UserLogin             | Вхід у систему                          | Користувач, система | Користувач уже має обліковий запис | Користувач успішно входить до системи | Некоректні дані – InvalidDataException | 1. Користувач вводить логін та пароль. 2. Система перевіряє правильність. 3. Користувач отримує доступ. |
| SurveyCreate          | Створення нового опитування             | Користувач, система | Користувач має обліковий запис і права | Опитування успішно збережено | Порожнє опитування – EmptySurveyException | 1. Користувач заповнює форму. 2. Система перевіряє дані. 3. Опитування збережено. |
| UserCompletesSurvey   | Заповнення опитування                   | Користувач, система | Користувач має доступ до опитування | Відповіді збережені | Пропущені обов’язкові питання – IncompleteSurveyException | 1. Користувач відкриває анкету. 2. Заповнює відповіді. 3. Система перевіряє та зберігає. |
| UserEditResponses     | Редагування відповідей                  | Користувач, система | Користувач пройшов опитування | Відредаговані відповіді збережені | Некоректні дані – InvalidResponseException<br>Опитування закрите – SurveyClosedException | 1. Користувач редагує відповіді. 2. Система перевіряє коректність. 3. Зміни збережені. |
| SurveyResultsView     | Перегляд відповідей                     | Користувач, система | Опитування завершене | Звіт сформований | Відсутність достатньої кількості відповідей | 1. Користувач відкриває результати. 2. Система обробляє дані. 3. Формується звіт. |
| SurveyResultsExport   | Експорт результатів                     | Користувач, система | Опитування завершене | Користувач отримує файл | Некоректний формат – UnsupportedFormatException | 1. Користувач обирає формат. 2. Система генерує файл. 3. Користувач отримує його. |
| SurveyUpdate         | Оновлення опитування                     | Користувач, система | Опитування не завершене | Опитування оновлене | Опитування вже активне – зміни неможливі | 1. Користувач редагує опитування. 2. Система зберігає зміни. |
| SurveyFeedback       | Надання відгуку                         | Користувач, система | Користувач пройшов опитування | Відгук збережений | Технічні проблеми – FeedbackSaveError | 1. Користувач залишає відгук. 2. Система зберігає його. |
| SurveyShareAccess    | Надання доступу                         | Користувач, система | Користувач – автор опитування | Доступ наданий | Немає прав на надання доступу | 1. Користувач отримує посилання для спільного доступу. 2. Передає його іншим користувачам. |
| SurveyReminder       | Нагадування про опитування              | Користувач, система | Є активне опитування | Користувач отримує нагадування | Немає активних опитувань – NoPendingSurveysException | 1. Система перевіряє стан опитувань. 2. Надсилає нагадування користувачу. |
| SurveyStatsCollection| Збір статистики                         | Користувач, система | Адміністратор хоче переглянути статистику | Генерується звіт | Дані недоступні – DataNotAvailableException | 1. Адміністратор відкриває статистику. 2. Система формує звіт. |
| SurveyClose         | Завершення опитування                    | Користувач, система | Опитування неактивне або завершене | Доступ закритий | Опитування ще активне – CloseNotAllowedException | 1. Користувач завершує опитування. 2. Система закриває доступ. |
| SurveyInvitationSend | Надсилання запрошення                    | Користувач, система | Користувач створив опитування | Запрошення надіслано | Помилка відправки – EmailSendException | 1. Користувач вводить e-mail. 2. Система надсилає запрошення. |
| AdminRightsGrant    | Надання адміністративних прав            | Адміністратор, система | Користувач не є адміністратором | Користувач отримує права | Користувач вже адміністратор – UserAlreadyAdminException | 1. Адміністратор надає права користувачу. 2. Система підтверджує зміни. |

## Короткий огляд продукту
Система Google Forms є веб-додатком для створення та управління опитуваннями, що дозволяє користувачам швидко та ефективно збирати відповіді від експертів. Вона інтегрується з іншими сервісами Google, такими як Google Sheets для аналізу відповідей.

### Границі системи та категорії користувачів
Google Forms є веб-орієнтованою системою, доступною через браузер або мобільний додаток. Основні категорії користувачів:
- **Організатори опитувань** – створюють та налаштовують опитування.
- **Респонденти** – експерти, які відповідають на запитання.
- **Аналітики** – аналізують зібрані дані.

## Функціональність
Система підтримує такі функції:
- **Створення опитувань** – можливість додавати різні типи питань (відкриті, тестові, варіанти вибору тощо).
- **Управління доступом** – налаштування дозволів для учасників.
- **Автоматичне збереження відповідей** – інтеграція з Google Sheets.
- **Графічний аналіз** – візуалізація відповідей у вигляді діаграм.
- **Автоматичні сповіщення** – можливість отримувати повідомлення про нові відповіді.

## Практичність
Система є інтуїтивно зрозумілою завдяки:
- **Зручному інтерфейсу** – мінімалістичний дизайн, що дозволяє швидко створювати та проходити опитування.
- **Підтримці багатьох мов** – система доступна більш ніж 50 мовами.
- **Доступності з будь-якого пристрою** – адаптація під мобільні телефони, планшети та ПК.
- **Можливості копіювання опитувань** – дозволяє швидко створювати нові опитування на основі існуючих.

## Надійність
- **Збереження даних у хмарі** – відповіді не втрачаються навіть при збої мережі.
- **Автоматичне збереження змін** – будь-яка зміна в опитуванні миттєво зберігається.
- **Резервне копіювання** – Google забезпечує високу відмовостійкість сервісу.
- **Захист від несанкціонованого доступу** – багаторівнева система автентифікації.

## Продуктивність
- **Висока швидкість обробки відповідей** – навіть при великій кількості респондентів система працює без затримок.
- **Миттєве оновлення даних** – відповіді відображаються в режимі реального часу.
- **Масштабованість** – система підтримує тисячі одночасних респондентів.

## Експлуатаційна придатність
- **Регулярні оновлення** – Google постійно вдосконалює систему.
- **Інтеграція з іншими сервісами** – можливість підключення API та інших додатків.
- **Підтримка користувачів** – є документація та служба підтримки.
