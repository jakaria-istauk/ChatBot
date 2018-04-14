var trigger = [
                ["hi", "hey", "hello"], //1
                ["how are you", "how is life", "how are things"], //2
                ["what are you doing", "what is going on"], //3
                ["how old are you"], //4
                ["who are you", "are you human", "are you bot", "are you human or bot"], //5
                ["who created you", "who made you"], //6
                ["your name please", "your name", "may i know your name", "what is your name"], //7
                ["i love you"], //8
                ["happy", "good"], //9
                ["bad", "bored", "tired"], //10
                ["help me", "tell me story", "tell me joke"], //11
                ["ah", "yes", "ok", "okay", "nice", "thanks", "thank you"], //12
                ["bye", "good bye", "goodbye", "see you later"]//13
            ];
            var reply = [
                ["Hi", "Hey", "Hello"], //1
                ["Fine", "Pretty well", "Fantastic"], //2
                ["Nothing much", "About to go to sleep", "Can you gues?", "I don't know actually"], //3
                ["I am 1 day old"], //4
                ["I am just a bot", "I am a bot. What are you?"], //5
                ["Kani Veri", "My God"], //6
                ["I am nameless", "I don't have a name"], //7
                ["I love you too", "Me too"], //8
                ["Have you ever felt bad?", "Glad to hear it"], //9
                ["Why?", "Why? You shouldn't!", "Try watching TV"], //10
                ["I will", "What about?"], //11
                ["Tell me a story", "Tell me a joke", "Tell me about yourself", "You are welcome"], //12
                ["Bye", "Goodbye", "See you later"]//13
            ];
            var alternative = ["Haha...", "Eh..."];
            document.querySelector("#input").addEventListener("keypress", function (e) {
                var key = e.which || e.keyCode;
                if (key === 13) { //Enter button
                    var input = document.getElementById("input").value;
                    document.getElementById("user").innerHTML = input;
                    output(input);
                }
            });
            function output(input) {
                try {
                    var product = input + "=" + eval(input);
                } catch (e) {
                    var text = (input.toLowerCase()).replace(/[^\w\s\d]/gi, ""); //remove all chars except words, space and 
                    text = text.replace(/ a /g, " ").replace(/i feel /g, "").replace(/whats/g, "what is").replace(/please /g, "").replace(/ please/g, "");
                    if (compare(trigger, reply, text)) {
                        var product = compare(trigger, reply, text);
                    } else {
                        var product = alternative[Math.floor(Math.random() * alternative.length)];
                    }
                }
                document.getElementById("chatbot").innerHTML = product;
                speak(product);
                document.getElementById("input").value = ""; //clear input value
            }
            function compare(arr, array, string) {
                var item;
                for (var x = 0; x < arr.length; x++) {
                    for (var y = 0; y < array.length; y++) {
                        if (arr[x][y] == string) {
                            items = array[x];
                            item = items[Math.floor(Math.random() * items.length)];
                        }
                    }
                }
                return item;
            }
            function speak(string) {
                var utterance = new SpeechSynthesisUtterance();
                utterance.voice = speechSynthesis.getVoices().filter(function (voice) {
                    return voice.name == "Agnes";
                })[0];
                utterance.text = string;
                utterance.lang = "en-US";
                utterance.volume = 1; //0-1 interval
                utterance.rate = 1;
                utterance.pitch = 2; //0-2 interval
                speechSynthesis.speak(utterance);
            }


