function speakMessage(message) {
    const speech = new SpeechSynthesisUtterance(message);
    const voices = speechSynthesis.getVoices();
    
    // Select a robotic voice (fallback to any available male voice)
    let robotVoice = voices.find(voice => 
        voice.name.includes('Google UK English Male') || 
        voice.name.includes('Daniel') || 
        voice.name.includes('Alex')
    );

    speech.voice = robotVoice || voices[0];  // Default to first available voice
    speech.rate = 0.9;  // Slightly slower for a robotic effect
    speech.pitch = 7; // Lower pitch to sound deeper
    speech.volume = 10;   // Maximum volume
    speechSynthesis.speak(speech);
}

// Ensure voices load before speaking
function initSpeech() {
    if (speechSynthesis.getVoices().length === 0) {
        speechSynthesis.onvoiceschanged = () => speakMessage("Hello Guys Eppadi Irukinga");
    } else {
        speakMessage("Hello Guys Eppadi Irukinga");
    }
}

window.onload = initSpeech;
