const designs = [
  {
    id: "neon",
    name: "Aurora Pulse",
    description: "Futuristische Lichtlinien, Glows und immersiver Flow.",
  },
  {
    id: "tabloid",
    name: "Flash Report",
    description: "Boulevard-Alarm mit Headlines, Ticker und Cover-Wall.",
  },
  {
    id: "kinetic",
    name: "Gallery Luxe",
    description: "Editorial-Grid mit Premium Weißraum und Kunstgefühl.",
  },
  {
    id: "newspaper",
    name: "Archiv Print",
    description: "Zeitungslook mit Spalten, Linien und Marginalien.",
  },
  {
    id: "social",
    name: "StoryGrid",
    description: "Mobile Cards, Stories und Bildstrecken.",
  },
  {
    id: "minimal",
    name: "Clear Focus",
    description: "Barrierefrei, ruhig, auf Text fokussiert.",
  },
  {
    id: "timeline",
    name: "Chronicle Path",
    description: "Kapitel entlang einer visuellen Reportage-Line.",
  },
  {
    id: "experimental",
    name: "Showroom Deck",
    description: "Präsentationsmodus mit Slides & Mini-Map.",
  },
];

const fallbackImages = [
  "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80",
];

const articles = [
  {
    id: "editorial",
    title: "Der KUBI: Von uns - für euch!",
    subtitle: "Seite 1",
    author: "Eure Kubi-Redaktion (AG Schulzeitung)",
    image: "https://i.imgur.com/iOQprXM.jpg",
    fallback: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80",
    text: [
      "Eigentlich unglaublich, aber ihr haltet schon die vierte Ausgabe unserer Schulzeitung „Kubi\" in euren Händen.",
      "In dieser Ausgabe haben wir, wie ihr es schon von uns gewohnt seid, viel Wissenswertes rund um das Leben in und an der Realschule Alsdorf im KuBiZ zusammengestellt.",
      "Damit seid ihr wieder einmal bestens darüber informiert, was bzw. wer euch an eurer Schule begegnet und was bei uns alles Spannendes und Neues passiert. Ihr findet Berichte und Eindrücke vom Tag der offenen Tür, Interviews und natürlich wieder tolle Fotos, die euch einen Einblick in unser buntes Schulleben geben.",
      "Auch das aktuelle „Kubi\"-Redaktionsteam stellt sich euch erneut vor.",
      "Unterricht, AGs und vieles mehr · Neue Gesichter an der Schule.",
      "Wir wünschen euch viel Spaß beim Lesen!",
    ],
  },
  {
    id: "kubiz",
    title: "Das KuBiZ – viel mehr als Schule",
    author: "Redaktion",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1400&q=80",
    fallback: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    text: [
      "Das KuBiZ ist nicht nur ein Schulgebäude, sondern ein lebendiger Campus. Moderne Räume, helle Flure, gemeinsame Bereiche und viel Platz zum Lernen und Leben machen unsere Schule zu einem besonderen Ort.",
      "Hier treffen sich Realschule und Gymnasium, teilen Mensa, Sporthalle und viele Angebote – Schule als Gemeinschaft.",
      "Seite Zwei: Schulgelände · Das KuBiZ viel mehr, als Schule.",
    ],
  },
  {
    id: "feuerwehr",
    title: "Wir im Ehrenamt: Die Jugendfeuerwehr",
    author: "Hannah Bosten & Marla Dicken",
    image: "https://i.imgur.com/0kKdm9G.jpg",
    fallback: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    text: [
      "Was ist Jugendfeuerwehr? Die Jugendfeuerwehr ist eine Organisation innerhalb der Freiwilligen Feuerwehr, die sich an Kinder und Jugendliche im Alter von 10 bis 18 Jahren richtet. Die Jugendfeuerwehr dient dazu, Kindern und Jugendlichen einen Einblick ins Feuerwehr Leben zu geben. Und natürlich gibt es auch in Alsdorf eine Jugendfeuerwehr.",
      "Die Ziele der Jugendfeuerwehr: Die Jugendfeuerwehr möchte größtenteils die Teamarbeit der Jugendlichen fördern, aber sie möchte natürlich auch Verantwortung, Gemeinschaft und Feuerwehrwissen vermitteln. Durch die Jugendfeuerwehr wird die Zusammenarbeit von Jugendlichen gestärkt, durch Übungen und Veranstaltungen. Aktivitäten der Jugendfeuerwehr: Die Jugendfeuerwehr lernt Sachen wie beispielsweise Funkübungen, Erste-Hilfe-Training, Löschübungen und Gerätekunde.",
      "Die Abzeichen der Jugendfeuerwehr: Während seiner Jugendzeit kann man verschiedene Abzeichen machen, die nach Schwierigkeitsgraden unterteilt sind: Jugendflamme 1 (einfach), Jugendflamme 2 (mittel), Jugendflamme 3 (höheres Niveau), Leistungsspange (höchstes Abzeichen).",
      "Was besonders Spaß macht, sind die praktischen Übungen – zum Beispiel das Löschen eines dargestellten Brandes mit Wasser oder das Retten einer Puppe aus einem verrauchten Raum. Natürlich macht man nicht immer Praxisübungen, im Winter werden meist theoretische Themen behandelt, zum Beispiel Wissen über einen Feuerlöscher oder das Erklären von Fahrzeugen. Das sind grundlegende Dinge für den Feuerwehralltag.",
      "Zeltlager und Berufsfeuerwehrtage: Was viele Jugendfeuerwehren auch durchführen, sind Zeltlager und sogenannte BF-Tage. Ein Zeltlager ist ein großes Erlebnis und ein echtes Highlight im Jahr! Oft treffen sich dort mehrere Jugendfeuerwehren zusammen, aber viele machen es auch alleine. Während beim Zeltlager gegrillt, zusammen gekocht, Spiele gespielt und Ausflüge gemacht werden, ist ein BF-Tag jedoch etwas anderes. Der sogenannte Berufsfeuerwehrtag dient dazu, dass die Jugendlichen einen Einblick in den 24-Stunden-Dienst erhalten. Dort werden nachgespielte Einsätze gefahren und es wird gemeinschaftlich gekocht. Einsätze werden realistisch nachgespielt und fordern die Jugendlichen heraus. Die verschiedensten Szenarien können auch zu den verschiedensten Uhrzeiten geschehen.",
      "Haben wir dein Interesse geweckt? Falls du Interesse an der Jugendfeuerwehr bekommen hast, wende dich an die Freiwillige Feuerwehr Alsdorf und nimm' an einem Schnuppertag teil. Wenn du ein paarmal da gewesen bist und deinen Spaß daran gefunden hast, können deine Eltern ein Anmeldungsformular ausfüllen – und schon bist du ein Teil der Jugendfeuerwehr. Die Jugendfeuerwehr trifft sich immer montags von 18 Uhr bis 20 Uhr, an der Hauptwache in Alsdorf. Wir freuen uns auf dich! Schau' gerne mal vorbei.",
    ],
  },
  {
    id: "sitzplan",
    title: "Die „Sitzplan-Theorie\": Ein (nicht) ganz ernst gemeinter Vorschlag",
    author: "Sara Gebhardt",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    fallback: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=80",
    text: [
      "In der sogenannten „Sitzplan-Theorie\" geht es darum, ob bzw. wie Schülerinnen und Schüler im Unterricht umgesetzt werden sollten – und wie am besten nicht. Damit ist gemeint, dass die Lehrer Einzelne meistens so umsetzen, wie sie denken, dass es gut ist. Dabei machen wir hier mal einen (nicht) ganz ernst gemeinter Gegenvorschlag zur gängigen Praxis.",
      "In der Schule ist es aus unserer Sicht wichtig, die guten und richtigen Personen um sich zu haben, damit man auch Spaß daran hat, sich im Unterricht zu beteiligen und dadurch eben auch bessere Noten erzielen kann.",
      "Gut mitarbeiten mit „besserem\" Sitzplatz? Generell sollte die Schule natürlich nicht (nur) dazu dienen, Spaß zu haben. Allerdings – so unsere Theorie – haben Kinder und Jugendliche einfach mehr Lust und Energie in die Schule zu gehen, wenn sie nicht schon morgens nach dem Aufstehen denken, wie wenig Lust sie denn haben jetzt in die Schule zu gehen, weil sie neben Schülerinnen und Schülern sitzen (müssen), mit denen sie sich nicht verstehen.",
      "Natürlich ist es ein anderes Thema, wenn zwei Kinder miteinander reden und so den Unterricht stören – und deshalb umgesetzt werden. In so einem Fall ist natürlich die Lehrkraft gefragt, aber auch da sollten unsere Lehrerinnen und Lehrer darauf achten, wie sie die Schülerinnen und Schüler umsetzen. Also so, dass sie erstens nicht weiter stören, zweitens aber, dass sie dafür keine anderen Schülerinnen und Schüler umsetzen, die nun mal nicht stören, da das ziemlich unfair gegenüber dem ruhigen Teil der Klasse wäre, der ja gut und ruhig mitarbeitet.",
      "Wer stört, stört alle anderen gleichermaßen... Was allen klar sein sollte: Kinder und Jugendliche, die den Unterricht stören, stören dadurch die gesamte Klasse, nicht nur die Lehrkraft. Man sollte immer aufpassen und seine Mitschülerinnen bzw. Mitschüler nicht stören. Wenn jeder richtig auf sich beziehungsweise auf seine Lautstärke und Wortwahl achtet, dann gibt es auch keinen Grund, Schülerinnen und Schüler umzusetzen.",
      "Also, liebe Mitschülerinnen und Mitschüler: Achtet bitte drauf, ob ihr redet und wenn ihr es schon tut, dann im Flüsterton – so wird keiner gestört. In diesem Sinne: Liebe Lehrkräfte, bitte setzt störende Kinder allein hin – dadurch würden Sie den Unterricht in alle Richtungen vereinfachen. Und das meinen wir natürlich alles ernst.",
    ],
  },
  {
    id: "theater",
    title: "Wortwitz und tolles Schauspiel im Langhaus",
    author: "Sara Gebhardt & Hannah Bosten",
    image: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?auto=format&fit=crop&w=1200&q=80",
    fallback: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
    text: [
      "Im zweiten Halbjahr sahen wir eine ganz tolle Theateraufführung für die ganze Stufe 5, die im Langhaus stattfand und somit für uns ein richtiges „Heimspiel\" war.",
      "Zwei Schauspieler, vier Charaktere: Im Theaterstück waren zwei Darsteller aktiv, die insgesamt vier Rollen spielten. Der Name des Theaters war „Demenz\". Worum ging es? Ein Großvater, der an der Krankheit Demenz leidet, zeigt die typischen Anzeichen der Krankheit.",
      "Im Theaterstück wurde beschrieben, wie der Großvater aufgrund der Krankheit langsam anfängt zu vergessen, wer die Menschen um ihn herum sind und auch, wer er selbst ist. Unsere kleine Umfrage im Anschluss an die Aufführung zeigte, dass alle kleinen (und großen) Zuschauerinnen und Zuschauer fanden, dass es eine spannende und vor allem lehrreiche Aufführung war.",
    ],
  },
  {
    id: "gleichberechtigung",
    title: "Gleichberechtigung",
    author: "Redaktion",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&w=1200&q=80",
    fallback: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    text: [
      "Wir haben uns mit dem Thema Gleichberechtigung intensiv beschäftigt und würden euch gerne zeigen, was mit Gleichberechtigung eigentlich gemeint ist. Schon seit tausenden von Jahren kämpfen Menschen, vor allem Frauen, für ihre Rechte und Freiheiten.",
      "Was ist Gleichberechtigung? Gleichberechtigung bedeutet, dass alle Menschen die gleichen Rechte, Chancen und Möglichkeiten haben – unabhängig von Geschlecht, Herkunft, Hautfarbe, Religion, sexueller Orientierung und Alter. Es geht also darum, dass niemand benachteiligt oder bevorzugt wird und jede Person die gleichen Chancen hat, ihr Leben nach eigener Vorstellung zu gestalten.",
      "Jedoch wird nicht alles davon umgesetzt. Viele homosexuelle Menschen werden in vielen Ländern als minderwertig betrachtet. Zum Beispiel gibt es in einigen Ländern die Todesstrafe für einen homosexuellen Lebensstil. Was moralisch nicht richtig ist. Man kann zu dem Thema natürlich seine eigene Meinung äußern, aber unschuldige Menschen umbringen kann man nicht rechtfertigen.",
      "Was ist eigentlich Feminismus? Feminismus bedeutet: Alle Geschlechter sollen die gleichen Chancen haben. Rollenbilder und gesellschaftliche Normen, die Ungleichheit erzeugen, werden hinterfragt. Recht auf körperliche Selbstbestimmung. Schutz vor sexueller Gewalt.",
      "Viele Menschen denken, dass Feminismus dafür da ist, um Frauen höher als Männer zu stellen. Menschen, die sowas tun, sind keine Feministen, da Feminismus sich für beide Geschlechter einsetzt.",
    ],
  },
  {
    id: "technik",
    title: "„Das Fach Technik kann sehr wichtig für die Berufswahl sein\"",
    author: "Collin Jeske & Jannis Wentland",
    image: "https://i.imgur.com/xeHNxsx.jpg",
    fallback: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    text: [
      "Verstärkung für die Realschule Alsdorf: Seit dem zweiten Halbjahr 2024/25 arbeitet Nadine Kaltenborn als Lehrerin bei uns. Collin Jeske und Jannis Wentland aus der Klasse 9a hatten die Gelegenheit, Frau Kaltenborn kennenzulernen und sie zu ihrem Werdegang, ihrem Unterrichtsstil und ihren ersten Eindrücken von unserer Schule zu befragen.",
      "Ihr Hintergrund: Frau Kaltenborn unterrichtet die Fächer Technik und Sonderpädagogik. Der Weg in den Lehrerberuf war für sie nicht direkt vorgezeichnet, denn ursprünglich studierte sie Metallurgie und Werkstofftechnik an der RWTH Aachen und arbeitete viele Jahre in der Forschung und im Forschungszentrum Jülich. Doch ihre Erfahrung in der Schülerförderung und auch ihre Rolle als vierfache Mutter haben sie schließlich dazu bewogen, den Lehrerberuf zu ergreifen.",
      "Ihr Unterrichtsstil: Auf die Frage, wie sie ihren eigenen Unterrichtsstil beschreiben würde, betont Frau Kaltenborn, dass dieser von den Schülern und Klassen abhänge. Manche Gruppen arbeiten besser in Frei- bzw. Einzelarbeit, manche in Gruppenarbeit, wiederum andere benötigen mehr Struktur. Besonders das Fach Technik bietet viele Möglichkeiten zum praktischen und kreativen Arbeiten. „Ich finde es schön, wenn die Schüler am Ende etwas mit ihren eigenen Händen geschaffen haben und stolz darauf sein können\", sagt sie und ergänzt: „Das Fach Technik hat einen hohen praktischen Anteil.\"",
      "Was macht eine gute Lehrerin aus? Für Nadine Kaltenborn ist der wichtigste Aspekt eines guten Lehrers bzw. einer guten Lehrerin die Beziehung zu ihren Schülern. „Ein gutes Verhältnis ist das A und O – und am Ende sollte man als Lehrkraft auch selbst etwas gelernt haben. Dann ist es perfekt.\" Aber auch schwierigen Situationen begegnet sie mit Geduld und holt sich auch gerne Rat von erfahreneren Kolleginnen und Kollegen.",
      "Ihre Botschaft an die Schüler: Besonders am Herzen liegt Frau Kaltenborn das Fach Technik: „Ich fände es schön, wenn sich mehr Schüler dafür interessieren würden. Es kann für die Berufswahl eine große Hilfe sein.\" Und noch etwas betont sie mit einem Augenzwinkern: „Wir Lehrer sind ja nicht eure Feinde!\" Mit ihrer offenen Art bringt Frau Kaltenborn auf jeden Fall frischen Wind an die Schule.",
    ],
  },
  {
    id: "warhammer",
    title: "Kreativität, Strategie und Gemeinschaft - Die Warhammer-AG stellt sich vor",
    author: "Collin Jeske, Aron Goerenz, Felix Hinkelmann & Felix Höring",
    image: "https://i.imgur.com/NkVNloa.jpg",
    fallback: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    text: [
      "Ein Schülerzeitungsbericht über Figuren, Fantasie und Freundschaft. Handbemalte Figuren und Spielfeld der Warhammer-AG (Fotos: Aron Goerenz). In einem Klassenzimmer voller Farben, Würfel und Miniaturen entsteht Kreativität pur: Die Warhammer-AG bringt Schüler zusammen, die basteln, malen und strategisch denken. Gegründet wurde sie von Mika Mertens und David, unterstützt von Mikas Mutter Nathalie Mertens. Die AG zeigt, dass Fantasie und Teamgeist an unserer Schule großgeschrieben werden.",
      "Was ist Warhammer überhaupt? Warhammer ist ein sogenanntes Tabletop-Spiel: Auf einem Spielfeld treten selbstbemalte Miniaturarmeen in strategischen Kämpfen gegeneinander an. Jede Figur hat eigene Stärken, Fähigkeiten und Schwächen – alles wird mit Würfeln entschieden. „Im Prinzip ist Warhammer das kompliziertere Schach\", erklärt Mika. „Es geht um Strategie, Logik, aber auch um Kreativität. Man kann seine Figuren anmalen, wie man möchte – da ist viel Platz für Fantasie.\" Beim Interview zeigt Mika stolz das Spielfeld: „Hier kämpfen die Dark Angels gegen das Death Corps of Krieg. Alle Figuren sind handbemalt – von David und mir.\"",
      "Kreativität trifft Gemeinschaft: Neben Strategie spielt auch Kreativität eine große Rolle. Jede Figur wird individuell bemalt, jede Armee ist ein Unikat. „Man bemalt alle Figuren selbst – jede ist ein Einzelstück\", sagt Mika. Am Anfang bekommen die Mitglieder kostenlose Figuren von Games Workshop, später wählen sie eigene Fraktionen. „Es gibt rund 30 verschiedene Fraktionen, da ist für jeden was dabei.\" Auch Jannis Wentland kam über Mika zur AG: „Wir haben bei ihm übernachtet und den ganzen Abend Figuren zusammengebaut und bemalt. Das hat einfach Spaß gemacht!\" Heute besitzt er ein eigenes großes Set: „Für 130 Euro – aber das war's mir wert\", sagt er lachend. Seine Lieblingsfraktion sind die Black Templars: „Die sind ständig auf Kreuzzug. Ich fand das Design mit den Kreuzen einfach cool.\"",
      "„Es macht einfach Spaß, etwas Eigenes zu schaffen.\" – Jannis (10a). Was lernt man in der Warhammer-AG? Geduld, Genauigkeit, Teamarbeit – das alles spielt in der AG eine große Rolle. „Man wird kreativer; weil man seine Figuren frei gestalten kann\", erklärt Jannis. „Und wenn wir gegeneinander spielen, muss man logisch denken – das ist schon herausfordernd.\" Mika ergänzt: „Man lernt strategisch zu planen, aber auch, mit anderen zu interagieren. Es ist schön, dass man zusammensitzt, Figuren anmalt, spielt, lacht und einfach Spaß hat. Gerade heute, wo so viel online passiert, ist das etwas Besonderes.\"",
      "Zukunftspläne und Wünsche: Die AG wächst stetig. Neben dem bekannten Warhammer 40.000 wollen die Mitglieder bald auch das System „Trench Crusade\" ausprobieren. Dank eines 3D-Druckers von Davids Onkel sollen neue Spielfelder und Gelände entstehen. „Unser Ziel ist, dass die AG auch nach unserer Zeit weiterbesteht\", erklärt Mika. „Wir wollen, dass jüngere Schüler die Leitung übernehmen und das Projekt weiterführen.\"",
      "„Habt Spaß, seid kreativ – und in der düsteren Zukunft gibt es nur den Krieg!\" – Mika (10a). Fazit: Die Warhammer-AG vereint Strategie, Kunst und Gemeinschaft. Hier geht es nicht nur um Figuren, sondern um Freundschaft, Geduld und Kreativität. Die Mitglieder zeigen, dass Schule mehr sein kann als Unterricht – nämlich ein Ort, an dem Fantasie und Zusammenarbeit lebendig werden.",
    ],
  },
  {
    id: "handy",
    title: "„Handy aus oder raus\" - Was hinter der neuen Regelung steckt",
    author: "Felix Hinkelmann",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80",
    fallback: "https://images.unsplash.com/photo-1512499617640-c2f999fe06c0?auto=format&fit=crop&w=1200&q=80",
    text: [
      "Seit den Osternferien gilt an der Realschule Alsdorf das Motto „Handy aus oder raus\". Damit möchte die Schule erreichen, dass alle Schülerinnen und Schüler im Unterricht konzentrierter arbeiten und in den Pausen wieder mehr miteinander reden, statt auf ihre Bildschirme zu starren.",
      "Laut Schulordnung dürfen Handys auf dem gesamten Schulgelände nicht benutzt werden. Wer dagegen verstößt, muss damit rechnen, dass das Handy eingezogen wird – und zwar bis zu drei Tage lang.",
      "Warum gibt es diese Regelung? Die Schulleitung begründet das Verbot damit, dass Smartphones in der Vergangenheit immer wieder für Ablenkung, Streit und unerlaubte Aufnahmen gesorgt haben. Außerdem sollen durch die Handyfreiheit Ruhe, Fairness und Miteinander im Schulalltag gestärkt werden.",
      "Was ist rechtlich erlaubt? Rechtlich gesehen darf die Schule Handys vorübergehend einziehen, wenn gegen die Schulordnung verstoßen wurde. Das nennt man eine pädagogische Maßnahme – sie soll erzieherisch wirken, nicht bestrafen. Allerdings gibt es Grenzen: Das Handy gehört dem Schüler oder seinen Eltern, also Privatbesitz. Nach dem Grundgesetz ist das Eigentum geschützt. Deshalb darf die Schule das Gerät nicht unbegrenzt behalten. Ein kurzzeitiges Einziehen – zum Beispiel bis zum Ende des Schultages – ist in Ordnung. Ein längerer Entzug von mehreren Tagen ist rechtlich umstritten. Manche Schulgesetze (je nach Bundesland) erlauben das nur, wenn die Eltern informiert werden und ihr Einverständnis geben.",
      "Was tun, wenn das Handy länger einbehalten wird? Wenn ein Handy wirklich mehrere Tage behalten werden soll, sollten die Eltern informiert werden. Sie können das Gerät persönlich in der Schule abholen oder mit der Schulleitung über eine Lösung sprechen.",
      "Fazit: Das Motto „Handy aus oder raus\" soll den Schulalltag verbessern und für mehr Miteinander sorgen. Trotzdem gilt: Auch in der Schule müssen Rechte und Gesetze beachtet werden. Ein kurzer Entzug des Handys ist erlaubt – aber drei Tage ohne Rückgabe sind rechtlich fragwürdig. Am Ende bleibt die wichtigste Regel: Wer sein Handy gar nicht erst benutzt, muss es auch nicht abgeben.",
    ],
  },
  {
    id: "vergebung",
    title: "Vergeltung oder Vergebung? Zwei Perspektiven auf Gerechtigkeit in der Bibel",
    author: "Aron Goerenz",
    image: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=1200&q=80",
    fallback: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80",
    text: [
      "Die beiden Bibelsprüche „Auge um Auge, Zahn um Zahn\" und „Wenn dich jemand auf die linke Backe schlägt, dann halt ihm auch die andere hin\" stammen aus unterschiedlichen Teilen der Bibel und repräsentieren zwei unterschiedliche Prinzipien des Umgangs mit Unrecht, Gewalt und Diebstahl.",
      "Der Spruch „Auge um Auge, Zahn um Zahn\" findet sich im Alten Testament, konkret im Buch 2. Mose 21,25 (insbesondere 24) sowie in ähnlichen Stellen im 3. Mose 24,19-20. Dieser Spruch basiert auf dem sogenannten „Gesetz der Vergeltung\" und war ursprünglich ein Prinzip der Gerechtigkeit, das in der antiken Welt dazu diente, übermäßige Strafen zu verhindern und die Rache auf das gleiche Maß wie das begangene Unrecht zu beschränken. Es ging darum, eine angemessene Vergeltung für Vergehen zu sichern, sodass etwa der Verlust eines Auges nicht mit der Zerstörung eines ganzen Lebens beantwortet wurde. In diesem Zusammenhang stellte es sicher, dass die Strafe nicht über das begangene Vergehen hinausging.",
      "Im Gegensatz dazu steht der Spruch aus dem Neuen Testament, der in Matthäus 5,39 zu finden ist: „Wenn dich jemand auf die rechte Backe schlägt, dann halt ihm auch die andere hin.\" Dieser Spruch ist Teil der sogenannten Bergpredigt und wird von Jesus Christus geäußert. Er fordert die Menschen auf, Gewalt mit Gewalt zu überwinden und sich nicht auf das Gesetz der Vergeltung zu stützen. Statt Rache und Vergeltung zu üben, geht es hier um die Bereitschaft zur Vergebung und die Ablehnung von Gewalt. Der Spruch impliziert, dass der Weg des Friedens und der inneren Stärke wichtiger ist als das Streben nach Gerechtigkeit durch Vergeltung.",
      "Die beiden Sprüche stehen also für grundlegend unterschiedliche Ansätze im Umgang mit Konflikten und Gewalt. Das Gesetz „Auge um Auge\" betont die Rache und die Suche nach Gerechtigkeit durch Strafe, während der Spruch „Wenn dich jemand schlägt...\" zu Vergebung und Nicht-Vergeltung aufruft. Während das erste Prinzip eine Art von Gerechtigkeit durch Gleichwertigkeit der Strafen fördert, stellt das zweite Prinzip die Idee vor, dass wahre Stärke und Gerechtigkeit im Verzicht auf Rache und stattdessen der Bereitschaft zur Versöhnung liegen. Es zeigt eine radikale Veränderung von der alten Praxis der Vergeltung hin zu einem friedlicheren, nachsichtigen Umgang mit Konflikten.",
      "Zusammenfassend lässt sich sagen, dass die beiden Sprüche in ihrer Haltung zur Gewalt und Rache einander widersprechen. Das Alte Testament setzt auf gesetzliche Gerechtigkeit und Vergeltung, während das Neue Testament die Überwindung von Übel durch Liebe und Vergebung predigt. Die Botschaft des Neuen Testaments fordert die Menschen auf, sich nicht auf das Gesetz der Vergeltung zu verlassen, sondern den Friedensweg zu wählen, auch wenn dieser schwer zu gehen ist.",
    ],
  },
  {
    id: "chatgpt",
    title: "Das sagt Chat_GPT über unsere Schülerzeitung...",
    author: "Redaktion",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    fallback: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=1200&q=80",
    text: [
      "Und das sagt übrigens Chat_GPT, wenn wir unsere Schülerzeitung Kubi in die Suchmaschine eingeben und dazu noch zwei KI-generierte Logos...",
      "Hier ist, was ich konkret und aktuell über die Schülerzeitung Kubi an der Realschule im KuBiZ (in Alsdorf) gefunden hab – mit dem, was bekannt ist, und dem, worüber unklar bleibt:",
      "Was ist „Kubi\" – Zeitung der Realschule im KuBiZ: Die erste Ausgabe des Kubi erschien im Juni 2023. Die Zeitung wird als „Schülerzeitung / AG Schulzeitung\" geführt – also von Schülerinnen (und betreuendem Lehrer bzw. Lehrkraft) organisiert. Laut Schulwebseite stammt die Initiative für den Kubi vom Lehrer Dr. Robert Flader, der mit Schülerinnen die neue Schülerzeitung gegründet hat. Der Kubi soll unter der Rubrik „Aktuelles\" auf der Schulwebsite verfügbar sein – d. h. zumindest Teile der Zeitung sind online abrufbar.",
      "Was behandelt die erste Ausgabe (und vermutlich typische Inhalte): Interviews & Reportagen – z. B. ein Interview mit dem Schulleiter Farsin Sohrab über seine Eindrücke, Pläne und seine Sicht auf Schule und Alltag. Einblicke ins Schulleben – Berichte über das gemeinsame Schulgebäude mit dem benachbarten Gymnasium (Teilen von Mensa, Sporthalle usw.), Unterschiede und Gemeinsamkeiten zwischen den Schulen im KuBiZ. Schul- und Lehrerporträts / Abschiede – Artikel über Lehrerinnen und Lehrer, die die Schule verlassen: ihre Zeit an der Schule, Fächer, Erinnerungen. Schülervertretung & Mitbestimmung – Aktivitäten der Schülervertretung (SV), was sie tun, wie es ist, Schülersprecher:in zu sein etc. Freizeit / Jobs & Geldideen für Jugendliche – Tipps, wie Jugendliche ihr Taschengeld aufbessern können.",
      "Somit deckt der Kubi unterschiedliche Aspekte des Schul- und Schüler:innenlebens ab – von Alltagsrealitäten über Schule, Gemeinschaft, Mitbestimmung bis hin zu Freizeit und praktischen Tipps.",
    ],
  },
  {
    id: "mobbing",
    title: "Mobbing - kein Spaß!",
    author: "Sara Gebhardt",
    image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80",
    fallback: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    text: [
      "Mobbing ist nach wie vor ein sehr großes Thema und kann an vielen Orten vorkommen. Ob in der Schule, auf dem Arbeitsplatz oder in der Freizeit, schlimm ist es immer. Aber was ist Mobbing überhaupt und was für Arten gibt es?",
      "Mobbing ist das systematische Runtermachen, Ärgern, Demütigen oder Belästigen einer oder mehreren Personen, die unterlegen sind und/oder sich nicht wehren. Mobbing hat verschiedene Arten. Dies sind die meist verbreiteten: verbales Mobbing (durch z. B. beleidigen), nonverbales Mobbing (durch z. B. ignorieren), körperliches Mobbing (durch z. B. Schupsen oder Schlagen), soziales Mobbing (durch z. B. Ausgrenzung in einer Menschengruppe), Cybermobbing (Mobbing über das Internet).",
      "Gerade in der Schule ist Mobbing ein riesen Thema. Viele Kinder erleben Mobbing am eigenen Leib, aber trauen sich nicht es zu melden oder melden es und werden nicht richtig beachtet. Manchmal wird es auch runtergespielt. Auch schon öfters vorgekommen ist, dass Kinder zwar Mobbing mitbekommen, allerdings nicht eingreifen oder es melden, da sie Angst haben selbst Opfer von Mobbing zu werden.",
      "Gerade hier ist es sehr wichtig als Lehrkraft, Elternperson oder als älterer Schüler einzugreifen, denn Mobbing kann schwere Folgen haben. Die häufigsten Nachfolgen sind zum einen Depressionen oder Angstzustände, zum anderen ein geringeres Selbstgefühl oder körperliche Beschwerden. Diese Folgen könnten sich stark auf das Leben der betroffenen Personen auswirken.",
      "Fazit: Achtet aufeinander und seid nett! Denkt immer dran, wie ihr euch fühlen würdet bei dem, was ihr anderen antut. Wenn ihr mitbekommt, wie andere runtergemacht werden, greift ein, indem ihr Lehrer oder Bezugspersonen drauf hinweist.",
    ],
  },
  {
    id: "team",
    title: "Unser Team hinter dem KUBI 2025/26",
    author: "Kubi-Redaktion",
    image: "https://i.imgur.com/O5FXEsI.jpg",
    fallback: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80",
    text: [
      "Das Redaktionsteam des Schuljahres 2025/26 im Einzelnen: Justin Kuhz (9a), Semih Ahmed Celikkanat (9b), Marla Dicken (10a), Hannah Bosten (10a), Collin Jeske (10a), Aron Goerenz (10b), Sara Gebhardt (10b), Felix Hinkelmann (10b), Felix Höring (10b) und Robert Flader (Kursleiter).",
      "Haben wir euer Interesse geweckt? Dann werdet im neuen Schuljahr 2026/27 Teil der Kubi-Redaktion! Wir laden euch herzlich ein, mit uns neue, spannende Themen rund um unsere Realschule im KuBiZ zu finden und sie für den neuen Kubi aufzuschreiben.",
    ],
  },
];

