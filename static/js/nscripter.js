 // The story paragraph split into sentences

        let currentSentenceIndex = 0;
        let currentCharIndex = 0;
        let currentText = "";
        let typingInterval;
        let waitingForInput = false;
        let firstTime = true;
        const storyContainer = document.getElementById("story-container");
        const imageContainer = document.getElementById("image-container");
        const instruction = document.getElementById("instruction");

        // Function to start typing the current sentence
        function startTyping() {
            if(firstTime) {
                sentences = document.getElementById('script').textContent.split(/[|;]/);
                console.log(sentences);
                newPage = []
                for (let char of document.getElementById('script').textContent) {
                    if (char === '|') {
                       newPage.push(false);
                    } else if (char === ';') {
                        newPage.push(true);
                    }
                }
                console.log(newPage)
                firstTime = false;
            }
            instruction.style.display = "none";
            let needsIndent = currentSentenceIndex === 0 || 
                     (currentSentenceIndex > 0 && sentences[currentSentenceIndex - 1].endsWith('\n\n'));
     if (newPage[currentSentenceIndex - 1] === true) {
        storyContainer.innerHTML = "";
        currentText = "";
    }
    // Add indent if needed before starting to type
    if (needsIndent && currentCharIndex === 0) {
        currentText += "&nbsp;"; // Four non-breaking spaces for indent
    }
            typingInterval = setInterval(() => {
                if (currentCharIndex < sentences[currentSentenceIndex].length) {
                    currentText += sentences[currentSentenceIndex][currentCharIndex];
                    storyContainer.innerHTML = currentText;
                    currentCharIndex++;
                } else {
                    clearInterval(typingInterval);
                    storyContainer.innerHTML = currentText;
                    // If it's the last sentence, show the final image
                    if (currentSentenceIndex === sentences.length - 1) {
                            storyContainer.innerHTML += `<img src="${finalImage}" alt="Final scene image" style="position: absolute;">`;
                            instruction.style.display = "none";
                    } else {
                        let currentDelimiter = "";
                        console.log(newPage[currentSentenceIndex])
                        if(newPage[currentSentenceIndex] == false) {
                            currentDelimiter = "new-line"
                        } else {
                            currentDelimiter = "new-page"
                        }
                        storyContainer.innerHTML += `<img src="/static/images/${currentDelimiter}.gif" alt="Scene image" style="position: absolute;">`;
                        instruction.style.display = "block";
                        waitingForInput = true;
                    }
                }
            }, 50);
        }

        // Handle key press to continue to the next sentence
        document.addEventListener("keydown", function(event) {
            if (event.key === "Enter" && waitingForInput) {
                waitingForInput = false;
                currentSentenceIndex++;
                
                if (currentSentenceIndex < sentences.length) {
                    currentText += " ";
                    currentCharIndex = 0;
                    startTyping();
                }
            }
        });
        document.addEventListener('keydown', function(event) {
      // Check if space key was pressed
      if (event.code === 'Space') {
        event.preventDefault(); // Prevent page scrolling with space
        const container = document.querySelector('.new-body');
        const blogBody = document.querySelector('.blog-body');
        if (blogBody.style.display === 'none') {
          blogBody.style.display = 'block';
          container.style.display = 'block';
        } else {
          blogBody.style.display = 'none';
          container.style.display = 'none';
        }
      }
    });
        // Start the first sentence
        startTyping();