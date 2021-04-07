import React from 'react';
import { render, screen, cleanup } from '../test-utils';
import Country from '../../components/Country/Country';
import axiosMock from 'axios';

afterEach(cleanup);

describe('Country', () => {
  const defaultProps = {
    match: { params: { slug: 'germany' } },
  };

  it('get Snapshot after data fetch', async () => {
    axiosMock.get.mockResolvedValueOnce(data);
    const wrapper = render(<Country {...defaultProps} />);

    expect(screen.getByTestId('spinner', {}, { timeout: 3000 }))
      .toBeInTheDocument;

    expect(await screen.findByText('Germany', {}, { timeout: 3000 }))
      .toBeInTheDocument;

    expect(wrapper).toMatchSnapshot();
  });
});

const data = {
  data: {
    name: {
      en: 'Germany',
      ru: 'Германия',
      ua: 'Німеччина',
    },
    capital: {
      en: 'Berlin',
      ru: 'Берлин',
      ua: 'Берлін',
    },
    coordinates: {
      lat: 52.516666,
      lon: 13.383333,
    },
    geoCoordinates: [
      [9.921906, 54.983104],
      [9.93958, 54.596642],
      [10.950112, 54.363607],
      [10.939467, 54.008693],
      [11.956252, 54.196486],
      [12.51844, 54.470371],
      [13.647467, 54.075511],
      [14.119686, 53.757029],
      [14.353315, 53.248171],
      [14.074521, 52.981263],
      [14.4376, 52.62485],
      [14.685026, 52.089947],
      [14.607098, 51.745188],
      [15.016996, 51.106674],
      [14.570718, 51.002339],
      [14.307013, 51.117268],
      [14.056228, 50.926918],
      [13.338132, 50.733234],
      [12.966837, 50.484076],
      [12.240111, 50.266338],
      [12.415191, 49.969121],
      [12.521024, 49.547415],
      [13.031329, 49.307068],
      [13.595946, 48.877172],
      [13.243357, 48.416115],
      [12.884103, 48.289146],
      [13.025851, 47.637584],
      [12.932627, 47.467646],
      [12.62076, 47.672388],
      [12.141357, 47.703083],
      [11.426414, 47.523766],
      [10.544504, 47.566399],
      [10.402084, 47.302488],
      [9.896068, 47.580197],
      [9.594226, 47.525058],
      [8.522612, 47.830828],
      [8.317301, 47.61358],
      [7.466759, 47.620582],
      [7.593676, 48.333019],
      [8.099279, 49.017784],
      [6.65823, 49.201958],
      [6.18632, 49.463803],
      [6.242751, 49.902226],
      [6.043073, 50.128052],
      [6.156658, 50.803721],
      [5.988658, 51.851616],
      [6.589397, 51.852029],
      [6.84287, 52.22844],
      [7.092053, 53.144043],
      [6.90514, 53.482162],
      [7.100425, 53.693932],
      [7.936239, 53.748296],
      [8.121706, 53.527792],
      [8.800734, 54.020786],
      [8.572118, 54.395646],
      [8.526229, 54.962744],
      [9.282049, 54.830865],
      [9.921906, 54.983104],
    ],
    introPhoto:
      'https://travel-api-git-main-imbatman.vercel.app/countriesPhoto/11.jpg',
    videoId: 'IPbzWJNmndY',
    info: {
      en:
        'Germany, officially the Federal Republic of Germany, is a country at the intersection of Central and Western Europe. It is situated between the Baltic and North seas to the north, and the Alps to the south; covering an area of 357,022 square kilometres (137,847 sq mi), with a population of over 83 million within its 16 constituent states. It borders Denmark to the north, Poland and the Czech Republic to the east, Austria and Switzerland to the south, and France, Luxembourg, Belgium, and the Netherlands to the west. Germany is the second-most populous country in Europe after Russia, as well as the most populous member state of the European Union. Its capital and largest city is Berlin, and its financial centre is Frankfurt; the largest urban area is the Ruhr.',
      ru:
        'Герма́ния, официальное название — Федерати́вная Респу́блика Герма́ния, ФРГ — государство в Центральной Европе. Площадь территории — 357 408,74 км². Численность населения на 30 сентября 2019 года — 83 149 300 жителей. Занимает 18-е место в мире по численности населения и 62-е в мире по территории.',
      ua:
        'Німе́ччина — країна в Центральній Європі, демократична федеративна республіка. Складається з 16 федеральних земель. Столиця і найбільше місто країни — Берлін. Займає площу 357 578 км². Клімат помірний сезонний. Населення — 82,9 млн осіб. Член Європейського Союзу та НАТО. Країна з найбільшою кількістю населення і найбільшим рівнем економіки в Європейському союзі. Провідна політична сила на Європейському континенті, технологічний лідер в багатьох галузях. Німеччина є другим за популярністю місцем міграції в світі, поступаючись тільки США.',
    },
    attractions: [
      {
        photo:
          'https://top10.travel/wp-content/uploads/2014/09/brandenburgskie-vorota-1.jpg',
        name: {
          en: 'Brandenburg Gate',
          ru: 'Бранденбургские ворота',
          ua: 'Бранденбурзькі ворота',
        },
        info: {
          en:
            "The symbol of the capital of Germany, since 1989 a symbol of the country's reunification. Built by architect Karl Gottgard Langgans. He designed the gate based on the passages of the Acropolis. The building in the style of classicism is perfectly combined with the rest of the buildings on the Parisian square. The decoration of the gate is a 6-meter high quadriga with a chariot driven by Victoria, the goddess of victory. The bas-reliefs of the inner walls depict the exploits of Hercules.",
          ru:
            'Символ столицы Германии, с 1989 года символ воссоединения страны. Построил архитектор Карл Готтгард Лангганс. Проект ворот он делал по мотивам проходов Акрополя. Сооружение в стиле классицизма великолепно сочетается с остальными зданиями на Парижской площади. Украшением ворот является квадрига высотой 6 метров с колесницей, которой управляет Виктория – богиня победы. Барельефы внутренних стен изображают подвиги Геракла.',
          ua:
            "Символ столиці Німеччини, з 1989 року символ возз'єднання країни. Збудував архітектор Карл Готтард Ланґганс. Проект воріт він робив за мотивами проходів Акрополя. Спорудження в стилі класицизму чудово поєднується з іншими будівлями на Паризькій площі. Окрасою воріт є квадрига висотою 6 метрів з колісницею, якою управляє Вікторія - богиня перемоги. Барельєфи внутрішніх стін зображують подвиги Геракла.",
        },
      },
      {
        photo: 'https://top10.travel/wp-content/uploads/2014/09/reyhstag.jpg',
        name: {
          en: 'Reichstag',
          ru: 'Рейхстаг',
          ua: 'Рейхстаг',
        },
        info: {
          en:
            'State Assembly Building. This monumental structure is 137 meters long and 103 meters wide. Built in the Italian Renaissance style in 1894. The four towers of the building symbolize the German kingdoms. Their height is 46 meters. You can climb to the top of the glass dome, from where you can see the government quarter and the city itself.',
          ru:
            'Здание государственного собрания. В длину это монументальное сооружение составляет 137 метров, а в ширину – 103 метра. Построено в стиле итальянского возрождения в 1894 году. Четыре башни здания символизируют немецкие королевства. Их высота – 46 метров. На вершину стеклянного купола можно подняться, оттуда открывается вид на правительственный квартал и на сам город.',
          ua:
            'Будівля Національних зборів. У довжину ця монументальна споруда становить 137 метрів, а в ширину - 103 метра. Побудовано в стилі італійського відродження в 1894 році. Чотири вежі будівлі символізують німецькі королівства. Їх висота - 46 метрів. На вершину скляного купола можна піднятися, звідти відкривається вид на урядовий квартал і на саме місто.',
        },
      },
      {
        photo:
          'https://top10.travel/wp-content/uploads/2014/09/marienplats-myunhen.jpg',
        name: {
          en: 'Marienplatz (Munich)',
          ru: 'Мариенплац (Мюнхен)',
          ua: 'Марієнплац (Мюнхен)',
        },
        info: {
          en:
            'The central square of the city, founded in 1158. The name translates as Mary Square, received in honor of the column of St. Mary, built in 1638. In the Middle Ages, knightly tournaments were held on the square. The Viktualienmarkt market has also been located on the square since the Middle Ages. The attraction of the square is the Frauenkirche, the tallest cathedral in Munich. A metro junction is laid under the square.',
          ru:
            'Центральная площадь города, основанная в 1158 году. Название переводится как «Площадь Марии», получено в честь колонны Святой Марии, построенной в 1638 году. В средние века на площади устраивали рыцарские турниры. Также со средних веков на площади размещается рынок Виктуалиенмаркт. Достопримечательностью площади является самый высокий собор Мюнхена Фрауэнкирхе. Под площадью проложена развязка метро.',
          ua:
            "Центральна площа міста, заснована в 1158 році. Назва перекладається як «Площа Марії», отримано в честь колони Святої Марії, побудованої в 1638 році. У середні століття на площі влаштовували лицарські турніри. Також з доби середньовіччя на площі розміщується ринок Віктуалієнмаркт. Визначною пам'яткою площі є найвищий собор Мюнхена Фрауенкірхе. Під площею прокладена розв'язка метро.",
        },
      },
      {
        photo:
          'https://top10.travel/wp-content/uploads/2014/09/berlinskaya-stena-1.jpg',
        name: {
          en: 'Berlin Wall',
          ru: 'Берлинская стена',
          ua: 'Берлінська стіна',
        },
        info: {
          en:
            'Remains of the destroyed Berlin Wall, preserved as a memorial site. Part of the complex - Window of Memory is dedicated to the Germans who died while fleeing to West Berlin from the East. On a monument made of rusty steel, their black and white photos are placed in several rows. The Chapel of Reconciliation is also part of the complex. The entire Berlin Wall complex covers an area of 4 hectares.',
          ru:
            'Остатки разрушенной Берлинской стены, сохраненные в качестве мемориального комплекса. Часть комплекса – «Окно памяти» посвящена немцам, погибших при бегстве в западный Берлин из восточного. На памятнике из ржавой стали размещены их черно-белые фото в несколько рядов. Часовня Примирения также входит в комплекс. Весь комплекс «Берлинская стена» занимает площадь в 4 га.',
          ua:
            "Залишки зруйнованої Берлінської стіни, збережені в якості меморіального комплексу. Частина комплексу - «Вікно пам'яті» присвячена німцям, які загинули під час втечі в західний Берлін зі східного. На пам'ятнику з іржавої сталі розміщені їх чорно-білі фото в кілька рядів. Каплиця Примирення також входить в комплекс. Весь комплекс «Берлінська стіна» займає площу в 4 га.",
        },
      },
      {
        photo: '',
        name: {
          en: 'Museum Island (Berlin)',
          ru: 'Музейный остров (Берлин)',
          ua: 'Музейний острів (Берлін)',
        },
        info: {
          en:
            'The cultural and architectural museum complex is included in the list of UNESCO heritage sites. It is located at the northern tip of the Spreinsel Island. The most visited is the Pergamon Museum. Its building contains objects of culture and art of the Ancient collection and Western Asia, as well as reconstructions of ancient buildings of different peoples. Tourists and art critics from all over the world come to the Museum Island.',
          ru:
            'Культурный и архитектурный музейный комплекс внесен в список объектов наследия ЮНЕСКО. Он находится на северной оконечности острова Шпреинзель. Самым посещаемым считается Пергамский музей. В его корпусе представлены объекты культуры и искусства Античного собрания и Передней Азии, а также реконструкции древних сооружений разных народов. На Музейный остров приезжают и туристы, и искусствоведы со всего мира.',
          ua:
            "Культурний і архітектурний музейний комплекс внесений до списку об'єктів спадщини ЮНЕСКО. Він знаходиться на північній частині острова Шпреінзель. Найбільш відвідуваним вважається Пергамський музей. В його корпусі представлені об'єкти культури і мистецтва античного зборів і Передньої Азії, а також реконструкції древніх споруд різних народів. На Музейний острів приїжджають і туристи, і мистецтвознавці з усього світу.",
        },
      },
    ],
    alpha2Code: 'DE',
    alpha3Code: 'DEU',
    population: 81770900,
    timezones: ['UTC+02:00'],
    currencies: { code: 'EUR', name: 'Euro', symbol: '€' },
  },
};