const designGrid = document.getElementById("design-grid");
const landing = document.getElementById("landing");
const reader = document.getElementById("reader");
const compare = document.getElementById("compare");
const designContent = document.getElementById("design-content");
const toc = document.getElementById("toc");
const progress = document.getElementById("progress");
const readerTitle = document.getElementById("reader-title");
const readerSubtitle = document.getElementById("reader-subtitle");
const designSwitch = document.getElementById("design-switch");
const textModeToggle = document.getElementById("toggle-text-mode");
const modal = document.getElementById("article-modal");
const modalBody = document.getElementById("modal-body");
const compareGrid = document.getElementById("compare-grid");

const compareArticleSelect = document.getElementById("compare-article");
const compareDesign1 = document.getElementById("compare-design-1");
const compareDesign2 = document.getElementById("compare-design-2");
const compareDesign3 = document.getElementById("compare-design-3");
const compareThirdToggle = document.getElementById("compare-third-toggle");
const compareDesign3Wrap = document.getElementById("compare-design-3-wrap");

const state = {
  mode: "landing",
  activeDesign: "neon",
};

function createDesignCards() {
  designs.forEach((design, index) => {
    const card = document.createElement("div");
    card.className = "design-card";
    card.style.animationDelay = `${index * 0.05}s`;
    card.innerHTML = `
      <div class="preview" style="background: ${getPreviewGradient(design.id)}">
        ${buildPreviewLayout(design.id)}
      </div>
      <h3>${design.name}</h3>
      <p>${design.description}</p>
      <span class="tag">Lesemodus öffnen</span>
    `;
    card.addEventListener("click", () => showDesign(design.id));
    designGrid.appendChild(card);
  });
}

