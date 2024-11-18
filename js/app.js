var quizQuas = [
  {
    q: "Mit takar az IEEE rövidítés?",
    a: [
      "Institute of Electrical and Electronics Engineers.",
      "International Engineering Education Entity.",
      "Independent Electricians and Engineers Europe.",
      "International Experts of Energy Efficiency.",
    ],
  },

  {
    q: "Mi a műsorszétosztó hálózat fő feladata?",
    a: [
      "A műsorszolgáltató jeleinek továbbítása műsorszóró adókhoz vagy más elosztó hálózatokhoz.",
      "A műsorjelek közvetlen továbbítása a végfelhasználók készülékeihez.",
      "Csak vezeték nélküli jelek sugárzása a fogyasztókhoz.",
      "A jelek titkosítása és dekódolása műsorszolgáltatók között.",
    ],
  },

  {
    q: "Mi a műsorelosztó hálózat fő feladata?",
    a: [
      "A műsorjelek közvetlen továbbítása a fogyasztók készülékeihez.",
      "A műsorszolgáltatók közötti jelek átvitele.",
      "Csak műsorszóró adókhoz való jeltovábbítás.",
      "A jelek módosítása és újrakódolása közvetítés előtt.",
    ],
  },

  {
    q: "Mi a hírközlés modelljének fő célja?",
    a: [
      "Az információ továbbítása az adótól a vevőig egy csatornán keresztül.",
      "A csatornák folyamatos ellenőrzése és karbantartása.",
      "Az adatok tárolása és titkosítása küldés előtt.",
      "A kommunikáció sebességének mérése az eszközök között.",
    ],
  },

  {
    q: "Mi a csatorna szerepe a hírközlés modelljében?",
    a: [
      "Az adó és a vevő közötti információtovábbítás biztosítása.",
      "Az adatok titkosítása küldés előtt.",
      "Az adó és vevő közötti távolság mérésére szolgál.",
      "Az adatok tárolása az átviteli folyamat során.",
    ],
  },

  {
    q: "Mit nevezünk zajnak a hírközlés modelljében?",
    a: [
      "Olyan tényezőket, amelyek torzítják vagy akadályozzák az információ továbbítását.",
      "Az információ átvitelének sebességét.",
      "A kommunikációhoz használt csatorna maximális kapacitását.",
      "Az adó által küldött jelek titkosítását.",
    ],
  },
  {
    q: "Mit jelent a MIMO rövidítés a vezeték nélküli kommunikációban?",
    a: [
      "Multiple Input Multiple Output, több antenna használata a jelátvitel javítására.",
      "Multimedia Interactive Media Output, interaktív média kimenet.",
      "Multi Integrated Module Output, több modul egyesített kimenete.",
      "Micro Input Macro Output, kisebb bemenetek makró szintű kimenete.",
    ],
  },
  {
    q: "Mi a hírközlés fő célja?",
    a: [
      "Információk gyors és pontos továbbítása az adótól a vevőhöz.",
      "Zaj minimalizálása a kommunikáció során.",
      "Csak a vezetékes kapcsolatok támogatása.",
      "A csatorna titkosítása minden esetben.",
    ],
  },
  {
    q: "Melyik frekvencia tartományt használják a digitális műholdas műsorszórásra?",
    a: [
      "Ku-sáv (12-18 GHz).",
      "VHF-sáv (30-300 MHz).",
      "LF-sáv (30-300 kHz).",
      "MF-sáv (300-3000 kHz).",
    ],
  },
  {
    q: "Mit jelent a 'szórt spektrumú' technológia a hírközlésben?",
    a: [
      "Az adatok átvitelét szélesebb frekvenciasávra elosztva a jel interferenciával szembeni ellenálló képességének növelése érdekében.",
      "Az adatátvitelt egyetlen szűk frekvenciasávon a nagyobb sebesség érdekében.",
      "A jel kódolása és tömörítése a titkosított továbbításhoz.",
      "Az információ átvitele kizárólag vezetékes csatornán.",
    ],
  },
  {
    q: "Melyik technológia segíti a vezeték nélküli adatátvitelt nagy távolságokra vidéki területeken?",
    a: ["WiMAX.", "Bluetooth.", "Zigbee.", "RFID."],
  },
  {
    q: "Mit jelent a 'handover' a mobilkommunikációban?",
    a: [
      "Az átadást egyik celláról a másikra anélkül, hogy megszakadna a kapcsolat.",
      "Egy mobilhívás befejezését a hálózat által.",
      "Adatátvitel két különböző eszköz között vezeték nélküli hálózaton.",
      "A cellahálózat átkapcsolását másik frekvenciára a torlódás elkerülésére.",
    ],
  },
  {
    q: "Mi a különbség a simplex és duplex kommunikáció között?",
    a: [
      "Simplex esetén az információ egyirányú, míg duplex esetén kétirányú átvitel történik.",
      "Simplexnél két eszköz egyszerre küldhet adatokat, duplexnél csak egy.",
      "Simplex kizárólag digitális jeleket továbbít, duplex analóg jeleket is.",
      "Simplex technológia csak vezetékes hálózatokban használható.",
    ],
  },
  {
    q: "Mi a hálózati réteg fő feladata az OSI modellben?",
    a: [
      "Az adatcsomagok útvonalának meghatározása a hálózatban.",
      "A fizikai kapcsolódás biztosítása a hálózatban.",
      "Az alkalmazások közötti adatátvitel vezérlése.",
      "A hálózati forgalom titkosítása és szűrése.",
    ],
  },
  {
    q: "Melyik technológia használható a hírközlés adatainak titkosítására vezeték nélküli hálózatokban?",
    a: ["WPA2 (Wi-Fi Protected Access 2).", "MIMO.", "DHCP.", "SMTP."],
  },
  {
    q: "Melyik állítás igaz a vezetékes és vezeték nélküli hálózatok biztonságára?",
    a: [
      "A vezeték nélküli hálózatok érzékenyebbek a lehallgatásra, mivel a jelek a levegőben terjednek.",
      "A vezetékes hálózatok nem érzékenyek a támadásokra, mert fizikailag védettek.",
      "A vezeték nélküli hálózatok mindig gyorsabbak a vezetékes hálózatoknál.",
      "A vezeték nélküli hálózatokat nem lehet jelszóval védeni.",
    ],
  },
  {
    q: "Mit jelent az LTE rövidítés a mobil kommunikációban?",
    a: [
      "Long Term Evolution, a 4G hálózatok alapját képező technológia.",
      "Low Transmission Efficiency, az adatátvitel lassítása.",
      "Local Telecommunication Exchange, helyi hálózati cserepont.",
      "Limited Transmission Environment, korlátozott jelátviteli terület.",
    ],
  },
  {
    q: "Melyik hírközlési technológia működik milliméteres hullámtartományban?",
    a: ["5G mobilhálózat.", "FM rádió.", "VHF televízió adás.", "AM rádió."],
  },
  {
    q: "Mi a TCP/IP protokoll fő feladata a hálózatokban?",
    a: [
      "Adatok csomagokban történő továbbítása az interneten keresztül.",
      "Adatok titkosítása és visszafejtése.",
      "Adatok tárolása az eszköz helyi memóriájában.",
      "Adatok vizuális megjelenítése a felhasználói felületen.",
    ],
  },
  {
    q: "Mi a hírközlésben a QoS, és mi a célja?",
    a: [
      "Quality of Service, a hálózati szolgáltatások minőségének javítása a késleltetés minimalizálása érdekében.",
      "Quick Over Sampling, a gyors adatmintavétel technikája.",
      "Quality on Signal, a jelerősség javítása.",
      "Question of Safety, a hálózat biztonságának ellenőrzése.",
    ],
  },
  {
    q: "Mi jellemzi a vezeték nélküli ad hoc hálózatokat?",
    a: [
      "Olyan hálózatok, ahol az eszközök közvetlenül egymással kommunikálnak, központi infrastruktúra nélkül.",
      "A hálózatok egyetlen központi routerrel rendelkeznek.",
      "Kizárólag vezetékes kapcsolatokra épülnek.",
      "Csak nagy vállalati hálózatokban alkalmazhatók.",
    ],
  },
  {
    q: "Melyik titkosítási protokollt használják leggyakrabban a VPN kapcsolatok biztosítására?",
    a: ["IPSec.", "SMTP.", "NAT.", "FTP."],
  },
  {
    q: "Mi a különbség a WLAN és a LAN között?",
    a: [
      "A WLAN vezeték nélküli, míg a LAN vezetékes hálózat.",
      "A WLAN csak nagy területeken használható, míg a LAN kis távolságra.",
      "A LAN mindig lassabb adatátviteli sebességet biztosít, mint a WLAN.",
      "A WLAN csak otthoni hálózatokban használható.",
    ],
  },
  {
    q: "Melyik protokoll biztosítja az adatcsomagok megbízható kézbesítését a TCP/IP modellben?",
    a: [
      "TCP (Transmission Control Protocol).",
      "UDP (User Datagram Protocol).",
      "FTP (File Transfer Protocol).",
      "ICMP (Internet Control Message Protocol).",
    ],
  },
  {
    q: "Melyik közegben terjednek a rádióhullámok a leggyorsabban?",
    a: ["Vákuumban.", "Vízben.", "Üvegben.", "Levegőben."],
  },
  {
    q: "Melyik az NMHH egyik fő feladata?",
    a: [
      "A médiaszolgáltatók tevékenységének felügyelete.",
      "A külföldi hírcsatornák betiltása.",
      "A mobiltelefonok árának szabályozása.",
      "Az internetes tartalmak cenzúrázása.",
    ],
  },
  {
    q: "Mit jelent az információ konvergenciája?",
    a: [
      "A különböző hírközlési formák és technológiák egyesítése egy rendszeren belül.",
      "Az információ terjedésének lassulása.",
      "Az információ elérhetőségének korlátozása.",
      "Csak a nyomtatott és elektronikus média közötti különbség megszüntetése.",
    ],
  },
  {
    q: "Mi a szerepe a csillapításnak a hírközlésben?",
    a: [
      "A jel energiájának csökkenése a távolsággal.",
      "A jel energiájának növekedése az átvitel során.",
      "A zaj csökkentése a jelszint fenntartásával.",
      "A jel visszaverődése akadályok miatt.",
    ],
  },
  {
    q: "Melyik az adatátviteli sebesség egyik jellemző mértékegysége?",
    a: [
      "Mbps (megabit per másodperc).",
      "GHz (gigahertz).",
      "mAh (milliampéróra).",
      "kHz (kilohertz).",
    ],
  },
  {
    q: "Melyik protokollt használják leggyakrabban az e-mail továbbítására?",
    a: ["SMTP.", "FTP.", "HTTP.", "TCP."],
  },
  {
    q: "Melyik IEEE szabvány vonatkozik a vezeték nélküli helyi hálózatokra?",
    a: ["IEEE 802.11.", "IEEE 802.3.", "IEEE 802.15.", "IEEE 802.5."],
  },
  {
    q: "Melyik technológia NEM használatos a vezeték nélküli adatátvitelhez?",
    a: ["Koaxiális kábel.", "Bluetooth.", "Wi-Fi.", "LTE."],
  },
  {
    q: "Melyik jellemző az adat integritásának biztosítása céljából fontos a CIA háromszögben?",
    a: [
      "Az adatok változatlanságának megőrzése.",
      "Az adatok titkosítása külső hozzáférés ellen.",
      "Az adatokhoz való gyors hozzáférhetőség biztosítása.",
      "Az adatok fizikai tárolása távoli szervereken.",
    ],
  },
  {
    q: "Melyik frekvencia sávot használják leggyakrabban a Wi-Fi hálózatokban?",
    a: [
      "2,4 GHz és 5 GHz.",
      "800 MHz és 1 GHz.",
      "600 MHz és 700 MHz.",
      "10 GHz és 12 GHz.",
    ],
  },
  {
    q: "Melyik jellemző igaz az optikai szálakra?",
    a: [
      "Nagy adatátviteli sebességet biztosítanak nagy távolságokon.",
      "Csak rövid távolságú adatátvitelre alkalmasak.",
      "Könnyen interferenciának vannak kitéve elektromágneses hatások miatt.",
      "Alacsony költséggel előállíthatók és telepíthetők.",
    ],
  },
  {
    q: "Mi történik, ha egy jel áthalad egy közegen, amelynek nagy a csillapítása?",
    a: [
      "A jel intenzitása jelentősen csökken.",
      "A jel intenzitása növekszik.",
      "A jel frekvenciája változik.",
      "A jel sebessége növekszik.",
    ],
  },
  {
    q: "Mi a TEMPEST program fő célja?",
    a: [
      "Az elektromágneses kibocsátások minimalizálása az információk védelme érdekében.",
      "A hálózati forgalom gyorsítása titkosítással.",
      "A rádióhullámok átvitelének növelése hosszú távon.",
      "A kiberbűnözés felderítésének megkönnyítése.",
    ],
  },
  {
    q: "Melyik vezeték nélküli technológia használ MIMO technológiát a jobb adatátvitel érdekében?",
    a: ["Wi-Fi.", "Bluetooth.", "NFC.", "AM/FM rádió."],
  },
  {
    q: "Melyik hírközlési forma alkalmas leginkább a távoli személyek közötti valós idejű beszélgetésre?",
    a: ["Videohívás.", "SMS.", "Rádióadás.", "E-mail."],
  },

  {
    q: "Mi határozza meg a rádióhullámok terjedésének sebességét a levegőben?",
    a: [
      "Az elektromágneses hullámok sebessége vákuumban.",
      "A hullám frekvenciája.",
      "A hullámhossz.",
      "A levegő sűrűsége és hőmérséklete.",
    ],
  },
  {
    q: "Melyik digitális modulációs technikánál kódolják az információt a jel amplitúdójának változtatásával?",
    a: [
      "Kvadratúra amplitúdó-moduláció (QAM).",
      "Amplitúdó-moduláció (AM).",
      "Frekvencia moduláció (FM).",
      "Fázismoduláció (PM).",
    ],
  },
  {
    q: "Melyik jelenség okozza, hogy a rádióhullámok akadályokba ütközve különböző irányokba szóródnak szét?",
    a: ["Szórás.", "Doppler-hatás.", "Interferencia.", "Polarizáció."],
  },
  {
    q: "Melyik protokollt használják az adatcsomagok hálózatok közötti útvonalának meghatározására?",
    a: ["IP.", "HTTP.", "SMTP.", "DNS."],
  },
  {
    q: "Melyik szerv felelős Magyarországon a hírközlés szabályozásáért és felügyeletéért?",
    a: [
      "Nemzeti Média- és Hírközlési Hatóság (NMHH).",
      "Belügyminisztérium.",
      "Országos Rendőr-főkapitányság (ORFK).",
      "Európai Bizottság.",
    ],
  },
  {
    q: "Mi az adatátviteli sebesség mérésének alapegysége?",
    a: ["Bit/s.", "Byte/s.", "Hertz.", "Joule."],
  },
  {
    q: "Melyik kábel típust használják leggyakrabban a nagy távolságú optikai adatátvitelre?",
    a: ["Optikai szál.", "Koaxiális kábel.", "Sodrott érpár.", "UTP kábel."],
  },
  {
    q: "Ha a frekvencia növekszik, mi történik a hullámhosszal?",
    a: [
      "Csökken.",
      "Növekszik.",
      "Nem változik.",
      "Csak a közegben bekövetkező változás határozza meg.",
    ],
  },
  {
    q: "Melyik hírközlési típus tartozik a személyes kommunikációhoz?",
    a: [
      "Telefonhívás.",
      "Műholdas műsorszórás.",
      "Internetes hirdetések.",
      "Rádióműsor.",
    ],
  },
  {
    q: "Melyik komponens felelős a jel és zaj szétválasztásáért egy hírközlési modellben?",
    a: ["Zajszűrő.", "Adó.", "Csatorna.", "Vevő."],
  },
  {
    q: "Melyik technológiát használják a műsor egyidejű elosztására több közönség számára?",
    a: ["Műholdas adás.", "Kábelhálózat.", "Telefonvonal.", "Optikai szál."],
  },
  {
    q: "Melyik technológia jellemző a műsorok országos szétosztására?",
    a: [
      "Közszolgálati televízió.",
      "Internetes élő közvetítés.",
      "Helyi rádió.",
      "Rádióamatőr adás.",
    ],
  },
  {
    q: "Mi az NMHH teljes neve és funkciója?",
    a: [
      "Nemzeti Média- és Hírközlési Hatóság, hírközlés felügyelete.",
      "Nemzeti Hírközlési és Média Hatóság, média szabályozás.",
      "Nemzetközi Média- és Hírközlési Hivatal, média jogalkotás.",
      "Nemzeti Média Hatóság, kábelszolgáltatás szabályozás.",
    ],
  },
  {
    q: "Mit jelent a konvergencia a hírközlésben?",
    a: [
      "Különböző szolgáltatások egyesülése egy platformon.",
      "Hírközlési eszközök fokozatos elavulása.",
      "Különböző technológiák egyirányú terjedése.",
      "Mobil és vezetékes szolgáltatások elkülönülése.",
    ],
  },
  {
    q: "Melyik NEM része az információkommunikáció 5 jellemzőjének?",
    a: ["Profitabilitás.", "Pontosság.", "Időzítés.", "Hozzáférhetőség."],
  },
  {
    q: "Mit jelent az adatátviteli sebesség mérése bit/s-ban?",
    a: [
      "Az átvitt bitek számát másodpercenként.",
      "A jel amplitúdóját.",
      "Az adategységek átvitelének időtartamát.",
      "A hullám frekvenciáját.",
    ],
  },
  {
    q: "Melyik jelenség csökkenti a jel intenzitását a közegen keresztülhaladva?",
    a: ["Csillapítás.", "Rezonancia.", "Interferencia.", "Erősítés."],
  },
  {
    q: "Mit jelent a CIA rövidítés a kibervédelemben?",
    a: [
      "Confidentiality, Integrity, Availability.",
      "Civil Information Agency.",
      "Central Intelligence Authority.",
      "Communication and Information Access.",
    ],
  },
  {
    q: "Melyik színezés jellemző az A szabvány szerinti Ethernet kábelre?",
    a: [
      "Zöld-fehér, zöld, narancs-fehér, kék, kék-fehér, narancs, barna-fehér, barna.",
      "Narancs-fehér, narancs, zöld-fehér, kék, kék-fehér, zöld, barna-fehér, barna.",
      "Piros-fehér, kék, barna-fehér, narancs, zöld-fehér, kék, narancs-fehér, barna.",
      "Barna-fehér, zöld, narancs-fehér, kék-fehér, barna, zöld-fehér, kék, narancs.",
    ],
  },
  {
    q: "Mit jelent a TEMPEST hírközlésben?",
    a: [
      "Információbiztonsági szabvány elektromágneses kibocsátások csökkentésére.",
      "Számítógépes adattitkosítási módszer.",
      "Adatforgalom elemzésére szolgáló eszköz.",
      "Hálózati kapcsolatok felügyeleti rendszere.",
    ],
  },
  {
    q: "Melyik terület szabványait tartalmazza az IEEE 802.11?",
    a: [
      "Wi-Fi hálózatok.",
      "Bluetooth kapcsolatok.",
      "Vezetékes hálózatok.",
      "Mobiltelefonos kommunikáció.",
    ],
  },
  {
    q: "Miben különbözik a MU-MIMO technológia a hagyományos MIMO-tól?",
    a: [
      "MU-MIMO egyszerre több felhasználónak biztosít adatátvitelt külön csatornákon.",
      "MU-MIMO csak egy eszközt tud kiszolgálni egy időben.",
      "MIMO párhuzamosan több eszközt képes kiszolgálni.",
      "MIMO egy irányba tud csak adatot küldeni.",
    ],
  },
  {
    q: "Mit jelent a frekvencia hírközlésben?",
    a: [
      "A hullám ismétlődési sebessége időegység alatt.",
      "A hullám energiája.",
      "A hullám terjedési sebessége.",
      "A hullám amplitúdója.",
    ],
  },
  {
    q: "Mi a WLAN?",
    a: [
      "Számítógépes hálózat vezeték nélküli kapcsolata.",
      "Számítógépes hálózat vezetékes összeköttetése.",
      "Rádiófrekvenciás kommunikáció telefonok között.",
      "Kábeltévés hálózati kapcsolat.",
    ],
  },

  {
    q: "A(z) ..... az az eszköz, amely a különböző hálózatokat összekapcsolva lehetővé teszi az internethez való csatlakozást.",
    a: ["router", "switch", "access point", "modem"],
  },
  {
    q: "A hírközlésben a(z) ..... rövidítés az interferencia elkerülésére szolgáló technológiát jelöli, amely a vezeték nélküli hálózatokban használatos.",
    a: ["CSMA/CA", "ARP", "DNS", "HTTP"],
  },
  {
    q: "A(z) ..... típusú kábel használatos leggyakrabban a nagy sebességű adatátvitelhez és zavarszűréshez a helyi hálózatokban.",
    a: ["optikai szál", "koaxiális kábel", "csavart érpár", "USB kábel"],
  },
  {
    q: "A(z) ..... technológia lehetővé teszi a vezeték nélküli eszközök számára, hogy egyszerre több adatfolyamot kezeljenek, növelve ezzel az adatátviteli sebességet.",
    a: ["MIMO", "DHCP", "ICMP", "SMTP"],
  },
  {
    q: "A hírközlésben az ..... jelenti azt a kódrendszert, amelyet a rádióadás során a beszéd digitális formátumra történő átalakítására használnak.",
    a: ["kodek", "switch", "amplifikátor", "modulátor"],
  },
  {
    q: "A(z) ..... protokoll segíti a weboldalak elérését és azok tartalmának továbbítását a böngésző számára.",
    a: ["HTTP", "FTP", "SMTP", "DNS"],
  },
  {
    q: "A(z) ..... típusú zaj okozza a jelek gyengülését, amikor nagy távolságon keresztül továbbítják őket a kábelekben.",
    a: ["csillapítás", "moduláció", "töredezettség", "amplifikáció"],
  },
  {
    q: "Az NMHH, vagyis a(z) ..... felügyeli a magyarországi hírközlési és médiaszolgáltatási tevékenységeket.",
    a: [
      "Nemzeti Média- és Hírközlési Hatóság",
      "Nemzetközi Műsorszolgáltatási Hálózat",
      "Nemzeti Hálózatkezelési Hivatal",
      "Nemzeti Hírközlési Megfigyelő Hatóság",
    ],
  },
  {
    q: "A(z) ..... az a technológia, amely képes különböző eszközöket közvetlenül egymással összekapcsolni vezeték nélküli hálózat nélkül.",
    a: ["Bluetooth", "Wi-Fi", "Ethernet", "GSM"],
  },
  {
    q: "Az adatcsomagok továbbítására a(z) ..... protokollt használják az interneten, amely lehetővé teszi, hogy a csomagok az útjuk során több hálózati eszközön keresztül is elérjék a célt.",
    a: ["IP", "FTP", "POP3", "SMTP"],
  },
];

