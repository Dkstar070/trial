const btn = document.querySelector('.talk')
const content = document.querySelector('.content')


function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}


function wishMe() {
    var day = new Date();
    var hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Good Morning Boss...")
    }

    else if (hour > 12 && hour < 17) {
        speak("Good Afternoon Master...")
    }

    else {
        speak("Good Evenining Sir...")
    }

}

// window.addEventListener('load', ()=>{
//     speak("Initializing JARVIS..");
//     wishMe();
// });

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());

}

btn.addEventListener('click', () => {
    content.textContent = "Listening...."
    recognition.start();
})

function takeCommand(message) {

    if (message.includes('hey') || message.includes('hello')) {
        wishMe();
        speak("How May I Help You?");
    } else if (message.includes('about website')) {
        speak("this website is streaming, movies and web series.");
    }
    else if (message.includes('hu r u') || message.includes('what is your name') || message.includes('Who are you')) {
        speak("I am Riyo. An Artifcial Intellgence or voice assistant of this website");
    }
    else if (message.includes('who created you') || message.includes('who invented you')) {
        speak(" I am Created by Dk Star");
    }
    else if (message.includes('Good Morning') || message.includes('good morning')) {
        speak("Good morning sir. How can i help you.");
    }
    else if (message.includes('Good Afternoon') || message.includes('good afternoon')) {
        speak("Good afternoon sir. How can i help you.");
    }
    else if (message.includes('Good Night') || message.includes('good night')) {
        speak("Good night sir. take care");
    }
    else if (message.includes('thank you') || message.includes('thanks')) {
        speak("Welcome sir i will happy to help you");
    }
    else if (message.includes('are you created') || message.includes('are you invented')) {
        speak("I am Invented for help you to explore this website. just give me insturctions i will do task for you.");
    }
    else if (message.includes('bye') || message.includes('good bye')) {
        speak("good bye sir have a nice day");
    }
    else if (message.includes("contact")) {

        document.getElementById('clickButton').click();
        speak("okey")
    }

    else if (message.includes("whatsapp web")) {
        window.open(" https://web.whatsapp.com/", "_blank");
        speak("Opening Whatsapp web...")
    }
    else if (message.includes(" google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...")
    }
    else if (message.includes(" youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...")
    }
    else if (message.includes(" facebook")) {
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...")
    }

    else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {

        speak("sorry i just  provide you information with in website not out side of website");

    }
    else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speak(finalText);
    }

    else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" })
        const finalText = time;
        speak(finalText);
    }

    else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" })
        const finalText = date;
        speak(finalText);
    }

    else if (message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speak(finalText);
    }
    else if (message.includes("movies")) {

        document.getElementById('mov').click();
        speak("okey")
    }
    else if (message.includes("web series")) {

        document.getElementById('web').click();
        speak("okey")
    }
    else if (message.includes("TV") || message.includes("tv")) {
        document.getElementById('tv').click();
        speak("okey")
    }
    else if (message.includes("loki season 2")) {
        openMovie('_Loki_Season_2.mp4');
        speak("playing LOki season 2")
    }
    else if (message.includes("pushpa")) {
        openMovie('#Pushpa_-_The_Rise.mp4');
        speak("playing Pushpa")
    }
    else if (message.includes("asur")) {
        openMovie('Asur.mp4');
        speak("playing Asur")
    }
    else if (message.includes("bahubali 2")) {
        openMovie('Baahubali_2_.mp4');
        speak("playing Bahubali 2")
    }
    else if (message.includes("bhuj")) {
        openMovie('Bhuj.mp4');
        speak("playing Bhuj")
    }
    else if (message.includes("brahmastra")) {
        openMovie('BRAHMĀSTRA.mp4');
        speak("playing Brahmastra")
    }
    else if (message.includes("college romance")) {
        openMovie('College_Romance.mp4');
        speak("playing College Romance")
    }
    else if (message.includes("dj")) {
        openMovie('DJ.mp4');
        speak("playing DJ")
    }
    else if (message.includes("eternals")) {
        openMovie('Eternals.mp4');
        speak("playing Eternals")
    }
    else if (message.includes("gadar 2")) {
        openMovie('Gadar2.mp4');
        speak("playing Gadar 2")
    }
    else if (message.includes("golmaal again")) {
        openMovie('Golmaal_Again.mp4');
        speak("playing Golmaal Again")
    }
    else if (message.includes("hera pheri")) {
        openMovie('Hera_Pheri.mp4');
        speak("playing Hera Pheri")
    }
    else if (message.includes("avengers infinity war")) {
        openMovie('infinity war.mp4');
        speak("playing Avengers infinity war")
    }
    else if (message.includes("jawan")) {
        openMovie('Jawan.mp4');
        speak("playing Jawan")
    }
    else if (message.includes("kantara")) {
        openMovie('Kantara.mp4');
        speak("playing  Kantara")
    }
    else if (message.includes("karthikeya 2")) {
        openMovie('Karthikeya_2.mp4');
        speak("playing Karthikeya 2")
    }
    else if (message.includes("kgf chapter 1")||message.includes("KGF 1")||message.includes("KGF")) {
        openMovie('KGF_.mp4');
        speak("playing KGF chapter 1")
    }
    else if (message.includes("kota factory")) {
        openMovie('Kota fectory.mp4');
        speak("playing Kota fectory")
    }
    else if (message.includes("laal singh chaddha")) {
        openMovie('Laal_Singh chadda.mp4');
        speak("playing Laal Singh chadda")
    }
    else if (message.includes("loki")||message.includes("LOKi season 1")) {
        openMovie('Loki.mp4');
        speak("playing LOKi season 1")
    }
    else if (message.includes("mirzapur")) {
        openMovie('Mirzapur.mp4');
        speak("playing Mirzapur")
    }
    else if (message.includes("rrr")||message.includes("triple r")) {
        openMovie('RRR_Official.mp4');
        speak("playing triple r")
    }
    else if (message.includes("scared games")) {
        openMovie('Sacred_Games_2_.mp4');
        speak("playing Sacred Games")
    }
    else if (message.includes("salaar")) {
        openMovie('Salaar.mp4');
        speak("playing Salaar")
    }
    else if (message.includes("scam 1992")) {
        openMovie('Scam_1992.mp4');
        speak("playing Scam 1992")
    }
    else if (message.includes("shivaay")) {
        openMovie('Shivaay.mp4');
        speak("playing Shivaay")
    }
    else if (message.includes("special Ops")) {
        openMovie('Special_Ops.mp4');
        speak("playing Special Ops")
    }
    else if (message.includes("sultan")) {
        openMovie('Sultan.mp4');
        speak("playing Sultan")
    }
    else if (message.includes("the family man")) {
        openMovie('The_Family_Man_–.mp4');
        speak("playing The Family Man")
    }
    else if (message.includes("thor love and thunder")) {
        openMovie('Thor__Love_and_Thunder.mp4');
        speak("playing Thor Love and Thunder")
    }
    else if (message.includes("top gun")) {
        openMovie('Top_Gun__.mp4');
        speak("playing Top Gun")
    }
    else if (message.includes("total dhamaal")) {
        openMovie('Total_Dhamaal.mp4');
        speak("playing Total Dhamaal")
    }
    else if (message.includes("tiger 3")) {
        openMovie('Tiger_3.mp4');
        speak("playing Tiger 3")
    }
    else if (message.includes("tu jhuthi mein makar")) {
        openMovie('Tu_Jhoothi_Main_makkar.mp4');
        speak("playing Tu Jhoothi Main makkar")
    }
    else if (message.includes("vikram")) {
        openMovie('Vikram_.mp4');
        speak("playing Vikram")
    }
    else if (message.includes("war")) {
        openMovie('WAR___Trailer.mp4');
        speak("playing war movie")
    }
    else if (message.includes("wednesday")) {
        openMovie('Wednesday_Addams.mp4');
        speak("playing Wednesday")
    }

    else if (message.includes("jurassic world") || message.includes("play jurassic world")) {
        openMovie('jurasic world.mp4');
        speak("playing jurassic world")
    }
    else if (message.includes("fighter") || message.includes("FIGHTER")) {
        openMovie('Fighter.mp4');
        speak("playing fighter movie")
    }
    else if (message.includes("money heist") || message.includes("MONEY HEIST")) {
        openMovie('Money_Heist.mp4');
        speak("playing money heist ")
    }
    else if (message.includes("kgf 2")) {
        openMovie('KGF_Chapter_2_.mp4');
        speak("playing KGF Chapter 2")
    }
    else if (message.includes("secret invention") || message.includes("secret invasion")) {
        openMovie('_Secret_Invasion.mp4');
        speak("playing Secret Invasion ")
    }
    else if (message.includes("spider-man no way home") || message.includes("SPIDER-MAN NO WAY HOME")) {
        openMovie('SPIDER-MAN__NO_WAY_HOME.mp4');
        speak("playing spider-man no way home")
    }
    else if (message.includes("wakanda forever") || message.includes("wakanda forever")) {
        openMovie('Wakanda_Forever.mp4');
        speak("playing Wakanda Forever")
    }
    else if (message.includes("pathan") ){
        openMovie('Pathaan.mp4');
        speak("playing pathan")
    }
    else if (message.includes("doctor strange multiverse of madness") || message.includes("DOCTOR STRANGE MULTIVERSE OF MADNESS ")) {
        openMovie('Doctor_Strange_in_the_Multiverse_of_Madness.mp4');
        speak("playingdoctor strange multiverse of madness")
    }
    else if (message.includes(" farzi ") || message.includes("farji")) {
        openMovie('FARZI_.mp4');
        speak("playing  farzi")
    }
    else if (message.includes("animal")) {
        openMovie('ANIMAL_.mp4');
        speak("playing animal")
    }
    else if (message.includes("777 charlie") || message.includes("777 CHARLIE")) {
        openMovie('777_Charlie.mp4');
        speak("playing triple 7 charlie")
    }
    else if (message.includes("avengers endgame") || message.includes("AVENGERS ENDGAME")) {
        openMovie('Endgame.mp4');
        speak("playing avengers endgame")
    }
    else if (message.includes("donkey") || message.includes("DUNKI")) {
        openMovie('Dunki.mp4');
        speak("playing dunki")
    }


    else if (message.includes("search") || message.includes("SEARCH")) {
        document.getElementById('searchInputv').click();
        speak("okey")
    }
    else {

        speak("sorry i can't understand");
    }
}