function buildPreviewLayout(id) {
  return `
    <div class="preview-layout ${id}">
      <span class="preview-block wide"></span>
      <span class="preview-block"></span>
      <span class="preview-block tall"></span>
      <span class="preview-block"></span>
      <span class="preview-block wide"></span>
      <span class="preview-block"></span>
    </div>
  `;
}

function getPreviewGradient(id) {
  const gradients = {
    neon: "linear-gradient(120deg, #00d1ff, #6d5dfc)",
    tabloid: "linear-gradient(120deg, #e3000f, #ff7b00)",
    kinetic: "linear-gradient(120deg, #111, #f5f2e8)",
    newspaper: "linear-gradient(120deg, #f3ede0, #c3b89c)",
    social: "linear-gradient(120deg, #6d5dfc, #1c1f3b)",
    minimal: "linear-gradient(120deg, #ffffff, #dfe4ea)",
    timeline: "linear-gradient(120deg, #0f2027, #2c5364)",
    experimental: "linear-gradient(120deg, #3b1d7a, #0f0c29)",
  };
  return gradients[id] || gradients.neon;
}

function showDesign(designId) {
  state.activeDesign = designId;
  state.mode = "reader";
  landing.classList.add("hidden");
  compare.classList.add("hidden");
  reader.classList.remove("hidden");
  document.body.className = `design-${designId}`;
  document.body.classList.remove("text-mode");
  progress.classList.toggle("hidden", designId !== "neon");

  const design = designs.find((item) => item.id === designId);
  readerTitle.textContent = design?.name || "Lesemodus";
  readerSubtitle.textContent = design?.description || "";
  designSwitch.value = designId;
  textModeToggle.classList.toggle("hidden", designId !== "minimal");
  textModeToggle.textContent = "Textmodus";

  renderDesignContent(designId);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderDesignContent(designId) {
  designContent.innerHTML = "";
  toc.innerHTML = "";
  toc.classList.toggle("hidden", designId !== "neon");

  const hero = buildDesignHero(designId);
  if (hero) {
    designContent.appendChild(hero);
  }

  if (designId === "social") {
    const stories = document.createElement("div");
    stories.className = "stories";
    articles.slice(0, 6).forEach(() => {
      const story = document.createElement("div");
      story.className = "story";
      stories.appendChild(story);
    });
    designContent.appendChild(stories);

    const mediaStrip = document.createElement("div");
    mediaStrip.className = "media-strip";
    mediaStrip.innerHTML = articles
      .slice(0, 6)
      .map((article) => {
        const fallbacks = getFallbacks(article).join("|");
        return `
          <figure class="media-tile">
            <img src="${article.image}" alt="${article.title}" data-fallbacks="${fallbacks}" data-fallback-index="0" />
            <figcaption>${article.title}</figcaption>
          </figure>
        `;
      })
      .join("");
    designContent.appendChild(mediaStrip);
  }

  if (designId === "tabloid") {
    const ticker = document.createElement("div");
    ticker.className = "ticker";
    ticker.innerHTML = `<span>Breaking News · Skandal! · Alarm! · Exklusiv! · KUBI Spezial · Breaking News · Skandal! · Alarm! · Exklusiv!</span>`;
    designContent.appendChild(ticker);

    const coverGrid = document.createElement("div");
    coverGrid.className = "cover-grid";
    coverGrid.innerHTML = articles
      .slice(0, 4)
      .map((article) => {
        const fallbacks = getFallbacks(article).join("|");
        return `
          <div class="cover-tile">
            <img src="${article.image}" alt="${article.title}" data-fallbacks="${fallbacks}" data-fallback-index="0" />
            <div class="cover-title">${article.title}</div>
          </div>
        `;
      })
      .join("");
    designContent.appendChild(coverGrid);
  }

  if (designId === "experimental") {
    const controls = document.createElement("div");
    controls.className = "slide-controls";
    controls.innerHTML = `
      <button class="ghost" id="prev-slide">Prev</button>
      <button class="ghost" id="next-slide">Next</button>
    `;
    designContent.appendChild(controls);

    const slideMap = document.createElement("div");
    slideMap.className = "slide-map";
    slideMap.id = "slide-map";
    designContent.appendChild(slideMap);
  }

  const tocList = document.createElement("ul");

  const observer = createArticleObserver();

  articles.forEach((article, index) => {
    const articleEl = document.createElement("article");
    articleEl.className = "article";
    articleEl.id = `article-${article.id}`;

    const chapter = designId === "timeline" ? `<p class="chapter">Kapitel ${String(index + 1).padStart(2, "0")}</p>` : "";
    const eyecatcher = designId === "tabloid" ? `<p class="eyecatcher">Exklusiv · KUBI Report</p>` : "";
    const subtitle = article.subtitle ? `<p class="subtitle">${article.subtitle}</p>` : "";
    const fallbacks = getFallbacks(article).join("|");

    articleEl.innerHTML = `
      ${chapter}
      ${eyecatcher}
      <h3>${article.title}</h3>
      ${subtitle}
      <p class="meta">${article.author}</p>
      <img src="${article.image}" alt="${article.title}" data-fallbacks="${fallbacks}" data-fallback-index="0" />
      <div class="content">
        ${article.text.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      </div>
      ${designId === "newspaper" ? `<p class="caption">Rubrik · KUBI Ausgabe</p>` : ""}
      ${designId === "tabloid" ? `<button class="primary read-more">Artikel öffnen</button>` : ""}
    `;

    if (designId === "tabloid") {
      const button = articleEl.querySelector(".read-more");
      button.addEventListener("click", () => openModal(article));
    }

    designContent.appendChild(articleEl);
    observer.observe(articleEl);

    const tocItem = document.createElement("li");
    tocItem.innerHTML = `<a href="#article-${article.id}">${article.title}</a>`;
    tocList.appendChild(tocItem);
  });

  toc.appendChild(tocList);

  attachFallbacks();

  if (designId === "experimental") {
    const prev = document.getElementById("prev-slide");
    const next = document.getElementById("next-slide");
    const slides = designContent.querySelectorAll("article");
    const scrollContainer = designContent;
    const slideMap = document.getElementById("slide-map");

    let slideIndex = 0;

    slideMap.innerHTML = Array.from(slides)
      .map((_, idx) => `<button class="slide-dot ${idx === 0 ? "active" : ""}" data-index="${idx}"></button>`)
      .join("");

    const scrollToSlide = (index) => {
      slideIndex = Math.max(0, Math.min(index, slides.length - 1));
      slides[slideIndex].scrollIntoView({ behavior: "smooth", block: "start" });
    };

    prev.addEventListener("click", () => scrollToSlide(slideIndex - 1));
    next.addEventListener("click", () => scrollToSlide(slideIndex + 1));

    slideMap.querySelectorAll(".slide-dot").forEach((dot) => {
      dot.addEventListener("click", () => scrollToSlide(Number(dot.dataset.index)));
    });

    scrollContainer.addEventListener("scroll", () => {
      const nearest = Array.from(slides).reduce(
        (closest, slide, idx) => {
          const distance = Math.abs(slide.getBoundingClientRect().top - scrollContainer.getBoundingClientRect().top);
          return distance < closest.distance ? { distance, idx } : closest;
        },
        { distance: Infinity, idx: 0 }
      );
      slideIndex = nearest.idx;
      slideMap.querySelectorAll(".slide-dot").forEach((dot, idx) => {
        dot.classList.toggle("active", idx === slideIndex);
      });
    });
  }
}

function openModal(article) {
  const fallbacks = getFallbacks(article).join("|");
  modalBody.innerHTML = `
    <h3>${article.title}</h3>
    <p class="meta">${article.author}</p>
    <img src="${article.image}" alt="${article.title}" data-fallbacks="${fallbacks}" data-fallback-index="0" />
    ${article.text.map((paragraph) => `<p>${paragraph}</p>`).join("")}
  `;
  modal.classList.remove("hidden");
  attachFallbacks();
}

function closeModal() {
  modal.classList.add("hidden");
}

function showCompare() {
  state.mode = "compare";
  landing.classList.add("hidden");
  reader.classList.add("hidden");
  compare.classList.remove("hidden");
  document.body.className = "compare-mode";
  progress.classList.add("hidden");
  renderCompare();
}

function renderCompare() {
  compareGrid.innerHTML = "";
  const articleId = compareArticleSelect.value || articles[0].id;
  const designIds = [compareDesign1.value, compareDesign2.value];
  if (compareThirdToggle.checked) {
    designIds.push(compareDesign3.value);
  }

  const article = articles.find((item) => item.id === articleId) || articles[0];

  compareGrid.style.gridTemplateColumns = `repeat(${designIds.length}, minmax(0, 1fr))`;

  designIds.forEach((id) => {
    const column = document.createElement("div");
    column.className = `compare-column design-${id}`;
    const fallbacks = getFallbacks(article).join("|");
    column.innerHTML = `
      <h3>${designs.find((design) => design.id === id)?.name || "Design"}</h3>
      <article class="article visible">
        <h4>${article.title}</h4>
        <p class="meta">${article.author}</p>
        <img src="${article.image}" alt="${article.title}" data-fallbacks="${fallbacks}" data-fallback-index="0" />
        ${article.text.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      </article>
    `;
    compareGrid.appendChild(column);
  });

  attachFallbacks();
}

function attachFallbacks() {
  document.querySelectorAll("img[data-fallbacks]").forEach((img) => {
    if (img.dataset.fallbackBound) {
      return;
    }
    img.dataset.fallbackBound = "true";
    img.addEventListener("error", () => {
      const fallbacks = (img.dataset.fallbacks || "").split("|").filter(Boolean);
      const index = Number(img.dataset.fallbackIndex || 0);
      if (index >= fallbacks.length) {
        return;
      }
      img.dataset.fallbackIndex = String(index + 1);
      img.src = fallbacks[index];
    });
  });
}

function getFallbacks(article) {
  const list = [article.fallback, ...fallbackImages];
  return Array.from(new Set(list.filter(Boolean)));
}

function createArticleObserver() {
  const existing = document.querySelectorAll(".article.visible");
  existing.forEach((article) => article.classList.remove("visible"));
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  return observer;
}

function buildDesignHero(designId) {
  const heroArticle = articles[designId === "neon" ? 7 : 0] || articles[0];
  const fallbacks = getFallbacks(heroArticle).join("|");
  const hero = document.createElement("section");
  hero.className = `design-hero design-hero-${designId}`;
  hero.innerHTML = `
    <div class="hero-media">
      <img src="${heroArticle.image}" alt="${heroArticle.title}" data-fallbacks="${fallbacks}" data-fallback-index="0" />
    </div>
    <div class="hero-copy">
      <p class="hero-label">KUBI Showcase</p>
      <h2>${heroArticle.title}</h2>
      <p>${heroArticle.text[0]}</p>
      <div class="hero-meta">${heroArticle.author}</div>
    </div>
  `;
  return hero;
}

function populateCompareControls() {
  articles.forEach((article) => {
    const option = document.createElement("option");
    option.value = article.id;
    option.textContent = article.title;
    compareArticleSelect.appendChild(option);
  });

  designs.forEach((design) => {
    [compareDesign1, compareDesign2, compareDesign3].forEach((select) => {
      const option = document.createElement("option");
      option.value = design.id;
      option.textContent = design.name;
      select.appendChild(option.cloneNode(true));
    });
  });

  compareDesign1.value = designs[0].id;
  compareDesign2.value = designs[1].id;
  compareDesign3.value = designs[2].id;
}

function updateProgress() {
  if (state.mode !== "reader" || state.activeDesign !== "neon") {
    progress.style.width = "0";
    return;
  }
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const percentage = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progress.style.width = `${percentage}%`;
}

function showLanding() {
  state.mode = "landing";
  landing.classList.remove("hidden");
  reader.classList.add("hidden");
  compare.classList.add("hidden");
  document.body.className = "";
  document.body.classList.remove("text-mode");
  progress.classList.add("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

createDesignCards();
populateCompareControls();
showLanding();

designs.forEach((design) => {
  const option = document.createElement("option");
  option.value = design.id;
  option.textContent = design.name;
  designSwitch.appendChild(option);
});
designSwitch.value = state.activeDesign;

window.addEventListener("scroll", updateProgress);

compareThirdToggle.addEventListener("change", () => {
  compareDesign3Wrap.classList.toggle("hidden", !compareThirdToggle.checked);
  renderCompare();
});

compareArticleSelect.addEventListener("change", renderCompare);
compareDesign1.addEventListener("change", renderCompare);
compareDesign2.addEventListener("change", renderCompare);
compareDesign3.addEventListener("change", renderCompare);

const openCompareButtons = [
  document.getElementById("open-compare"),
  document.getElementById("open-compare-alt"),
];
openCompareButtons.forEach((button) => button.addEventListener("click", showCompare));

document.getElementById("back-to-landing").addEventListener("click", showLanding);
document.getElementById("back-from-compare").addEventListener("click", showLanding);
document.getElementById("close-modal").addEventListener("click", closeModal);
designSwitch.addEventListener("change", (event) => showDesign(event.target.value));
textModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("text-mode");
  textModeToggle.textContent = document.body.classList.contains("text-mode") ? "Bildmodus" : "Textmodus";
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});