//Thanks to stackoverflow for randomize script
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var availableTime = quizQuas.length;

var choices = 0;
const noQuas = $("#no-quas").text(availableTime);
const holder = $(".quiz-container__content");
const timer = $("#timer");
quizQuas = shuffle(quizQuas);

quizCopy = quizQuas.slice();

$.each(quizCopy, (i, e) => {
  var cnt = 0;
  var test = e.a.slice();
  test = shuffle(test);
  var correctAnswer;
  for (var i = 0; i < test.length; i++) {
    if (test[i] == e.a[0]) {
      correctAnswer = `ch_${choices}qa_${i}`;
    }
  }
  holder.append(
    `
        <div class="quiz-group">
        <div class="header"></div>
        <div class="content">
          <div class="question">
            <p>${e.q}</p>
          </div>
          <div class="answers" data-correct="${correctAnswer}">
            <div class="radio-group">
              <input type="radio" name="ch_${choices}" id="ch_${choices}qa_${cnt}">
              <label data-ref="${choices}" for="ch_${choices}qa_${cnt}">${
      test[cnt++]
    }</label>
            </div>
            <div class="radio-group">
            <input type="radio" name="ch_${choices}" id="ch_${choices}qa_${cnt}">
            <label data-ref="${choices}" for="ch_${choices}qa_${cnt}">${
      test[cnt++]
    }</label>
            </div>
            <div class="radio-group">
            <input type="radio" name="ch_${choices}" id="ch_${choices}qa_${cnt}">
            <label data-ref="${choices}" for="ch_${choices}qa_${cnt}">${
      test[cnt++]
    }</label>
            </div>
            <div class="radio-group">
            <input type="radio" name="ch_${choices}" id="ch_${choices}qa_${cnt}">
            <label data-ref="${choices}" for="ch_${choices}qa_${cnt}">${
      test[cnt++]
    }</label>
            </div>
          </div>
        </div>
        </div>
        `
  );
  choices++;
});
var time = availableTime * 60;
setInterval(function () {
  var minutes = Math.floor(time / 60);
  var seconds = time - minutes * 60;
  timer.text(minutes + ":" + seconds);
  time -= 1;
}, 1000);

$("#submit").on("click", function (evt) {
  var unanswered = 0;
  var fail = 0;
  var ok = 0;

  var answers = $(".answers");
  evt.preventDefault();
  $.each(answers, function (i, e) {
    var checked = $(e).find(":checked");
    if (checked.length != 1) {
      console.log("unanswered");
      unanswered += 1;
    } else {
      var yourAnswer = checked.next("label");

      if ($(e).data("correct") == yourAnswer[0].htmlFor) {
        console.log("siker");
        ok += 1;
      } else {
        fail += 1;
      }
    }
    var dc = $(e).data("correct");
    $(e).find(".radio-group").addClass("fail");
    $("#" + dc)
      .closest(".radio-group")
      .removeClass("fail")
      .addClass("success");
  });

  var percentage = ((ok / availableTime) * 100).toFixed(2);
  $("#sum").text(`fail: ${fail + unanswered}, success: ${ok}, ${percentage}%`);
});
