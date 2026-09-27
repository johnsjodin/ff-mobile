# Faction Factory Mobile

Mobilappen till Faction Factory, byggd med React Native och Expo. Visar samma
data som webbappen ([ff-react](https://github.com/johnsjodin/ff-react)) via
samma backend ([ff-api](https://github.com/johnsjodin/ff-api)).

## Förutsättningar

- [Node.js](https://nodejs.org/)
- [.NET 10 SDK](https://dotnet.microsoft.com/download) (för backend)
- Appen Expo Go på en telefon, eller en emulator

## 1. Starta backend

I terminalen:

    git clone https://github.com/johnsjodin/ff-api.git
    cd ff-api
    dotnet run

API:et lyssnar på port 5211, på alla nätverksgränssnitt (0.0.0.0) så att
telefonen når det.

## 2. Starta mobilappen

Starta en ny terminal och skriv:

    git clone https://github.com/johnsjodin/ff-mobile.git
    cd ff-mobile
    npm install
    npx expo start

Skanna QR-koden med Expo Go. Telefonen och datorn måste vara på samma
wifi. Ingen konfiguration av IP-adresser behövs (se Tekniska val längre ner).

## Funktioner

- Listar alla factions från API:et, med emblem
- Detaljvy per faction
- Mottot kan redigeras direkt i detaljvyn (edit-läge) och sparas via PUT
- Misslyckade API-anrop visar felmeddelande i stället för att krascha

## Tekniska val

API:ets adress är inte hårdkodad. Telefonen pratar redan med Expos dev-server
på datorn, så datorns IP finns i Constants.expoConfig.hostUri, så jag klipper
ut IP-adressen därifrån och bygger API-URL:en av den (api.js). Då fungerar appen
på vilket nätverk som helst utan att man behöver redigera filer. Körs
appen i webbläsaren finns ingen hostUri, och då faller den tillbaka på localhost,
vilket är rätt adress i det läget.

Navigeringen är en stack (React Navigation), som gav mig en liten bugg.
FactionListScreen dör aldrig, och eftersom dess useEffect bara hämtar data
en enda gång så visade listan gammal data även efter redigering. Löste det
genom att lyssna på navigatorns focus-event i stället, så listan hämtas om
varje gång den blir synlig.

Redigering sker direkt i detaljvyn med ett edit-läge (boolean-state som
växlar mellan Text och TextInput) i stället för en separat skärm.

PUT skickar hela faction-objektet ({ ...faction, motto }), inte bara det
ändrade fältet, eftersom API:ets PUT ersätter hela objektet. Skickar man
bara mottot blir resten av faktionen tom.

## Kända begränsningar

- Bara mottot går att redigera än så länge, övriga fält är bara visning
- Ingen skapa- eller raderafunktion i mobilappen